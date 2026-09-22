const SITE_URL = "https://suwonsevrance.vercel.app"; // 임시 도메인

export default function ClinicJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#clinic`,

    name: "수원세브란스치과",
    alternateName: "수원세브란스치과의원",

    url: SITE_URL,

    description:
      "수원시 장안구 송죽동에 위치한 치과의원으로 자연치아 보존, 임플란트, 매복 사랑니 및 구강외과, 충치치료, 보철치료, 턱관절 진료를 제공합니다.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "경수대로 969 한국메디컬빌딩 2층",
      addressLocality: "수원시 장안구",
      addressRegion: "경기도",
      addressCountry: "KR",
    },

    areaServed: [
      {
        "@type": "City",
        name: "수원시",
      },
      {
        "@type": "AdministrativeArea",
        name: "수원시 장안구",
      },
    ],

    medicalSpecialty: "Dentistry",

    knowsAbout: [
      "자연치아 보존",
      "신경치료",
      "재신경치료",
      "임플란트",
      "뼈이식 임플란트",
      "매복 사랑니 발치",
      "구강외과",
      "충치치료",
      "보철치료",
      "턱관절 진료",
    ],

    employee: {
      "@type": "Person",
      name: "이현민",
      jobTitle: "대표원장",
    },

    openingHoursSpecification: [
      // 월요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "14:00",
        closes: "20:30",
      },

      // 화요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "14:00",
        closes: "18:30",
      },

      // 수요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "14:00",
        closes: "20:30",
      },

      // 목요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "14:00",
        closes: "18:30",
      },

      // 금요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:00",
        closes: "18:30",
      },

      // 토요일
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "14:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}