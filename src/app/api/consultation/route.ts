import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* =========================================================
   CONFIG
========================================================= */

const treatments = [
  "자연치아 보존",
  "임플란트",
  "사랑니 · 구강외과",
  "충치 · 보철",
  "턱관절 · 외상치료",
  "잇몸치료",
  "기타 상담",
] as const;

const MAX_BODY_SIZE = 10_000;

/* =========================================================
   POST /api/consultation
========================================================= */

export async function POST(request: Request) {
  try {
    /* =====================================================
       1. 지나치게 큰 요청 차단
    ===================================================== */

    const contentLength =
      request.headers.get("content-length");

    if (
      contentLength &&
      Number(contentLength) > MAX_BODY_SIZE
    ) {
      return NextResponse.json(
        {
          message:
            "요청 데이터가 너무 큽니다.",
        },
        {
          status: 413,
        },
      );
    }

    /* =====================================================
       2. JSON 읽기
    ===================================================== */

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          message:
            "올바른 요청 형식이 아닙니다.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !body ||
      typeof body !== "object"
    ) {
      return NextResponse.json(
        {
          message:
            "입력 내용을 확인해 주세요.",
        },
        {
          status: 400,
        },
      );
    }

    const data =
      body as Record<
        string,
        unknown
      >;

    /* =====================================================
       3. 입력값 정리
    ===================================================== */

    const name =
      typeof data.name === "string"
        ? data.name.trim()
        : "";

    const rawPhone =
      typeof data.phone === "string"
        ? data.phone.trim()
        : "";

    const treatment =
      typeof data.treatment === "string"
        ? data.treatment.trim()
        : "";

    const privacyConsent =
      data.privacyConsent === true;

    const sensitiveConsent =
      data.sensitiveConsent === true;

    /* =====================================================
       4. 이름 검증
    ===================================================== */

    if (
      !name ||
      name.length < 2 ||
      name.length > 50
    ) {
      return NextResponse.json(
        {
          message:
            "이름을 다시 확인해 주세요.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       5. 연락처 검증
    ===================================================== */

    const phoneDigits =
      rawPhone.replace(/\D/g, "");

    if (
      phoneDigits.length < 10 ||
      phoneDigits.length > 11
    ) {
      return NextResponse.json(
        {
          message:
            "연락처를 다시 확인해 주세요.",
        },
        {
          status: 400,
        },
      );
    }

    const phone =
      phoneDigits.length === 11
        ? `${phoneDigits.slice(
            0,
            3,
          )}-${phoneDigits.slice(
            3,
            7,
          )}-${phoneDigits.slice(7)}`
        : `${phoneDigits.slice(
            0,
            3,
          )}-${phoneDigits.slice(
            3,
            6,
          )}-${phoneDigits.slice(6)}`;

    /* =====================================================
       6. 진료 분야 검증
    ===================================================== */

    if (
      !treatments.includes(
        treatment as
          (typeof treatments)[number],
      )
    ) {
      return NextResponse.json(
        {
          message:
            "상담 분야를 다시 선택해 주세요.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       7. 개인정보 동의 검증
    ===================================================== */

    if (!privacyConsent) {
      return NextResponse.json(
        {
          message:
            "개인정보 수집·이용 동의가 필요합니다.",
        },
        {
          status: 400,
        },
      );
    }

    if (!sensitiveConsent) {
      return NextResponse.json(
        {
          message:
            "민감정보 수집·이용 동의가 필요합니다.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       8. SUPABASE INSERT
    ===================================================== */

    const {
      error,
    } =
      await supabaseAdmin
        .from(
          "consultation_requests",
        )
        .insert({
          name,
          phone,
          treatment,

          privacy_consent:
            true,

          sensitive_consent:
            true,

          status:
            "new",
        });

    /* =====================================================
       9. DB ERROR
    ===================================================== */

    if (error) {
      /*
        이름 / 전화번호 / 상담내용은
        로그에 남기지 않습니다.
      */

      console.error(
        "[consultation] database insert failed:",
        error.code,
        error.message,
      );

      return NextResponse.json(
        {
          message:
            "상담 신청을 접수하지 못했습니다. 잠시 후 다시 시도해 주세요.",
        },
        {
          status: 500,
        },
      );
    }

    /* =====================================================
       10. SUCCESS
    ===================================================== */

    return NextResponse.json(
      {
        success: true,
        message:
          "상담 신청이 접수되었습니다.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(
      "[consultation] unexpected server error",
      error instanceof Error
        ? error.message
        : "unknown error",
    );

    return NextResponse.json(
      {
        message:
          "잠시 후 다시 시도해 주세요.",
      },
      {
        status: 500,
      },
    );
  }
}