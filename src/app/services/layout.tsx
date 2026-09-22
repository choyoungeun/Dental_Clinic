import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBar from "@/components/FloatingBar";
import ScrollProgress from "@/components/ScrollProgress";
import ClinicJsonLd from "@/components/ClinicJsonLd";

const SITE_URL = "https://suwonsevrance.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "수원세브란스치과 | 수원 장안구 송죽동 치과",
    template: "%s | 수원세브란스치과",
  },

  description:
    "수원 장안구 송죽동 수원세브란스치과. 연세대학교 치과대학 출신 대표원장이 자연치아 보존, 임플란트, 매복 사랑니, 충치·보철, 턱관절 진료를 안내합니다.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "수원세브란스치과 | 수원 장안구 치과",
    description:
      "대학병원과 종합병원 임상 경험을 바탕으로 자연치아 보존부터 임플란트·구강외과 진료까지 신중하게 계획합니다.",
    url: "/",
    siteName: "수원세브란스치과",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-main.jpg",
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
    images: ["/images/og-main.jpg"],
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

        <noscript>
          <style>
            {`.reveal,.text-reveal__line,.reveal-image__inner{opacity:1!important;transform:none!important}`}
          </style>
        </noscript>

        <ClinicJsonLd />

        <ScrollProgress />

        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />

        <FloatingBar />

      </body>
    </html>
  );
}