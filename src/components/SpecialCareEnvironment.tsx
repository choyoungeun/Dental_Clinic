import Image from 'next/image';
import Reveal from './Reveal';
import { stagger } from './stagger';
import RevealImage from './RevealImage';
import TextReveal from './TextReveal';

const cards = [
  {
    number: '01',
    label: 'MEDICAL STAFF',
    title: ['세브란스에서 배운 기준,', '종합병원에서 쌓은 경험.'],
    sub: '연세대 치대 우등졸업 · 신촌세브란스 임상 경험',
    image: '/images/dentist.png',
    alt: '수술 진료 중인 의료진',
    position: 'object-center',
  },
  {
    number: '02',
    label: 'SPACE',
    title: ['공간부터', '여유롭게 준비했습니다.'],
    sub: '약 100평 · 체어 10대 이상',
    image: '/images/clinic_room.jpg',
    alt: '수원세브란스치과 진료실',
    position: 'object-center',
  },
  {
    number: '03',
    label: 'DIAGNOSTIC SYSTEM',
    title: ['정확한 진단을 돕는', '디지털 진단 환경.'],
    sub: '3D CT 기반 진단 · 디지털 스캔 및 치료계획',
    image: '/images/digital_implant.jpg',
    alt: '3D CT와 디지털 치료계획 화면',
    position: 'object-[30%_center]',
  },
];

const SpecialCareEnvironment = () => {
  return (
    <section
      id="special-care"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              SPECIAL CARE ENVIRONMENT
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
            lines={['치료를 위한 환경도', '기준 있게 준비했습니다.']}
          />
        </div>

        {/* 이미지가 주인공, 글은 아래에 짧게 */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => (
            <Reveal
              key={card.number}
              delay={stagger(index, 140)}
              className={index === 1 ? 'lg:mt-14' : ''}
            >
              <article>
                <RevealImage
                  className="h-[300px] rounded-md bg-[#eef2f6] md:h-[400px]"
                  delay={stagger(index, 140) + 150}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={`object-cover ${card.position}`}
                  />
                </RevealImage>

                <div className="mt-6">
                  <p className="text-[12px] font-bold tracking-[0.2em] text-[#2f89fc]">
                    {card.number} · {card.label}
                  </p>

                  <h3 className="mt-3 break-keep text-[24px] font-semibold leading-[1.4] tracking-[-0.03em] text-[#071b33] md:text-[26px]">
                    {card.title[0]}
                    <br />
                    {card.title[1]}
                  </h3>

                  <p className="mt-3 break-keep text-[15px] leading-[1.7] text-gray-500 md:text-[16px]">
                    {card.sub}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialCareEnvironment;
