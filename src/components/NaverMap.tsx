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
   NAVER MAP SDK LOAD
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

const getClinicMarkerHtml = () => `
  <div
    style="
      position: relative;
      width: 198px;
      height: 59px;
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

    <div
      style="
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;

        width: 198px;
        height: 46px;

        box-sizing: border-box;

        padding: 0 11px 0 9px;

        background: #003876;

        border-radius: 10px;

        box-shadow:
          0 5px 13px rgba(7, 27, 51, 0.18),
          0 2px 4px rgba(7, 27, 51, 0.10);
      "
    >

      <!-- Yonsei logo -->
      <div
        style="
          width: 30px;
          height: 30px;

          flex: 0 0 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 8px;

          overflow: hidden;

          background: #ffffff;

          border-radius: 50%;
        "
      >
        <img
          src="/images/yonsei.png"
          alt=""
          draggable="false"
          style="
            display: block;
            width: 28px;
            height: 28px;
            object-fit: contain;
          "
        />
      </div>

      <!-- clinic name -->
      <div
        style="
          color: #ffffff;

          font-size: 17px;
          font-weight: 750;

          line-height: 1;

          letter-spacing: -0.65px;

          white-space: nowrap;
        "
      >
        수원세브란스치과
      </div>

    </div>

    <!-- pointer -->
    <div
      style="
        position: absolute;

        left: 50%;
        top: 45px;

        width: 0;
        height: 0;

        transform: translateX(-50%);

        border-left: 7px solid transparent;
        border-right: 7px solid transparent;

        border-top: 9px solid #003876;
      "
    ></div>

    <!-- location dot -->
    <div
      style="
        position: absolute;

        left: 50%;
        bottom: 0;

        width: 6px;
        height: 6px;

        transform: translateX(-50%);

        box-sizing: border-box;

        background: #003876;

        border: 2px solid #ffffff;

        border-radius: 9999px;

        box-shadow:
          0 1px 4px rgba(7, 27, 51, 0.28);
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
       AUTH FAILURE
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
       LOAD + INITIALIZE MAP
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
              center: position,

              zoom: 16.8,

              scaleControl: false,
              mapDataControl: false,
              zoomControl: false,
              mapTypeControl: false,

              logoControl: true,

              gestureHandling:
                'cooperative',
            },
          );

        /* ===============================================
           CUSTOM MARKER
        =============================================== */

       new naver.maps.Marker({
        position,
        map,

      title: '수원세브란스치과',

      icon: {
        content: getClinicMarkerHtml(),

        size: new naver.maps.Size(
          202,
          59,
        ),

        anchor: new naver.maps.Point(
          101,
          59,
        ),
      },

      zIndex: 1000,

      animation:
      naver.maps.Animation.DROP,
    });

        /* ===============================================
           RESIZE + CENTER
        =============================================== */

        window.setTimeout(
          () => {
            if (cancelled) {
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
              마커가 너무 위/아래로 치우쳐 보이면
              y값만 조절.

              20~30 정도 추천.
            */
            map.panBy(
              new naver.maps.Point(
                0,
                22,
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
      ================================================= */}

      <div
        ref={mapRef}
        className="h-full min-h-[300px] w-full"
      />

    </div>
  );
};

export default NaverMap;
