"use client";

import Image from "next/image";

const LocationGuideMap = () => {
  return (
    <div className="w-full">
      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-[#e1e6ec]
          bg-white
          shadow-[0_14px_40px_rgba(11,31,58,0.07)]
          md:rounded-[28px]
        "
      >
        <Image
          src="/images/ssmap.png"
          alt="수원세브란스치과 오시는 길 및 주차 안내"
          width={1500}
          height={1260}
          sizes="(max-width: 1280px) 100vw, 1216px"
          className="
            block
            h-auto
            w-full
          "
        />
      </div>
    </div>
  );
};

export default LocationGuideMap;