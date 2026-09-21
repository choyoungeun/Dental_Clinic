'use client';

import { FormEvent, useEffect, useState } from 'react';
import Reveal from './Reveal';

const treatments = [
  '자연치아 보존',
  '임플란트',
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

  /* =========================================================
     외부 진료페이지에서 선택한 진료과목 받기
  ========================================================= */

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

    const pending = window.sessionStorage.getItem(
      'consultation-treatment',
    );

    if (pending) {
      window.sessionStorage.removeItem('consultation-treatment');

      if (treatments.includes(pending)) {
        setTreatment(pending);
      }
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

  /* =========================================================
     제출
  ========================================================= */

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !treatment || !privacy) {
      setSubmitState('error');
      setMessage(
        '이름, 연락처, 상담 분야와 개인정보 동의를 확인해 주세요.',
      );
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
      setMessage(
        '상담 신청이 접수되었습니다. 내용을 확인한 후 연락드리겠습니다.',
      );

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
      className="scroll-mt-24 bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-hidden bg-[#071b33] lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              LEFT
          ===================================================== */}

          <Reveal
            variant="left"
            className="relative overflow-hidden px-6 py-9 text-white md:px-9 md:py-12 lg:px-10 lg:py-14"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.05]" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/[0.07]" />

            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#8ec5ff]">
                CONSULTATION
              </p>

              <h2 className="mt-4 break-keep text-[32px] font-semibold leading-[1.35] tracking-[-0.04em] md:text-[40px]">
                어떤 진료가 필요한지
                <br />
                상담해 보세요.
              </h2>

              <p className="mt-5 max-w-sm break-keep text-[14px] leading-[1.85] text-white/60 md:text-[15px]">
                현재 불편한 증상이나 상담받고 싶은 진료를 남겨주시면
                내용을 확인한 뒤 연락드립니다.
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                  BEFORE YOUR VISIT
                </p>

                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3 text-[13px] leading-[1.65] text-white/70">
                    <span className="text-[#8ec5ff]">01</span>
                    <span>현재 불편한 부위를 알려주세요.</span>
                  </li>

                  <li className="flex gap-3 text-[13px] leading-[1.65] text-white/70">
                    <span className="text-[#8ec5ff]">02</span>
                    <span>상담받고 싶은 진료를 선택해 주세요.</span>
                  </li>

                  <li className="flex gap-3 text-[13px] leading-[1.65] text-white/70">
                    <span className="text-[#8ec5ff]">03</span>
                    <span>확인 후 순차적으로 연락드립니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              FORM
          ===================================================== */}

          <Reveal
            variant="right"
            delay={150}
            className="bg-[#f7f9fc]"
          >
            <form
              onSubmit={submit}
              className="px-5 py-8 md:px-9 md:py-10 lg:px-10 lg:py-12"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label>
                  <span className="mb-2 block text-[13px] font-semibold text-[#071b33]">
                    이름
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="성함을 입력해 주세요"
                    autoComplete="name"
                    className="h-12 w-full border border-[#d9e1e9] bg-white px-4 text-[14px] text-[#071b33] outline-none transition placeholder:text-gray-300 focus:border-[#2f89fc]"
                  />
                </label>

                <label>
                  <span className="mb-2 block text-[13px] font-semibold text-[#071b33]">
                    연락처
                  </span>

                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="010-0000-0000"
                    autoComplete="tel"
                    className="h-12 w-full border border-[#d9e1e9] bg-white px-4 text-[14px] text-[#071b33] outline-none transition placeholder:text-gray-300 focus:border-[#2f89fc]"
                  />
                </label>
              </div>

              {/* 진료 선택 */}

              <fieldset className="mt-7">
                <legend className="text-[13px] font-semibold text-[#071b33]">
                  상담받을 진료
                </legend>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {treatments.map((item) => {
                    const active = treatment === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTreatment(item)}
                        aria-pressed={active}
                        className={[
                          'min-h-11 border px-3 py-2 text-[12px] font-semibold transition md:text-[13px]',
                          active
                            ? 'border-[#071b33] bg-[#071b33] text-white'
                            : 'border-[#d9e1e9] bg-white text-[#647383] hover:border-[#91afd0] hover:text-[#071b33]',
                        ].join(' ')}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* 개인정보 */}

              <div className="mt-7 border-t border-[#dfe5ec] pt-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(event) =>
                      setPrivacy(event.target.checked)
                    }
                    className="mt-[3px] h-4 w-4 accent-[#176fc2]"
                  />

                  <span className="break-keep text-[11px] leading-[1.7] text-gray-400 md:text-[12px]">
                    상담을 위한 개인정보 수집·이용에 동의합니다.
                    <br />
                    수집항목: 이름, 연락처, 상담분야 · 상담 목적 달성 후 파기
                  </span>
                </label>
              </div>

              {/* Submit */}

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-[11px] leading-[1.6] text-gray-400">
                  온라인 상담은 진단을 대신하지 않으며,
                  실제 치료 방법은 내원 후 검사와 진료를 통해 결정됩니다.
                </p>

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="flex h-12 min-w-[180px] shrink-0 items-center justify-center bg-[#071b33] px-7 text-[13px] font-bold text-white transition hover:bg-[#12365d] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState === 'loading'
                    ? '접수 중...'
                    : '상담 신청하기 →'}
                </button>
              </div>

              {/* Message */}

              {message && (
                <p
                  role="status"
                  className={[
                    'mt-4 border px-4 py-3 text-[12px] font-medium',
                    submitState === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-red-200 bg-red-50 text-red-600',
                  ].join(' ')}
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