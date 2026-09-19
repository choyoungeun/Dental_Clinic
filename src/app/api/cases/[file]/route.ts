import fs from 'node:fs/promises';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, getUserFromToken } from '@/lib/auth';

/* 임상증례 "치료 전" 사진 — 로그인한 회원에게만 전달합니다.
   파일은 public 이 아닌 <프로젝트>/private/cases/ 에 있어 주소를 알아도 직접 열 수 없습니다. */

const CASE_DIR = path.join(process.cwd(), 'private', 'cases');
const SAFE_NAME = /^[a-z0-9-]+\.jpg$/;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> },
) {
  const user = await getUserFromToken(request.cookies.get(SESSION_COOKIE)?.value);

  if (!user) {
    return NextResponse.json({ message: '로그인이 필요합니다.' }, { status: 401 });
  }

  const { file } = await params;

  if (!SAFE_NAME.test(file)) {
    return NextResponse.json({ message: '찾을 수 없습니다.' }, { status: 404 });
  }

  try {
    const data = await fs.readFile(path.join(CASE_DIR, file));

    return new NextResponse(new Uint8Array(data), {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'private, no-store',
        'Content-Disposition': 'inline',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return NextResponse.json({ message: '찾을 수 없습니다.' }, { status: 404 });
  }
}
