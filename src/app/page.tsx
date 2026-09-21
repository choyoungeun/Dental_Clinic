import { InteriorSection } from '@/components/InteriorSection';
import QuickConsultation from '@/components/QuickConsultation';
import Hero from '@/components/Hero';
import FloatingBar from '@/components/FloatingBar';
import ClinicalPhilosophy from '@/components/ClinicalPhilosophy';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';
import CleanSafetySystem from "@/components/CleanSafetySystem";

// 임상증례 준비 전까지 임시 비활성화 — 다시 켜려면 아래 import와 본문의 주석을 해제하세요.
// import { ClinicalCasesSection } from '@/components/ClinicalCasesSection';
import { MainPopup } from '@/components/MainPopup';
import EquipmentSection from '@/components/EquipmentSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainPopup />
      <FloatingBar />

      {/* 01. 첫 화면 */}
      <Hero />

      {/* 02. 주요 진료 */}
      <Services />

      {/* 03. 대표원장 */}
      <Doctors />

      {/* 04. 감염관리 / 통증완화 시스템 */}
      <CleanSafetySystem />

      
      {/* 05. 진료 원칙 */}
      <ClinicalPhilosophy />

      {/* 06. 임상증례 (임시 비활성화)
      <ClinicalCasesSection />
      */}

      {/* 07. 진료 장비 */}
      <EquipmentSection />

      {/* 08. 치과 공간 */}
      <InteriorSection />

      {/* 09. 상담 */}
      <QuickConsultation />

      {/* 10. 오시는 길 */}
      <Contact />
    </main>
  );
}