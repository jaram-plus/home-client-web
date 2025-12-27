/**
 * Site Configuration Type Definitions
 */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  applyFormUrl: string;
  youtubeChannelUrl: string;
  contacts: {
    president: string;
    promo_manager: string;
  };
  social: {
    instagram: string;
    github: string;
  };
}

export interface SiteConfigData {
  siteConfig: SiteConfig;
}
