import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // 개발 중에는 public 이미지를 같은 이름으로 교체해도 바로 반영되도록 캐시를 짧게 둡니다.
    // (배포 환경은 기본값 유지)
    ...(process.env.NODE_ENV === 'development' ? { minimumCacheTTL: 1 } : {}),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;