import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';

const Doctors = () => {
  return (
    <section id="doctors" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[13px]">
              REPRESENTATIVE DIRECTOR
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-5 text-4xl font-semibold leading-[1.35] tracking-[-0.035em] text-[#071b33] md:text-5xl"
            lines={['진료의 기준을', '만드는 사람.']}
          />
        </div>

        <div className="grid gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
          {/* Doctor image */}
          <Reveal variant="left">
            <RevealImage
              parallax={20}
              className="h-[580px] bg-gray-100 md:h-[680px] lg:sticky lg:top-24"
            >
              <Image
                src="/images/hm_Lee.jpg"
                alt="수원세브란스치과 이현민 대표원장"
                fill
                priority
                className="object-cover object-top"
              />
            </RevealImage>
          </Reveal>

          {/* Content */}
          <Reveal variant="right" delay={150}>
            <p className="text-[15px] font-semibold text-[#2f89fc]">
              前 종합병원 치과 과장
            </p>

            <h3 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#071b33]">
              이현민
              <span className="ml-3 text-lg font-medium text-gray-400">
                대표원장
              </span>
            </h3>

            <p className="mt-8 max-w-2xl text-xl font-medium leading-[1.7] text-[#071b33] md:text-2xl">
              수원세브란스치과의 진료 기준을 세우고
              <br className="hidden md:block" />
              고난도 치료의 계획을 직접 수립합니다.
            </p>

            {/* Career */}
            <div className="mt-9 grid gap-12 md:grid-cols-2">
              <div>
                <h4 className="border-b border-gray-200 pb-4 text-[13px] font-bold tracking-[0.18em] text-[#071b33]">
                  EDUCATION & CAREER
                </h4>

                <ul className="mt-6 space-y-3 text-[16px] leading-[1.7] text-gray-600">
                  <li className="font-semibold text-[#071b33]">
                    연세대학교 치과대학 우등졸업
                  </li>

                  <li>
                    신촌 세브란스 연세대학교 치과대학병원
                  </li>

                  <li>
                    前 목포시 보건소 공중보건의사
                  </li>

                  <li>
                    前 바른공감치과 본원 원장
                  </li>

                  <li>
                    前 미금세브란스치과 수술 전담 원장
                  </li>

                  <li>
                    前 수원덕산병원 치과 진료 과장
                  </li>

                  <li>
                    대한치주과학회 정회원
                  </li>

                  <li>
                    대한구강악안면임플란트학회 정회원
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="border-b border-gray-200 pb-4 text-[13px] font-bold tracking-[0.18em] text-[#071b33]">
                  ADVANCED TRAINING
                </h4>

                <ul className="mt-6 space-y-3 text-[16px] leading-[1.7] text-gray-600">
                  <li>
                    UCLA School of Dentistry 고급 임상 연수 수료
                  </li>

                  <li>
                    The University of Sydney 임상 Externship 수료
                  </li>

                  <li>
                    OSSTEM Implant Master Course 전 과정 이수
                  </li>

                  <li>
                    턱관절장애 교육연구회 TMD 전문과정 수료
                  </li>

                  <li>
                    JPDA 소아치과 임상 세미나 수료
                  </li>

                  <li>
                    국가건강보험공단 인증 구강검진의
                  </li>
                </ul>
              </div>
            </div>

            {/* Short philosophy */}
            <div className="mt-9 border-l-2 border-[#2f89fc] pl-7">
              <p className="max-w-2xl text-[18px] leading-[1.95] text-gray-500">
                많은 환자를 진료하며, 치료를 더 많이 하는 것보다
                어떤 치료가 필요한지 판단하는 과정이
                중요하다는 것을 배웠습니다.
              </p>

              <p className="mt-5 font-semibold text-[#071b33]">
                충분히 진단하고, 설명하고,
                필요한 치료를 신중하게 결정하겠습니다.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="https://booking.naver.com/your-clinic-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 bg-[#071b33] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#0c2b50]"
              >
                진료 예약하기

                <span className="text-lg">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Medical Team Branding */}
        <Reveal className="mt-10 border-t border-gray-200 pt-12 text-center">
          <p className="text-[12px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[13px]">
            MEDICAL TEAM
          </p>

        

          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.95] text-gray-500 md:text-[18px]">
            수원세브란스치과의 의료진은
            충분한 진단과 설명,
            자연치아를 우선하는 치료 원칙을 공유합니다.
          </p>

          {/*
            페이닥터 채용 후 여기에 의료진 카드 추가

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              ...
            </div>
          */}
        </Reveal>
      </div>
    </section>
  );
};

export default Doctors;