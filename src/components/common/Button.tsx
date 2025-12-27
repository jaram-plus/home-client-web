'use client';

import Link from 'next/link';
import { ButtonProps } from '@/types';

/**
 * Reusable Button Component
 * 인라인 스타일과 호버 핸들러를 제거하고 Tailwind 클래스 사용
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  disabled = false,
  target,
  rel,
}: ButtonProps) => {
  // Helper function to detect external URLs
  const isExternalUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Determine target and rel for external links
  const linkTarget = target || (href && isExternalUrl(href) ? '_blank' : undefined);
  const linkRel = rel || (linkTarget === '_blank' ? 'noopener noreferrer' : undefined);
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant classes - Tailwind 사용, 인라인 스타일 제거
  const variantClasses = {
    primary:
      'bg-jaram-400 text-white shadow-lg hover:shadow-xl hover:bg-[#c0392b]',
    secondary:
      'bg-white text-gray-900 border-2 border-gray-300 hover:border-jaram-400 hover:text-jaram-400',
    outline:
      'border-2 border-white text-white hover:bg-white hover:text-jaram-400 bg-transparent',
  };

  // Disabled state
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={linkTarget}
        rel={linkRel}
        className={combinedClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
