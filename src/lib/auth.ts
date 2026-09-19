import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

/* =========================================================
   회원(로그인) 기능 — 임상증례 치료 전 사진 열람용
   - 비밀번호는 scrypt 로 해시해서 저장합니다. (평문 저장 X)
   - 세션은 서명된(HMAC) httpOnly 쿠키입니다.
   - 회원 정보는 기본적으로 <프로젝트>/.data/users.json 에 저장됩니다.
     ★ 서버리스 호스팅(Vercel 등)은 파일이 유지되지 않으므로,
       배포 전에 DB(Supabase, PostgreSQL 등)로 교체해야 합니다.
       교체할 곳은 아래 readUsers / writeUsers 두 함수뿐입니다.
========================================================= */

const scrypt = promisify(crypto.scrypt) as (
  password: string,
  salt: string,
  keylen: number,
) => Promise<Buffer>;

export const SESSION_COOKIE = 'ssdc_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7일

const dataDir = process.env.AUTH_DATA_DIR || path.join(process.cwd(), '.data');
const usersFile = path.join(dataDir, 'users.json');

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  /** 개인정보 수집·이용 동의 시각 */
  agreedAt: string;
};

/* ---------- 저장소 (DB로 교체할 부분) ---------- */

let writeQueue: Promise<unknown> = Promise.resolve();

const readUsers = async (): Promise<User[]> => {
  try {
    return JSON.parse(await fs.readFile(usersFile, 'utf8')) as User[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
};

const writeUsers = async (users: User[]) => {
  await fs.mkdir(dataDir, { recursive: true });
  const temp = `${usersFile}.${process.pid}.tmp`;
  await fs.writeFile(temp, JSON.stringify(users, null, 2), 'utf8');
  await fs.rename(temp, usersFile);
};

/** 동시에 가입이 들어와도 파일이 깨지지 않도록 순서대로 처리 */
const withWriteLock = <T,>(task: () => Promise<T>): Promise<T> => {
  const run = writeQueue.then(task, task);
  writeQueue = run.catch(() => undefined);
  return run;
};

/* ---------- 비밀번호 ---------- */

const hashPassword = async (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = (await scrypt(password, salt, 64)).toString('hex');
  return `scrypt$${salt}$${hash}`;
};

const DUMMY_HASH = `scrypt$${'0'.repeat(32)}$${'0'.repeat(128)}`;

const verifyPassword = async (password: string, stored: string) => {
  const [scheme, salt, hash] = stored.split('$');
  if (scheme !== 'scrypt' || !salt || !hash) return false;

  const expected = Buffer.from(hash, 'hex');
  const actual = await scrypt(password, salt, expected.length);

  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
};

/* ---------- 세션 ---------- */

const getSecret = async () => {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET;

  if (process.env.NODE_ENV === 'production') {
    throw new Error('AUTH_SECRET 환경변수를 설정해 주세요.');
  }

  // 개발 환경: 처음 한 번 만든 비밀키를 파일에 보관
  const file = path.join(dataDir, 'dev-secret');
  try {
    return (await fs.readFile(file, 'utf8')).trim();
  } catch {
    const secret = crypto.randomBytes(32).toString('hex');
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(file, secret, 'utf8');
    return secret;
  }
};

const sign = (payload: string, secret: string) =>
  crypto.createHmac('sha256', secret).update(payload).digest('base64url');

export const createSessionToken = async (user: User) => {
  const payload = Buffer.from(
    JSON.stringify({ uid: user.id, exp: Date.now() + SESSION_MAX_AGE * 1000 }),
  ).toString('base64url');

  return `${payload}.${sign(payload, await getSecret())}`;
};

/** 쿠키 값으로 로그인한 회원을 찾습니다. 없거나 만료되면 null */
export const getUserFromToken = async (token: string | undefined | null) => {
  if (!token) return null;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;

  const expected = sign(payload, await getSecret());
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const { uid, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      uid: string;
      exp: number;
    };
    if (!uid || typeof exp !== 'number' || exp < Date.now()) return null;

    return (await readUsers()).find((user) => user.id === uid) ?? null;
  } catch {
    return null;
  }
};

export const cookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SESSION_MAX_AGE,
};

/* ---------- 회원 ---------- */

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

export class EmailTakenError extends Error {}

export const createUser = (input: { name: string; email: string; password: string }) =>
  withWriteLock(async () => {
    const users = await readUsers();
    const email = normalizeEmail(input.email);

    if (users.some((user) => user.email === email)) throw new EmailTakenError();

    const now = new Date().toISOString();
    const user: User = {
      id: crypto.randomUUID(),
      name: input.name.trim(),
      email,
      passwordHash: await hashPassword(input.password),
      createdAt: now,
      agreedAt: now,
    };

    await writeUsers([...users, user]);
    return user;
  });

export const authenticate = async (email: string, password: string) => {
  const users = await readUsers();
  const user = users.find((item) => item.email === normalizeEmail(email));

  // 없는 계정이어도 같은 시간이 걸리도록 더미 해시를 비교합니다.
  const ok = await verifyPassword(password, user?.passwordHash ?? DUMMY_HASH);
  return user && ok ? user : null;
};

/* ---------- 요청 제한 (무차별 대입 방지, 서버 메모리 기준) ---------- */

const attempts = new Map<string, { count: number; resetAt: number }>();

export const rateLimited = (key: string, limit: number, windowMs: number) => {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
};

export const clientKey = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';

/** 다른 사이트에서 보낸 요청(CSRF) 차단 */
export const sameOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    return new URL(origin).host === request.headers.get('host');
  } catch {
    return false;
  }
};
