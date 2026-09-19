import { InteriorSection } from '@/components/InteriorSection';
import QuickConsultation from '@/components/QuickConsultation';
import Hero from '@/components/Hero';
import FloatingBar from '@/components/FloatingBar';
import AffiliationsCarousel from '@/components/AffiliationsCarousel';
import SpecialCareEnvironment from '@/components/SpecialCareEnvironment';
import BrandStorySection from '@/components/BrandStorySection';
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

      {/* 03. 진료 영역 : 대형 이미지 카드 */}
      <Services />

      {/* 04. 의료진 · 공간 · 진단 환경 */}
      <SpecialCareEnvironment />

      {/* 05. 병원 소개 · 진료 원칙 (큰 이미지 + 짧은 메시지) */}
      <BrandStorySection />

      {/* 간편 상담 신청 */}
      <QuickConsultation />

      {/* 06. 임상증례 */}
      <ClinicalCasesSection />

      {/* 07. 진료 장비 */}
      <EquipmentSection />

      {/* 치과 둘러보기 */}
      <InteriorSection />

      {/* 08. 의료진 */}
      <Doctors />

      {/* 09. 오시는 길 */}
      <Contact />
    </main>
  );
}