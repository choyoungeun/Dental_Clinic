import type { Metadata } from "next";
import "./globals.css"; // 디자인을 위해 반드시 필요합니다
import Script from "next/script"; // Next.js 전용 스크립트 컴포넌트
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBar from '@/components/FloatingBar';

export const metadata: Metadata = {
  title: {
    default: "수원세브란스치과의원 | 북수원 송죽동 치과",
    template: "%s | 수원세브란스치과의원 | Suwon Severance Dental Clinic",
  },
  description: "북수원 치과, 연세대 출신 치과의사 진료. 임플란트, 틀니, 사랑니 발치, 무통마취, 자연치아 살리기, 치아미백. 따뜻한 공감과 정직한 진료를 약속합니다.",
  keywords: ["송죽동치과", "수원치과", "북수원치과","송죽치과", "성대치과", "수원세브란스치과", "임플란트", "전문의치과", "자연치아", "안아픈 치과", "충치치료", "친절한 치과", "English Speaking Dentist Bundang", "Sunae Dental Clinic", "Bundang Dentist", "Foreigner Clinic"] as string[],
  icons: {
    icon: '/favicon.ico', // public 폴더에 넣었을 경우
  },
  openGraph: {
    title: "수원세브란스치과의원",
    description: "수원세브란스치과, 과잉진료 없는 양심 치과",
    // url: "https://도메인주소.com", // 실제 구매하신 도메인
    siteName: "수원브란스치과의원",
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

        {/* 네이버 지도 스크립트 */}
        {/* 💡 strategy를 afterInteractive로 수정 */}
        <Script
          strategy="afterInteractive"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7le58fbcf6"
        />
      </body>
    </html>
  );
}