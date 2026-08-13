// import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { InteriorSection } from '@/components/InteriorSection';
import { ClinicalCasesSection } from '@/components/ClinicalCasesSection';
import { MainPopup } from '@/components/MainPopup';
import { EquipmentSection } from '@/components/EquipmentSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainPopup /> {/* 팝업 추가 */}
      
      {/* 메인 대문 섹션 */}
      <Hero />

      {/* 병원 실내 슬라이드 (About 페이지에서 가져온 내용)
      <InteriorSection /> */}

      {/* main page 3rd section design */}
      <Services /> 

      {/* 🔬 대학병원급 첨단 장비 소개 (첫 화면 신규 배치) */}
      <EquipmentSection />

      {/* 치과 진료 케이스 슬라이드 (의료법 준수형 Before & After) */}
      <ClinicalCasesSection />

      {/* 의료진 소개*/}
      <Doctors />

      {/* 오시는 길 */}
      <Contact />

      {/* 하단 문구 */}
      {/* <Footer /> */}

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">임플란트, 교정, 치아미백까지</h2>
        <p className="mt-4 text-gray-600">환자 중심의 정직한 진료를 약속합니다.</p>
      </section>
    </main>
  );
}