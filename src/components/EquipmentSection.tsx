import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';
import { equipment } from './equipmentData';

/* DIAGNOSIS & TREATMENT SYSTEM
   장비를 나열하지 않고 "어떤 판단을 돕는지"를 보여줍니다.
   실제 도입이 확인된 장비(installed: true)만 표시하며, 모델명과
   "세브란스 동일 모델" 표기는 데이터에 값이 있을 때만 나타납니다. (equipmentData.ts) */

const installedEquipment = equipment.filter((item) => item.installed);

export const EquipmentSection = () => {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 overflow-hidden bg-white py-20 text-[#071b33] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              DIAGNOSIS & TREATMENT SYSTEM
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] md:text-5xl lg:text-6xl"
            lines={['경험에 장비를 더해,', '판단의 근거를 확인합니다.']}
          />
        </div>

        {/* Equipment : 이미지 + SPEC 패널 */}
        <div className="mt-14 space-y-14 md:mt-20 md:space-y-24">
          {installedEquipment.map((item, index) => {
            const flipped = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="grid items-stretch gap-6 md:gap-10 lg:grid-cols-12"
              >
                <RevealImage
                  parallax={18}
                  className={`h-[320px] rounded-md border border-[#dfe5ec] bg-[#eef2f6] md:h-[480px] lg:col-span-7 ${
                    flipped ? 'lg:order-2' : ''
                  }`}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#071b33]/10" />
                </RevealImage>

                <Reveal
                  variant={flipped ? 'left' : 'right'}
                  delay={150}
                  className={`flex flex-col justify-center lg:col-span-5 ${
                    flipped ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="text-[12px] font-semibold tracking-[0.25em] text-[#2f89fc]">
                    {String(index + 1).padStart(2, '0')} · {item.tag}
                  </p>

                  <h3 className="mt-4 break-keep text-[32px] font-semibold leading-[1.25] tracking-[-0.03em] md:text-[40px]">
                    {item.name}
                  </h3>

                  <p className="mt-5 break-keep text-[16px] leading-[1.8] text-gray-600 md:text-[17px]">
                    {item.role}
                  </p>

                  {/* SPEC */}
                  <dl className="mt-7 border-t border-[#071b33]/25 text-[14px]">
                    {item.model && (
                      <div className="flex justify-between gap-4 border-b border-[#071b33]/10 py-3">
                        <dt className="text-[11px] font-bold tracking-[0.2em] text-gray-400">
                          MODEL
                        </dt>
                        <dd className="text-right text-[#071b33]">{item.model}</dd>
                      </div>
                    )}

                    <div className="flex justify-between gap-4 border-b border-[#071b33]/10 py-3">
                      <dt className="text-[11px] font-bold tracking-[0.2em] text-gray-400">
                        USED FOR
                      </dt>
                      <dd className="text-right text-[#071b33]">
                        {item.supports.join(' · ')}
                      </dd>
                    </div>

                    {item.sameModelAsSeverance && (
                      <div className="flex justify-between gap-4 border-b border-[#071b33]/10 py-3">
                        <dt className="text-[11px] font-bold tracking-[0.2em] text-gray-400">
                          SEVERANCE
                        </dt>
                        <dd className="text-right text-[#176fc2]">
                          세브란스 치과대학병원 동일 모델
                        </dd>
                      </div>
                    )}
                  </dl>
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
