'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import RevealImage from './RevealImage';
import { services } from './serviceData';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

const Services = () => {
  // 상담하기 → 아래 간편 상담 폼의 진료과목을 자동 선택하고 그 위치로 이동
  const requestConsultation = (treatment: string) => {
    const target = document.getElementById('consultation');

    if (!target) {
      // 상담 폼이 없는 페이지(예: /services)에서는 홈의 상담 폼으로 이동
      window.sessionStorage.setItem('consultation-treatment', treatment);
      window.location.href = '/#consultation';
      return;
    }

    window.dispatchEvent(
      new CustomEvent('select-consultation-treatment', { detail: treatment }),
    );

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#f5f7fa] py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-6 md:mb-8">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              DENTAL CARE
            </p>
          </Reveal>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <TextReveal
              delay={120}
              className="text-3xl font-semibold tracking-[-0.04em] text-[#071b33] md:text-4xl"
              lines={[
                '필요한 치료보다',
                <span key="why">
                  <span className="text-[#176fc2]">필요한 이유부터</span> 설명합니다.
                </span>,
              ]}
            />

            <Reveal variant="soft" delay={320}>
              <p className="max-w-md text-[15px] leading-[1.7] text-gray-500 md:text-right md:text-[16px]">
                치료 이름보다 환자분이 궁금해하는
                <br className="hidden md:block" />
                “왜 해야 하는지, 다른 방법은 없는지”부터 살펴봅니다.
              </p>
            </Reveal>
          </div>
        </div>

        {/* COMPACT TRUST STRIP */}
        <Reveal variant="soft" delay={200}>
        <div className="mb-4 grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#dfe5ec] bg-white">
          <div className="px-2 py-3 text-center md:px-4">
            <p className="text-[11px] font-bold text-[#2f89fc] md:text-[12px]">01</p>
            <p className="mt-1 text-[12px] font-semibold leading-[1.45] text-[#071b33] md:text-[14px]">
              자연치아 보존
              <br />
              가능성 먼저 확인
            </p>
          </div>

          <div className="border-x border-[#e7ebf0] px-2 py-3 text-center md:px-4">
            <p className="text-[11px] font-bold text-[#2f89fc] md:text-[12px]">02</p>
            <p className="mt-1 text-[12px] font-semibold leading-[1.45] text-[#071b33] md:text-[14px]">
              CT 기반
              <br />
              정밀 진단
            </p>
          </div>

          <div className="px-2 py-3 text-center md:px-4">
            <p className="text-[11px] font-bold text-[#2f89fc] md:text-[12px]">03</p>
            <p className="mt-1 text-[12px] font-semibold leading-[1.45] text-[#071b33] md:text-[14px]">
              치료과정을
              <br />
              이해하기 쉽게 설명
            </p>
          </div>
        </div>
        </Reveal>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={stagger(index % 3, 110)} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[#dfe5ec] bg-white p-5 shadow-[0_6px_20px_rgba(7,27,51,0.05)] transition duration-300 hover:shadow-[0_14px_32px_rgba(7,27,51,0.1)] md:p-6">
                {/* 번호 + 사진 + 제목 : 누르면 진료 상세 페이지 */}
                <Link
                  href={`/services/${item.slug}`}
                  aria-label={`${item.title} 자세히 보기`}
                  className="group/head block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f89fc]"
                >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-[#2f89fc]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-1.5 text-[12px] font-bold tracking-[0.16em] text-gray-400">
                      {item.eng}
                    </p>
                  </div>

                  <RevealImage
                    className="h-[76px] w-[76px] shrink-0 rounded-2xl border border-[#e3e9f0]"
                    delay={stagger(index % 3, 110) + 150}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="76px"
                      className="object-cover"
                    />
                  </RevealImage>
                </div>

                <h3 className="mt-4 flex items-center gap-2 text-[24px] font-extrabold tracking-[-0.035em] text-[#071b33] group-hover/head:text-[#176fc2]">
                  {item.title}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2f89fc] text-[16px] text-white transition group-hover/head:translate-x-0.5"
                  >
                    ›
                  </span>
                </h3>
                </Link>

                {/* 문구 영역은 줄 수를 고정해 카드마다 높이를 맞춥니다 */}
                <p className="mt-2 line-clamp-2 min-h-[3em] text-[17px] font-bold leading-[1.5] tracking-[-0.025em] text-[#176fc2]">
                  {item.hook}
                </p>

                <p className="mt-2 line-clamp-4 min-h-[6.8em] text-[15px] leading-[1.7] text-gray-500">
                  {item.desc}
                </p>

                <ul className="mt-3 min-h-[5.4em] space-y-1.5 border-t border-[#eef1f5] pt-3">
                  {item.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-[15px] font-semibold text-[#344a61]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2f89fc] text-[11px] text-white">
                        ✓
                      </span>
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* 세부 진료 : 모든 버튼 크기 동일 */}
                <div className="mt-4 rounded-2xl bg-[#eef5ff] p-3">
                  <p className="text-[15px] font-extrabold text-[#071b33]">
                    세부 진료 안내
                    <span className="ml-1.5 text-[14px] font-semibold text-[#176fc2]">
                      눌러서 자세히 보기
                    </span>
                  </p>

                  <div className="mt-2.5 grid min-h-[172px] auto-rows-[52px] grid-cols-2 content-start gap-2">
                    {item.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/services/${item.slug}#${topic.id}`}
                        className="group/btn flex h-[52px] items-center justify-between gap-1.5 rounded-xl border-2 border-[#2f89fc] bg-white px-3 text-left text-[15px] font-extrabold leading-[1.25] text-[#0d2b4d] shadow-[0_3px_0_#2f89fc] transition hover:translate-y-[1px] hover:bg-[#2f89fc] hover:text-white hover:shadow-[0_2px_0_#176fc2] active:translate-y-[3px] active:shadow-none"
                      >
                        <span className="line-clamp-2">{topic.title}</span>
                        <span
                          aria-hidden="true"
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f89fc] text-[16px] font-bold text-white transition group-hover/btn:bg-white group-hover/btn:text-[#2f89fc]"
                        >
                          ›
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => requestConsultation(item.consultationValue)}
                  className="mt-auto flex h-[52px] w-full items-center justify-between rounded-xl bg-[#071b33] px-5 text-[16px] font-extrabold text-white transition hover:bg-[#12365d]"
                >
                  <span>{item.title} 상담하기</span>
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Services;