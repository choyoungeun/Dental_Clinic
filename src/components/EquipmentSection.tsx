'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';

/* 장비 사진은 실제 장비와 일치하는 로컬 사진이 없어 기존 외부 사진을 유지합니다. */
const equipmentList = [
  {
    id: 1,
    tag: '3D DIAGNOSIS',
    name: '3D 구강 CT',
    desc: '치아와 잇몸뼈, 신경관의 위치를 3차원 영상으로 확인하고 치료 계획에 활용합니다.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
    reason: '정확한 진단이 치료의 시작이라고 생각합니다.',
  },
  {
    id: 2,
    tag: 'DIGITAL WORKFLOW',
    name: '3D 구강스캐너',
    desc: '구강 상태를 디지털 데이터로 기록해 진단과 보철 치료 과정에 활용합니다.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
    reason: '기록하고 비교할 수 있는 진료 환경을 위해 선택합니다.',
  },
  {
    id: 3,
    tag: 'PRECISION SYSTEM',
    name: '정밀 디지털 진료 시스템',
    desc: '환자의 상태와 치료 목적에 맞춰 필요한 디지털 장비를 선택적으로 활용합니다.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop',
    reason: '많이 쓰기보다, 필요한 순간에 제대로 쓰는 것이 중요합니다.',
  },
];

export const EquipmentSection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              SEVERANCE STANDARD
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
            lines={['세브란스치과대학병원과', '동일한 모델의 장비를 포함해', '진단합니다.']}
          />

          <Reveal variant="soft" delay={400}>
            <p className="mt-6 max-w-xl break-keep text-[16px] leading-[1.75] text-gray-500 md:text-[18px]">
              장비는 정확한 판단을 돕는 도구입니다.
              진료 목적에 맞춰 선택합니다.
            </p>
          </Reveal>
        </div>

        {/* Equipment : 이미지 60% · 글 40% 를 번갈아 배치 */}
        <div className="mt-12 space-y-12 md:mt-16 md:space-y-20">
          {equipmentList.map((item, index) => {
            const flipped = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid items-center gap-6 md:gap-12 ${
                  flipped
                    ? 'md:grid-cols-[1fr_1.5fr]'
                    : 'md:grid-cols-[1.5fr_1fr]'
                }`}
              >
                <RevealImage
                  parallax={20}
                  className={`h-[340px] rounded-md bg-[#eef2f6] md:h-[520px] ${
                    flipped ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#071b33]/10" />
                </RevealImage>

                <Reveal
                  variant={flipped ? 'left' : 'right'}
                  delay={150}
                  className={flipped ? 'md:order-1' : ''}
                >
                  <p className="text-[12px] font-semibold tracking-[0.25em] text-[#2f89fc]">
                    0{index + 1} · {item.tag}
                  </p>

                  <h3 className="mt-4 break-keep text-[30px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#071b33] md:text-[38px]">
                    {item.name}
                  </h3>

                  <p className="mt-5 break-keep text-[16px] leading-[1.8] text-gray-500 md:text-[17px]">
                    {item.desc}
                  </p>

                  <p className="mt-6 break-keep border-l-2 border-[#2f89fc] pl-4 text-[15px] font-medium leading-[1.7] text-[#071b33] md:text-[16px]">
                    {item.reason}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-[13px] leading-relaxed text-gray-400">
          * 실제 도입 장비 및 모델에 따라 내용은 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
};
