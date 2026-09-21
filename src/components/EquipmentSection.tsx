import Image from 'next/image';

const equipmentItems = [
  {
    name: 'Primescan',
    sub: '디지털 구강스캐너',
    title: '불편한 인상재 대신, 구강을 디지털로 스캔합니다.',
    desc: '치아와 잇몸을 3D 데이터로 정밀하게 기록하는 디지털 구강스캐너입니다. 인상재를 이용한 기존 본뜨기의 불편함을 줄이고, 보철 및 임플란트 진료에 활용합니다.',
    image: '/images/equipment/primescan.PNG',
    alt: 'Primescan 디지털 구강스캐너',
  },
  {
    name: 'HDX WILL eco-x',
    sub: '3D Dental CT',
    title: '필요한 부위를 3차원 영상으로 확인합니다.',
    desc: '치아와 치조골의 구조를 3차원으로 확인하는 치과용 CT입니다. Low Dose 모드와 AEC 기능을 활용하여 필요한 영상 정보를 얻는 데 도움을 줍니다.',
    image: '/images/equipment/hdxCTecoX.png',
    alt: 'HDX WILL eco-x 3D Dental CT',
  },
  {
    name: 'Comfort-in',
    sub: '바늘 없는 분사식 주입 시스템',
    title: '주삿바늘 대신 미세한 약액을 빠르게 분사하는 방식입니다.',
    desc: '주사에 대한 부담이 큰 환자에게 진료 상황에 따라 선택적으로 활용합니다.',
    image: '/images/equipment/comportin.png',
    alt: 'Comfort-in 무침 주입 시스템',
  },
  {
    name: 'Qraypen C',
    sub: '광학식 치아우식 진단장치',
    title: '눈으로만 확인하기 어려운 부분까지, 빛을 이용해 한 번 더 살펴봅니다.',
    desc: '특정 파장의 빛과 형광 반응을 이용하여 치아 상태를 영상으로 확인하는 광학식 진단장비입니다. 육안검사와 함께 우식이 의심되는 부위를 확인하고 설명하는 데 활용합니다.',
    image: '/images/equipment/qraypen.png',
    alt: 'Qraypen C 광학식 치아우식 진단장치',
  },
  {
    name: 'LUVIS S300',
    sub: 'LED 수술등',
    title: '정밀한 진료를 위한 밝고 안정적인 시야를 확보합니다.',
    desc: '여러 LED 광원을 이용해 진료 중 생기는 그림자를 줄이고, 수술 부위를 선명하게 확인할 수 있도록 돕는 치과용 수술등입니다. 임플란트 및 외과 진료 등 세밀한 시야가 필요한 진료에 활용합니다.',
    image: '/images/equipment/luvisS300.jpg',
    alt: 'LUVIS S300 LED 수술등',
  },
];

function EquipmentCard({
  item,
  reverse = false,
}: {
  item: (typeof equipmentItems)[number];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#dbe4ee] bg-white shadow-sm">
      <div
        className={`grid items-center gap-0 lg:grid-cols-2 ${
          reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
        }`}
      >
        {/* image */}
        <div className="relative aspect-[4/3] w-full bg-[#eef4f9]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* text */}
        <div className="p-7 md:p-9">
          <p className="text-[11px] font-bold tracking-[0.22em] text-[#2f89fc] uppercase">
            {item.sub}
          </p>

          <h3 className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#071b33] md:text-[32px]">
            {item.name}
          </h3>

          <p className="mt-5 break-keep text-[18px] font-semibold leading-[1.6] text-[#17365D]">
            {item.title}
          </p>

          <p className="mt-4 break-keep text-[15px] leading-[1.85] text-[#5f6f80] md:text-[16px]">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EquipmentSection() {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 bg-[#f8fbfe] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              EQUIPMENT SYSTEM
            </p>

            <h2 className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl">
              필요한 장비를,
              <br />
              필요한 순간에 정확하게 활용합니다.
            </h2>
          </div>

          <p className="break-keep text-[16px] leading-[1.85] text-[#536577] md:text-[17px] lg:pb-2">
           장비가 많다고 좋은 진료가 완성되지는 않습니다.
            <span className="font-semibold text-[#071b33]">
              {' '}중요한 것은 환자에게 필요한 정보를 정확하게 확인하고,
              그 결과를 이해하기 쉽게 설명하며,
              편안하게 치료받을 수 있도록 돕는 것
            </span>
            입니다.
            수원세브란스치과는 진료의 기본을 지키는 시스템을 바탕으로
            신뢰할 수 있는 진료를 제공하고자 합니다.
          </p>
        </div>

        {/* intro trust box */}
        <div className="mt-12 rounded-[28px] border border-[#dbe4ee] bg-white px-6 py-7 shadow-sm md:px-8 md:py-8">
          <p className="text-[11px] font-bold tracking-[0.24em] text-[#2f89fc]">
            WHY IT MATTERS
          </p>

          <p className="mt-3 max-w-4xl break-keep text-[22px] font-semibold leading-[1.65] tracking-[-0.03em] text-[#071b33] md:text-[26px]">
            장비 자체를 강조하기보다,
            <span className="text-[#17365D]"> 환자분의 상태를 더 정확히 확인하고</span>{' '}
            <span className="text-[#17365D]">진료 과정을 더 편안하게 만들기 위해</span>{' '}
            장비를 선택합니다.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
          {equipmentItems.map((item, index) => (
            <EquipmentCard
              key={item.name}
              item={item}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}