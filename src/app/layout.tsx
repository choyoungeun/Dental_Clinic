import type { Metadata } from "next";
import "./globals.css"; // 디자인을 위해 반드시 필요합니다
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBar from '@/components/FloatingBar';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: {
    default: "수원세브란스치과의원 | 북수원 송죽동 치과",
    template: "%s | 수원세브란스치과의원 | Suwon Severance Dental Clinic",
  },
  description: "북수원 송죽동 치과. 연세대 출신 대표원장이 직접 진료합니다. 임플란트, 자연치아 보존, 매복 사랑니 발치, 충치·보철, 턱관절 진료를 정밀 진단과 충분한 설명을 바탕으로 안내합니다.",
  keywords: ["송죽동치과", "수원치과", "북수원치과","송죽치과", "성대치과", "수원세브란스치과", "임플란트", "자연치아", "충치치료","English Speaking Dentist Bundang", "Sunae Dental Clinic", "Bundang Dentist", "Foreigner Clinic"] as string[],
  icons: {
    icon: '/favicon.ico', // public 폴더에 넣었을 경우
  },
  openGraph: {
    title: "수원세브란스치과의원",
    description: "정밀 진단과 충분한 설명을 바탕으로 필요한 치료를 안내하는 수원세브란스치과의원",
    // url: "https://도메인주소.com", // 실제 구매하신 도메인
    siteName: "수원세브란스치과의원",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {/* JS가 꺼진 환경에서도 내용이 보이도록 */}
        <noscript>
          <style>{`.reveal,.text-reveal__line,.reveal-image__inner{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        {/* 상단 스크롤 진행 표시 */}
        <ScrollProgress />

        {/* 🧭 전역 네비게이션 바 (모든 페이지 공통 적용) */}
        <Navbar />

        {/* 📄 각 페이지의 실제 콘텐츠 영역 */}
        <div className="flex-1">
          {children}
        </div>

        {/* 🦶 전역 푸터 (모든 페이지 공통 적용) */}
        <Footer />

        {/* 🚀 [전역 고정] 플로팅 퀵 메뉴 */}
        {/* Next.js Layout 레벨에 배치되어 어떤 페이지로 이동해도 고정 상태 유지 */}
        <FloatingBar />

        {/* 네이버 지도 스크립트는 NaverMap 컴포넌트가 직접 불러옵니다. */}
      </body>
    </html>
  );
}