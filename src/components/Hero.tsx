import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[650px] w-full overflow-hidden md:h-[820px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/Sev2018.jpg"
          alt="수원세브란스치과 진료 환경"
          fill
          priority
          className="scale-[1.02] object-cover object-center"
        />

        {/* Navy tone overlay */}
        <div className="absolute inset-0 bg-[#031325]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031325]/95 via-[#031325]/60 to-[#031325]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031325]/45 via-transparent to-[#031325]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-4xl text-white">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-[#87bbf5] md:text-[12px]">
            SEVERANCE STANDARD · CLINICAL EXPERIENCE
          </p>

          <h1 className="text-[34px] font-semibold leading-[1.35] tracking-[-0.035em] md:text-[58px]">
            세브란스에서 배운 기준,
            <br />
            종합병원에서 쌓은 경험.
          </h1>

          <p className="mt-7 text-[18px] font-medium leading-relaxed text-white/90 md:text-[23px]">
            오늘보다 10년 뒤의 치아를 생각합니다.
          </p>

          {/* Career key points */}
          <div className="mt-9 flex max-w-3xl flex-wrap gap-x-4 gap-y-2 text-[12px] leading-relaxed text-white/60 md:text-[14px]">
            <span>연세대학교 치과대학 우등졸업</span>

            <span className="hidden text-white/25 md:inline">
              ·
            </span>

            <span>신촌 세브란스 치과대학병원</span>

            <span className="hidden text-white/25 md:inline">
              ·
            </span>

            <span>前 종합병원 치과 과장</span>
          </div>

          {/* CTA */}
          <div className="mt-11 flex flex-wrap gap-3">
            <Link
              href="#brand-story"
              className="bg-white px-7 py-4 text-[13px] font-semibold text-[#071b33] transition-all duration-300 hover:bg-white/90 md:text-[14px]"
            >
              진료 철학 알아보기
            </Link>

            <Link
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 bg-white/5 px-7 py-4 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071b33] md:text-[14px]"
            >
              진료 예약하기
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[9px] tracking-[0.3em] text-white/35">
          SCROLL
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;