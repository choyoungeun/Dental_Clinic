import Reveal from '@/components/Reveal';

const BrandStorySection = () => {
  return (
    <section
      id="brand-story"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-28
        md:py-44
      "
    >
      {/* Decorative light */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#2f89fc]/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p
            className="
              text-[10px]
              font-bold
              tracking-[0.34em]
              text-[#2f89fc]

              md:text-[11px]
            "
          >
            CLINICAL EXPERIENCE
          </p>
        </Reveal>

        <div className="mt-7">
          <Reveal delay={100}>
            <p
              className="
                text-4xl
                font-semibold
                leading-[1.4]
                tracking-[-0.04em]
                text-[#071b33]

                md:text-6xl
              "
            >
              경험이 많아질수록
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="
                mt-1
                text-4xl
                font-semibold
                leading-[1.4]
                tracking-[-0.04em]
                text-[#071b33]

                md:text-6xl
              "
            >
              치료는 더 신중해졌습니다.
            </p>
          </Reveal>
        </div>

        <div
          className="
            mt-24
            grid
            gap-20

            md:grid-cols-2
            md:gap-28
          "
        >
          {/* Left */}
          <div className="space-y-14">
            <Reveal delay={100}>
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.26em]
                    text-gray-400
                  "
                >
                  01 / FOUNDATION
                </p>

                <p
                  className="
                    mt-4
                    text-xl
                    font-medium
                    leading-[1.8]
                    text-[#071b33]

                    md:text-2xl
                  "
                >
                  세브란스 치과대학병원에서
                  <br />
                  진단과 치료계획의
                  <br />
                  기본을 배웠습니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.26em]
                    text-gray-400
                  "
                >
                  02 / EXPERIENCE
                </p>

                <p
                  className="
                    mt-4
                    text-xl
                    font-medium
                    leading-[1.8]
                    text-[#071b33]

                    md:text-2xl
                  "
                >
                  종합병원 치과 과장으로
                  <br />
                  다양한 환자와
                  <br />
                  복잡한 치료를 경험했습니다.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div className="md:pt-24">
            <Reveal delay={150}>
              <p
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.26em]
                  text-gray-400
                "
              >
                03 / JUDGEMENT
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p
                className="
                  mt-5
                  text-2xl
                  font-medium
                  leading-[1.7]
                  tracking-[-0.025em]
                  text-[#071b33]

                  md:text-4xl
                "
              >
                수많은 케이스가
                <br />
                남긴 것은
              </p>
            </Reveal>

            <Reveal
              delay={430}
              distance={40}
            >
              <p
                className="
                  mt-2
                  text-4xl
                  font-semibold
                  leading-[1.5]
                  tracking-[-0.04em]
                  text-[#2f89fc]

                  md:text-6xl
                "
              >
                판단의 기준.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-12 h-px w-14 bg-[#2f89fc]" />

              <p
                className="
                  mt-9
                  max-w-lg
                  text-[15px]
                  leading-[2]
                  text-gray-500

                  md:text-[17px]
                "
              >
                치료해야 할 때와
                조금 더 지켜봐도 될 때.
                <br />
                살릴 수 있는 치아와
                다른 치료가 필요한 치아를
                신중하게 구분하는 것.
              </p>
            </Reveal>

            <Reveal delay={750}>
              <p
                className="
                  mt-7
                  text-[17px]
                  font-semibold
                  text-[#071b33]

                  md:text-xl
                "
              >
                그것이 경험의 차이라고 생각합니다.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;