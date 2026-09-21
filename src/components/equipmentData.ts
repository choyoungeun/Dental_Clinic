/*
  수원세브란스치과 진료 장비 데이터

  installed: true
  실제 도입이 확인된 장비만 홈페이지에 표시합니다.

  model
  정확한 모델명이 확인된 경우에만 입력합니다.

  sameModelAsSeverance
  세브란스 치과대학병원과 동일 모델임이 실제 확인된 경우에만
  true로 설정합니다.

  확인되지 않은 장비나 모델 정보는 홈페이지에 표시하지 않습니다.
*/

export type Equipment = {
  id: string;
  installed: boolean;

  tag: string;
  name: string;

  /**
   * 어떤 정보를 확인하기 위해 사용하는 장비인지 설명
   */
  role: string;

  /**
   * 실제 활용되는 주요 진료
   */
  supports: string[];

  /**
   * 환자가 이해하기 쉬운 실제 활용 예시
   */
  checks?: string[];

  image?: string;
  model?: string;
  sameModelAsSeverance?: boolean;
};

export const equipment: Equipment[] = [
  {
    id: 'ct',

    installed: true,

    tag: '3D DIAGNOSIS',

    name: '3D 구강 CT',

    role:
      '치아와 잇몸뼈를 3차원 영상으로 확인합니다. 임플란트 수술 전에는 잇몸뼈의 형태와 신경관의 위치를 살펴보고, 매복 사랑니 진료에서는 치아 뿌리와 주변 구조의 위치 관계를 확인하는 데 활용합니다.',

    supports: [
      '임플란트',
      '매복 사랑니',
      '구강외과',
    ],

    checks: [
      '잇몸뼈의 폭과 높이',
      '하치조신경관 위치',
      '상악동과 치아의 위치 관계',
      '매복치의 방향과 깊이',
    ],

    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: 'scanner',

    installed: true,

    tag: 'DIGITAL RECORD',

    name: '3D 구강스캐너',

    role:
      '치아와 잇몸의 형태를 디지털 데이터로 기록합니다. 보철치료와 임플란트 진료에서 구강 상태를 기록하고, 보철물 제작에 필요한 정보를 전달하는 데 활용합니다.',

    supports: [
      '보철치료',
      '임플란트',
      '구강 기록',
    ],

    checks: [
      '치아 형태의 디지털 기록',
      '보철 제작을 위한 구강 데이터',
      '현재 구강 상태 기록',
      '치료 전후 자료 관리',
    ],

    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: 'printer',

    installed: false,

    tag: 'DIGITAL FABRICATION',

    name: '3D 프린터',

    role:
      '디지털 데이터를 바탕으로 수술 가이드와 임시 보철물 등의 제작에 활용할 수 있습니다.',

    supports: [
      '수술 가이드',
      '임시 보철물',
    ],
  },

  {
    id: 'microscope',

    installed: false,

    tag: 'MAGNIFIED VISION',

    name: '치과용 현미경',

    role:
      '치아 내부의 미세한 구조를 확대해 확인하는 데 사용하는 장비입니다.',

    supports: [
      '신경치료',
      '재신경치료',
    ],

    image: '/images/micro_scope.jpg',
  },
];