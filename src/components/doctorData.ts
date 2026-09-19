/* 대표원장 약력 · 자문 · 네트워크
   사용자가 제공한 사실만 담았습니다. 표현을 확대하거나 새 경력을 추가하지 마세요.
   Doctors(홈/의료진 페이지)에서 사용합니다. */

export const doctor = {
  name: '이현민',
  title: '대표원장',
  role: '前 종합병원 치과 진료과장',
  image: '/images/hm_Lee.jpg',
};

export type CredentialItem = {
  text: string;
  /** 1순위 경력 : 세브란스 임상경험 · 종합병원 진료 경험 */
  primary?: boolean;
};

/* EDUCATION & CLINICAL EXPERIENCE (기존 학력 · 경력 유지) */
export const experience: CredentialItem[] = [
  { text: '연세대학교 치과대학 우등졸업', primary: true },
  { text: '신촌 세브란스 연세대학교 치과대학병원', primary: true },
  { text: '前 목포시 보건소 공중보건의사' },
  { text: '前 바른공감치과 본원 원장' },
  { text: '前 미금세브란스치과 수술 전담 원장' },
  { text: '前 수원덕산병원 치과 진료 과장', primary: true },
];

/* CLINICAL ADVISORY */
export const advisory = [
  { name: '(주)이노바이드', role: '자문의' },
  { name: '오스템임플란트', role: '자문의' },
  { name: '메가젠임플란트', role: '자문의' },
  { name: '덴티스임플란트', role: '자문의' },
];

/* ACADEMIC & ADVANCED TRAINING (기존 학회 · 연수 내용 정리) */
export const training: string[] = [
  '대한치주과학회 정회원',
  '대한구강악안면임플란트학회 정회원',
  'UCLA School of Dentistry 고급 임상 연수 수료',
  'The University of Sydney 임상 Externship 수료',
  'OSSTEM Implant Master Course 전 과정 이수',
  '턱관절장애 교육연구회 TMD 전문과정 수료',
  'JPDA 소아치과 임상 세미나 수료',
  '국가건강보험공단 인증 구강검진의',
];

/* NETWORK */
export const network = [
  { name: '연세대학교 치과대학', role: '동문병원' },
  { name: '세브란스병원', role: '진료협력병원' },
  { name: '서울대학교병원', role: '진료협력병원' },
  { name: '아주대학교병원', role: '진료협력병원' },
];
