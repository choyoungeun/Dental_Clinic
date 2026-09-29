'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
    navermap_authFailure?: () => void;
  }
}

/* =========================================================
   NAVER MAP CONFIG
========================================================= */

const NAVER_CLIENT_ID = '7le58fbcf6';
const NAVER_SCRIPT_ID = 'naver-maps-sdk';

const NAVER_SCRIPT_SRC =
  `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;

/*
  수원세브란스치과
  경기 수원시 장안구 경수대로 969
*/
const CLINIC_POSITION = {
  lat: 37.3039347,
  lng: 127.0047247,
};

type MapStatus =
  | 'loading'
  | 'ready'
  | 'error';

/* =========================================================
   LOAD NAVER MAP SDK
========================================================= */

const loadNaverMaps = () =>
  new Promise<void>((resolve, reject) => {
    if (window.naver?.maps) {
      resolve();
      return;
    }

    let script = document.getElementById(
      NAVER_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');

      script.id = NAVER_SCRIPT_ID;
      script.src = NAVER_SCRIPT_SRC;
      script.async = true;

      document.head.appendChild(script);
    }

    const handleLoad = () => {
      resolve();
    };

    const handleError = () => {
      script?.remove();

      reject(
        new Error(
          '네이버 지도 스크립트를 불러오지 못했습니다.',
        ),
      );
    };

    script.addEventListener(
      'load',
      handleLoad,
      { once: true },
    );

    script.addEventListener(
      'error',
      handleError,
      { once: true },
    );
  });

/* =========================================================
   CUSTOM MARKER

   실제 치과 좌표 위에

   ┌────────────────────────────┐
   │  YONSEI  수원세브란스치과   │
   └─────────────▼──────────────┘

   형태로 표시
========================================================= */

const getClinicMarkerHtml = () => `
  <div
    style="
      position: relative;
      width: 286px;
      height: 82px;
      pointer-events: none;
      font-family:
        Pretendard,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Noto Sans KR',
        sans-serif;
    "
  >

    <!-- =================================================
         MAIN MARKER
    ================================================== -->

    <div
      style="
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;

        width: 286px;
        height: 64px;

        box-sizing: border-box;

        padding: 0 18px 0 10px;

        background: #003876;

        border: 1px solid rgba(255,255,255,0.12);

        border-radius: 14px;

        box-shadow:
          0 10px 28px rgba(7, 27, 51, 0.23),
          0 3px 8px rgba(7, 27, 51, 0.16);
      "
    >

      <!-- ===============================================
           YONSEI MARK
      ================================================ -->

      <div
        style="
          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          box-sizing: border-box;

          background: #ffffff;

          border-radius: 50%;

          margin-right: 11px;
        "
      >
        <img
          src="/images/affiliations/yonsei.jpg"
          alt=""
          draggable="false"
          style="
            display: block;

            width: 42px;
            height: 42px;

            object-fit: cover;

            border-radius: 50%;
          "
        />
      </div>

      <!-- ===============================================
           CLINIC NAME
      ================================================ -->

      <div
        style="
          display: flex;
          align-items: center;

          min-width: 0;

          color: #ffffff;

          font-size: 21px;
          font-weight: 800;

          line-height: 1;

          letter-spacing: -0.8px;

          white-space: nowrap;
        "
      >
        수원세브란스치과
      </div>

    </div>

    <!-- =================================================
         POINTER
    ================================================== -->

    <div
      style="
        position: absolute;

        left: 50%;
        top: 63px;

        width: 0;
        height: 0;

        transform: translateX(-50%);

        border-left: 11px solid transparent;
        border-right: 11px solid transparent;

        border-top: 14px solid #003876;
      "
    ></div>

    <!-- =================================================
         EXACT LOCATION DOT
    ================================================== -->

    <div
      style="
        position: absolute;

        left: 50%;
        bottom: 0;

        width: 8px;
        height: 8px;

        transform: translateX(-50%);

        box-sizing: border-box;

        background: #003876;

        border: 2px solid #ffffff;

        border-radius: 9999px;

        box-shadow:
          0 2px 7px rgba(7, 27, 51, 0.32);
      "
    ></div>

  </div>
