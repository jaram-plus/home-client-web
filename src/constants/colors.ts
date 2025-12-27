/**
 * JARAM Brand Colors
 * 중앙 관리되는 색상 상수 - 인라인 스타일 제거용
 */

export const JARAM_COLORS = {
  primary: '#e50113',
  primaryDark: '#c0392b',
  primaryLight: '#ff1744',
} as const;

// Tailwind 클래스 매핑
export const TAILWIND_COLORS = {
  primary: 'text-jaram-400',
  bgPrimary: 'bg-jaram-400',
  bgPrimaryDark: 'hover:bg-[#c0392b]',
} as const;

// CSS 변수 및 인라인 스타일용
export const CSS_COLORS = {
  primary: 'var(--color-primary, #e50113)',
  primaryDark: 'var(--color-primary-dark, #c0392b)',
} as const;
