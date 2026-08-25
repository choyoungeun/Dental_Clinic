import { NextResponse } from 'next/server';

const allowedTreatments = new Set([
  '임플란트',
  '자연치아 보존',
  '사랑니 · 구강외과',
  '충치 · 보철',
  '잇몸치료',
  '기타 상담',
]);

const clean = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 30);
    const phone = clean(body.phone, 30);
    const treatment = clean(body.treatment, 50);

    if (!name || !phone || !allowedTreatments.has(treatment)) {
      return NextResponse.json(
        { message: '입력 내용을 다시 확인해주세요.' },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONSULTATION_TO_EMAIL;
    const fromEmail = process.env.CONSULTATION_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      console.error(
        'Consultation email environment variables are not configured.',
      );

      return NextResponse.json(
        {
          message:
            '온라인 상담 접수 설정이 아직 완료되지 않았습니다. 병원으로 전화 문의해주세요.',
        },
        { status: 503 },
      );
    }

    const createdAt = new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `[홈페이지 상담] ${name}님 - ${treatment}`,
        text: [
          '수원세브란스치과 홈페이지 상담 신청',
          '',
          `이름: ${name}`,
          `연락처: ${phone}`,
          `상담 진료과목: ${treatment}`,
          `접수시간: ${createdAt}`,
        ].join('\n'),
        html: `
          <div style="font-family:Arial,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;line-height:1.7;color:#071b33">
            <h2 style="margin:0 0 20px">홈페이지 간편 상담 신청</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px">
              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;color:#777;width:120px">이름</td>
                <td style="padding:10px;border-bottom:1px solid #eee;font-weight:700">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;color:#777">연락처</td>
                <td style="padding:10px;border-bottom:1px solid #eee;font-weight:700">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;color:#777">진료과목</td>
                <td style="padding:10px;border-bottom:1px solid #eee;font-weight:700">${escapeHtml(treatment)}</td>
              </tr>
              <tr>
                <td style="padding:10px;color:#777">접수시간</td>
                <td style="padding:10px">${escapeHtml(createdAt)}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const responseText = await resendResponse.text();
      console.error('Resend error:', responseText);

      return NextResponse.json(
        { message: '상담 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Consultation API error:', error);

    return NextResponse.json(
      { message: '상담 접수 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}