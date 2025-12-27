/**
 * SVG Icon Components
 * 재사용 가능한 SVG 아이콘 컴포넌트
 */

interface IconProps {
  className?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
  role?: string;
}

export const ICONS = {
  document: ({ className = "w-8 h-8", ariaHidden = true, ariaLabel, role = "img" }: IconProps) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaHidden ? undefined : role}
      focusable={ariaHidden ? false : undefined}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  money: ({ className = "w-8 h-8", ariaHidden = true, ariaLabel, role = "img" }: IconProps) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaHidden ? undefined : role}
      focusable={ariaHidden ? false : undefined}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  checkmark: ({ className = "w-8 h-8", ariaHidden = true, ariaLabel, role = "img" }: IconProps) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaHidden ? undefined : role}
      focusable={ariaHidden ? false : undefined}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
} as const;

export type IconKey = keyof typeof ICONS;
