import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/Reveal';
import TextReveal from '@/components/TextReveal';

import {
  advisory,
  doctor,
  experience,
  training,
} from './doctorData';

const GroupTitle = ({ children }: { children: string }) => (
  <h4 className="border-b border-[#071b33]/25 pb-3 text-[11px] font-bold tracking-[0.2em] text-[#071b33]">
    {children}
  </h4>
);

const Doctors = () => {
  return (
    <section
      id="doctors"
      className="scroll-mt-24 overflow-hidden bg-white py-20 text-[#071b33] md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-7 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                REPRESENTATIVE DIRECTOR
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] md:text-5xl lg:text-6xl"
              lines={[
                '의료진 소개',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={220}
            className="lg:pb-2"
          >
            <p className="break-keep text-[16px] leading-[1.85] text-[#5c6d7f] md:text-[17px]">
              현재 치아를 유지할 수 있는지,
              수술이 필요한 상태인지,
              이후 치료는 어떻게 이어져야 하는지
              한 사람의 진료과정 안에서 살펴봅니다.
            </p>
          </Reveal>
        </div>

        {/* =====================================================
            MAIN DOCTOR
        ===================================================== */}

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 xl:grid-cols-[600px_1fr]">
          {/* Portrait — 연세대 마크 워터마크 + 누끼 사진 */}

          <div className="lg:sticky lg:top-28">
            <Reveal
              variant="fade"
              duration={1200}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-[#eef4fb] to-[#cddff2]">
                <Image
                  src="/images/yonsei.png"
                  alt=""
                  aria-hidden="true"
                  width={512}
                  height={512}
                  className="pointer-events-none absolute left-1/2 top-[44%] w-[82%] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.13]"
                />

                <Image
                  src={doctor.image}
                  alt={`수원세브란스치과 ${doctor.name} ${doctor.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-bottom drop-shadow-[0_10px_24px_rgba(7,27,51,0.18)]"
                />

                <div className="absolute left-5 top-5 md:left-7 md:top-7">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#2f89fc]">
                    SUWON SEVERANCE DENTAL CLINIC
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-[28px] font-semibold tracking-[-0.035em] text-[#071b33] md:text-[32px]">
                      {doctor.name}
                    </p>

                    <p className="pb-1 text-[13px] font-medium text-[#071b33]/65">
                      {doctor.title}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content — 약력 · 경력 */}

          <div className="flex flex-col">
            <Reveal variant="soft">
              <p className="text-[12px] font-bold tracking-[0.2em] text-[#2f89fc]">
                CLINICAL BACKGROUND
              </p>

              <h3 className="mt-4 max-w-3xl break-keep text-[27px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#071b33] md:text-[34px]">
                살릴 수 있는 치아인지
                <br className="hidden md:block" />
                 한 번 더 생각합니다.
              </h3>
            </Reveal>

            {/* 학력 · 경력 */}

            <Reveal
              variant="soft"
              delay={100}
              className="mt-10"
            >
              <GroupTitle>
                EDUCATION & CAREER
              </GroupTitle>

              <ul className="mt-1">
                {experience.map((item, index) => (
                  <li
                    key={item.text}
                    className="grid grid-cols-[34px_1fr] gap-3 border-b border-[#071b33]/10 py-3.5"
                  >
                    <span className="pt-0.5 text-[11px] font-bold tracking-[0.12em] text-[#2f89fc]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={
                        item.primary
                          ? 'break-keep text-[17px] font-semibold leading-[1.55] tracking-[-0.02em] text-[#071b33] md:text-[19px]'
                          : 'break-keep text-[15px] leading-[1.6] text-[#536577] md:text-[16px]'
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* 학회 · 연수 */}

            <Reveal
              variant="soft"
              delay={150}
              className="mt-9"
            >
              <GroupTitle>
                ACADEMIC & ADVANCED TRAINING
              </GroupTitle>

              <ul className="mt-1">
                {training.map((item) => (
                  <li
                    key={item}
                    className="break-keep border-b border-[#071b33]/10 py-3 text-[15px] leading-[1.6] text-[#536577] md:text-[16px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* 자문 */}

            <Reveal
              variant="soft"
              delay={200}
              className="mt-9"
            >
              <GroupTitle>
                CLINICAL ADVISORY
              </GroupTitle>

              <ul className="mt-1">
                {advisory.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-[#071b33]/10 py-3 text-[15px] leading-[1.6] text-[#536577] md:text-[16px]"
                  >
                    {item.name} {item.role}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

     
       
      </div>
    </section>
  );
};

export default Doctors;
