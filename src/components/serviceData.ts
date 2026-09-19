import {
  implantTopics,
  preservationTopics,
  prosthodonticTopics,
  restorativeTopics,
  tmjTopics,
  wisdomTopics,
  type ServiceTopic,
} from './serviceTopics';

export type ServiceInfo = {
  /** 상세 페이지 주소 (/services/[slug]) */
  slug: string;
  title: string;
  eng: string;
  hook: string;
  desc: string;
  /** public/images/services/ 의 웹용 사진 */
  image: string;
  tags: string[];
  /** 상담 폼의 진료과목 이름과 같아야 자동 선택됩니다 */
  consultationValue: string;
  /** "이런 분께 추천합니다" */
  recommend: string[];
  topics: ServiceTopic[];
  /** 메인 SIGNATURE CARE 로 크게 보여줄 진료. 없으면 GENERAL CARE 로 분류됩니다. */
  signature?: {
    order: number;
    eng: string;
    title: string;
    line: string;
  };
  /** 상세 페이지 WHY OUR EXPERIENCE MATTERS : 대표원장의 임상경험과 해당 진료의 연결 */
  experience: {
    heading: string;
    body: string;
  };
};

export const services: ServiceInfo[] = [
  {
    slug: 'implant',
    title: '임플란트',
    eng: 'IMPLANT',
    hook: '뼈가 부족하거나 재수술이 필요한 경우도 먼저 정밀하게 확인합니다.',
    desc: '3D CT로 잇몸뼈와 신경 위치를 확인하고, 뼈이식 필요 여부와 치료 순서를 이해하기 쉽게 설명드립니다.',
    image: '/images/services/implant.jpg',
    tags: ['3D CT 진단', '뼈이식 상담', '재수술 상담'],
    consultationValue: '임플란트',
    recommend: [
      '뼈가 부족해서 임플란트가 어렵다는 말을 들으신 분',
      '위쪽 어금니에 임플란트를 고민하고 계신 분',
      '이전에 심은 임플란트가 흔들리거나 염증이 생기신 분',
      '내원 횟수와 치료 기간을 줄이고 싶으신 분',
      '수술 전에 위치와 방법을 미리 확인하고 싶으신 분',
    ],
    topics: implantTopics,
    signature: {
      order: 2,
      eng: 'IMPLANT & SURGERY',
      title: '임플란트',
      line: '수술보다 먼저, 필요한 이유부터 판단합니다.',
    },
    experience: {
      heading: '수술 자체보다 먼저, 남아 있는 치아와 잇몸뼈, 신경과 교합을 함께 판단합니다.',
      body: '임플란트는 어떻게 심느냐보다 어디에, 어떤 순서로 계획하느냐가 중요합니다. 종합병원 치과 진료과장으로 다양한 환자를 진료한 경험을 바탕으로, 3D CT에서 확인한 뼈와 신경 위치를 근거로 치료 계획과 뼈이식 필요 여부를 설명드립니다.',
    },
  },
  {
    slug: 'preservation',
    title: '자연치아 보존',
    eng: 'TOOTH PRESERVATION',
    hook: '뽑기 전에, 살릴 수 있는 가능성부터 확인합니다.',
    desc: '신경치료와 재신경치료 등 자연치아를 유지할 방법이 있는지 먼저 살펴본 뒤 치료 방향을 함께 결정합니다.',
    image: '/images/services/preservation.jpg',
    tags: ['신경치료', '재신경치료', '보존 가능성 확인'],
    consultationValue: '자연치아 보존',
    recommend: [
      '치아를 뽑아야 한다는 말을 들으신 분',
      '신경치료를 받았는데 다시 아프거나 잇몸이 붓는 분',
      '충치가 깊어 신경치료가 필요하다고 들으신 분',
      '내 치아를 최대한 오래 쓰고 싶으신 분',
    ],
    topics: preservationTopics,
    signature: {
      order: 1,
      eng: 'NATURAL TOOTH PRESERVATION',
      title: '자연치아 보존',
      line: '끝까지 살릴 수 있는지를 먼저 봅니다.',
    },
    experience: {
      heading: '왜 발치 이야기를 들었는지부터 다시 봅니다.',
      body: '치아를 뽑아야 한다는 말을 들으셨더라도, 신경치료나 재신경치료로 유지할 수 있는지를 먼저 확인합니다. 살릴 수 있는 치아는 보존 가능성을 살펴보고, 어려운 경우에는 그 이유를 설명드립니다.',
    },
  },
  {
    slug: 'wisdom-tooth',
    title: '매복 사랑니',
    eng: 'ORAL SURGERY',
    hook: '매복 사랑니는 신경과의 위치 관계부터 확인해야 합니다.',
    desc: 'CT를 통해 사랑니의 방향과 신경관 위치를 확인하고, 발치 난이도와 치료 과정을 설명드립니다.',
    image: '/images/services/wisdom.jpg',
    tags: ['매복 사랑니', 'CT 신경 위치 확인', '구강외과 진료'],
    consultationValue: '사랑니 · 구강외과',
    recommend: [
      '사랑니가 누워 있거나 잇몸 속에 묻혀 있는 분',
      '사랑니 주변이 반복해서 붓거나 아픈 분',
      '앞 어금니에 충치가 생기거나 음식물이 자주 끼는 분',
      '신경과 가까워 발치가 걱정되는 분',
      '턱뼈에 낭이 있다는 말을 들으신 분',
    ],
    topics: wisdomTopics,
    signature: {
      order: 3,
      eng: 'ORAL SURGERY',
      title: '매복 사랑니 · 구강외과',
      line: '복잡한 사랑니와 구강외과 진료까지.',
    },
    experience: {
      heading: '매복 사랑니는 단순히 뽑는 것보다, 신경과 치아의 위치관계를 먼저 판단하는 진료입니다.',
      body: 'CT로 사랑니의 방향과 신경관 위치를 확인한 뒤 발치 난이도와 진행 과정을 설명드립니다. 종합병원 치과에서 다양한 구강외과 환자를 진료한 경험을 바탕으로 판단합니다.',
    },
  },
  {
    slug: 'cavity',
    title: '충치치료',
    eng: 'RESTORATIVE CARE',
    hook: '충치의 크기와 남은 치아 상태를 보고 필요한 치료를 선택합니다.',
    desc: '레진이나 인레이 같은 치료가 왜 필요한지, 어느 범위까지 치료하는지 이해하실 수 있게 설명드립니다.',
    image: '/images/services/cavity.jpg',
    tags: ['레진', '인레이', '충치 범위 확인'],
    consultationValue: '충치 · 보철',
    recommend: [
      '치아에 검은 부분이 보이거나 찬 것에 시린 분',
      '이전에 한 충치 치료가 떨어졌거나 틈이 생긴 분',
      '충치가 깊어 어떤 치료가 필요한지 궁금하신 분',
      '레진과 인레이 중 무엇이 맞는지 알고 싶으신 분',
    ],
    topics: restorativeTopics,
    experience: {
      heading: '충치는 얼마나 파였는지와 함께, 얼마나 남았는지를 봅니다.',
      body: '치료 범위가 넓어질수록 치아를 오래 사용하기 어려워질 수 있습니다. 충치의 크기와 남은 치아 상태를 함께 확인해 필요한 범위의 치료를 선택하고, 그 이유를 설명드립니다.',
    },
  },
  {
    slug: 'prosthetics',
    title: '보철치료',
    eng: 'PROSTHODONTIC CARE',
    hook: '단순히 씌우는 치료가 아니라 오래 씹을 수 있는 기능을 함께 봅니다.',
    desc: '크라운과 브릿지 등 보철치료 시 남은 치아의 상태와 씹는 기능을 함께 고려해 치료 계획을 세웁니다.',
    image: '/images/services/prosthetics.jpg',
    tags: ['크라운', '브릿지', '씹는 기능 고려'],
    consultationValue: '충치 · 보철',
    recommend: [
      '치아가 부러지거나 크게 깨진 분',
      '신경치료 후 치아가 약해졌다고 들으신 분',
      '치아가 빠진 자리를 채워야 하는 분',
      '오래 사용한 보철물이 헐거워지거나 잇몸선이 검게 보이는 분',
    ],
    topics: prosthodonticTopics,
    experience: {
      heading: '보철은 씌우는 것으로 끝나지 않고, 남은 치아와 씹는 기능을 함께 판단합니다.',
      body: '신경치료 이력과 잇몸·뼈 상태, 교합을 함께 확인한 뒤 치료 계획을 세웁니다. 구강스캐너로 기록한 디지털 데이터를 계획과 경과 비교에 활용합니다.',
    },
  },
  {
    slug: 'tmj-trauma',
    title: '턱관절 · 외상치료',
    eng: 'TMJ & TRAUMA CARE',
    hook: '정밀한 진단을 바탕으로 턱관절 불편의 원인을 확인합니다.',
    desc: '턱에서 소리가 나거나 뻐근한 통증, 갑작스러운 구강 외상까지 원인을 확인한 뒤 상태에 맞는 치료를 안내합니다.',
    image: '/images/services/tmj.jpg',
    tags: ['정밀진단', '비수술적 턱관절치료', '구강외과 외상치료'],
    consultationValue: '턱관절 · 외상치료',
    recommend: [
      '턱에서 소리가 나거나 입이 잘 벌어지지 않는 분',
      '턱과 귀 앞쪽이 자주 뻐근하고 아픈 분',
      '넘어지거나 부딪혀 치아가 흔들리거나 부러진 분',
      '입안이나 입술을 다쳐 응급 처치가 필요한 분',
    ],
    topics: tmjTopics,
    experience: {
      heading: '턱관절 불편은 증상보다 원인을 먼저 확인합니다.',
      body: '소리와 통증, 입이 벌어지는 정도의 원인을 확인한 뒤 상태에 맞는 치료를 안내합니다. 구강 외상은 구강외과 진료 경험을 바탕으로 상태를 살핍니다.',
    },
  },
];

export const findService = (slug: string) => services.find((item) => item.slug === slug);
