/**
 * JARAM Contact Information
 * 중앙 관리되는 연락처 정보
 */

export const CONTACTS = {
  president: {
    name: '회장',
    contact: '신동빈 010-2491-8183',
    description: '학회 전반적인 문의사항',
  },
  promotion: {
    name: '홍보 담당',
    contact: '김승민 010-5585-9203',
    description: '모집 관련 문의사항',
  },
} as const;

export const CONTACT_DISPLAY = {
  president: '신동빈 010-2491-8183',
  promotion: '김승민 010-5585-9203',
} as const;
