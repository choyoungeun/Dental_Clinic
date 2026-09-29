'use client';

const LocationGuideMap = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-[28px] border border-[#e8edf3] bg-[#f7f7f8] shadow-[0_12px_36px_rgba(7,27,51,0.06)]">
        <div className="grid lg:grid-cols-[420px_minmax(0,1fr)]">
          {/* =========================================================
              LEFT PANEL
          ========================================================= */}
          <div className="border-b border-[#e7ebf0] bg-[#f7f7f8] px-6 py-7 md:px-8 md:py-9 lg:border-b-0 lg:border-r">
            <div>
              <h2 className="break-keep text-[30px] font-bold leading-[1.3] tracking-[-0.04em] text-[#1d1f21] md:text-[36px]">
                수원세브란스치과{' '}
                <span className="text-[#1478b4]">진료시간 / 오시는 길</span>
              </h2>

              <div className="mt-6 rounded-[18px] border border-[#dfe7ef] bg-white px-4 py-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#0f5fa8]">
                    {/* moon icon */}
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
                    <p className="mt-1 break-keep text-[14px] leading-[1.8] text-[#5e6c7d]">
                      평일 낮 시간 내원이 어려운 분들을 위해
                      <span className="font-semibold text-[#0f5fa8]"> 야간진료</span>와
                      <span className="font-semibold text-[#0f5fa8]"> 토요일 진료</span>를 운영합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 오시는 길 */}
              <div className="mt-8">
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1478b4] md:text-[20px]">
                  오시는 길
                </h3>

                <p className="mt-4 break-keep text-[15px] leading-[1.85] text-[#666c74] md:text-[16px]">
                  경기 수원시 장안구 경수대로 969
                  <br />
                  한국메디컬빌딩 2층
                  <br />
                  <span className="font-medium text-[#4c5663]">
                    경희수원한방병원 동일 건물
                  </span>
                </p>

                <div className="mt-3 flex items-start gap-2">
                  <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1478b4]">
                    <span className="text-[12px] font-bold">P</span>
                  </div>
                  <p className="break-keep text-[15px] leading-[1.8] text-[#666c74] md:text-[16px]">
                    건물 내 주차 가능
                    <span className="text-[#4c5663]"> (지하주차장 / 무료지원)</span>
                  </p>
                </div>
              </div>

              {/* 진료시간 */}
              <div className="mt-10">
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1478b4] md:text-[20px]">
                  진료시간
                </h3>

                <div className="mt-4 rounded-[20px] bg-[#1f7dae] px-5 py-5 text-white shadow-[0_10px_26px_rgba(15,95,168,0.18)]">
                  <div className="space-y-3 text-[15px] font-semibold md:text-[16px]">
                    <div className="grid grid-cols-[76px_1fr] items-center gap-2">
                      <p>월 · 수</p>
                      <p>09:30 ~ 20:30</p>
                    </div>
                    <div className="grid grid-cols-[76px_1fr] items-center gap-2">
                      <p>화 · 목 · 금</p>
                      <p>09:30 ~ 18:30</p>
                    </div>
                    <div className="grid grid-cols-[76px_1fr] items-center gap-2">
                      <p>토요일</p>
                      <p>09:30 ~ 14:00</p>
                    </div>
                    <div className="grid grid-cols-[76px_1fr] items-center gap-2">
                      <p>점심시간</p>
                      <p>13:00 ~ 14:00</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[12px] leading-[1.7] text-white/85">
                    ※ 토요일은 점심시간 없이 진료
                    <br />
                    ※ 일요일 · 공휴일 휴진
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT SCHEMATIC MAP
          ========================================================= */}
          <div className="relative bg-[#f7f7f8] p-4 md:p-6 lg:p-8">
            <div className="overflow-hidden rounded-[24px] border border-[#edf1f5] bg-white">
              <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
                <svg
                  viewBox="0 0 1000 620"
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
                        floodOpacity="0.12"
                      />
                    </filter>

                    <filter
                      id="pinShadow"
                      x="-30%"
                      y="-30%"
                      width="180%"
                      height="180%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="10"
                        floodColor="#0b2f67"
                        floodOpacity="0.18"
                      />
                    </filter>
                  </defs>

                  {/* base */}
                  <rect width="1000" height="620" fill="#fbfbfb" />

                  {/* background roads - 참고 이미지 느낌 */}
                  <g stroke="#ececec" strokeWidth="32" strokeLinecap="round">
                    <path d="M0 500 L280 220" />
                    <path d="M300 150 L700 550" />
                    <path d="M580 120 L920 460" />
                    <path d="M710 95 L1000 385" />
                    <path d="M530 280 L930 280" />
                    <path d="M650 420 L980 420" />
                    <path d="M390 80 L390 560" />
                    <path d="M830 120 L830 560" />
                  </g>

                  {/* main cross road */}
                  <g>
                    <path
                      d="M370 70 L920 540"
                      stroke="#dedede"
                      strokeWidth="60"
                      strokeLinecap="round"
                    />
                    <path
                      d="M170 520 L470 220"
                      stroke="#dedede"
                      strokeWidth="60"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* 경수대로 */}
                  <g>
                    <path
                      d="M525 418 L1000 418"
                      stroke="#3dbc48"
                      strokeWidth="26"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* clinic building */}
                  <g filter="url(#softShadow)">
                    <rect
                      x="560"
                      y="86"
                      width="64"
                      height="112"
                      fill="#90b7da"
                    />
                    <polygon
                      points="560,86 592,60 624,86"
                      fill="#d8e6f2"
                    />
                    <rect x="572" y="98" width="10" height="16" fill="#f5f9fc" />
                    <rect x="590" y="98" width="10" height="16" fill="#f5f9fc" />
                    <rect x="572" y="124" width="10" height="16" fill="#f5f9fc" />
                    <rect x="590" y="124" width="10" height="16" fill="#f5f9fc" />
                    <rect x="572" y="150" width="10" height="16" fill="#f5f9fc" />
                    <rect x="590" y="150" width="10" height="16" fill="#f5f9fc" />
                    <rect x="582" y="48" width="8" height="12" fill="#90b7da" />
                    <rect x="595" y="42" width="8" height="18" fill="#90b7da" />
                  </g>

                  {/* clinic label */}
                  <g filter="url(#pinShadow)">
                    <rect
                      x="518"
                      y="210"
                      width="156"
                      height="38"
                      rx="19"
                      fill="#ffffff"
                      stroke="#1f7dae"
                      strokeWidth="3"
                    />
                    <text
                      x="596"
                      y="235"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#23415f"
                    >
                      수원세브란스치과
                    </text>
                  </g>

                  {/* intersection name */}
                  <text
                    x="590"
                    y="340"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#444"
                  >
                    장안사거리
                  </text>

                  {/* landmark dots + names */}
                  <g fill="#3e92c2">
                    <circle cx="455" cy="260" r="8" />
                    <circle cx="525" cy="310" r="8" />
                    <circle cx="710" cy="315" r="8" />
                    <circle cx="785" cy="235" r="8" />
                    <circle cx="850" cy="305" r="8" />
                    <circle cx="915" cy="285" r="8" />
                    <circle cx="620" cy="425" r="8" />
                    <circle cx="710" cy="470" r="8" />
                  </g>

                  <g fontSize="16" fill="#404040" fontWeight="600">
                    <text x="430" y="288">IBK기업은행</text>
                    <text x="500" y="338">신한은행</text>
                    <text x="680" y="292">KT위즈파크</text>
                    <text x="745" y="215">장안구청</text>
                    <text x="815" y="332">홈플러스 북수원점</text>
                    <text x="882" y="264">한일타운</text>
                    <text x="590" y="452">경기일보</text>
                    <text x="685" y="498">한일타운</text>
                  </g>

                  {/* station / bus style nodes */}
                  <g filter="url(#softShadow)">
                    <rect x="790" y="360" width="30" height="64" rx="5" fill="#cdbb98" />
                    <rect x="806" y="375" width="18" height="24" rx="4" fill="#ffd64d" />
                    <text x="815" y="393" textAnchor="middle" fontSize="20" fontWeight="800" fill="#333">
                      ①
                    </text>

                    <rect x="720" y="438" width="30" height="64" rx="5" fill="#cdbb98" />
                    <rect x="736" y="453" width="18" height="24" rx="4" fill="#ffd64d" />
                    <text x="745" y="471" textAnchor="middle" fontSize="20" fontWeight="800" fill="#333">
                      ④
                    </text>
                  </g>

                  {/* bus stops highlight */}
                  <g filter="url(#softShadow)">
                    <rect
                      x="430"
                      y="430"
                      width="150"
                      height="34"
                      rx="17"
                      fill="#fff4d5"
                      stroke="#ecd391"
                    />
                    <text
                      x="505"
                      y="452"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="800"
                      fill="#8b6a19"
                    >
                      경기일보 정류장
                    </text>

                    <rect
                      x="610"
                      y="510"
                      width="160"
                      height="34"
                      rx="17"
                      fill="#fff4d5"
                      stroke="#ecd391"
                    />
                    <text
                      x="690"
                      y="532"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="800"
                      fill="#8b6a19"
                    >
                      한일타운 정류장
                    </text>
                  </g>

                  {/* subway-like node feel for building orientation */}
                  <g filter="url(#softShadow)">
                    <circle cx="900" cy="500" r="54" fill="#ffffff" stroke="#36af45" strokeWidth="9" />
                    <rect x="862" y="470" width="76" height="28" rx="14" fill="#36af45" />
                    <text
                      x="900"
                      y="489"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#ffffff"
                    >
                      위치안내
                    </text>
                    <text
                      x="900"
                      y="522"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#222"
                    >
                      GYEONGSU-RO
                    </text>
                  </g>

                  {/* tiny place labels for depth */}
                  <g fontSize="13" fill="#b7bcc3" fontWeight="600">
                    <text x="820" y="90">북수원패션아울렛</text>
                    <text x="920" y="180">수원한일타운아파트</text>
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
