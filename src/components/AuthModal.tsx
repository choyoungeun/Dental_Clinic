'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type Props = {
  onClose: () => void;
  onSuccess: (user: { name: string }) => void;
};

type Mode = 'login' | 'signup';

const inputClass =
  'h-12 w-full rounded-xl border border-[#dfe5ec] bg-[#fafbfd] px-4 text-[16px] text-[#071b33] outline-none transition placeholder:text-gray-400 focus:border-[#2f89fc] focus:bg-white';

/* 임상증례 "치료 전 사진" 열람용 로그인 / 회원가입 (메뉴에는 노출하지 않고 이 창으로만 진입) */
const AuthModal = ({ onClose, onSuccess }: Props) => {
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, [mode]);

  const switchMode = (next: Mode) => {
    setMode(next);
    setError('');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setError('');

    if (mode === 'signup' && !agree) {
      setError('개인정보 수집·이용에 동의해 주세요.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(mode === 'login' ? '/api/auth/login' : '/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          mode === 'login' ? { email, password } : { name, email, password, agree },
        ),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setError(result?.message || '잠시 후 다시 시도해 주세요.');
        return;
      }

      onSuccess(result.user);
    } catch {
      setError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[94vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl md:rounded-3xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="auth-title" className="text-[24px] font-extrabold text-[#071b33]">
              {mode === 'login' ? '로그인' : '회원가입'}
            </h3>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-gray-500">
              임상증례의 치료 전 사진은 회원에게만 공개됩니다.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-[#071b33]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 탭 */}
        <div className="mt-5 grid grid-cols-2 rounded-xl bg-[#f0f3f7] p-1">
          {(['login', 'signup'] as const).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => switchMode(item)}
              aria-pressed={mode === item}
              className={[
                'h-11 rounded-lg text-[15px] font-bold transition',
                mode === item ? 'bg-white text-[#071b33] shadow' : 'text-gray-500 hover:text-[#071b33]',
              ].join(' ')}
            >
              {item === 'login' ? '로그인' : '회원가입'}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mt-5 space-y-3">
          {mode === 'signup' && (
            <label className="block">
              <span className="mb-1.5 block text-[14px] font-bold text-[#071b33]">이름</span>
              <input
                ref={firstFieldRef}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="이름을 입력해 주세요"
                autoComplete="name"
                maxLength={30}
                required
                className={inputClass}
              />
            </label>
          )}

          <label className="block">
            <span className="mb-1.5 block text-[14px] font-bold text-[#071b33]">이메일</span>
            <input
              ref={mode === 'login' ? firstFieldRef : undefined}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@email.com"
              autoComplete="email"
              maxLength={100}
              required
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[14px] font-bold text-[#071b33]">비밀번호</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={mode === 'signup' ? '영문+숫자 포함 8자 이상' : '비밀번호'}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              maxLength={72}
              required
              className={inputClass}
            />
          </label>

          {mode === 'signup' && (
            <div className="rounded-xl border border-[#e3e9f0] bg-[#f7f9fc] p-4">
              <p className="text-[13px] leading-[1.7] text-gray-600">
                <strong className="text-[#071b33]">수집 항목</strong> 이름, 이메일, 비밀번호(암호화 저장)
                <br />
                <strong className="text-[#071b33]">이용 목적</strong> 임상증례 열람 회원 확인
                <br />
                <strong className="text-[#071b33]">보유 기간</strong> 회원 탈퇴 시까지
              </p>

              <label className="mt-3 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(event) => setAgree(event.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[#2f89fc]"
                />
                <span className="text-[14px] font-semibold leading-[1.5] text-[#1c2f45]">
                  개인정보 수집·이용에 동의합니다. (필수)
                </span>
              </label>
            </div>
          )}

          {error && (
            <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-[14px] font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-xl bg-[#2f89fc] text-[17px] font-extrabold text-white shadow-[0_8px_20px_rgba(47,137,252,0.3)] transition hover:bg-[#176fc2] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? '처리 중...' : mode === 'login' ? '로그인' : '가입하고 사진 보기'}
          </button>
        </form>

        <p className="mt-4 text-center text-[14px] text-gray-500">
          {mode === 'login' ? '아직 회원이 아니신가요?' : '이미 회원이신가요?'}{' '}
          <button
            type="button"
            onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
            className="font-bold text-[#176fc2] underline underline-offset-2"
          >
            {mode === 'login' ? '회원가입' : '로그인'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
