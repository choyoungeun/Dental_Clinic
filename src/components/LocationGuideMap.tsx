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
                      ROAD ARMS
                      2번째 참고 이미지처럼 딱 4방향 X 사거리
                  =================================================== */}
                  <g
                    stroke="#b9c8dc"
                    strokeWidth="36"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    {/* 좌상 */}
                    <path d="M255 155 L520 315" />
                    {/* 우상 */}
                    <path d="M790 155 L630 315" />
                    {/* 좌하 */}
                    <path d="M255 525 L520 365" />
                    {/* 우하 */}
                    <path d="M790 525 L630 365" />
                  </g>

                  {/* road center lines */}
                  <g
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.95"
                  >
                    {/* 좌상 */}
                    <path d="M290 175 L305 184" />
                    <path d="M335 202 L350 211" />
                    <path d="M380 229 L395 238" />
                    <path d="M425 256 L440 265" />
                    <path d="M470 283 L485 292" />

                    {/* 우상 */}
                    <path d="M755 175 L742 188" />
                    <path d="M713 217 L700 230" />
                    <path d="M671 259 L658 272" />

                    {/* 좌하 */}
                    <path d="M290 505 L305 496" />
                    <path d="M335 478 L350 469" />
                    <path d="M380 451 L395 442" />
                    <path d="M425 424 L440 415" />
                    <path d="M470 397 L485 388" />

                    {/* 우하 */}
                    <path d="M755 505 L742 496" />
                    <path d="M713 478 L700 469" />
                    <path d="M671 451 L658 442" />
                  </g>

                  {/* ==================================================
                      CENTER INTERSECTION LABEL - 정중앙
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    <rect
                      x="520"
                      y="290"
                      width="110"
                      height="100"
                      rx="26"
                      fill="#eef2f7"
                      stroke="#d7dfea"
                      strokeWidth="2"
                    />
                    <text
                      x="575"
                      y="327"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      장안구청
                    </text>
                    <text
                      x="575"
                      y="356"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#324255"
                    >
                      사거리
                    </text>
                  </g>

                  {/* ==================================================
                      ROAD NAME
                  =================================================== */}
                  <text
                    x="405"
                    y="208"
                    fontSize="26"
                    fontWeight="900"
                    fill="#21365d"
                    transform="rotate(31 405 208)"
                  >
                    경수대로
                  </text>

                  {/* ==================================================
                      CLINIC BUILDING + LABEL
                      건물과 네이비 라벨 중심축 동일
                  =================================================== */}
                  <g filter="url(#softShadow)">
                    {/* building */}
                    <rect x="145" y="232" width="88" height="112" fill="#a9bfd4" />
                    <polygon points="145,232 189,202 233,232" fill="#d8e3ec" />

                    <rect x="160" y="250" width="15" height="18" fill="#f7fbff" />
                    <rect x="182" y="250" width="15" height="18" fill="#f7fbff" />
                    <rect x="204" y="250" width="15" height="18" fill="#f7fbff" />

                    <rect x="160" y="276" width="15" height="18" fill="#f7fbff" />
                    <rect x="182" y="276" width="15" height="18" fill="#f7fbff" />
                    <rect x="204" y="276" width="15" height="18" fill="#f7fbff" />

                    <rect x="160" y="302" width="15" height="18" fill="#f7fbff" />
                    <rect x="182" y="302" width="15" height="18" fill="#f7fbff" />
                    <rect x="204" y="302" width="15" height="18" fill="#f7fbff" />

                    {/* pin */}
                    <path
                      d="M189 160C173 160 160 173 160 189C160 210 189 237 189 237C189 237 218 210 218 189C218 173 205 160 189 160Z"
                      fill="#ef3a38"
                    />
                    <circle cx="189" cy="188" r="12" fill="#ffffff" />
                    <path
                      d="M183 184C183 179.5 186.5 176 191 176C195.5 176 199 179.5 199 184C199 190.5 191 197 191 197C191 197 183 190.5 183 184Z"
                      fill="#ef3a38"
                    />
                    <rect x="187" y="181" width="8" height="14" rx="4" fill="#ffffff" />

                    {/* sparkle */}
                    <path d="M158 172 L150 165" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M220 172 L228 165" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                    <path d="M189 150 L189 140" stroke="#f09a94" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  {/* clinic navy label - same center x = 189 */}
                  <g filter="url(#labelShadow)">
                    <rect
                      x="102"
                      y="366"
                      width="174"
                      height="48"
                      rx="13"
                      fill="#1e3e7d"
                    />
                    <text
                      x="189"
                      y="397"
                      textAnchor="middle"
                      fontSize="24"
                      fontWeight="900"
                      fill="#ffffff"
                      letterSpacing="-0.8"
                    >
                      수원세브란스치과
                    </text>
                  </g>

                  <g filter="url(#softShadow)">
                    <rect
                      x="123"
                      y="418"
                      width="132"
                      height="32"
                      rx="12"
                      fill="#e8edf5"
                    />
                    <text
                      x="189"
                      y="439"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="800"
                      fill="#3c4b60"
                    >
                      경수대로 969 · 2층
                    </text>
                  </g>

                  {/* ==================================================
                      LANDMARK DOTS + LABELS
                  =================================================== */}
                  <g fill="#2a4a74" fontSize="18" fontWeight="700">
                    {/* 수원한일타운 */}
                    <circle cx="365" cy="170" r="5.5" fill="#6aa0d4" />
                    <text x="378" y="176">수원한일타운</text>

                    {/* 장안구청 */}
                    <circle cx="698" cy="182" r="5.5" fill="#6aa0d4" />
                    <text x="711" y="188">장안구청</text>

                    {/* 홈플러스 북수원점 */}
                    <circle cx="612" cy="238" r="5.5" fill="#6aa0d4" />
                    <text x="625" y="227">홈플러스</text>
                    <text x="625" y="249">북수원점</text>

                    {/* 수원KT위즈파크 */}
                    <circle cx="415" cy="485" r="5.5" fill="#6aa0d4" />
                    <text x="428" y="491">수원KT위즈파크</text>
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
