import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, getUserFromToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const user = await getUserFromToken(request.cookies.get(SESSION_COOKIE)?.value);

  return NextResponse.json(
    { user: user ? { name: user.name } : null },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
