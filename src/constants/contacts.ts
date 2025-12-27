/**
 * JARAM Contact Information
 * 중앙 관리되는 연락처 정보
 * siteConfig.json에서 연락처 정보를 가져옵니다
 */

import siteConfig from '@/data/siteConfig.json';

export const CONTACTS = {
  president: {
    name: '회장',
    contact: siteConfig.contacts.president,
    description: '학회 전반적인 문의사항',
  },
  promotion: {
    name: '홍보 담당',
    contact: siteConfig.contacts.promo_manager,
    description: '모집 관련 문의사항',
  },
} as const;

export const CONTACT_DISPLAY = {
  president: siteConfig.contacts.president,
  promotion: siteConfig.contacts.promo_manager,
} as const;
