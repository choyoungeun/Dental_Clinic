const BrandStorySection = () => {
  return (
    <section
      id="brand-story"
      className="scroll-mt-24 bg-white py-14 md:py-18"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        {/* LEFT */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
            OUR STANDARD
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-[1.35] tracking-[-0.045em] text-[#071b33] md:text-4xl">
            치료가 복잡할수록
            <br />
            처음의 진단이 중요합니다.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#2f89fc]" />
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-[15px] leading-[1.9] text-[#344a61] md:text-[16px]">
           난이도 높은 임플란트, 신경과 가까운 매복 사랑니, 재신경치료까지.
          동네 치과에서 "대학병원으로 가셔야 합니다"라는 말을 듣고 불안하셨던 경험이 있으실 겁니다.
          </p>

          <p className="mt-5 text-[14px] leading-[1.9] text-gray-500 md:text-[15px]">
            수원세브란스치과는 연세대학교 치과대학을 졸업하고
            신촌세브란스 치과대학병원과 2차 종합병원에서 임상 경험을
            쌓은 대표원장이 직접 진료합니다.
          </p>

          <p className="mt-5 text-[14px] leading-[1.9] text-gray-500 md:text-[15px]">
            약 100평 규모의 진료공간과 체어 10대 이상 보유로 인한 쾌적한 공간,
            그리고 신촌세브란스 치과병원과 동일한 최첨단 정밀 장비를 갖추어, 멀리 대학병원까지 가시지 않고도
            집 가까이서 가장 안전하고 정확한 진료를 받으실 수 있도록 노력하겠습니다. 
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;