/**
 * Transform backend API response to frontend Member type
 */

import { Member, MemberLinks } from '@/types/member';
import { ApiMember } from '@/services/api';

/**
 * Normalize URL by adding https:// prefix if missing
 */
function normalizeUrl(url: string): string {
  if (!url) return url;

  // If URL already starts with http:// or https://, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If URL starts with //, return as is (protocol-relative URL)
  if (url.startsWith('//')) {
    return url;
  }

  // Otherwise, add https:// prefix
  return `https://${url}`;
}

/**
 * Check if a string is a valid URL
 */
function isValidUrl(string: string | null): string | undefined {
  if (!string || string === 'null' || string === 'undefined' || string.trim() === '') {
    return undefined;
  }

  try {
    new URL(string);
    return string;
  } catch (_) {
    return undefined;
  }
}

/**
 * Transform API member data to frontend Member format
 */
export function transformApiMemberToMember(apiMember: ApiMember): Member {
  // Transform links array to MemberLinks object
  const links: MemberLinks = {};
  apiMember.links.forEach((link) => {
    const normalizedUrl = normalizeUrl(link.url);

    switch (link.link_type) {
      case 'github':
        links.github = normalizedUrl;
        break;
      case 'blog':
        links.blog = normalizedUrl;
        break;
      case 'linkedin':
        links.linkedin = normalizedUrl;
        break;
      case 'instagram':
        links.instagram = normalizedUrl;
        break;
      case 'notion':
        links.notion = normalizedUrl;
        break;
      case 'solved.ac':
        links.solvedAc = normalizedUrl;
        break;
      default:
        // Handle unknown link types or add to a generic field if needed
        break;
    }
  });

  // Extract skill names from skills array
  const tags = apiMember.skills.map((skill) => skill.skill_name);

  return {
    id: apiMember.id,
    name: apiMember.name,
    generation: apiMember.generation,
    status: apiMember.rank, // Map 'rank' to 'status'
    imageUrl: isValidUrl(apiMember.image_url), // Validate URL
    introduction: apiMember.description || '', // Map 'description' to 'introduction'
    tags,
    links,
  };
}

/**
 * Transform array of API members to array of Members
 */
export function transformApiMembersToMembers(apiMembers: ApiMember[]): Member[] {
  return apiMembers.map(transformApiMemberToMember);
}
