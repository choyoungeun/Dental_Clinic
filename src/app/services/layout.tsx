import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료과목 | 수원 장안구 치과",

  description:
    "수원세브란스치과의 자연치아 보존·재신경치료, 임플란트·뼈이식, 매복 사랑니·구강외과, 충치치료, 보철치료, 턱관절 진료를 안내합니다.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "진료과목 | 수원세브란스치과",
    description:
      "자연치아 보존부터 임플란트, 매복 사랑니·구강외과, 충치·보철, 턱관절 진료까지 확인하세요.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}