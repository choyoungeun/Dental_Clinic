import type { Metadata } from "next";
import Doctors from "@/components/Doctors";
import Image from "next/image";

export const metadata: Metadata = {
  title: "이현민 대표원장 | 의료진 소개",

  description:
    "연세대학교 치과대학 출신 수원세브란스치과 이현민 대표원장의 학력, 임상 경험과 진료 철학을 소개합니다.",

  alternates: {
    canonical: "/doctors",
  },

  openGraph: {
    title: "이현민 대표원장 | 수원세브란스치과",
    description:
      "연세대학교 치과대학 출신 이현민 대표원장의 학력과 임상 경험, 진료 철학을 소개합니다.",
    url: "/doctors",
    type: "profile",
  },
};


export default function DoctorsPage() {
  return (
    <main>
      {/* <Navbar /> */}
      
      {/* 서브 페이지 헤더 배너 */}
      <section className="relative h-[300px] w-full bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/bg_2.jpg" 
            alt="Doctors Banner" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">의료진 소개</h1>
        </div>
      </section>

      {/* 원장님 단독 레이아웃이 적용된 Doctors 컴포넌트 호출 */}
      <div className="py-12">
        <Doctors />
      </div>

      {/* 상세 페이지용 추가 문구 (선택 사항) */}
      <section className="pb-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl bg-blue-50 p-10">
            <p className="text-gray-700 leading-relaxed italic">
              환자의 작은 불편도 놓치지 않고 살피겠습니다. <br/>
              수원세브란스치과는 정확한 진단을 바탕으로 필요한 치료를 차분히 설명드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}