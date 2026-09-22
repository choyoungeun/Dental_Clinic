import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ConsultButton from '@/components/ConsultButton';
import Reveal from '@/components/Reveal';
import { findService, services } from '@/components/serviceData';

/* =========================================================
   진료과목 상세 페이지
   /services/[slug]
========================================================= */

export function generateStaticParams() {
  return services.map((item) => ({
    slug: item.slug,
  }));
}

/* =========================================================
   SEO
========================================================= */

const seoBySlug: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  preservation: {
    title: '수원 재신경치료·자연치아 보존',
    description:
      '수원 장안구 자연치아 보존 진료. 신경치료 후 다시 아픈 치아, 재신경치료가 필요한 치아의 상태를 확인하고 발치 전 보존 가능성을 살펴봅니다.',
  },

  implant: {
    title: '수원 임플란트·뼈이식',
    description:
      '수원 장안구 임플란트 진료. 3D CT를 통해 잇몸뼈, 신경관, 상악동 위치를 확인하고 뼈이식·발치즉시 임플란트·재수술 여부를 계획합니다.',
  },

  'wisdom-tooth': {
    title: '수원 매복 사랑니·구강외과',
    description:
      '수원 장안구 매복 사랑니 발치 및 구강외과 진료. 파노라마와 CT로 사랑니의 매복 방향과 신경관 위치 관계를 확인한 뒤 치료 방법을 안내합니다.',
  },

  cavity: {
    title: '수원 충치치료',
    description:
      '수원 장안구 충치치료. 충치의 깊이와 남아 있는 치아의 상태를 확인하고 레진, 인레이, 신경치료 등 필요한 치료 범위를 안내합니다.',
  },

  prosthetics: {
    title: '수원 보철치료·크라운',
    description:
      '수원 장안구 보철치료. 크라운과 브릿지 치료 전 남아 있는 치아, 잇몸 상태와 교합을 확인해 필요한 보철치료를 계획합니다.',
  },

  'tmj-trauma': {
    title: '수원 턱관절·치아 외상 진료',
    description:
      '수원 장안구 턱관절 및 치아 외상 진료. 턱관절 통증, 입 벌림 불편, 치아 외상 등의 상태를 확인하고 필요한 검사와 치료 방향을 안내합니다.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = findService(slug);

  if (!service) {
    return {};
  }

  const seo = seoBySlug[slug];

  const canonical = `/services/${slug}`;

  const title = seo?.title ?? service.title;

  const description =
    seo?.description ?? `${service.hook} ${service.desc}`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: `${title} | 수원세브란스치과`,
      description,
      url: canonical,
      siteName: '수원세브란스치과',
      locale: 'ko_KR',
      type: 'website',

      images: [
        {
          url: service.image,
          alt: `${service.title} 진료 안내`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${title} | 수원세브란스치과`,
      description,
      images: [service.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================================
   ICON
========================================================= */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="mt-1 h-6 w-6 shrink-0"
  >
    <circle
      cx="12"
      cy="12"
      r="12"
      fill="#2f89fc"
    />

    <path
      d="M7 12.5l3.2 3.2L17 9"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================================================
   PAGE
========================================================= */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = findService(slug);

  if (!service) {
    notFound();
  }

  const index = services.findIndex(
    (item) => item.slug === slug,
  );

  const prev =
    services[
      (index - 1 + services.length) %
        services.length
    ];

  const next =
    services[
      (index + 1) %
        services.length
    ];

  return (
    <main className="bg-white">

      {/* =====================================================
          1. HERO
          기존 service.image를 전체 배경으로 사용
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#071b33] text-white">

        {/* Background Image */}
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="
            absolute inset-0
            -z-30
            object-cover
            object-center
          "
        />

        {/* 기본 네이비 오버레이 */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            -z-20
            bg-[#06182e]/60
          "
        />

        {/* 왼쪽 텍스트 영역을 더 진하게 */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            -z-10
            bg-gradient-to-r
            from-[#041427]/95
            via-[#071b33]/82
            to-[#071b33]/35
          "
        />

        {/* 위/아래 톤 정리 */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            -z-10
            bg-gradient-to-t
            from-[#041427]/65
            via-transparent
            to-[#071b33]/25
          "
        />

        {/* Content */}
        <div
          className="
            mx-auto
            flex
            min-h-[660px]
            max-w-6xl
            items-center
            px-5
            py-16
            md:min-h-[720px]
            md:px-8
            md:py-24
          "
        >
          <div className="w-full max-w-[760px]">

            {/* Breadcrumb */}
            <nav
              aria-label="현재 위치"
              className="
                text-[14px]
                font-medium
                text-white/55
                md:text-[15px]
              "
            >
              <Link
                href="/"
                className="transition hover:text-white"
              >
                홈
              </Link>

              <span className="mx-2 text-white/30">
                ›
              </span>

              <Link
                href="/#services"
                className="transition hover:text-white"
              >
                진료과목
              </Link>

              <span className="mx-2 text-white/30">
                ›
              </span>

              <span className="text-white/90">
                {service.title}
              </span>
            </nav>


            {/* Main Copy */}
            <Reveal variant="soft">

              <p
                className="
                  mt-8
                  text-[13px]
                  font-bold
                  tracking-[0.28em]
                  text-[#8ec5ff]
                  md:text-[15px]
                "
              >
                {service.eng}
              </p>

              <h1
                className="
                  mt-4
                  break-keep
                  text-[46px]
                  font-extrabold
                  leading-[1.1]
                  tracking-[-0.05em]
                  text-white
                  md:text-[64px]
                  lg:text-[72px]
                "
              >
                {service.title}
              </h1>

              <p
                className="
                  mt-7
                  max-w-[680px]
                  break-keep
                  text-[21px]
                  font-bold
                  leading-[1.55]
                  text-[#8ec5ff]
                  md:text-[25px]
                "
              >
                {service.hook}
              </p>

              <p
                className="
                  mt-5
                  max-w-[700px]
                  break-keep
                  text-[17px]
                  leading-[1.9]
                  text-white/82
                  md:text-[19px]
                "
              >
                {service.desc}
              </p>

            </Reveal>


            {/* Tags + CTA */}
            <Reveal
              variant="soft"
              delay={150}
            >

              {/* Tags */}
              <ul className="mt-7 flex flex-wrap gap-2.5">

                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/25
                      bg-white/[0.04]
                      px-4
                      py-2
                      text-[14px]
                      font-semibold
                      text-white/90
                      backdrop-blur-[2px]
                      md:text-[15px]
                    "
                  >
                    {tag}
                  </li>
                ))}

              </ul>


              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-3">

                <ConsultButton
                  value={service.consultationValue}
                  className="
                    flex
                    h-14
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#2f89fc]
                    px-7
                    text-[16px]
                    font-extrabold
                    text-white
                    shadow-[0_10px_30px_rgba(47,137,252,0.32)]
                    transition
                    hover:bg-[#176fc2]
                    md:px-8
                    md:text-[17px]
                  "
                >
                  {service.title} 상담 신청하기

                  <span aria-hidden="true">
                    →
                  </span>
                </ConsultButton>


                <a
                  href="#details"
                  className="
                    flex
                    h-14
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/40
                    bg-white/[0.03]
                    px-7
                    text-[16px]
                    font-bold
                    text-white
                    backdrop-blur-[2px]
                    transition
                    hover:bg-white/10
                    md:px-8
                    md:text-[17px]
                  "
                >
                  세부 진료 보기
                </a>

              </div>

            </Reveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          1-2. WHY OUR EXPERIENCE MATTERS
      ===================================================== */}

      <section className="bg-white py-16 md:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-8
            px-5
            md:px-8
            lg:grid-cols-[280px_1fr]
            lg:gap-16
          "
        >

          <Reveal variant="fade">
            <p
              className="
                text-[12px]
                font-bold
                tracking-[0.28em]
                text-[#2f89fc]
              "
            >
              WHY OUR EXPERIENCE MATTERS
            </p>
          </Reveal>


          <div>

            <Reveal>
              <h2
                className="
                  break-keep
                  text-[28px]
                  font-semibold
                  leading-[1.45]
                  tracking-[-0.035em]
                  text-[#071b33]
                  md:text-[40px]
                "
              >
                {service.experience.heading}
              </h2>
            </Reveal>


            <Reveal
              variant="soft"
              delay={150}
            >
              <p
                className="
                  mt-6
                  max-w-3xl
                  break-keep
                  text-[16px]
                  leading-[1.9]
                  text-gray-600
                  md:text-[18px]
                "
              >
                {service.experience.body}
              </p>


              <p
                className="
                  mt-8
                  border-t
                  border-[#dfe5ec]
                  pt-5
                  text-[14px]
                  leading-[1.7]
                  text-gray-500
                "
              >

                <Link
                  href="/#doctors"
                  className="
                    font-semibold
                    text-[#071b33]
                    hover:text-[#176fc2]
                  "
                >
                  이현민 대표원장
                </Link>

                {' · '}
                연세대 치과대학 우등졸업 ·
                신촌세브란스 치과대학병원 임상 경험 ·
                前 종합병원 치과 진료과장

              </p>

            </Reveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          2. 세부 진료 바로가기
      ===================================================== */}

      <section className="border-b border-[#e3e9f0] bg-white">

        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">

          <p className="text-[16px] font-extrabold text-[#071b33]">
            세부 진료 바로가기
          </p>


          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-3
              md:grid-cols-3
              lg:grid-cols-5
            "
          >

            {service.topics.map(
              (topic, topicIndex) => (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="
                    group
                    flex
                    min-h-[64px]
                    items-center
                    gap-3
                    rounded-xl
                    border-2
                    border-[#2f89fc]
                    bg-white
                    px-4
                    py-3
                    text-[16px]
                    font-extrabold
                    leading-[1.3]
                    text-[#0d2b4d]
                    transition
                    hover:bg-[#2f89fc]
                    hover:text-white
                  "
                >

                  <span
                    className="
                      text-[14px]
                      font-extrabold
                      text-[#2f89fc]
                      group-hover:text-white
                    "
                  >
                    {String(
                      topicIndex + 1,
                    ).padStart(2, '0')}
                  </span>

                  {topic.title}

                </a>
              ),
            )}

          </div>
        </div>
      </section>


      {/* =====================================================
          3. 이런 분께 추천합니다
      ===================================================== */}

      <section className="bg-[#f5f7fa] py-14 md:py-20">

        <div className="mx-auto max-w-6xl px-5 md:px-8">

          <Reveal>

            <p
              className="
                text-[16px]
                font-extrabold
                tracking-[0.2em]
                text-[#2f89fc]
              "
            >
              01
            </p>

            <h2
              className="
                mt-2
                text-[32px]
                font-extrabold
                leading-[1.3]
                tracking-[-0.03em]
                text-[#071b33]
                md:text-[44px]
              "
            >
              이런 분께 추천합니다
            </h2>

          </Reveal>


          <ul className="mt-8 grid gap-3 md:grid-cols-2">

            {service.recommend.map(
              (item, itemIndex) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={itemIndex * 80}
                  className="list-none"
                >

                  <div
                    className="
                      flex
                      h-full
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-[#dfe5ec]
                      bg-white
                      p-5
                      md:p-6
                    "
                  >

                    <CheckIcon />

                    <p
                      className="
                        text-[18px]
                        font-bold
                        leading-[1.6]
                        text-[#1c2f45]
                        md:text-[20px]
                      "
                    >
                      {item}
                    </p>

                  </div>

                </Reveal>
              ),
            )}

          </ul>
        </div>
      </section>


      {/* =====================================================
          4. 세부 진료 안내
      ===================================================== */}

      <section
        id="details"
        className="scroll-mt-28 bg-white py-14 md:py-20"
      >

        <div className="mx-auto max-w-6xl px-5 md:px-8">

          <Reveal>

            <p
              className="
                text-[16px]
                font-extrabold
                tracking-[0.2em]
                text-[#2f89fc]
              "
            >
              02
            </p>

            <h2
              className="
                mt-2
                text-[32px]
                font-extrabold
                leading-[1.3]
                tracking-[-0.03em]
                text-[#071b33]
                md:text-[44px]
              "
            >
              {service.title} 세부 진료 안내
            </h2>

          </Reveal>


          <div className="mt-10 space-y-14 md:space-y-20">

            {service.topics.map(
              (topic, topicIndex) => (
                <article
                  key={topic.id}
                  id={topic.id}
                  className="scroll-mt-28"
                >

                  {/* Topic Header */}

                  <Reveal>

                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        border-b-2
                        border-[#071b33]
                        pb-5
                        md:gap-6
                      "
                    >

                      <span
                        className="
                          text-[44px]
                          font-extrabold
                          leading-none
                          tracking-[-0.04em]
                          text-[#2f89fc]
                          md:text-[64px]
                        "
                      >
                        {String(
                          topicIndex + 1,
                        ).padStart(2, '0')}
                      </span>


                      <div>

                        <h3
                          className="
                            text-[28px]
                            font-extrabold
                            leading-[1.3]
                            tracking-[-0.03em]
                            text-[#071b33]
                            md:text-[38px]
                          "
                        >
                          {topic.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-[18px]
                            leading-[1.8]
                            text-gray-600
                            md:text-[20px]
                          "
                        >
                          {topic.summary}
                        </p>

                      </div>

                    </div>

                  </Reveal>


                  {/* 진행 과정 */}

                  <h4
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-[22px]
                      font-extrabold
                      text-[#071b33]
                      md:text-[26px]
                    "
                  >
                    <span className="h-6 w-1.5 rounded-full bg-[#2f89fc]" />

                    이렇게 진행됩니다
                  </h4>


                  <ol
                    className="
                      mt-5
                      grid
                      gap-4
                      md:grid-cols-2
                      lg:grid-cols-4
                    "
                  >

                    {topic.method.map(
                      (step, stepIndex) => (
                        <Reveal
                          as="li"
                          key={step}
                          delay={stepIndex * 90}
                          className="list-none"
                        >

                          <div
                            className="
                              relative
                              h-full
                              rounded-2xl
                              border
                              border-[#dfe5ec]
                              bg-[#f7f9fc]
                              p-5
                              pt-8
                              md:p-6
                              md:pt-9
                            "
                          >

                            <span
                              className="
                                absolute
                                -top-4
                                left-5
                                flex
                                h-9
                                items-center
                                rounded-full
                                bg-[#071b33]
                                px-4
                                text-[14px]
                                font-extrabold
                                tracking-wider
                                text-white
                              "
                            >
                              STEP {stepIndex + 1}
                            </span>


                            <p
                              className="
                                text-[17px]
                                font-semibold
                                leading-[1.75]
                                text-[#1c2f45]
                                md:text-[18px]
                              "
                            >
                              {step}
                            </p>

                          </div>

                        </Reveal>
                      ),
                    )}

                  </ol>


                  {/* 도움 되는 점 */}

                  <h4
                    className="
                      mt-10
                      flex
                      items-center
                      gap-2
                      text-[22px]
                      font-extrabold
                      text-[#071b33]
                      md:text-[26px]
                    "
                  >
                    <span className="h-6 w-1.5 rounded-full bg-[#2f89fc]" />

                    이런 도움이 됩니다
                  </h4>


                  <Reveal>

                    <ul
                      className="
                        mt-5
                        space-y-4
                        rounded-3xl
                        bg-[#eaf3ff]
                        p-6
                        md:p-8
                      "
                    >

                      {topic.benefit.map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4"
                          >

                            <CheckIcon />

                            <p
                              className="
                                text-[18px]
                                font-bold
                                leading-[1.7]
                                text-[#0d2b4d]
                                md:text-[20px]
                              "
                            >
                              {item}
                            </p>

                          </li>
                        ),
                      )}

                    </ul>

                  </Reveal>


                  {/* Notice */}

                  <p
                    className="
                      mt-5
                      rounded-2xl
                      border
                      border-dashed
                      border-[#c9d3df]
                      px-5
                      py-4
                      text-[15px]
                      leading-[1.8]
                      text-gray-500
                      md:text-[16px]
                    "
                  >

                    <strong className="text-[#071b33]">
                      알아 두실 점{' '}
                    </strong>

                    {topic.notice}{' '}

                    치료 방법과 기간은 개인의
                    구강 상태에 따라 달라지며,
                    정확한 내용은 진단 후
                    안내드립니다.

                  </p>

                </article>
              ),
            )}

          </div>
        </div>
      </section>


      {/* =====================================================
          5. 상담 안내
      ===================================================== */}

      <section
        className="
          bg-gradient-to-br
          from-[#071b33]
          to-[#0f3d75]
          py-14
          text-center
          text-white
          md:py-20
        "
      >

        <div className="mx-auto max-w-3xl px-5">

          <p
            className="
              text-[32px]
              font-extrabold
              leading-[1.35]
              tracking-[-0.03em]
              md:text-[44px]
            "
          >
            {service.title} 문의
          </p>


          <p
            className="
              mt-4
              text-[18px]
              leading-[1.7]
              text-white/80
              md:text-[20px]
            "
          >
            상담을 남겨 주시면
            확인 후 안내드립니다.
          </p>


          <ConsultButton
            value={service.consultationValue}
            className="
              mt-8
              inline-flex
              h-16
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-[#2f89fc]
              px-10
              text-[20px]
              font-extrabold
              text-white
              shadow-[0_12px_28px_rgba(47,137,252,0.45)]
              transition
              hover:bg-[#176fc2]
            "
          >
            {service.title} 상담 신청

            <span aria-hidden="true">
              →
            </span>
          </ConsultButton>

        </div>
      </section>


      {/* =====================================================
          6. 다른 진료과목
      ===================================================== */}

      <section className="bg-white py-12 md:py-16">

        <div className="mx-auto max-w-6xl px-5 md:px-8">

          {/* Prev / Next */}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

            <Link
              href={`/services/${prev.slug}`}
              className="
                flex-1
                rounded-2xl
                border-2
                border-[#dfe5ec]
                p-5
                transition
                hover:border-[#2f89fc]
              "
            >

              <p className="text-[14px] font-bold text-gray-400">
                ‹ 이전 진료
              </p>

              <p
                className="
                  mt-1
                  text-[20px]
                  font-extrabold
                  text-[#071b33]
                "
              >
                {prev.title}
              </p>

            </Link>


            <Link
              href={`/services/${next.slug}`}
              className="
                flex-1
                rounded-2xl
                border-2
                border-[#dfe5ec]
                p-5
                text-right
                transition
                hover:border-[#2f89fc]
              "
            >

              <p className="text-[14px] font-bold text-gray-400">
                다음 진료 ›
              </p>

              <p
                className="
                  mt-1
                  text-[20px]
                  font-extrabold
                  text-[#071b33]
                "
              >
                {next.title}
              </p>

            </Link>

          </div>


          {/* All Services */}

          <div className="mt-6 flex flex-wrap gap-2">

            {services.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                aria-current={
                  item.slug === slug
                    ? 'page'
                    : undefined
                }
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