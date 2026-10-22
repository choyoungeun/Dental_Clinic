
import { InteriorSection } from '@/components/InteriorSection';
import QuickConsultation from '@/components/QuickConsultation';
import Hero from '@/components/Hero';
import AffiliationsCarousel from '@/components/AffiliationsCarousel';
import ClinicalPhilosophy from '@/components/ClinicalPhilosophy';
import ScrollStorySection from '@/components/ScrollStorySection';
import MobileScrollStory from '@/components/MobileScrollStory';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';
import CleanSafetySystem from '@/components/CleanSafetySystem';
import { MainPopup } from '@/components/MainPopup';
import EquipmentSection from '@/components/EquipmentSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainPopup />

      {/* 01. 첫 화면 */}
      <Hero />

      {/* 협력병원 로고 자동 슬라이드 */}
      <AffiliationsCarousel />

      {/* PC: 기존 고정 스크롤 스토리 유지 */}
      <div className="hidden md:block">
        <ScrollStorySection />
      </div>

      {/* 모바일: 스크롤 점프를 줄인 일반 레이아웃 */}
      <MobileScrollStory />

      {/* 02. 주요 진료 */}
      <Services />

      {/* 03. 대표원장 */}
      <Doctors />

      {/* 04. 감염관리 / 통증완화 시스템 */}
      <CleanSafetySystem />

      {/* 05. 진료 원칙 */}
      <ClinicalPhilosophy />

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
