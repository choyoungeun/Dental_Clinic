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

      {/* 04. 진료 원칙 */}
      <ClinicalPhilosophy />

      {/* 05. 임상증례 */}
      <ClinicalCasesSection />

      {/* 06. 진료 장비 */}
      <EquipmentSection />

      {/* 07. 치과 공간 */}
      <InteriorSection />

      {/* 08. 상담 */}
      <QuickConsultation />

      {/* 09. 오시는 길 */}
      <Contact />
    </main>
  );
}