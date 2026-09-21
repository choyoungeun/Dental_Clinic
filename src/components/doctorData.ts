/*
  수원세브란스치과 대표원장 정보

  홈페이지에서 사용하는 학력 · 경력 · 학회 · 연수 · 자문 데이터입니다.

  실제 확인된 경력만 사용하며,
  전문의 / 명의 / 대학병원 과장 등의 표현을 임의로 추가하지 않습니다.
*/

export const doctor = {
  name: '이현민',
  title: '대표원장',
  role: '前 수원덕산병원 치과 진료과장',
  image: '/images/OwnerProfile.png',
};

export type CredentialItem = {
  text: string;

  /**
   * 홈페이지 대표원장 영역에서
   * 우선적으로 보여줄 핵심 학력 · 경력
   */
  primary?: boolean;
};

/* =========================================================
   EDUCATION & CLINICAL EXPERIENCE
========================================================= */

export const experience: CredentialItem[] = [
  {
    text: '연세대학교 치과대학 졸업 · 5년 연속 장학생',
    primary: true,
  },

  {
    text: '前 연세대학교 신촌세브란스 치과대학병원',
    primary: true,
  },

  {
    text: '前 수원덕산병원 치과 진료과장',
    primary: true,
  },

  {
    text: '前 미금세브란스치과 수술 전담 원장',
  },
  
  {
    text: '前 바른공감치과 본원 원장',
  },

  {
    text: '前 신안군 보건소 치과과장',
  },

 

  
];

/* =========================================================
   ACADEMIC & ADVANCED TRAINING
========================================================= */

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

/* =========================================================
   CLINICAL ADVISORY
========================================================= */

export const advisory = [
  {
    name: '(주)이노바이드',
    role: '자문의',
  },

  {
    name: '오스템임플란트',
    role: '자문의',
  },

  {
    name: '메가젠임플란트',
    role: '자문의',
  },

  {
    name: '덴티스임플란트',
    role: '자문의',
  },
];