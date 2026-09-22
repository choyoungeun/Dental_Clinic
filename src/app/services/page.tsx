import Services from "@/components/Services";
import EquipmentSection from "@/components/EquipmentSection";

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
          실제 진료 장비
          현재 EquipmentSection.tsx 그대로 재사용
      ===================================================== */}
      <EquipmentSection />

    </main>
  );
}