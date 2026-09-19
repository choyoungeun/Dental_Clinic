import { InteriorSection } from '@/components/InteriorSection';
import QuickConsultation from '@/components/QuickConsultation';
import Hero from '@/components/Hero';
import FloatingBar from '@/components/FloatingBar';
import ClinicalPhilosophy from '@/components/ClinicalPhilosophy';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';

import { ClinicalCasesSection } from '@/components/ClinicalCasesSection';
import { MainPopup } from '@/components/MainPopup';
import { EquipmentSection } from '@/components/EquipmentSection';

/* 홈페이지 정보 구조
   1순위  세브란스 임상 경험 + 종합병원 치과과장 경험  → Hero · Doctors
   2순위  자연치아 보존과 고난도 수술을 함께 경험한 판단 → Philosophy · Signature Care · Cases
   3순위  진단 장비 · 공간 · 협력 네트워크            → Equipment · Interior */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainPopup />

      <FloatingBar />

      {/* 01. 브랜드 메시지 : 세브란스 · 종합병원 진료 경험 */}
      <Hero />

      {/* 02. 짧은 진료 철학 */}
      <ClinicalPhilosophy />

      {/* 03. 진료과목 (자연치아 보존 · 임플란트 · 구강외과를 앞에) */}
      <Services />

      {/* 04. 대표원장 · 임상 경험 */}
      <Doctors />

      {/* 05. 임상증례 */}
      <ClinicalCasesSection />

      {/* 06. DIAGNOSIS & TREATMENT SYSTEM */}
      <EquipmentSection />

      {/* 07. 치과 둘러보기 */}
      <InteriorSection />

      {/* 08. 간편 상담 신청 */}
      <QuickConsultation />

      {/* 09. 오시는 길 */}
      <Contact />
    </main>
  );
}
