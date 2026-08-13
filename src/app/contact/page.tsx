// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';

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