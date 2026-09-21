import Image from "next/image";
const history = [
  "연세대학교 치과대학 졸업",
  "연세대학교 치과대학 재학 중 총 5회 장학금 수혜",
  "신촌세브란스병원 임상 수련",
  "前 목포시 공중보건치과의사",
  "前 바른공감치과 본원 원장",
  "前 미금세브란스치과 수술 전담 원장",
  "前 수원덕산병원 치과 과장",
];

const activities = [
  "대한치주과학회 정회원",
  "대한구강악안면임플란트학회 정회원",
  "UCLA Advanced Dental Training Program 수료",
  "The University of Sydney Implant Course 수료",
  "오스템 임플란트 임상교육과정 수료",
  "TMD 턱관절장애 교육과정 수료",
];

function SectionCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border-t border-slate-200 pt-5">
      <div className="mb-4">
        <h4 className="text-[17px] font-semibold tracking-tight text-slate-900">
          {title}
        </h4>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[14px] leading-6 text-slate-600"
          >
            <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[#17365D]" />
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
      className="bg-[#f7f6f3] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#17365D]">
            DOCTOR
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            의료진 소개
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-16">

          {/* 대표원장 사진 */}
          <div className="relative mx-auto w-full max-w-[420px]">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#eceae5]">

              {/* 연세대 마크 */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative h-[270px] w-[270px] opacity-[0.065]">
                  <Image
                    src="/images/yonsei-mark.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 대표원장 */}
              <div className="absolute inset-x-4 bottom-0 top-5">
                <Image
                  src="/images/OwnerProfile.png"
                  alt="수원세브란스치과 대표원장 이현민"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>

            </div>
          </div>

          {/* 오른쪽 */}
          <div>
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-[#17365D]">
                대표원장
              </p>

              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                  이현민
                </h3>

                <span className="pb-1 text-sm text-slate-500">
                  DDS
                </span>
              </div>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
                대학병원과 종합병원에서 쌓은 임상 경험을 바탕으로
                진단부터 치료 이후까지 책임 있게 진료하겠습니다.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <SectionCard
                  title="약력"
                  items={history}
               />

              <SectionCard
                title="학술 및 활동"
                items={activities}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}