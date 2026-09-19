const LocationGuideMap = () => {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#dfe5ec] bg-white shadow-[0_10px_30px_rgba(7,27,51,0.06)]">
      {/* HEADER */}
      <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 md:flex-row md:items-end md:justify-between md:px-7">
        <div>
          
         
        </div>

       
      </div>

      <div className="bg-[#f7f9fc] p-2 md:p-5">
        <svg
          viewBox="0 0 1000 590"
          className="h-auto w-full"
          role="img"
          aria-label="경수대로 969 수원세브란스치과 주변 위치 약도"
        >
          <defs>
            <pattern id="guideGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="#edf1f5" strokeWidth="1" />
            </pattern>

            <filter id="guideShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="6"
                floodColor="#071b33"
                floodOpacity="0.10"
              />
            </filter>

            <filter id="guidePinShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="7"
                stdDeviation="8"
                floodColor="#176fc2"
                floodOpacity="0.28"
              />
            </filter>
          </defs>

          {/* BACKGROUND */}
          <rect width="1000" height="590" rx="22" fill="#f7f9fc" />
          <rect width="1000" height="590" rx="22" fill="url(#guideGrid)" />

          {/* NORTH */}
          <g transform="translate(64 57)">
            <circle r="27" fill="#fff" stroke="#dce4ec" />
            <path d="M0 -16L8 7L0 2L-8 7Z" fill="#071b33" />
            <text
              x="0"
              y="21"
              textAnchor="middle"
              fontSize="9"
              fontWeight="800"
              fill="#071b33"
            >
              N
            </text>
          </g>

          {/* =====================================================
              GYEONGSU-DAERO
              실제 위치 이해를 위해 중앙의 큰 축으로 표현
          ====================================================== */}
          <path
            d="M470 -40 L555 630"
            stroke="#e3e9ef"
            strokeWidth="148"
            strokeLinecap="round"
          />

          <path
            d="M470 -40 L555 630"
            stroke="#ffffff"
            strokeWidth="116"
            strokeLinecap="round"
          />

          {/* ROAD EDGES */}
          <path
            d="M413 -30 L498 620"
            fill="none"
            stroke="#ccd5df"
            strokeWidth="2"
          />
          <path
            d="M527 -45 L612 605"
            fill="none"
            stroke="#ccd5df"
            strokeWidth="2"
          />

          {/* CENTER LINE */}
          <path
            d="M470 -35 L555 620"
            fill="none"
            stroke="#b8c3ce"
            strokeWidth="3"
            strokeDasharray="18 15"
          />

          {/* ROAD NAME */}
          <g transform="translate(513 295) rotate(82.5)">
            <rect
              x="-78"
              y="-15"
              width="156"
              height="30"
              rx="15"
              fill="#071b33"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="13"
              fontWeight="800"
              letterSpacing="3"
              fill="#fff"
            >
              경 수 대 로
            </text>
          </g>

          {/* NORTH LABEL */}
          <g transform="translate(414 24)">
            <rect width="180" height="34" rx="17" fill="#fff" stroke="#dfe5ec" />
            <text
              x="90"
              y="22"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#667085"
            >
              ↑ 북수원 · 파장동 방향
            </text>
          </g>

          {/* =====================================================
              LEFT/WEST SIDE
              병원 + 수원종합운동장/KT위즈파크
          ====================================================== */}

          {/* CLINIC */}
          <g filter="url(#guideShadow)">
            <rect
              x="72"
              y="100"
              width="292"
              height="158"
              rx="22"
              fill="#ffffff"
              stroke="#2f89fc"
              strokeWidth="3"
            />

            <rect
              x="94"
              y="122"
              width="93"
              height="25"
              rx="12.5"
              fill="#eaf3ff"
            />
            <text
              x="140"
              y="139"
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="#176fc2"
            >
              HERE · 2F
            </text>

            <text
              x="94"
              y="184"
              fontSize="23"
              fontWeight="800"
              fill="#071b33"
            >
              수원세브란스치과
            </text>

            <text
              x="94"
              y="212"
              fontSize="13"
              fontWeight="700"
              fill="#2f89fc"
            >
              한국메디컬빌딩 2층
            </text>

            <text x="94" y="238" fontSize="12" fill="#667085">
              경수대로 969
            </text>
          </g>

          {/* CLINIC CONNECTOR */}
          <path
            d="M364 182 C390 182 408 176 429 165"
            fill="none"
            stroke="#2f89fc"
            strokeWidth="4"
            strokeDasharray="7 7"
            strokeLinecap="round"
          />

          {/* PIN */}
          <g transform="translate(435 160)" filter="url(#guidePinShadow)">
            <path
              d="M0 -30C-19 -30 -33 -16 -33 3C-33 27 0 57 0 57C0 57 33 27 33 3C33 -16 19 -30 0 -30Z"
              fill="#2f89fc"
            />
            <circle cx="0" cy="2" r="11" fill="#fff" />
            <circle cx="0" cy="2" r="5" fill="#2f89fc" />
          </g>

          {/* STADIUM / KT WIZ PARK */}
          <g filter="url(#guideShadow)">
            <rect
              x="70"
              y="367"
              width="310"
              height="128"
              rx="20"
              fill="#ffffff"
              stroke="#dfe5ec"
            />

            <ellipse
              cx="121"
              cy="420"
              rx="34"
              ry="24"
              fill="#edf5ff"
              stroke="#b7d4ef"
              strokeWidth="3"
            />
            <ellipse
              cx="121"
              cy="420"
              rx="21"
              ry="12"
              fill="#ffffff"
              stroke="#b7d4ef"
              strokeWidth="2"
            />

            <text
              x="170"
              y="397"
              fontSize="10"
              fontWeight="700"
              fill="#8a96a3"
            >
              경수대로 893
            </text>

            <text
              x="170"
              y="423"
              fontSize="18"
              fontWeight="800"
              fill="#071b33"
            >
              수원종합운동장
            </text>

            <text
              x="170"
              y="449"
              fontSize="16"
              fontWeight="800"
              fill="#176fc2"
            >
              KT 위즈파크
            </text>

            <text
              x="170"
              y="472"
              fontSize="10"
              fontWeight="700"
              fill="#8a96a3"
            >
              병원과 같은 경수대로 측
            </text>
          </g>

          {/* LEFT SIDE LABEL */}
          <g transform="translate(126 314)">
            <rect
              width="210"
              height="31"
              rx="15.5"
              fill="#eaf3ff"
            />
            <text
              x="105"
              y="20"
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="#176fc2"
            >
              병원 · 종합운동장 / 위즈파크 측
            </text>
          </g>

          {/* =====================================================
              RIGHT/EAST SIDE
              한일타운 + 홈플러스 + 장안구청
          ====================================================== */}

          {/* HANIL TOWN */}
          <g filter="url(#guideShadow)">
            <rect
              x="648"
              y="70"
              width="270"
              height="104"
              rx="20"
              fill="#ffffff"
              stroke="#dfe5ec"
            />

            <g transform="translate(670 91)">
              <rect x="0" y="12" width="28" height="43" rx="3" fill="#dce8f4" />
              <rect x="34" y="0" width="37" height="55" rx="3" fill="#c8dcef" />
              <rect x="77" y="16" width="27" height="39" rx="3" fill="#dce8f4" />
            </g>


            <text
              x="818"
              y="142"
              textAnchor="middle"
              fontSize="21"
              fontWeight="800"
              fill="#071b33"
            >
              수원한일타운
            </text>
          </g>

          {/* HOMEPLUS + JANGAN OFFICE */}
          <g filter="url(#guideShadow)">
            <rect
              x="634"
              y="225"
              width="304"
              height="232"
              rx="22"
              fill="#ffffff"
              stroke="#dfe5ec"
            />

            <rect
              x="654"
              y="244"
              width="140"
              height="25"
              rx="12.5"
              fill="#f1f6fc"
            />

            

            {/* HOMEPLUS */}
            <g transform="translate(654 287)">
              <rect
                width="264"
                height="68"
                rx="14"
                fill="#f8fafc"
                stroke="#e5eaf0"
              />

              <circle cx="31" cy="34" r="20" fill="#eaf3ff" />
              <path
                d="M21 34H41M31 24V44"
                stroke="#176fc2"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              <text
                x="65"
                y="29"
                fontSize="10"
                fontWeight="700"
                fill="#8a96a3"
              >
                경수대로 930
              </text>

              <text
                x="65"
                y="50"
                fontSize="17"
                fontWeight="800"
                fill="#071b33"
              >
                홈플러스 북수원점
              </text>
            </g>

            {/* NEARBY CONNECTOR */}
            <path
              d="M687 369 H886"
              stroke="#ccd6e0"
              strokeWidth="2"
              strokeDasharray="6 6"
            />


            {/* JANGAN OFFICE */}
            <g transform="translate(654 397)">
              <rect
                width="264"
                height="44"
                rx="13"
                fill="#f8fafc"
                stroke="#e5eaf0"
              />

              <rect
                x="17"
                y="11"
                width="28"
                height="23"
                rx="3"
                fill="#d5e0ea"
              />

              <text
                x="62"
                y="28"
                fontSize="16"
                fontWeight="800"
                fill="#071b33"
              >
                장안구청
              </text>
            </g>
          </g>

         

          {/* CROSS ROAD VISUAL HINT */}
          <g transform="translate(454 338)">
            <path
              d="M-18 0H18"
              stroke="#2f89fc"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M11 -7L18 0L11 7"
              fill="none"
              stroke="#2f89fc"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g transform="translate(565 338)">
            <path
              d="M-18 0H18"
              stroke="#2f89fc"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M-11 -7L-18 0L-11 7"
              fill="none"
              stroke="#2f89fc"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* SOUTH DIRECTION */}
          <g transform="translate(417 535)">
            <rect width="190" height="34" rx="17" fill="#fff" stroke="#dfe5ec" />
            <text
              x="95"
              y="22"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#667085"
            >
              ↓ 수원 시내 방향
            </text>
          </g>

          
        </svg>
      </div>

      {/* QUICK GUIDE */}
      <div className="grid border-t border-gray-100 bg-white md:grid-cols-3">
        <div className="border-b border-gray-100 px-5 py-4 md:border-b-0 md:border-r md:px-6">
          <p className="text-[9px] font-bold tracking-[0.18em] text-[#2f89fc]">
            SAME SIDE
          </p>
          <p className="mt-1 text-[12px] font-semibold text-[#071b33]">
            병원 · 수원종합운동장 · KT위즈파크
          </p>
          
        </div>

        <div className="border-b border-gray-100 px-5 py-4 md:border-b-0 md:border-r md:px-6">
          <p className="text-[9px] font-bold tracking-[0.18em] text-[#2f89fc]">
            OPPOSITE SIDE
          </p>
          <p className="mt-1 text-[12px] font-semibold text-[#071b33]">
            홈플러스 북수원점 · 장안구청
          </p>
         
        </div>

        <div className="px-5 py-4 md:px-6">
          <p className="text-[9px] font-bold tracking-[0.18em] text-[#2f89fc]">
            DESTINATION
          </p>
          <p className="mt-1 text-[12px] font-semibold text-[#071b33]">
            경수대로 969 · 한국메디컬빌딩 2층
          </p>
          <p className="mt-1 text-[10px] leading-[1.6] text-gray-400">
            내비게이션에는 도로명 주소를 입력해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationGuideMap;