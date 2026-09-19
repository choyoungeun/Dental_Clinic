/** 카드 순차 등장용 지연 시간(ms). 기본 100ms 간격, 최대 500ms.
 *  서버/클라이언트 컴포넌트 어디서나 쓸 수 있도록 별도 파일로 둡니다. */
export const stagger = (index: number, step = 100, max = 500) =>
  Math.min(index * step, max);
