'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

declare global {
  interface Window {
    naver: any;
    navermap_authFailure?: () => void;
  }
}

const NAVER_CLIENT_ID = '7le58fbcf6';
const NAVER_SCRIPT_ID = 'naver-maps-sdk';

const NAVER_SCRIPT_SRC =
  `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;

/* 수원세브란스치과
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
   NAVER MAP LOAD
========================================================= */

const loadNaverMaps = () =>
  new Promise<void>(
    (resolve, reject) => {
      if (window.naver?.maps) {
        resolve();
        return;
      }

      let script =
        document.getElementById(
          NAVER_SCRIPT_ID,
        ) as HTMLScriptElement | null;

      if (!script) {
        script =
          document.createElement(
            'script',
          );

        script.id =
          NAVER_SCRIPT_ID;

        script.src =
          NAVER_SCRIPT_SRC;

        script.async = true;

        document.head.appendChild(
          script,
        );
      }

      script.addEventListener(
        'load',
        () => resolve(),
      );

      script.addEventListener(
        'error',
        () => {
          script?.remove();

          reject(
            new Error(
              '네이버 지도 스크립트를 불러오지 못했습니다.',
            ),
          );
        },
      );
    },
  );

/* =========================================================
   CUSTOM CLINIC MARKER
========================================================= */

const getClinicMarkerHtml = () => `
  <div
    style="
      position: relative;
      width: 250px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    "
  >

    <!-- 실제 네이비 마커 박스 -->
    <div
      style="
        position: absolute;
        left: 0;
        top: 0;

        width: 250px;
        height: 58px;

        display: flex;
        align-items: center;
        gap: 10px;

        padding: 0 18px 0 11px;

        box-sizing: border-box;

        background: #003876;

        border-radius: 12px;

        box-shadow:
          0 6px 18px rgba(11, 31, 58, 0.20),
          0 2px 5px rgba(11, 31, 58, 0.12);
      "
    >

      <!-- 연세대학교 마크 -->
      <div
        style="
          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          border-radius: 50%;

          background: white;
        "
      >
        <img
          src="/images/affiliations/yonsei.jpg"
          alt=""
          style="
            width: 38px;
            height: 38px;
            object-fit: cover;
            border-radius: 50%;
          "
        />
      </div>

      <!-- 치과명 -->
      <div
        style="
          color: white;

          font-family:
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            sans-serif;

          font-size: 20px;
          font-weight: 700;

          letter-spacing: -0.7px;

          line-height: 1;

          white-space: nowrap;
        "
      >
        수원세브란스치과
      </div>

    </div>

    <!-- 말풍선 삼각형 -->
    <div
      style="
        position: absolute;

        left: 50%;
        bottom: 2px;

        width: 0;
        height: 0;

        transform: translateX(-50%);

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;

        border-top: 12px solid #003876;
      "
    ></div>

  </div>
`;

/* =========================================================
   COMPONENT
========================================================= */

const NaverMap = () => {
  const mapRef =
    useRef<HTMLDivElement>(null);

  const [
    status,
    setStatus,
  ] =
    useState<MapStatus>(
      'loading',
    );

  useEffect(() => {
    let cancelled = false;

    window.navermap_authFailure =
      () => {
        console.error(
          '[NaverMap] 인증 실패: 네이버 클라우드 콘솔 > Maps > Web 서비스 URL에 현재 접속 주소를 등록해 주세요.',
        );

        if (!cancelled) {
          setStatus('error');
        }
      };

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

        /* =================================================
           MAP
        ================================================= */

        const map =
          new naver.maps.Map(
            mapRef.current,
            {
              center:
                position,

              zoom: 16.8,

              scaleControl:
                false,

              mapDataControl:
                false,

              zoomControl:
                false,

              gestureHandling:
                'cooperative',
            },
          );

        /* =================================================
           CUSTOM MARKER

           기본 네이버 핀 + InfoWindow 대신
           마커 전체를 직접 디자인
        ================================================= */

        new naver.maps.Marker({
          position,
          map,

          title:
            '수원세브란스치과',

          icon: {
            content:
              getClinicMarkerHtml(),

            /*
              마커 HTML 전체 크기
            */
            size:
              new naver.maps.Size(
                250,
                70,
              ),

            /*
              실제 좌표가 삼각형 아래 중앙에
              맞도록 anchor 지정
            */
            anchor:
              new naver.maps.Point(
                125,
                70,
              ),
          },

          /*
            다른 POI보다 위에 보이도록
          */
          zIndex: 100,
        });

        /* =================================================
           MAP POSITION

           마커가 위쪽으로 크게 올라오기 때문에
           지도 중심을 살짝 위로 이동시켜
           마커가 화면 중앙에 자연스럽게 보이게 함.
        ================================================= */

        window.setTimeout(
          () => {
            naver.maps.Event.trigger(
              map,
              'resize',
            );

            map.setCenter(
              position,
            );

            /*
              지도 자체를 아래쪽으로 조금 이동시키면
              마커가 화면 중앙보다 위쪽에 위치함.

              숫자를 조절해서 위치 튜닝 가능.
            */
            map.panBy(
              new naver.maps.Point(
                0,
                25,
              ),
            );
          },
          300,
        );

        setStatus(
          'ready',
        );
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

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="
        relative
        h-full
        min-h-[300px]
        w-full
        overflow-hidden
        rounded-2xl
      "
    >
      {/* =================================================
          LOADING
      ================================================= */}

      {status ===
        'loading' && (
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            bg-gray-50
            text-sm
            text-gray-400
          "
        >
          지도를 불러오고
          있습니다...
        </div>
      )}

      {/* =================================================
          ERROR
      ================================================= */}

      {status ===
        'error' && (
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            gap-1
            bg-gray-50
            px-6
            text-center
            text-sm
            text-gray-500
          "
        >
          <p
            className="
              font-semibold
              text-[#071b33]
            "
          >
            지도를 불러오지
            못했습니다.
          </p>

          <p
            className="
              text-[13px]
              text-gray-400
            "
          >
            경기 수원시 장안구
            경수대로 969
            한국메디컬빌딩 2층

            <br />

            아래
            &lsquo;네이버
            길찾기&rsquo;
            버튼으로 위치를
            확인해 주세요.
          </p>
        </div>
      )}

      <style jsx global>{`
        .naver-container
          .naver-controls {
          display: none !important;
        }
      `}</style>

      <div
        ref={mapRef}
        className="
          naver-container
          h-full
          w-full
        "
      />
    </div>
  );
};

export default NaverMap;
