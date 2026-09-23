import Link from "next/link";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          PAGE HEADER
          /services 페이지의 SEO용 H1
      ===================================================== */}
      <section className="bg-[#071b33] px-5 pb-14 pt-32 text-white md:px-8 md:pb-18 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-[11px] font-bold tracking-[0.28em] text-[#8ec5ff] md:text-[12px]">
            DENTAL CARE
          </p>

          <h1 className="mt-4 break-keep text-[38px] font-semibold leading-[1.3] tracking-[-0.045em] md:text-[52px]">
            수원세브란스치과 진료과목
          </h1>

          <p className="mt-5 max-w-3xl break-keep text-[16px] leading-[1.9] text-white/70 md:text-[18px]">
            자연치아를 유지할 수 있는지 먼저 살피고,
            필요한 경우 임플란트와 구강외과 치료까지
            현재 상태에 맞는 치료 방법과 순서를 안내합니다.
          </p>

        </div>
      </section>


      {/* =====================================================
          진료과목
          기존 Services.tsx 그대로 재사용
      ===================================================== */}
      <Services />


      {/* =====================================================
          진료 장비 (요약)
          전체 장비 소개는 홈페이지 EquipmentSection에 있으므로
          여기서는 중복 없이 이름과 한 줄 요약, 링크만 제공합니다.
      ===================================================== */}
      <section className="border-t border-[#e1e7ed] bg-[#fbfaf7] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-bold tracking-[0.26em] text-[#2f89fc] md:text-[12px]">
            EQUIPMENT
          </p>

          <h2 className="mt-4 break-keep text-[26px] font-semibold leading-[1.4] tracking-[-0.04em] text-[#071b33] md:text-[32px]">
            진단과 치료 계획에 활용하는 장비
          </h2>

          <p className="mt-4 max-w-2xl break-keep text-[15px] leading-[1.8] text-[#657587] md:text-[16px]">
            디지털 구강스캐너, 3D CT, 바늘 없는 분사식 주입 시스템, 광학식 치아우식 진단장치, LED 수술등을
            진료 상황에 맞게 활용합니다. 각 장비를 어떻게 활용하는지는 홈페이지에서 자세히 안내합니다.
          </p>

          <Link
            href="/#equipment"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#17365D] transition-colors duration-300 hover:text-[#2f89fc]"
          >
            장비 자세히 보기
            <span aria-hidden="true" className="transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}