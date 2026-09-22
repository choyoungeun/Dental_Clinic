import Image from "next/image";
import Link from "next/link";

import { services } from "@/components/serviceData";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-[#071b33] px-5 pb-16 pt-32 text-white md:px-8 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-[12px] font-bold tracking-[0.28em] text-[#8ec5ff]">
            DENTAL CARE
          </p>

          <h1 className="mt-5 break-keep text-[38px] font-semibold leading-[1.25] tracking-[-0.045em] md:text-[54px]">
            진료과목
          </h1>

          <p className="mt-6 max-w-3xl break-keep text-[17px] leading-[1.9] text-white/70 md:text-[19px]">
            자연치아를 유지할 수 있는지 먼저 살피고,
            필요한 경우 임플란트와 구강외과 치료까지
            현재 상태에 맞는 치료 방법을 안내합니다.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="border-b border-[#e3e9f0] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-16">

            <div>
              <p className="text-[12px] font-bold tracking-[0.24em] text-[#2f89fc]">
                OUR CARE
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl break-keep text-[27px] font-semibold leading-[1.5] tracking-[-0.035em] text-[#071b33] md:text-[36px]">
                치료 방법을 먼저 정하기보다,
                <br className="hidden md:block" />
                현재 치아의 상태부터 확인합니다.
              </h2>

              <p className="mt-5 max-w-3xl break-keep text-[16px] leading-[1.9] text-[#627284] md:text-[17px]">
                수원세브란스치과는 구강검사와 필요한 영상검사를 통해
                치아와 잇몸, 주변 구조를 확인하고 치료가 필요한 이유와
                가능한 방법을 설명한 뒤 치료계획을 세웁니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE LIST
      ===================================================== */}
      <section className="bg-[#f5f7fa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,27,51,0.10)]"
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e9eef4]">
                  <Image
                    src={service.image}
                    alt={`${service.title} 진료 안내`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/35 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 text-[11px] font-bold tracking-[0.18em] text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>


                {/* Content */}
                <div className="p-6 md:p-7">

                  <p className="text-[11px] font-bold tracking-[0.18em] text-[#2f89fc]">
                    {service.eng}
                  </p>

                  <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.035em] text-[#071b33] md:text-[27px]">
                    {service.title}
                  </h2>

                  <p className="mt-4 break-keep text-[16px] font-medium leading-[1.7] text-[#17365D]">
                    {service.hook}
                  </p>

                  <p className="mt-3 line-clamp-3 break-keep text-[15px] leading-[1.8] text-[#69798a]">
                    {service.desc}
                  </p>


                  {/* Tags */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-[#f0f5fb] px-3 py-1.5 text-[12px] font-semibold text-[#536577]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>


                  {/* Link */}
                  <div className="mt-7 flex items-center justify-between border-t border-[#e3e9f0] pt-5">

                    <span className="text-[14px] font-bold text-[#17365D]">
                      자세히 보기
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[19px] text-[#2f89fc] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          LOCATION CONTEXT
          지역 키워드를 억지스럽지 않게 자연스럽게 포함
      ===================================================== */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">

          <p className="text-[12px] font-bold tracking-[0.22em] text-[#2f89fc]">
            SUWON DENTAL CLINIC
          </p>

          <h2 className="mt-4 break-keep text-[27px] font-semibold tracking-[-0.035em] text-[#071b33] md:text-[34px]">
            수원 장안구에서 필요한 치과 진료를 상담하세요.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl break-keep text-[16px] leading-[1.9] text-[#68798a]">
            수원세브란스치과는 수원시 장안구 경수대로 969
            한국메디컬빌딩 2층에 위치하고 있습니다.
            한일타운·경기일보 정류장 인근에서 방문하실 수 있습니다.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center border border-[#17365D] px-7 text-[14px] font-bold text-[#17365D] transition hover:bg-[#17365D] hover:text-white"
          >
            오시는 길 확인하기
            <span className="ml-3">→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}