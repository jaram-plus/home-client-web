/**
 * Member Type Definitions
 */

export interface Member {
  id: number;
  name: string;
  generation: number;
  status: string;
  imageUrl: string;
  introduction: string;
  tags: string[];
  links: MemberLinks;
}

export interface MemberLinks {
  github?: string;
  blog?: string;
  linkedin?: string;
  instagram?: string;
  notion?: string;
  solvedAc?: string;
}

export interface MemberCardProps {
  member: Member;
  showAllTags?: boolean;
}

export type StatusFilter = '전체' | '임원진' | '회원' | '졸업생';
