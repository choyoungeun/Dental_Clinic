import Image from 'next/image';

import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';

import { equipment } from './equipmentData';

const installedEquipment = equipment.filter(
  (item) => item.installed,
);

export const EquipmentSection = () => {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 overflow-hidden bg-white py-20 text-[#071b33] md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                DIAGNOSIS & DIGITAL SYSTEM
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={[
                '눈으로 보이지 않는 부분까지',
                '검사하고 기록합니다.',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={220}
            className="lg:pb-2"
          >
            <p className="break-keep text-[16px] leading-[1.85] text-[#5c6d7f] md:text-[17px]">
              장비 자체보다 중요한 것은
              검사에서 무엇을 확인하고
              그 정보를 치료계획에 어떻게 반영하는가입니다.
            </p>
          </Reveal>
        </div>

        {/* =====================================================
            EQUIPMENT
        ===================================================== */}

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {installedEquipment.map((item, index) => {
            const flipped = index % 2 === 1;

            return (
              <article
                key={item.id}
                className="grid items-stretch gap-7 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image */}
                <RevealImage
                  noZoom
                  parallax={16}
                  className={[
                    'relative h-[300px] overflow-hidden bg-[#eef2f6] md:h-[470px] lg:col-span-7',
                    flipped ? 'lg:order-2' : '',
                  ].join(' ')}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#eef2f6]" />
                  )}

                  <div className="absolute inset-0 bg-[#071b33]/5" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 bg-[#071b33]/90 px-3 py-2 text-white md:left-6 md:top-6">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#8ec5ff]">
                      SYSTEM
                    </p>

                    <p className="mt-0.5 text-[15px] font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                </RevealImage>

                {/* Content */}
                <Reveal
                  variant={flipped ? 'left' : 'right'}
                  delay={140}
                  className={[
                    'flex flex-col justify-center lg:col-span-5',
                    flipped ? 'lg:order-1' : '',
                  ].join(' ')}
                >
                  <p className="text-[11px] font-bold tracking-[0.22em] text-[#2f89fc]">
                    {item.tag}
                  </p>

                  <h3 className="mt-4 break-keep text-[31px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#071b33] md:text-[40px]">
                    {item.name}
                  </h3>

                  <p className="mt-5 break-keep text-[15px] leading-[1.9] text-[#5e6f80] md:text-[17px]">
                    {item.role}
                  </p>

                  {/* Checks */}
                  {item.checks && item.checks.length > 0 && (
                    <div className="mt-8">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                        WHAT WE CHECK
                      </p>

                      <ul className="mt-3 border-t border-[#071b33]/15">
                        {item.checks.map((check, checkIndex) => (
                          <li
                            key={check}
                            className="grid grid-cols-[30px_1fr] gap-3 border-b border-[#071b33]/10 py-3.5"
                          >
                            <span className="text-[10px] font-bold text-[#2f89fc]">
                              {String(checkIndex + 1).padStart(2, '0')}
                            </span>

                            <span className="break-keep text-[14px] font-medium text-[#344a61] md:text-[15px]">
                              {check}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Used for */}
                  <div className="mt-7 border-t border-[#071b33]/15 pt-5">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                      USED FOR
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {item.supports.map((support) => (
                        <span
                          key={support}
                          className="text-[13px] font-semibold text-[#536577]"
                        >
                          {support}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified model */}
                  {item.model && (
                    <div className="mt-6 flex items-start justify-between gap-6 border-t border-[#071b33]/10 pt-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                        MODEL
                      </span>

                      <span className="text-right text-[13px] font-medium text-[#071b33]">
                        {item.model}
                      </span>
                    </div>
                  )}

                  {/* Severance same model */}
                  {item.sameModelAsSeverance && (
                    <div className="mt-3 flex items-start justify-between gap-6 border-t border-[#071b33]/10 pt-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                        SEVERANCE
                      </span>

                      <span className="text-right text-[13px] font-semibold text-[#176fc2]">
                        세브란스 치과대학병원 동일 모델
                      </span>
                    </div>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <Reveal
          variant="soft"
          className="mt-16 md:mt-24"
        >
          <div className="grid gap-6 border-y border-[#071b33]/15 py-8 md:grid-cols-[230px_1fr] md:items-center md:py-10">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#2f89fc]">
              EXAMINATION FIRST
            </p>

            <p className="max-w-3xl break-keep text-[18px] font-medium leading-[1.8] tracking-[-0.02em] text-[#263b50] md:text-[21px]">
              필요한 검사를 통해 현재 상태를 확인하고,
              그 결과를 치료계획과 설명에 활용합니다.
            </p>
          </div>
        </Reveal>

        <p className="mt-6 text-[11px] leading-[1.75] text-gray-400 md:text-[12px]">
          * 장비의 적용 여부와 촬영 범위는 환자의 구강 상태와 진료 내용에 따라 달라질 수 있습니다.
        </p>
      </div>
    </section>
  );
};