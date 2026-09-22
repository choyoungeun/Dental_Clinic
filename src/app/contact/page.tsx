import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Image from "next/image";

export const metadata: Metadata = {
  title: "오시는 길·진료시간 | 수원 장안구 송죽동",

  description:
    "수원세브란스치과 오시는 길과 진료시간 안내. 경기 수원시 장안구 경수대로 969 한국메디컬빌딩 2층, 한일타운·경기일보, KT수원위즈파크 인근입니다.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "오시는 길 | 수원세브란스치과",
    description:
      "경기 수원시 장안구 경수대로 969 한국메디컬빌딩 2층. 진료시간과 교통·주차 정보를 확인하세요.",
    url: "/contact",
    type: "website",
  },
};


export default function ContactPage() {
  return (
    <main>
      {/* <Navbar /> */}
      
      {/* 서브 페이지 헤더 배너 */}
      <section className="relative h-[300px] w-full bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/Sev2018.jpg" // 템플릿의 다른 배경 이미지 활용
            alt="Contact Banner" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">오시는 길</h1>
        </div>
      </section>

      {/* 기존에 만들어둔 Contact 컴포넌트 호출 */}
      <Contact />

      {/* <Footer /> */}
    </main>
  );
}