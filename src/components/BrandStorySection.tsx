import Reveal from '@/components/Reveal';
import TextReveal from '@/components/TextReveal';

const BrandStorySection = () => {
  return (
    <section
      id="brand-story"
      className="scroll-mt-24 bg-white py-14 md:py-18"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        {/* LEFT */}
        <div>
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              OUR STANDARD
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-3 text-3xl font-semibold leading-[1.35] tracking-[-0.045em] text-[#071b33] md:text-4xl"
            lines={['치료가 복잡할수록', '처음의 진단이 중요합니다.']}
          />

          <Reveal variant="left" delay={450}>
            <div className="mt-6 h-px w-16 bg-[#2f89fc]" />
          </Reveal>
        </div>

        {/* RIGHT */}
        <div>
          <Reveal variant="right" delay={200}>
            <p className="text-[17px] leading-[1.9] text-[#344a61] md:text-[18px]">
              난이도 높은 임플란트, 신경과 가까운 매복 사랑니, 재신경치료.
              치과에서 대학병원 진료를 권유받으면 걱정부터 앞서기 마련입니다.
            </p>
          </Reveal>

          <Reveal variant="right" delay={350}>
            <p className="mt-5 text-[16px] leading-[1.9] text-gray-500 md:text-[17px]">
              수원세브란스치과는 연세대학교 치과대학을 졸업하고
              신촌세브란스 치과대학병원과 2차 종합병원에서 임상 경험을
              쌓은 대표원장이 직접 진료합니다.
            </p>
          </Reveal>

          <Reveal variant="right" delay={500}>
            <p className="mt-5 text-[16px] leading-[1.9] text-gray-500 md:text-[17px]">
              약 100평 규모의 진료 공간에 체어 10대 이상을 갖추었고,
              신촌세브란스 치과병원과 동일한 모델의 장비를 포함한 정밀 진단 장비를 사용합니다.
              가까운 곳에서 충분한 진단과 설명을 받으실 수 있도록 진료합니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;