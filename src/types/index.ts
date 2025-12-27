/**
 * Type Definitions Index
 */

export * from './member';
export * from './siteConfig';

// Common Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface PageHeroProps {
  title: string;
  highlight?: string;
  description: string;
}

export interface IconContainerProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface SocialLinkProps {
  platform: 'github' | 'instagram' | 'linkedin' | 'youtube' | 'blog';
  url: string;
  className?: string;
}
