'use client';

const LocationGuideMap = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-[28px] border border-[#e6ebf0] bg-[#f6f7f8] shadow-[0_12px_32px_rgba(7,27,51,0.06)]">
        <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* ======================================================
              LEFT PANEL
          ====================================================== */}
          <div className="border-b border-[#e7ebf0] bg-[#f6f7f8] px-6 py-7 md:px-8 md:py-9 lg:border-b-0 lg:border-r">
            <h2 className="break-keep text-[28px] font-bold leading-[1.25] tracking-[-0.04em] text-[#1d1f21] md:text-[34px]">
              수원세브란스치과
              <br />
              <span className="text-[#1478b4]">진료시간 / 오시는 길</span>
            </h2>

            {/* 야간/주말진료 안내만 유지 */}
            <div className="mt-8 rounded-[20px] border border-[#d8e2ec] bg-white px-5 py-5 shadow-[0_6px_16px_rgba(15,35,70,0.06)]">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#0f5fa8]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[16px] font-bold text-[#12345c]">
                    바쁜 직장인과 학생을 위해
                  </p>
                  <p className="mt-1 break-keep text-[14px] leading-[1.8] text-[#657384]">
                    평일 낮 시간 내원이 어려운 분들을 위해
                    <br />
                    <span className="font-semibold text-[#0f5fa8]">
                      야간진료와 토요일 진료
                    </span>
                    를 운영합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT MAP PANEL
          ====================================================== */}
          <div className="bg-[#f6f7f8] p-4 md:p-6 lg:p-8">
            <div className="overflow-hidden rounded-[28px] border border-[#e7ebf0] bg-[#f3f4f6]">
              <div className="relative aspect-[1/1] w-full md:aspect-[16/10]">
                <svg
                  viewBox="0 0 900 620"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter
                      id="softShadow"
                      x="-30%"
                      y="-30%"
                      width="160%"
                      height="160%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="10"
                        floodColor="#0b1f3a"
                        floodOpacity="0.10"
                      />
                    </filter>

                    <filter
                      id="labelShadow"
                      x="-30%"
                      y="-30%"
                      width="160%"
                      height="160%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="8"
                        floodColor="#0b2f67"
                        floodOpacity="0.16"
                      />
                    </filter>
                  </defs>

                  {/* 배경 */}
                  <rect width="900" height="620" fill="#f3f4f6" />

                  {/* ==================================================
                      X자 교차 도로
                  =================================================== */}
                  <g stroke="#b8c7db" strokeWidth="34" strokeLinecap="round">
                    <path d="M185 155 L420 390" />
                    <path d="M365 120 L580 335" />
                    <path d="M470 470 L690 250" />
                    <path d="M625 425 L815 235" />
                  </g>

                  {/* 도로 중앙 점선 */}
                  <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9">
                    <path d="M210 180 L245 215" />
                    <path d="M270 240 L305 275" />
                    <path d="M330 300 L365 335" />

                    <path d="M390 145 L425 180" />
                    <path d="M450 205 L485 240" />
                    <path d="M510 265 L545 300" />

                    <path d="M495 445 L530 410" />
                    <path d="M555 385 L590 350" />
                    <path d="M615 325 L650 290" />

                    <path d="M650 400 L685 365" />
                    <path d="M705 345 L740 310" />
                    <path d="M760 290 L795 255" />
                  </g>

                  {/* ==================================================
                      중앙 사거리 박스
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    <rect
                      x="430"
                      y="250"
                      width="120"
                      height="92"
                      rx="28"
                      fill="#eef2f7"
                      stroke="#d3dbe7"
                      strokeWidth="2"
                    />
                    <text
                      x="490"
                      y="285"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      장안구청
                    </text>
                    <text
                      x="490"
                      y="312"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      사거리
                    </text>
                  </g>

                  {/* ==================================================
                      경수대로 텍스트
                  =================================================== */}
                  <text
                    x="315"
                    y="205"
                    fontSize="26"
                    fontWeight="900"
                    fill="#21365d"
                    transform="rotate(44 315 205)"
                  >
                    경수대로
                  </text>

                  {/* ==================================================
                      치과 건물
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    {/* 건물 */}
                    <rect x="120" y="210" width="98" height="118" fill="#a9bfd4" />
                    <polygon points="120,210 169,175 218,210" fill="#d8e3ec" />
                    <rect x="138" y="228" width="18" height="20" fill="#f7fbff" />
                    <rect x="164" y="228" width="18" height="20" fill="#f7fbff" />
                    <rect x="138" y="257" width="18" height="20" fill="#f7fbff" />
                    <rect x="164" y="257" width="18" height="20" fill="#f7fbff" />
                    <rect x="138" y="286" width="18" height="20" fill="#f7fbff" />
                    <rect x="164" y="286" width="18" height="20" fill="#f7fbff" />

                    {/* 핀 */}
                    <path
                      d="M175 142C160 142 148 154 148 169C148 189 175 214 175 214C175 214 202 189 202 169C202 154 190 142 175 142Z"
                      fill="#ef3a38"
                    />
                    <circle cx="175" cy="168" r="12" fill="#ffffff" />
                    <path
                      d="M169 164C169 159.5 172.5 156 177 156C181.5 156 185 159.5 185 164C185 170.5 177 177 177 177C177 177 169 170.5 169 164Z"
                      fill="#ef3a38"
                    />
                    <rect x="173" y="161" width="8" height="14" rx="4" fill="#ffffff" />

                    {/* 반짝임 */}
                    <path d="M145 150 L137 143" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M207 151 L215 144" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M175 132 L175 122" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  {/* ==================================================
                      치과 라벨
                  =================================================== */}
                  <g filter="url(#labelShadow)">
                    <rect
                      x="92"
                      y="350"
                      width="230"
                      height="52"
                      rx="14"
                      fill="#1e3e7d"
                    />
                    <text
                      x="207"
                      y="384"
                      textAnchor="middle"
                      fontSize="28"
                      fontWeight="900"
                      fill="#ffffff"
                      letterSpacing="-1"
                    >
                      수원세브란스치과
                    </text>
                  </g>

                  <g filter="url(#softShadow)">
                    <rect
                      x="112"
                      y="406"
                      width="190"
                      height="36"
                      rx="14"
                      fill="#e8edf5"
                    />
                    <text
                      x="207"
                      y="431"
                      textAnchor="middle"
                      fontSize="16"
                      fontWeight="800"
                      fill="#3c4b60"
                    >
                      경수대로 969 · 2층
                    </text>
                  </g>

                  {/* ==================================================
                      랜드마크 텍스트
                  =================================================== */}
                  <g fontSize="20" fontWeight="700" fill="#27364d">
                    <text x="305" y="155">수원한일타운</text>
                    <text x="640" y="150">장안구청</text>
                    <text x="540" y="225">홈플러스</text>
                    <text x="540" y="252">북수원점</text>
                    <text x="335" y="520">수원KT위즈파크</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationGuideMap;
