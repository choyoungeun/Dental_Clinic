import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, sameOrigin } from '@/lib/auth';

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ message: '잘못된 요청입니다.' }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, '', { path: '/', maxAge: 0 });
  return response;
}
