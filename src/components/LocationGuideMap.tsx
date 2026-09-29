'use client';

const LocationGuideMap = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-[24px] border border-[#e6ebf1] bg-white shadow-[0_10px_30px_rgba(10,20,40,0.06)]">
        {/* ======================================================
            TOP INFO BANNER
        ====================================================== */}
        <div className="border-b border-[#eef2f6] bg-[#f8fafc] px-5 py-5 md:px-7 md:py-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#7b8aa0]">
                CLINIC HOURS GUIDE
              </p>

             <h3 className="mt-2 break-keep text-[22px] font-bold leading-[1.4] tracking-[-0.03em] text-[#0d2d5e] md:text-[28px]">
              바쁜 직장인과 학생을 위해,
              <br />
              <span className="text-[#0d4aa5]">야간진료</span>와
              <span className="text-[#1c7a4c]"> 주말진료</span>를 운영합니다.
            </h3>

             </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-[#dce6f3] bg-white px-4 py-4 shadow-sm">
                <div className="flex items-center gap-2">
                  {/* moon icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf2ff] text-[#0d4aa5]">
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
                    <p className="text-[14px] font-bold text-[#0d2d5e]">
                      야간진료
                    </p>
                    <p className="text-[13px] text-[#6e7c8f]">
                      월 · 수 09:30 ~ 20:30
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-[#dce6f3] bg-white px-4 py-4 shadow-sm">
                <div className="flex items-center gap-2">
                  {/* calendar icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef7f2] text-[#1c7a4c]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M3 10h18" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[14px] font-bold text-[#0d2d5e]">
                      주말진료
                    </p>
                    <p className="text-[13px] text-[#6e7c8f]">
                      토 09:30 ~ 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            MAP BODY
        ====================================================== */}
        <div className="bg-[#fcfdfd] p-4 md:p-6">
          <div className="overflow-hidden rounded-[22px] border border-[#edf1f5] bg-white">
            <div className="relative aspect-[16/10] w-full md:aspect-[16/8]">
              <svg
                viewBox="0 0 1200 720"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="smallGrid"
                    width="28"
                    height="28"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M28 0H0V28"
                      fill="none"
                      stroke="#f1f4f7"
                      strokeWidth="1"
                    />
                  </pattern>

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
                      floodOpacity="0.12"
                    />
                  </filter>

                  <filter
                    id="pinShadow"
                    x="-40%"
                    y="-40%"
                    width="180%"
                    height="180%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="6"
                      stdDeviation="8"
                      floodColor="#0b2f67"
                      floodOpacity="0.22"
                    />
                  </filter>
                </defs>

                {/* base */}
                <rect width="1200" height="720" fill="#fbfcfd" />
                <rect width="1200" height="720" fill="url(#smallGrid)" />

                {/* blocks / background areas */}
                <rect x="0" y="0" width="260" height="720" fill="#f7faf7" />
                <rect x="930" y="0" width="270" height="720" fill="#fbfbfb" />

                {/* green area / park side */}
                <rect x="0" y="440" width="230" height="280" fill="#e8f4e7" />
                <text
                  x="52"
                  y="590"
                  fontSize="28"
                  fill="#5d8d63"
                  fontWeight="700"
                >
                  KT위즈파크
                </text>

                {/* main road : 경수대로 */}
                <g>
                  <path
                    d="M170 120 L1080 620"
                    stroke="#f3dc8f"
                    strokeWidth="88"
                    strokeLinecap="round"
                  />
                  <path
                    d="M170 120 L1080 620"
                    stroke="#d6bf72"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                    opacity="0.55"
                  />
                  <text
                    x="720"
                    y="402"
                    fontSize="20"
                    fill="#8a7740"
                    fontWeight="700"
                    transform="rotate(29 720 402)"
                  >
                    경수대로
                  </text>
                </g>

                {/* secondary streets */}
                <g stroke="#e3e8ee" strokeWidth="18" strokeLinecap="round">
                  <path d="M250 110 L250 610" />
                  <path d="M360 130 L360 650" />
                  <path d="M500 170 L500 690" />
                  <path d="M675 90 L675 650" />
                  <path d="M820 120 L820 660" />
                  <path d="M960 170 L960 650" />

                  <path d="M110 220 L470 220" />
                  <path d="M80 320 L560 320" />
                  <path d="M300 450 L770 450" />
                  <path d="M500 570 L1080 570" />
                  <path d="M690 250 L1120 250" />
                </g>

                {/* clinic building highlight */}
                <g filter="url(#pinShadow)">
                  <rect
                    x="566"
                    y="308"
                    width="128"
                    height="76"
                    rx="18"
                    fill="#eaf2ff"
                    stroke="#0d4aa5"
                    strokeWidth="2"
                  />
                  <rect
                    x="580"
                    y="322"
                    width="100"
                    height="48"
                    rx="12"
                    fill="#0d4aa5"
                  />
                  <text
                    x="630"
                    y="352"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    한국메디컬빌딩
                  </text>
                </g>

                {/* clinic pin */}
                <g filter="url(#pinShadow)">
                  <rect
                    x="515"
                    y="215"
                    width="250"
                    height="62"
                    rx="16"
                    fill="#083b7a"
                  />
                  <circle cx="550" cy="246" r="19" fill="#ffffff" />
                  <image
                    href="/images/yonsei.png"
                    x="534"
                    y="230"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                  />
                  <text
                    x="585"
                    y="252"
                    fontSize="26"
                    fontWeight="800"
                    fill="#ffffff"
                    letterSpacing="-1"
                  >
                    수원세브란스치과
                  </text>

                  <path d="M630 277 L648 300 L666 277 Z" fill="#083b7a" />
                </g>

                {/* same building note */}
                <g filter="url(#softShadow)">
                  <rect
                    x="725"
                    y="315"
                    width="180"
                    height="60"
                    rx="14"
                    fill="#ffffff"
                    stroke="#d9e3ef"
                  />
                  <text x="815" y="342" textAnchor="middle" fontSize="16" fontWeight="700" fill="#123562">
                    경희수원한방병원
                  </text>
                  <text x="815" y="364" textAnchor="middle" fontSize="14" fill="#71839a">
                    동일 건물 2층
                  </text>
                </g>

                {/* bus stops both directions */}
                <g filter="url(#softShadow)">
                  <rect
                    x="450"
                    y="238"
                    width="48"
                    height="48"
                    rx="14"
                    fill="#ffffff"
                    stroke="#cfdceb"
                  />
                  <text x="474" y="268" textAnchor="middle" fontSize="21">
                    🚌
                  </text>

                  <rect
                    x="780"
                    y="410"
                    width="48"
                    height="48"
                    rx="14"
                    fill="#ffffff"
                    stroke="#cfdceb"
                  />
                  <text x="804" y="440" textAnchor="middle" fontSize="21">
                    🚌
                  </text>

                  <rect
                    x="342"
                    y="196"
                    width="170"
                    height="36"
                    rx="18"
                    fill="#fff6df"
                    stroke="#ecd69a"
                  />
                  <text x="427" y="219" textAnchor="middle" fontSize="15" fontWeight="700" fill="#8f6c20">
                    경기일보 정류장
                  </text>

                  <rect
                    x="810"
                    y="460"
                    width="170"
                    height="36"
                    rx="18"
                    fill="#fff6df"
                    stroke="#ecd69a"
                  />
                  <text x="895" y="483" textAnchor="middle" fontSize="15" fontWeight="700" fill="#8f6c20">
                    한일타운 정류장
                  </text>
                </g>

                {/* landmark cards */}
                <g filter="url(#softShadow)">
                  <rect
                    x="170"
                    y="500"
                    width="170"
                    height="52"
                    rx="16"
                    fill="#ffffff"
                    stroke="#e3eaf2"
                  />
                  <text x="255" y="532" textAnchor="middle" fontSize="18" fontWeight="700" fill="#23415f">
                    KT위즈파크
                  </text>

                  <rect
                    x="875"
                    y="500"
                    width="190"
                    height="52"
                    rx="16"
                    fill="#ffffff"
                    stroke="#e3eaf2"
                  />
                  <text x="970" y="532" textAnchor="middle" fontSize="18" fontWeight="700" fill="#23415f">
                    홈플러스 북수원점
                  </text>

                  <rect
                    x="925"
                    y="240"
                    width="150"
                    height="52"
                    rx="16"
                    fill="#ffffff"
                    stroke="#e3eaf2"
                  />
                  <text x="1000" y="272" textAnchor="middle" fontSize="18" fontWeight="700" fill="#23415f">
                    장안구청
                  </text>
                </g>

                {/* directional helpers */}
                <g>
                  <path
                    d="M255 476 C350 430, 465 385, 560 350"
                    fill="none"
                    stroke="#8aa3c7"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                  />
                  <polygon points="553,340 575,345 560,360" fill="#8aa3c7" />

                  <path
                    d="M945 490 C860 450, 780 410, 690 360"
                    fill="none"
                    stroke="#8aa3c7"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                  />
                  <polygon points="680,348 702,353 688,368" fill="#8aa3c7" />

                  <path
                    d="M980 294 C890 305, 810 315, 705 330"
                    fill="none"
                    stroke="#8aa3c7"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                  />
                  <polygon points="696,321 717,328 700,342" fill="#8aa3c7" />
                </g>

                {/* title badge */}
                <g filter="url(#softShadow)">
                  <rect
                    x="40"
                    y="40"
                    width="320"
                    height="54"
                    rx="18"
                    fill="#ffffff"
                    stroke="#e3eaf2"
                  />
                  <text
                    x="70"
                    y="73"
                    fontSize="24"
                    fontWeight="800"
                    fill="#0d2d5e"
                  >
                    LOCATION GUIDE
                  </text>
                </g>
              </svg>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationGuideMap;
