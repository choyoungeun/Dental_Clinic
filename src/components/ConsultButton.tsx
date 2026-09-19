'use client';

import type { ReactNode } from 'react';

type Props = {
  /** 상담 폼의 진료과목 이름 (예: '임플란트') */
  value: string;
  className?: string;
  children: ReactNode;
};

/* 상담 신청: 홈의 간편 상담 폼으로 이동하면서 진료과목을 자동 선택합니다. */
const ConsultButton = ({ value, className = '', children }: Props) => {
  const go = () => {
    const target = document.getElementById('consultation');

    if (!target) {
      window.sessionStorage.setItem('consultation-treatment', value);
      window.location.href = '/#consultation';
      return;
    }

    window.dispatchEvent(new CustomEvent('select-consultation-treatment', { detail: value }));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button type="button" onClick={go} className={className}>
      {children}
    </button>
  );
};

export default ConsultButton;
