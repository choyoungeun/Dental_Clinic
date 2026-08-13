import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Sev2018.jpg"
          alt="수원세브란스치과 내부 전경"
          fill
          className="object-cover object-center brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl text-white"> {/* 폭을 2xl -> xl로 줄여 문장 호흡 조절 */}
          <span className="mb-3 inline-block text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-[#4da3ff] uppercase">
            Professional & Warm care
          </span>
          
          {/* 제목 크기 하향: 5xl -> 4xl로 조정하여 담백한 신뢰감 부여 */}
          <h1 className="mb-5 text-2xl md:text-[40px] font-extrabold leading-[1.4] tracking-tight">
            <span className="text-[#4da3ff]">세브란스의 원칙 그대로</span> <br />
            타협하지 않는 정직한 진료<br />수원세브란스치과의 약속
          </h1>

          {/* 본문 크기 하향: 정갈한 텍스트 배치 */}
          <p className="mb-8 text-[15px] md:text-[17px] leading-relaxed text-white/80 font-medium break-keep">
            연세대 출신 의료진이 처음부터 끝까지 한 분 한 분의 치아를 책임지고 정직하게 진료합니다.<br />
            풍부한 임상 경험으로 정확한 진단으로 꼭 필요한 치료만 권해드립니다. <br className="hidden md:block" />
            
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://booking.naver.com/"
              className="rounded-sm bg-[#2f89fc] px-7 py-3 text-[14px] font-bold transition-all hover:bg-blue-600 shadow-md"
            >
              온라인 예약하기
            </Link>
            <Link
              href="/doctors"
              className="rounded-sm border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-3 text-[14px] font-bold text-white transition-all hover:bg-white hover:text-black"
            >
              의료진 소개
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;