/**
 * Transform backend API response to frontend Member type
 */

import { Member, MemberLinks } from '@/types/member';
import { ApiMember } from '@/services/api';

/**
 * Transform API member data to frontend Member format
 */
export function transformApiMemberToMember(apiMember: ApiMember): Member {
  // Transform links array to MemberLinks object
  const links: MemberLinks = {};
  apiMember.links.forEach((link) => {
    switch (link.link_type) {
      case 'github':
        links.github = link.url;
        break;
      case 'blog':
        links.blog = link.url;
        break;
      case 'linkedin':
        links.linkedin = link.url;
        break;
      case 'instagram':
        links.instagram = link.url;
        break;
      case 'notion':
        links.notion = link.url;
        break;
      case 'solved.ac':
        links.solvedAc = link.url;
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
    imageUrl: apiMember.image_url || '', // Use empty string if null
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
