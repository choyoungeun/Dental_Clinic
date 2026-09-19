import { NextRequest, NextResponse } from 'next/server';
import {
  SESSION_COOKIE,
  authenticate,
  clientKey,
  cookieOptions,
  createSessionToken,
  rateLimited,
  sameOrigin,
} from '@/lib/auth';

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ message: '잘못된 요청입니다.' }, { status: 403 });
  }

  if (rateLimited(`login:${clientKey(request)}`, 10, 10 * 60 * 1000)) {
    return NextResponse.json(
      { message: '로그인 시도가 많습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password || password.length > 72) {
      return NextResponse.json(
        { message: '이메일과 비밀번호를 입력해 주세요.' },
        { status: 400 },
      );
    }

    const user = await authenticate(email, password);

    if (!user) {
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ user: { name: user.name } });
    response.cookies.set(SESSION_COOKIE, await createSessionToken(user), cookieOptions);
    return response;
  } catch (error) {
    console.error('Login failed', error);
    return NextResponse.json(
      { message: '로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 },
    );
  }
}
