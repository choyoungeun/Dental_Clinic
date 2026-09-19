'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';

const equipmentList = [
  {
    id: 1,
    tag: '3D DIAGNOSIS',
    name: '3D 구강 CT',
    desc: '치아와 잇몸뼈, 신경관처럼 육안으로 확인하기 어려운 구조를 3차원 영상으로 살펴, 치료 계획을 세우는 데 활용합니다.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    reason:
      '정확한 진단이 치료의 시작이라고 생각하기 때문입니다.',
  },
  {
    id: 2,
    tag: 'DIGITAL WORKFLOW',
    name: '3D 구강스캐너',
    desc: '구강 상태를 디지털 데이터로 기록하여 진단과 보철 치료 과정에 활용합니다.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    reason:
      '눈으로 보는 것뿐 아니라 기록하고 비교할 수 있는 진료 환경을 만들기 위해 선택합니다.',
  },
  {
    id: 3,
    tag: 'PRECISION SYSTEM',
    name: '정밀 디지털 진료 시스템',
    desc: '환자의 현재 상태와 치료 목적에 맞춰 필요한 디지털 장비를 선택적으로 활용합니다.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    reason:
      '장비를 많이 사용하는 것보다 필요한 순간에 제대로 활용하는 것이 중요하다고 생각합니다.',
  },
];

export const EquipmentSection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[13px]">
              SEVERANCE STANDARD
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-5 text-4xl font-semibold leading-[1.35] tracking-[-0.035em] text-[#071b33] md:text-5xl"
            lines={[
              '수원세브란스치과는 세브란스치과대학병원과',
              '동일한 모델의 장비를 포함해 진단합니다.',
            ]}
          />

          <Reveal variant="soft" delay={400}>
            <p className="mt-7 max-w-2xl text-[17px] leading-[1.95] text-gray-500 md:text-[19px]">
              좋은 장비 자체가 좋은 치료를 만드는 것은 아닙니다.
              정확한 판단을 돕는 도구이기에,
              진료 목적과 기준에 맞춰 장비를 선택합니다.
            </p>
          </Reveal>
        </div>

        {/* Equipment */}
        <div className="mt-12 space-y-5">
          {equipmentList.map((item, index) => (
            <div
              key={item.id}
              className="grid overflow-hidden border border-gray-100 bg-[#fafafa] md:grid-cols-2"
            >
              <RevealImage
                parallax={24}
                className={`min-h-[320px] md:min-h-[440px] ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#071b33]/10" />
              </RevealImage>

              <Reveal
                variant={index % 2 === 1 ? 'left' : 'right'}
                delay={150}
                className={`flex flex-col justify-center p-8 md:p-14 ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <p className="text-[12px] font-semibold tracking-[0.25em] text-[#2f89fc]">
                  0{index + 1} · {item.tag}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#071b33] md:text-3xl">
                  {item.name}
                </h3>

                <p className="mt-6 text-[16px] leading-[1.9] text-gray-500 md:text-[17px]">
                  {item.desc}
                </p>

                <div className="mt-6 border-t border-gray-200 pt-5">
                  <p className="text-[12px] font-semibold tracking-[0.2em] text-gray-400">
                    WHY WE CHOSE IT
                  </p>

                  <p className="mt-3 text-[17px] font-medium leading-[1.8] text-[#071b33] md:text-[18px]">
                    {item.reason}
                  </p>
                </div>

                {/*
                  실제 세브란스 치과대학병원 동일 모델임이
                  객관적으로 확인되는 장비에만 아래 Badge 활성화

                  <div className="mt-6">
                    <span className="border border-[#2f89fc]/30 bg-[#2f89fc]/5 px-3 py-2 text-[13px] font-semibold text-[#2f89fc]">
                      세브란스 치과대학병원 동일 모델
                    </span>
                  </div>
                */}
              </Reveal>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] leading-relaxed text-gray-400">
          * 실제 도입 장비 및 모델에 따라 내용은 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
};