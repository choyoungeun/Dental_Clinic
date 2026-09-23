import Image from "next/image";

import { NAVER_BLOG_URL } from "./clinicLinks";

const history = [
  "연세대학교 치과대학 졸업 및 5년 연속 장학생",
  "신촌세브란스병원 임상 수련",
  "前 수원덕산병원 치과 과장",
  "前 미금세브란스치과 수술 전담 원장",
  "前 바른공감치과 본원 원장",  
  "前 신안군보건소 치과과장",
  
];

const activities = [
  "대한치주과학회 정회원",
  "대한구강악안면임플란트학회 정회원",
  "UCLA Advanced Dental Training Program 수료",
  "The University of Sydney Implant Course 수료",
  "오스템 임플란트 임상교육과정 수료",
  "TMD 턱관절장애 교육과정 수료",
];

function CareerSection({
  title,
  english,
  items,
}: {
  title: string;
  english: string;
  items: string[];
}) {
  return (
    <div className="border-t border-line pt-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h4 className="text-[21px] font-bold tracking-[-0.03em] text-ink md:text-[22px]">
          {title}
        </h4>

        <span className="text-[12px] font-semibold tracking-[0.06em] text-mist">
          {english}
        </span>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 break-keep text-[16px] leading-[1.7] text-body"
          >
            <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-navy" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="scroll-mt-24 overflow-hidden bg-white py-22 md:py-30 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

        {/* =====================================================
            TOP BRAND MESSAGE
        ===================================================== */}
        <div className="mx-auto mb-14 max-w-5xl text-center md:mb-18">

          {/* Yonsei mark */}
          <div className="relative mx-auto h-[88px] w-[88px] md:h-[105px] md:w-[105px]">
            <Image
              src="/images/yonsei.png"
              alt="연세대학교"
              fill
              sizes="105px"
              className="object-contain"
            />
          </div>


          <h2 className="mx-auto mt-6 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]">
            연세대학교 치과대학 출신 의료진 책임진료
            <br className="hidden md:block" />
            
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
            대학병원과 종합병원에서 쌓은 임상 경험을 바탕으로
            책임 있는 진료를 이어가겠습니다.
          </p>
        </div>

        {/* =====================================================
            DOCTOR PROFILE
        ===================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_560px] lg:gap-16 xl:grid-cols-[1fr_620px]">

          {/* LEFT : Doctor information */}
          <div className="order-2 lg:order-1">

            <div className="mb-9">
              <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
                CHIEF DIRECTOR
              </p>

              <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
                <h3 className="text-[36px] font-bold tracking-[-0.03em] text-ink md:text-[44px]">
                  이현민
                </h3>

                <span className="pb-1 text-[17px] font-medium text-body">
                  대표원장
                </span>
              </div>

              <div className="mt-7 max-w-2xl">
                <p className="break-keep text-[19px] font-semibold leading-[1.6] tracking-[-0.02em] text-navy md:text-[21px]">
                  치아를 지킬 수 있는 가능성을 먼저 살피고,
                  필요한 치료는 충분히 설명한 뒤 계획합니다.
                </p>

                <p className="mt-5 break-keep text-[16px] leading-[1.7] text-body md:text-[17px]">
                  자연치아 보존부터 임플란트와 구강외과 진료까지,
                  다양한 임상 환경에서 쌓아온 경험을 바탕으로
                  환자 한 분 한 분의 상태에 맞는 치료 순서를 고민합니다.
                </p>
              </div>
            </div>

            {/* Highlight careers */}
            <div className="mb-10 grid gap-3 sm:grid-cols-3 md:gap-4">
              <div className="border-l-2 border-navy bg-fog px-5 py-5">
                <p className="text-[13px] font-medium text-muted">
                  EDUCATION
                </p>
                <p className="mt-2 break-keep text-[16px] font-bold leading-[1.5] text-ink">
                  연세대학교
                  <br />
                  치과대학 졸업
                </p>
              </div>

              <div className="border-l-2 border-navy bg-fog px-5 py-5">
                <p className="text-[13px] font-medium text-muted">
                  SCHOLARSHIP
                </p>
                <p className="mt-2 break-keep text-[16px] font-bold leading-[1.5] text-ink">
                  연세대 치과대학
                  <br />
                  5년 연속 장학생
                </p>
              </div>

              <div className="border-l-2 border-navy bg-fog px-5 py-5">
                <p className="text-[13px] font-medium text-muted">
                  CLINICAL TRAINING
                </p>
                <p className="mt-2 break-keep text-[16px] font-bold leading-[1.5] text-ink">
                  신촌세브란스병원
                  <br />
                  임상 수련
                </p>
              </div>
            </div>

            {/* Career */}
            <div className="grid gap-10 md:grid-cols-2">
              <CareerSection
                title="약력"
                english="CAREER"
                items={history}
              />

              <CareerSection
                title="학술 및 활동"
                english="ACADEMIC ACTIVITY"
                items={activities}
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT : Doctor image
          ===================================================== */}
          <div className="order-1 mx-auto w-full max-w-[620px] lg:order-2">

            <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-fog">

              {/* Yonsei watermark */}
              <div className="pointer-events-none absolute -right-12 top-1/2 h-[370px] w-[370px] -translate-y-1/2 opacity-[0.055] md:h-[430px] md:w-[430px]">
                <Image
                  src="/images/yonsei-mark.svg"
                  alt=""
                  fill
                  sizes="430px"
                  className="object-contain"
                />
              </div>

              {/* subtle vertical line */}
              <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-navy" />

              {/* Doctor */}
              <div className="absolute inset-x-0 bottom-0 top-6">
                <Image
                  src="/images/OwnerProfile.png"
                  alt="수원세브란스치과 대표원장 이현민"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-contain object-bottom"
                />
              </div>

              {/* bottom label */}
              <div className="absolute bottom-6 left-7 z-20 hidden md:block">
                <p className="text-[12px] font-semibold tracking-[0.08em] text-navy/60">
                  SUWON SEVERANCE DENTAL CLINIC
                </p>
              </div>
            </div>

            {/* 대표원장 블로그 : 사진 바로 아래 */}
            <a
              href={NAVER_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-12 w-full items-center justify-center gap-2.5 rounded-btn border border-navy text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
            >
              대표원장 네이버 블로그 바로가기
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
              </svg>
            </a>
          </div>
        </div>

     

      </div>
    </section>
  );
}