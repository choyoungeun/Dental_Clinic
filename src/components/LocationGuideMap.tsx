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

                  {/* background */}
                  <rect width="900" height="620" fill="#f3f4f6" />

                  {/* ==================================================
                      REFINED ROAD LAYOUT
                      빨간 표시한 형태에 맞춰 재배치
                  =================================================== */}
                  <g
                    stroke="#b8c7db"
                    strokeWidth="34"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* 좌상 -> 중앙 */}
                    <path d="M210 150 L455 392" />

                    {/* 상단 -> 중앙 */}
                    <path d="M405 105 L580 280" />

                    {/* 중앙 -> 우상 */}
                    <path d="M585 285 L790 120" />

                    {/* 좌하 -> 중앙 */}
                    <path d="M400 505 L560 345" />

                    {/* 중앙 -> 우하 */}
                    <path d="M610 390 L810 535" />
                  </g>

                  {/* road center lines */}
                  <g
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.95"
                  >
                    {/* 좌상 -> 중앙 */}
                    <path d="M242 182 L272 212" />
                    <path d="M292 232 L322 262" />
                    <path d="M342 282 L372 312" />
                    <path d="M392 332 L422 362" />

                    {/* 상단 -> 중앙 */}
                    <path d="M432 132 L460 160" />
                    <path d="M478 178 L506 206" />
                    <path d="M524 224 L552 252" />

                    {/* 중앙 -> 우상 */}
                    <path d="M625 255 L653 232" />
                    <path d="M675 215 L703 192" />
                    <path d="M725 175 L753 152" />

                    {/* 좌하 -> 중앙 */}
                    <path d="M430 475 L458 447" />
                    <path d="M478 427 L506 399" />
                    <path d="M526 379 L554 351" />

                    {/* 중앙 -> 우하 */}
                    <path d="M640 412 L670 434" />
                    <path d="M690 448 L720 470" />
                    <path d="M740 484 L770 506" />
                  </g>

                  {/* ==================================================
                      INTERSECTION
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    <rect
                      x="548"
                      y="252"
                      width="114"
                      height="92"
                      rx="28"
                      fill="#eef2f7"
                      stroke="#d3dbe7"
                      strokeWidth="2"
                    />
                    <text
                      x="605"
                      y="286"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      장안구청
                    </text>
                    <text
                      x="605"
                      y="313"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      사거리
                    </text>
                  </g>

                  {/* road label */}
                  <text
                    x="360"
                    y="185"
                    fontSize="24"
                    fontWeight="900"
                    fill="#21365d"
                    transform="rotate(44 360 185)"
                  >
                    경수대로
                  </text>

                  {/* ==================================================
                      CLINIC BUILDING - 왼쪽/위쪽으로 이동
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    <rect x="155" y="188" width="96" height="116" fill="#a9bfd4" />
                    <polygon points="155,188 203,154 251,188" fill="#d8e3ec" />

                    <rect x="172" y="206" width="17" height="19" fill="#f7fbff" />
                    <rect x="197" y="206" width="17" height="19" fill="#f7fbff" />

                    <rect x="172" y="234" width="17" height="19" fill="#f7fbff" />
                    <rect x="197" y="234" width="17" height="19" fill="#f7fbff" />

                    <rect x="172" y="262" width="17" height="19" fill="#f7fbff" />
                    <rect x="197" y="262" width="17" height="19" fill="#f7fbff" />

                    {/* red tooth pin */}
                    <path
                      d="M207 128C191 128 178 141 178 157C178 178 207 205 207 205C207 205 236 178 236 157C236 141 223 128 207 128Z"
                      fill="#ef3a38"
                    />
                    <circle cx="207" cy="156" r="12" fill="#ffffff" />
                    <path
                      d="M201 152C201 147.5 204.5 144 209 144C213.5 144 217 147.5 217 152C217 158.5 209 165 209 165C209 165 201 158.5 201 152Z"
                      fill="#ef3a38"
                    />
                    <rect x="205" y="149" width="8" height="14" rx="4" fill="#ffffff" />

                    {/* sparkle */}
                    <path d="M174 138 L166 131" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M240 139 L248 132" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M207 118 L207 108" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  {/* clinic label */}
                  <g filter="url(#labelShadow)">
                    <rect
                      x="125"
                      y="325"
                      width="235"
                      height="52"
                      rx="14"
                      fill="#1e3e7d"
                    />
                    <text
                      x="242.5"
                      y="359"
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
                      x="148"
                      y="382"
                      width="190"
                      height="36"
                      rx="14"
                      fill="#e8edf5"
                    />
                    <text
                      x="243"
                      y="407"
                      textAnchor="middle"
                      fontSize="16"
                      fontWeight="800"
                      fill="#3c4b60"
                    >
                      경수대로 969 · 2층
                    </text>
                  </g>

                  {/* ==================================================
                      LANDMARK LABELS - 새 배치
                  =================================================== */}
                  <g fontSize="20" fontWeight="700" fill="#27364d">
                    <text x="420" y="126">수원한일타운</text>

                    <text x="720" y="140">장안구청</text>

                    <text x="626" y="205">홈플러스</text>
                    <text x="626" y="232">북수원점</text>

                    <text x="448" y="482">수원KT위즈파크</text>
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
