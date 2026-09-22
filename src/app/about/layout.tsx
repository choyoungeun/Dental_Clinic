import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원소개 | 수원 장안구 치과",

  description:
    "수원 장안구 송죽동 수원세브란스치과의 진료 철학과 진료 환경을 소개합니다. 충분히 듣고, 검사 결과를 확인하며, 치료 과정을 이해하기 쉽게 설명하는 진료를 지향합니다.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "병원소개 | 수원세브란스치과",
    description:
      "수원세브란스치과의 진료 철학과 진료 환경을 소개합니다.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}