`;

/* =========================================================
   COMPONENT
========================================================= */

const NaverMap = () => {
  const mapRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [status, setStatus] =
    useState<MapStatus>('loading');

  useEffect(() => {
    let cancelled = false;

    /* =====================================================
       NAVER AUTH FAILURE
    ===================================================== */

    window.navermap_authFailure =
      () => {
        console.error(
          '[NaverMap] 인증 실패: 네이버 클라우드 콘솔 Maps Web 서비스 URL을 확인해 주세요.',
        );

        if (!cancelled) {
          setStatus('error');
        }
      };

    /* =====================================================
       INITIALIZE MAP
    ===================================================== */

    loadNaverMaps()
      .then(() => {
        if (
          cancelled ||
          !mapRef.current ||
          !window.naver?.maps
        ) {
          return;
        }

        const { naver } =
          window;

        const position =
          new naver.maps.LatLng(
            CLINIC_POSITION.lat,
            CLINIC_POSITION.lng,
          );

        /* ===============================================
           MAP
        =============================================== */

        const map =
          new naver.maps.Map(
            mapRef.current,
            {
              center:
                position,

              /*
                숫자가 클수록 확대.

                16.8 → 주변 건물까지 적당히 보임.
                더 확대하려면 17.2 정도.
              */
              zoom: 16.8,

              scaleControl:
                false,

              mapDataControl:
                false,

              zoomControl:
                false,

              logoControl:
                true,

              mapTypeControl:
                false,

              gestureHandling:
                'cooperative',
            },
          );

        /* ===============================================
           CUSTOM CLINIC MARKER
        =============================================== */

        new naver.maps.Marker({
          position,
          map,

          title:
            '수원세브란스치과',

          icon: {
            content:
              getClinicMarkerHtml(),

            size:
              new naver.maps.Size(
                286,
                82,
              ),

            /*
              실제 좌표가
              마커 중앙 하단에 위치하도록 설정
            */
            anchor:
              new naver.maps.Point(
                143,
                82,
              ),
          },

          zIndex: 1000,

          animation:
            naver.maps.Animation
              .DROP,
        });

        /* ===============================================
           MAP RESIZE + CENTER

           마커 자체가 위로 길기 때문에
           화면에서 너무 위에 붙지 않도록 조정
        =============================================== */

        window.setTimeout(
          () => {
            if (
              cancelled
            ) {
              return;
            }

            naver.maps.Event.trigger(
              map,
              'resize',
            );

            map.setCenter(
              position,
            );

            /*
              y 값을 키우면
              지도 내용이 아래쪽으로 이동하면서
              마커가 조금 더 위에 보임.

              35 정도가 무난함.
            */
            map.panBy(
              new naver.maps.Point(
                0,
                35,
              ),
            );
          },
          300,
        );

        if (!cancelled) {
          setStatus(
            'ready',
          );
        }
      })

      .catch((error) => {
        console.error(
          '[NaverMap]',
          error,
        );

        if (!cancelled) {
          setStatus(
            'error',
          );
        }
      });

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelled = true;

      if (
        window.navermap_authFailure
      ) {
        delete window
          .navermap_authFailure;
      }
    };
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl">

      {/* =================================================
          LOADING
      ================================================= */}

      {status ===
        'loading' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-50 text-sm text-gray-400">
          지도를 불러오고
          있습니다...
        </div>
      )}

      {/* =================================================
          ERROR
      ================================================= */}

      {status ===
        'error' && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 text-center text-sm text-gray-500">

          <p className="font-semibold text-[#071b33]">
            지도를 불러오지
            못했습니다.
          </p>

          <p className="text-[13px] leading-[1.7] text-gray-400">
            경기 수원시 장안구
            경수대로 969
            <br />
            한국메디컬빌딩 2층
            <br />
            아래 네이버 길찾기
            버튼으로 위치를
            확인해 주세요.
          </p>

        </div>
      )}

      {/* =================================================
          NAVER MAP

          styled-jsx 사용 안 함.
          Turbopack parse 문제 방지.
      ================================================= */}

      <div
        ref={mapRef}
        className="h-full min-h-[300px] w-full"
      />

    </div>
  );
};

export default NaverMap;
