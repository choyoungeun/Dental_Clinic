'use client';

const BrandStorySection = () => {
  return (
    <section
      id="brand-story"
      className="relative overflow-hidden bg-white px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-8 text-[11px] font-bold tracking-[0.3em] text-[#2f89fc]">
          CLINICAL EXPERIENCE
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.35] tracking-[-0.03em] text-[#071b33] md:text-6xl">
          경험이 많아질수록
          <br />
          치료는 더 신중해졌습니다.
        </h2>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-24">

          <div className="space-y-10 text-lg leading-[1.9] text-gray-500">
            <p>
              세브란스 치과대학병원에서
              진단과 치료계획의 기본을 배웠습니다.
            </p>

            <p>
              이후 종합병원 치과 과장으로 근무하며
              다양한 환자와 복잡한 치료 상황을 경험했습니다.
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium leading-[1.65] text-[#071b33] md:text-3xl">
              수많은 케이스가 남긴 것은
              <br />
              자신감보다
              <span className="text-[#2f89fc]"> 판단의 기준</span>
              이었습니다.
            </p>

            <p className="mt-10 leading-[1.9] text-gray-500">
              치료해야 할 때와 조금 더 지켜봐도 될 때,
              살릴 수 있는 치아와 다른 치료가 필요한 치아를
              신중하게 구분하는 것.
            </p>

            <p className="mt-6 font-semibold text-[#071b33]">
              그것이 경험의 차이라고 생각합니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;