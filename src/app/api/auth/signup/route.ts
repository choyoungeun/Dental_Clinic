import { NextRequest, NextResponse } from 'next/server';
import {
  EmailTakenError,
  SESSION_COOKIE,
  clientKey,
  cookieOptions,
  createSessionToken,
  createUser,
  rateLimited,
  sameOrigin,
} from '@/lib/auth';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ message: '잘못된 요청입니다.' }, { status: 403 });
  }

  if (rateLimited(`signup:${clientKey(request)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { message: '잠시 후 다시 시도해 주세요.' },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';
    const agree = body.agree === true;

    if (!name || name.length > 30) {
      return NextResponse.json({ message: '이름을 확인해 주세요.' }, { status: 400 });
    }
    if (!EMAIL.test(email) || email.length > 100) {
      return NextResponse.json({ message: '이메일 형식을 확인해 주세요.' }, { status: 400 });
    }
    if (
      password.length < 8 ||
      password.length > 72 ||
      !/[A-Za-z]/.test(password) ||
      !/\d/.test(password)
    ) {
      return NextResponse.json(
        { message: '비밀번호는 영문과 숫자를 포함해 8자 이상으로 입력해 주세요.' },
        { status: 400 },
      );
    }
    if (!agree) {
      return NextResponse.json(
        { message: '개인정보 수집·이용에 동의해 주세요.' },
        { status: 400 },
      );
    }

    const user = await createUser({ name, email, password });

    const response = NextResponse.json({ user: { name: user.name } });
    response.cookies.set(SESSION_COOKIE, await createSessionToken(user), cookieOptions);
    return response;
  } catch (error) {
    if (error instanceof EmailTakenError) {
      return NextResponse.json(
        { message: '이미 가입된 이메일입니다. 로그인해 주세요.' },
        { status: 409 },
      );
    }

    console.error('Signup failed', error);
    return NextResponse.json(
      { message: '회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 },
    );
  }
}
