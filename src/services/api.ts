/**
 * API Service for Backend Integration
 */

export interface ApiMember {
  id: number;
  email: string;
  name: string;
  generation: number;
  rank: string;
  description: string;
  status: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  skills: Array<{
    id: number;
    skill_name: string;
  }>;
  links: Array<{
    id: number;
    link_type: string;
    url: string;
  }>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

/**
 * Fetch all approved members from the backend API
 */
export async function fetchApprovedMembers(): Promise<ApiMember[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/members?status=APPROVED`, {
      headers: {
        'Accept': 'application/json',
      },
      // Next.js specific: disable caching for dynamic data
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch members: ${response.statusText}`);
    }

    const data: ApiMember[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching members:', error);
    throw error;
  }
}
