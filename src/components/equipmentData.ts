/* 진료 장비 데이터
   ─────────────────────────────────────────────
   · installed: true 인 장비만 홈페이지에 표시됩니다. (실제 도입 확인 후 true 로 바꾸세요)
   · model: 모델명이 확인되면 입력하세요. 값이 있을 때만 화면에 표시됩니다.
   · sameModelAsSeverance: 세브란스 치과대학병원과 "동일 모델"임이 확인된 장비만 true.
     true 일 때만 해당 장비에 "세브란스 치과대학병원 동일 모델" 표기가 나타납니다.
   · image: 실제 장비 사진이 생기면 /images/... 로 교체하세요. */

export type Equipment = {
  id: string;
  installed: boolean;
  tag: string;
  name: string;
  /** 이 장비가 어떤 판단을 돕는지 */
  role: string;
  /** 함께 쓰이는 진료 */
  supports: string[];
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
    role: '치아와 잇몸뼈, 신경관의 위치를 3차원으로 확인해 수술 전 판단의 근거로 삼습니다.',
    supports: ['임플란트', '매복 사랑니', '구강외과'],
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'scanner',
    installed: true,
    tag: 'DIGITAL RECORD',
    name: '3D 구강스캐너',
    role: '구강 상태를 디지털 데이터로 기록해 보철 설계와 경과 비교에 활용합니다.',
    supports: ['보철치료', '임플란트', '디지털 기록'],
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'printer',
    installed: false, // 3D 프린터 도입 확인 후 true
    tag: 'DIGITAL FABRICATION',
    name: '3D 프린터',
    role: '치료 계획에 맞춘 수술 가이드와 임시 보철물 제작에 활용합니다.',
    supports: ['수술 가이드', '임시 보철물'],
  },
  {
    id: 'microscope',
    installed: false, // 치과용 현미경 도입 확인 후 true
    tag: 'MAGNIFIED VISION',
    name: '치과용 현미경',
    role: '치아 내부의 작은 구조를 확대해 확인하며 치료합니다.',
    supports: ['신경치료', '재신경치료'],
    image: '/images/micro_scope.jpg',
  },
];
