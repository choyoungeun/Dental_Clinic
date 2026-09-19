'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
    navermap_authFailure?: () => void;
  }
}

const NAVER_CLIENT_ID = '7le58fbcf6';
const NAVER_SCRIPT_ID = 'naver-maps-sdk';
const NAVER_SCRIPT_SRC = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;

// 수원세브란스치과의원 · 경기도 수원시 장안구 경수대로 969
const CLINIC_POSITION = { lat: 37.3039347, lng: 127.0047247 };

type MapStatus = 'loading' | 'ready' | 'error';

/* 스크립트를 직접 불러와 완료될 때까지 기다립니다. (시간 제한 없음) */
const loadNaverMaps = () =>
  new Promise<void>((resolve, reject) => {
    if (window.naver?.maps) {
      resolve();
      return;
    }

    let script = document.getElementById(NAVER_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = NAVER_SCRIPT_ID;
      script.src = NAVER_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () => {
      script?.remove();
      reject(new Error('네이버 지도 스크립트를 불러오지 못했습니다.'));
    });
  });

const NaverMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<MapStatus>('loading');

  useEffect(() => {
    let cancelled = false;

    // 네이버 클라우드 콘솔에 등록되지 않은 도메인에서 열면 이 함수가 호출됩니다.
    window.navermap_authFailure = () => {
      console.error(
        '[NaverMap] 인증 실패: 네이버 클라우드 콘솔 > Maps > Web 서비스 URL에 현재 접속 주소(예: http://localhost:3000)를 등록해 주세요.',
      );
      if (!cancelled) setStatus('error');
    };

    loadNaverMaps()
      .then(() => {
        if (cancelled || !mapRef.current || !window.naver?.maps) return;

        const { naver } = window;
        const position = new naver.maps.LatLng(CLINIC_POSITION.lat, CLINIC_POSITION.lng);

        const map = new naver.maps.Map(mapRef.current, {
          center: position,
          zoom: 16.8,
          scaleControl: false,
          mapDataControl: false,
          zoomControl: false,
          gestureHandling: 'cooperative',
        });

        new naver.maps.Marker({
          position,
          map,
          title: '수원세브란스치과',
          animation: naver.maps.Animation.DROP,
        });

        new naver.maps.InfoWindow({
          content: [
            '<div style="padding:6px 12px; background:white; border:2px solid #2f89fc; border-radius:20px; font-size:12px; font-weight:bold; color:#2f89fc; box-shadow:0 2px 10px rgba(0,0,0,0.15); text-align:center; white-space:nowrap;">',
            '수원세브란스치과',
            '</div>',
          ].join(''),
          backgroundColor: 'transparent',
          borderWidth: 0,
          disableAnchor: true,
          pixelOffset: new naver.maps.Point(0, -10),
        }).open(map, position);

        // 컨테이너 크기가 확정된 뒤 다시 한 번 그려 줍니다.
        window.setTimeout(() => {
          naver.maps.Event.trigger(map, 'resize');
          map.setCenter(position);
        }, 300);

        setStatus('ready');
      })
      .catch((error) => {
        console.error('[NaverMap]', error);
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl">
      {status === 'loading' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-50 text-sm text-gray-400">
          지도를 불러오고 있습니다...
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1 bg-gray-50 px-6 text-center text-sm text-gray-500">
          <p className="font-semibold text-[#071b33]">지도를 불러오지 못했습니다.</p>
          <p className="text-[13px] text-gray-400">
            경기 수원시 장안구 경수대로 969 한국메디컬빌딩 2층
            <br />
            아래 &lsquo;네이버 길찾기&rsquo; 버튼으로 위치를 확인해 주세요.
          </p>
        </div>
      )}

      <style jsx global>{`
        .naver-container .naver-controls {
          display: none !important;
        }
      `}</style>
      <div ref={mapRef} className="naver-container h-full w-full" />
    </div>
  );
};

export default NaverMap;
