'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkNaver = setInterval(() => {
      if (window.naver && window.naver.maps) {
        setIsLoaded(true);
        clearInterval(checkNaver);
      }
    }, 100);

    setTimeout(() => clearInterval(checkNaver), 5000);
    return () => clearInterval(checkNaver);
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.naver) return;

    const { naver } = window;
    
    // 📍 경기도 수원시 장안구 경수대로 969
    // 📍 보내주신 구글 지도 링크의 정밀 좌표 적용
const location = new naver.maps.LatLng(37.3039347, 127.0047247);

    const mapOptions = {
      center: location,
      zoom: 16, // 대로변과 주변 건물(장안구청 등)이 잘 보이는 알맞은 줌 수치
      // --- 모든 컨트롤 제거 설정 ---
      scaleControl: false,      // 거리 표시 제거
      mapDataControl: false,    // 네이버 로고(데이터 정보) 제거
      zoomControl: false,       // 줌 바 제거
      // --------------------------
      gestureHandling: 'cooperative', 
    };

    const map = new naver.maps.Map(mapRef.current, mapOptions);

    // 초기화 시점에 한 번 더 위치를 잡아줍니다.
    naver.maps.Event.once(map, 'init', () => {
      map.refresh();
    });

    // 마커 생성
    new naver.maps.Marker({
      position: location,
      map: map,
      title: '수원세브란스치과',
      animation: naver.maps.Animation.DROP 
    });

    // 📍 [수정] 마커 상단 말풍선 텍스트 추가
    const contentString = [
      '<div style="padding:6px 12px; background:white; border:2px solid #2f89fc; border-radius:20px; font-size:12px; font-weight:bold; color:#2f89fc; box-shadow:0 2px 10px rgba(0,0,0,0.15); text-align:center; white-space:nowrap;">',
      '수원세브란스치과',
      '</div>'
    ].join('');

    new naver.maps.InfoWindow({
      content: contentString,
      backgroundColor: "transparent",
      borderWidth: 0,
      disableAnchor: true,
      pixelOffset: new naver.maps.Point(0, -10)
    }).open(map, location);

  }, [isLoaded]);

  return (
    <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400 text-sm z-20">
          지도를 불러오고 있습니다...
        </div>
      )}
      {/* CSS로 네이버 로고 등을 강제로 한 번 더 숨김 처리 */}
      <style jsx global>{`
        .naver-container .naver-controls { display: none !important; }
      `}</style>
      <div ref={mapRef} className="w-full h-full naver-container" />
    </div>
  );
};

export default NaverMap;