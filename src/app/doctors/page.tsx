// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import Doctors from '@/components/Doctors';
import Image from 'next/image';

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
              "치료 결과로 증명하는 치과, 환자의 작은 불편함도 놓치지 않는 세밀함으로 <br/>
              수원세브란스치과에서  환자의 치아를 책임지겠습니다."
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}