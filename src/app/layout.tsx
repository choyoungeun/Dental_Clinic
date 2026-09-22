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
  keywords: [    "한일타운치과",

    "수원임플란트",

    "수원사랑니",

    "수원매복사랑니",

    "수원신경치료",

    "수원재신경치료",

    "수원자연치아보존","송죽동치과", "수원치과", "북수원치과","송죽치과", "성대치과", "수원세브란스치과", "임플란트전문치과", "자연치아유지", "수원충치치료","English Speaking Dentist Suwon", "Suwon Dental Clinic", "JangAngu Dentist", "Foreigner Clinic"] as string[],
  icons: {
    icon: '/favicon.ico', // public 폴더에 넣었을 경우
  },
  openGraph: {
    title: "수원세브란스치과의원",
    description: "대학병원과 종합병원 임상 경험을 바탕으로 진단부터 치료계획까지 신중하게 진료합니다.",
    // url: "https://도메인주소.com", // 실제 구매하신 도메인
    siteName: "수원세브란스치과의원",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/yonsei.png",
        width: 1200,
        height: 630,
        alt: "수원세브란스치과",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수원세브란스치과",
    description:
      "수원 장안구 송죽동 치과 · 자연치아 보존 · 임플란트 · 구강외과",
    images: ["/images/yonsei.png"],
  },

  robots: {
    index: true,
    follow: true,
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