import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';
import {
  advisory,
  doctor,
  experience,
  network,
  training,
} from './doctorData';

/* 대표원장 소개
   - home : 홈페이지용. 글 없이 프로필 이미지(public/images/대표원장.png)만 크게 보여줍니다.
   - full : /doctors 페이지용. 약력 4개 그룹을 모두 보여줍니다. */

const PROFILE_IMAGE = '/images/대표원장.png';

interface DoctorsProps {
  variant?: 'home' | 'full';
}

const GroupTitle = ({ children }: { children: string }) => (
  <h4 className="border-b border-[#071b33] pb-3 text-[12px] font-bold tracking-[0.2em] text-[#071b33]">
    {children}
  </h4>
);

const Doctors = ({ variant = 'home' }: DoctorsProps) => {
  const full = variant === 'full';

  if (!full) {
    return (
      <section id="doctors" className="scroll-mt-24 bg-white py-8 md:py-12">
        <h2 className="sr-only">
          대표원장 {doctor.name} — 연세대학교 치과대학 우등졸업, 신촌 세브란스 연세대학교 치과대학병원, {doctor.role}
        </h2>

        {/* 화면 가로 폭을 가득 채웁니다. 모바일은 원본 크기(1080px)로 두고 좌우로 넘겨 봅니다. */}
        <div className="mx-auto max-w-[1680px] overflow-x-auto md:overflow-visible">
          <Reveal variant="fade" duration={1200}>
            <RevealImage
              noZoom
              className="aspect-[1672/941] w-[1080px] md:w-full"
            >
              <Image
                src={PROFILE_IMAGE}
                alt={`수원세브란스치과 ${doctor.name} ${doctor.title} 프로필`}
                fill
                sizes="(max-width: 768px) 1080px, 100vw"
                className="object-cover"
              />
            </RevealImage>
          </Reveal>
        </div>

        <p className="mt-3 px-4 text-[12px] text-gray-400 md:hidden">
          좌우로 밀어서 전체 내용을 확인하세요.
        </p>
      </section>
    );
  }

  return (
    <section
      id="doctors"
      className="scroll-mt-24 bg-white py-20 text-[#071b33] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              REPRESENTATIVE DIRECTOR
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] md:text-5xl lg:text-6xl"
            lines={['진단과 치료계획의', '기준을 세우는 사람.']}
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
          {/* Portrait */}
          <Reveal variant="fade" duration={1200}>
            <RevealImage
              parallax={16}
              className="h-[520px] rounded-md bg-[#eef2f6] md:h-[640px] lg:sticky lg:top-28"
            >
              <Image
                src={doctor.image}
                alt={`수원세브란스치과 ${doctor.name} ${doctor.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover object-top"
              />
            </RevealImage>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal variant="soft">
              <p className="text-[15px] font-semibold text-[#2f89fc]">
                {doctor.role}
              </p>

              <h3 className="mt-3 text-[40px] font-semibold tracking-[-0.03em] md:text-[52px]">
                {doctor.name}
                <span className="ml-3 text-[18px] font-medium text-gray-400">
                  {doctor.title}
                </span>
              </h3>

              <p className="mt-6 max-w-2xl break-keep text-[19px] leading-[1.7] text-[#344a61] md:text-[24px]">
                수원세브란스치과의 진료 기준을 세우고
                <br className="hidden md:block" />{' '}
                고난도 치료의 계획을 직접 수립합니다.
              </p>
            </Reveal>

            {/* 1순위 : 학력 · 임상 경험 */}
            <Reveal variant="soft" delay={100} className="mt-12">
              <GroupTitle>EDUCATION & CLINICAL EXPERIENCE</GroupTitle>

              <ul className="mt-5">
                {experience.map((item) => (
                  <li
                    key={item.text}
                    className={
                      item.primary
                        ? 'border-b border-[#071b33]/10 py-3.5 text-[19px] font-semibold text-[#071b33] md:text-[22px]'
                        : 'border-b border-[#071b33]/10 py-3 text-[15px] text-gray-500 md:text-[16px]'
                    }
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ACADEMIC & ADVANCED TRAINING : 홈에서는 접어 둡니다 */}
            <Reveal variant="soft" delay={100} className="mt-10">
              <details open={full} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between border-b border-[#071b33] pb-3 text-[12px] font-bold tracking-[0.2em] text-[#071b33] [&::-webkit-details-marker]:hidden">
                  ACADEMIC & ADVANCED TRAINING
                  <span
                    aria-hidden="true"
                    className="text-[18px] font-light transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <ul className="mt-4 grid gap-x-10 md:grid-cols-2">
                  {training.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#071b33]/10 py-3 text-[15px] leading-[1.6] text-gray-600 md:text-[16px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>

            {/* 의료진 페이지에서만 : 자문 · 네트워크 */}
            {full && (
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <Reveal variant="soft">
                  <GroupTitle>CLINICAL ADVISORY</GroupTitle>
                  <ul className="mt-2">
                    {advisory.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-[#071b33]/10 py-3 text-[15px] text-gray-600 md:text-[16px]"
                      >
                        {item.name} {item.role}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal variant="soft" delay={100}>
                  <GroupTitle>NETWORK</GroupTitle>
                  <ul className="mt-2">
                    {network.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-[#071b33]/10 py-3 text-[15px] text-gray-600 md:text-[16px]"
                      >
                        {item.role === '동문병원'
                          ? `${item.name} ${item.role}`
                          : `${item.role}: ${item.name}`}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )}

            {/* Philosophy */}
            <Reveal variant="soft" delay={100} className="mt-12">
              <div className="border-l-2 border-[#2f89fc] pl-6">
                <p className="max-w-2xl break-keep text-[16px] leading-[1.9] text-gray-500 md:text-[17px]">
                  많은 환자를 진료하며, 치료를 더 많이 하는 것보다
                  어떤 치료가 필요한지 판단하는 과정이 중요하다는 것을 배웠습니다.
                </p>

                <p className="mt-4 break-keep font-semibold text-[#071b33]">
                  충분히 진단하고, 설명하고, 필요한 치료를 신중하게 결정하겠습니다.
                </p>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal variant="soft" delay={100} className="mt-10">
              <a
                href="https://booking.naver.com/your-clinic-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 rounded-md bg-[#071b33] px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#0c2b50]"
              >
                진료 예약하기
                <span className="text-lg">→</span>
              </a>
            </Reveal>
          </div>
        </div>

        {full && (
          <Reveal className="mt-16 border-t border-gray-200 pt-12 text-center">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              MEDICAL TEAM
            </p>

            <p className="mx-auto mt-6 max-w-2xl break-keep text-[16px] leading-[1.95] text-gray-500 md:text-[18px]">
              수원세브란스치과의 의료진은 충분한 진단과 설명,
              자연치아를 우선하는 치료 원칙을 공유합니다.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Doctors;
