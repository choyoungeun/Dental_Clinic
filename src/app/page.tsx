import { InteriorSection } from '@/components/InteriorSection';
import QuickConsultation from '@/components/QuickConsultation';
import Hero from '@/components/Hero';
import FloatingBar from '@/components/FloatingBar';
import AffiliationsCarousel from '@/components/AffiliationsCarousel';
import SpecialCareEnvironment from '@/components/SpecialCareEnvironment';
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

      <FloatingBar />


      {/* 01. BRAND PROMISE */}
      <Hero />

      {/* 02. 교육 · 임상경험 · 학술활동 자동 슬라이드 */}
      <AffiliationsCarousel />

      {/* 03. 병원 소개 · 진료 기준 */}
      <BrandStorySection />

      {/* 04. 병원이 지키는 세 가지 원칙 */}
      <BrandPrinciples />

      {/* 05. 의료진 · 공간 · 장비 3대 강점 */}
      <SpecialCareEnvironment />

      {/* 06. 진료 영역 */}
      <Services />

      {/* 간편 상담 신청 */}
      <QuickConsultation />

      {/* 07. 임상증례 */}
      <ClinicalCasesSection />

      {/* 08. 진료 장비 */}
      <EquipmentSection />

      {/* 치과 둘러보기 */}
      <InteriorSection />

      {/* 09. 의료진 */}
      <Doctors />

      {/* 10. 오시는 길 */}
      <Contact />
    </main>
  );
}