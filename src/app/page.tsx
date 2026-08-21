import Hero from '@/components/Hero';
import BrandStorySection from '@/components/BrandStorySection';
import BrandPrinciples from '@/components/BrandPrinciples';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';

import { ClinicalCasesSection } from '@/components/ClinicalCasesSection';
import { MainPopup } from '@/components/MainPopup';
import { EquipmentSection } from '@/components/EquipmentSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainPopup />

      {/* 01. BRAND PROMISE */}
      <Hero />

      {/* 02. 대표원장의 경험이 만든 진료 기준 */}
      <BrandStorySection />

      {/* 03. 병원이 지키는 세 가지 원칙 */}
      <BrandPrinciples />

      {/* 04. 임상 경험 */}
      <ClinicalCasesSection />

      {/* 05. 진료 기준을 구현하는 장비 */}
      <EquipmentSection />

      {/* 06. 진료 영역 */}
      <Services />

      {/* 07. 의료진 */}
      <Doctors />

      {/* 08. 오시는 길 */}
      <Contact />

      {/* 09. FINAL BRAND MESSAGE */}
      <section className="relative overflow-hidden bg-[#06182e] px-6 py-28 text-center text-white md:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-7 text-[10px] font-semibold tracking-[0.34em] text-white/40 md:text-[11px]">
            SUWON SEVERANCE DENTAL CLINIC
          </p>

          <h2 className="text-3xl font-semibold leading-[1.4] tracking-[-0.03em] md:text-5xl">
            좋은 치료에는
            <br />
            기준이 있습니다.
          </h2>

          <p className="mt-8 text-base leading-relaxed text-white/60 md:text-xl">
            오늘보다 10년 뒤의 치아를 생각합니다.
          </p>
        </div>
      </section>
    </main>
  );
}