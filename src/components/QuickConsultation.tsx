'use client';

import { FormEvent, useEffect, useState } from 'react';
import Reveal from './Reveal';

const treatments = [
  '임플란트',
  '자연치아 보존',
  '사랑니 · 구강외과',
  '충치 · 보철',
  '턱관절 · 외상치료',
  '잇몸치료',
  '기타 상담',
];

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const QuickConsultation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleTreatmentSelection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (
        typeof customEvent.detail === 'string' &&
        treatments.includes(customEvent.detail)
      ) {
        setTreatment(customEvent.detail);
      }
    };

    // 다른 페이지에서 상담하기를 눌러 이동해 온 경우
    const pending = window.sessionStorage.getItem('consultation-treatment');
    if (pending) {
      window.sessionStorage.removeItem('consultation-treatment');
      if (treatments.includes(pending)) setTreatment(pending);
    }

    window.addEventListener(
      'select-consultation-treatment',
      handleTreatmentSelection,
    );

    return () => {
      window.removeEventListener(
        'select-consultation-treatment',
        handleTreatmentSelection,
      );
    };
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !treatment || !privacy) {
      setSubmitState('error');
      setMessage('이름, 연락처, 진료과목과 개인정보 동의를 확인해 주세요.');
      return;
    }

    setSubmitState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          treatment,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message || '상담 신청을 접수하지 못했습니다.',
        );
      }

      setSubmitState('success');
      setMessage('상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.');
      setName('');
      setPhone('');
      setTreatment('');
      setPrivacy(false);
    } catch (error) {
      setSubmitState('error');
      setMessage(
        error instanceof Error
          ? error.message
          : '잠시 후 다시 시도해 주세요.',
      );
    }
  };

  return (
    <section
      id="consultation"
      className="scroll-mt-24 bg-[#ffffff] py-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white lg:grid lg:grid-cols-[0.72fr_1.28fr]">
          {/* LEFT */}
          <Reveal
            variant="left"
            className="relative overflow-hidden bg-[#0b2b50] px-6 py-7 text-white md:px-8 md:py-9"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/[0.06]" />
            <div className="absolute -right-7 -top-7 h-36 w-36 rounded-full border border-white/[0.08]" />

            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#8ec5ff]">
                QUICK CONSULTATION
              </p>

              <h2 className="mt-3 text-[30px] font-semibold leading-[1.3] tracking-[-0.04em] md:text-[34px]">
                간편 상담신청
              </h2>

              <p className="mt-3 max-w-sm text-[18px] leading-[1.75] text-white/60 md:text-[15px]">
                궁금하신 진료를 선택해 남겨 주세요.
                <br className="hidden md:block" />
                내용을 확인한 뒤 안내드립니다.
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4 text-[#8ec5ff]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[17px] text-white/45">
                    상담 내용을 확인한 후
                  </p>
                  <p className="mt-0.5 text-[17px] font-semibold">
                    순차적으로 연락드립니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variant="right" delay={150}>
          <form
            onSubmit={submit}
            className="bg-white px-5 py-6 md:px-8 md:py-8"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <label>
                <span className="mb-1.5 block text-[18px] font-bold text-[#071b33]">
                  이름
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="성함을 입력해 주세요"
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-[#dfe5ec] bg-[#fafbfd] px-4 text-[15px] text-[#071b33] outline-none transition placeholder:text-gray-300 focus:border-[#2f89fc] focus:bg-white"
                />
              </label>

              <label>
                <span className="mb-1.5 block text-[18px] font-bold text-[#071b33]">
                  연락처
                </span>
                <input
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  autoComplete="tel"
                  className="h-12 w-full rounded-xl border border-[#dfe5ec] bg-[#fafbfd] px-4 text-[15px] text-[#071b33] outline-none transition placeholder:text-gray-300 focus:border-[#2f89fc] focus:bg-white"
                />
              </label>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2.5 text-[18px] font-bold text-[#071b33]">
                상담받을 진료과목
              </legend>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {treatments.map((item) => {
                  const active = treatment === item;

                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setTreatment(item)}
                      className={[
                        'h-10 rounded-lg border px-2 text-[12px] font-semibold transition md:text-[13px]',
                        active
                          ? 'border-[#176fc2] bg-[#071b33] text-white'
                          : 'border-[#dfe5ec] bg-white text-gray-500 hover:border-[#7ebaff] hover:text-[#176fc2]',
                      ].join(' ')}
                      aria-pressed={active}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 md:flex-row md:items-center md:justify-between">
              <label className="flex cursor-pointer items-start gap-2">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-[2px] h-4 w-4 accent-[#176fc2]"
                />

                <span className="text-[14px] leading-[1.55] text-gray-400 md:text-[12px]">
                  상담을 위한 개인정보 수집·이용에 동의합니다.
                  <br />
                  <span className="text-gray-300">
                    수집항목: 이름, 연락처, 상담분야 · 목적 달성 후 파기
                  </span>
                </span>
              </label>

              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="flex h-12 min-w-[160px] shrink-0 items-center justify-center rounded-xl bg-[#071b33] px-7 text-[14px] font-bold text-white transition hover:bg-[#12365d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState === 'loading'
                  ? '접수 중...'
                  : '간편 상담 신청 →'}
              </button>
            </div>

            {message && (
              <p
                className={[
                  'mt-3 rounded-lg px-3 py-2 text-[12px] font-medium',
                  submitState === 'success'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-red-50 text-red-600',
                ].join(' ')}
                role="status"
              >
                {message}
              </p>
            )}
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default QuickConsultation;