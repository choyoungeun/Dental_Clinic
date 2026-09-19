import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ConsultButton from '@/components/ConsultButton';
import Reveal from '@/components/Reveal';
import { findService, services } from '@/components/serviceData';

/* 진료과목 상세 페이지 — /services/[slug] */

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.hook} ${service.desc}`,
  };
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-6 w-6 shrink-0">
    <circle cx="12" cy="12" r="12" fill="#2f89fc" />
    <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  return (
    <main className="bg-white">
      {/* ===== 1. 상단 소개 ===== */}
      <section className="bg-gradient-to-br from-[#071b33] via-[#0b2b50] to-[#0f3d75] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:px-8 md:py-20">
          <div>
            <nav aria-label="현재 위치" className="text-[15px] text-white/60">
              <Link href="/" className="hover:text-white">홈</Link>
              <span className="mx-2">›</span>
              <Link href="/#services" className="hover:text-white">진료과목</Link>
              <span className="mx-2">›</span>
              <span className="text-white/90">{service.title}</span>
            </nav>

            <Reveal variant="soft">
              <p className="mt-6 text-[15px] font-bold tracking-[0.28em] text-[#8ec5ff]">
                {service.eng}
              </p>
              <h1 className="mt-3 text-[44px] font-extrabold leading-[1.15] tracking-[-0.04em] md:text-[64px]">
                {service.title}
              </h1>
              <p className="mt-6 text-[21px] font-bold leading-[1.55] text-[#8ec5ff] md:text-[24px]">
                {service.hook}
              </p>
              <p className="mt-4 text-[18px] leading-[1.8] text-white/85 md:text-[20px]">
                {service.desc}
              </p>
            </Reveal>

            <Reveal variant="soft" delay={150}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/25 px-4 py-2 text-[15px] font-semibold text-white/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <ConsultButton
                  value={service.consultationValue}
                  className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#2f89fc] px-8 text-[18px] font-extrabold text-white shadow-[0_10px_24px_rgba(47,137,252,0.4)] transition hover:bg-[#176fc2]"
                >
                  {service.title} 상담 신청하기
                  <span aria-hidden="true">→</span>
                </ConsultButton>

                <a
                  href="#details"
                  className="flex h-14 items-center justify-center rounded-xl border-2 border-white/40 px-8 text-[18px] font-bold text-white transition hover:bg-white/10"
                >
                  세부 진료 보기
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade" duration={1200} delay={150}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] border border-white/15 shadow-2xl">
              <Image
                src={service.image}
                alt={`${service.title} 안내 이미지`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 1-2. WHY OUR EXPERIENCE MATTERS ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              WHY OUR EXPERIENCE MATTERS
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="break-keep text-[28px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#071b33] md:text-[40px]">
                {service.experience.heading}
              </h2>
            </Reveal>

            <Reveal variant="soft" delay={150}>
              <p className="mt-6 max-w-3xl break-keep text-[16px] leading-[1.9] text-gray-600 md:text-[18px]">
                {service.experience.body}
              </p>

              <p className="mt-8 border-t border-[#dfe5ec] pt-5 text-[14px] leading-[1.7] text-gray-500">
                <Link href="/#doctors" className="font-semibold text-[#071b33] hover:text-[#176fc2]">
                  이현민 대표원장
                </Link>
                {' · '}연세대 치과대학 우등졸업 · 신촌세브란스 치과대학병원 임상 경험 · 前 종합병원 치과 진료과장
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 2. 세부 진료 바로가기 ===== */}
      <section className="border-b border-[#e3e9f0] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <p className="text-[16px] font-extrabold text-[#071b33]">
            세부 진료 바로가기
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {service.topics.map((topic, topicIndex) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="group flex min-h-[64px] items-center gap-3 rounded-xl border-2 border-[#2f89fc] bg-white px-4 py-3 text-[16px] font-extrabold leading-[1.3] text-[#0d2b4d] transition hover:bg-[#2f89fc] hover:text-white"
              >
                <span className="text-[14px] font-extrabold text-[#2f89fc] group-hover:text-white">
                  {String(topicIndex + 1).padStart(2, '0')}
                </span>
                {topic.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. 이런 분께 추천합니다 ===== */}
      <section className="bg-[#f5f7fa] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[16px] font-extrabold tracking-[0.2em] text-[#2f89fc]">01</p>
            <h2 className="mt-2 text-[32px] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#071b33] md:text-[44px]">
              이런 분께 추천합니다
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.recommend.map((item, itemIndex) => (
              <Reveal as="li" key={item} delay={itemIndex * 80} className="list-none">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-[#dfe5ec] bg-white p-5 md:p-6">
                  <CheckIcon />
                  <p className="text-[18px] font-bold leading-[1.6] text-[#1c2f45] md:text-[20px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 4. 세부 진료 안내 ===== */}
      <section id="details" className="scroll-mt-28 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[16px] font-extrabold tracking-[0.2em] text-[#2f89fc]">02</p>
            <h2 className="mt-2 text-[32px] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#071b33] md:text-[44px]">
              {service.title} 세부 진료 안내
            </h2>
          </Reveal>

          <div className="mt-10 space-y-14 md:space-y-20">
            {service.topics.map((topic, topicIndex) => (
              <article key={topic.id} id={topic.id} className="scroll-mt-28">
                <Reveal>
                  <div className="flex items-start gap-4 border-b-2 border-[#071b33] pb-5 md:gap-6">
                    <span className="text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#2f89fc] md:text-[64px]">
                      {String(topicIndex + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[28px] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#071b33] md:text-[38px]">
                        {topic.title}
                      </h3>
                      <p className="mt-3 text-[18px] leading-[1.8] text-gray-600 md:text-[20px]">
                        {topic.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* 진행 과정 */}
                <h4 className="mt-8 flex items-center gap-2 text-[22px] font-extrabold text-[#071b33] md:text-[26px]">
                  <span className="h-6 w-1.5 rounded-full bg-[#2f89fc]" />
                  이렇게 진행됩니다
                </h4>

                <ol className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {topic.method.map((step, stepIndex) => (
                    <Reveal as="li" key={step} delay={stepIndex * 90} className="list-none">
                      <div className="relative h-full rounded-2xl border border-[#dfe5ec] bg-[#f7f9fc] p-5 pt-8 md:p-6 md:pt-9">
                        <span className="absolute -top-4 left-5 flex h-9 items-center rounded-full bg-[#071b33] px-4 text-[14px] font-extrabold tracking-wider text-white">
                          STEP {stepIndex + 1}
                        </span>
                        <p className="text-[17px] font-semibold leading-[1.75] text-[#1c2f45] md:text-[18px]">
                          {step}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ol>

                {/* 도움 되는 점 */}
                <h4 className="mt-10 flex items-center gap-2 text-[22px] font-extrabold text-[#071b33] md:text-[26px]">
                  <span className="h-6 w-1.5 rounded-full bg-[#2f89fc]" />
                  이런 도움이 됩니다
                </h4>

                <Reveal>
                  <ul className="mt-5 space-y-4 rounded-3xl bg-[#eaf3ff] p-6 md:p-8">
                    {topic.benefit.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckIcon />
                        <p className="text-[18px] font-bold leading-[1.7] text-[#0d2b4d] md:text-[20px]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <p className="mt-5 rounded-2xl border border-dashed border-[#c9d3df] px-5 py-4 text-[15px] leading-[1.8] text-gray-500 md:text-[16px]">
                  <strong className="text-[#071b33]">알아 두실 점 </strong>
                  {topic.notice} 치료 방법과 기간은 개인의 구강 상태에 따라 달라지며, 정확한 내용은 진단 후 안내드립니다.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. 상담 안내 ===== */}
      <section className="bg-gradient-to-br from-[#071b33] to-[#0f3d75] py-14 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-[32px] font-extrabold leading-[1.35] tracking-[-0.03em] md:text-[44px]">
            {service.title}, 궁금한 점을 먼저 확인하세요
          </p>
          <p className="mt-4 text-[18px] leading-[1.7] text-white/80 md:text-[20px]">
            상담을 남겨 주시면 확인 후 안내드립니다.
          </p>
          <ConsultButton
            value={service.consultationValue}
            className="mt-8 inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-[#2f89fc] px-10 text-[20px] font-extrabold text-white shadow-[0_12px_28px_rgba(47,137,252,0.45)] transition hover:bg-[#176fc2]"
          >
            {service.title} 상담 신청하기
            <span aria-hidden="true">→</span>
          </ConsultButton>
        </div>
      </section>

      {/* ===== 6. 다른 진료과목 ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <Link
              href={`/services/${prev.slug}`}
              className="flex-1 rounded-2xl border-2 border-[#dfe5ec] p-5 transition hover:border-[#2f89fc]"
            >
              <p className="text-[14px] font-bold text-gray-400">‹ 이전 진료</p>
              <p className="mt-1 text-[20px] font-extrabold text-[#071b33]">{prev.title}</p>
            </Link>

            <Link
              href={`/services/${next.slug}`}
              className="flex-1 rounded-2xl border-2 border-[#dfe5ec] p-5 text-right transition hover:border-[#2f89fc]"
            >
              <p className="text-[14px] font-bold text-gray-400">다음 진료 ›</p>
              <p className="mt-1 text-[20px] font-extrabold text-[#071b33]">{next.title}</p>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                aria-current={item.slug === slug ? 'page' : undefined}
                className={[
                  'rounded-full border-2 px-5 py-2.5 text-[16px] font-bold transition',
                  item.slug === slug
                    ? 'border-[#071b33] bg-[#071b33] text-white'
                    : 'border-[#d5dde7] text-[#344a61] hover:border-[#2f89fc] hover:text-[#176fc2]',
                ].join(' ')}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
