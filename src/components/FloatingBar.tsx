'use client';

const PHONE = '031-000-0000'; // TODO: 실제 대표번호로 교체
const NAVER_RESERVATION_URL = 'https://booking.naver.com/'; // TODO: 실제 네이버 예약 URL로 교체

const FloatingBar = () => {
  const goConsultation = () => {
    document
      .getElementById('consultation')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-[#dfe5ec] bg-white/95 shadow-[0_-10px_30px_rgba(7,27,51,0.10)] backdrop-blur-md md:bottom-5 md:left-1/2 md:right-auto md:w-[640px] md:-translate-x-1/2 md:overflow-hidden md:rounded-2xl md:border">
      <div className="grid h-[62px] grid-cols-[0.8fr_1.4fr_0.8fr] md:h-[64px]">
        <a
          href={`tel:${PHONE.replaceAll('-', '')}`}
          className="flex flex-col items-center justify-center gap-1 text-[#071b33] transition hover:bg-[#f6f8fb]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="text-[9px] font-bold md:text-[10px]">
            전화상담
          </span>
        </a>

        <a
          href={NAVER_RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#03C75A] px-4 text-white transition hover:brightness-95"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[13px] font-black text-[#03C75A]">
            N
          </span>
          <span className="text-[11px] font-bold md:text-[12px]">
            네이버 예약하기
          </span>
        </a>

        <button
          type="button"
          onClick={goConsultation}
          className="flex flex-col items-center justify-center gap-1 text-[#071b33] transition hover:bg-[#f6f8fb]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
          <span className="text-[9px] font-bold md:text-[10px]">
            간편상담
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingBar;