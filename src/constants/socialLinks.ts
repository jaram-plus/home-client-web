/**
 * JARAM Social Media Links
 * 중앙 관리되는 소셜 미디어 링크
 */

import siteConfig from '@/data/siteConfig.json';

export const SOCIAL_LINKS = {
  instagram: siteConfig.social.instagram,
  github: siteConfig.social.github,
  youtube: siteConfig.youtubeChannelUrl,
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const SOCIAL_PLATFORM_INFO: Record<
  SocialPlatform,
  { name: string; icon: string }
> = {
  instagram: { name: 'Instagram', icon: 'instagram' },
  github: { name: 'GitHub', icon: 'github' },
  youtube: { name: 'YouTube', icon: 'youtube' },
} as const;
