import type { TeamMember } from '@/src/data/team';
import getMarkDownData from '@/src/utils/getMarkDownData';

export function getTeamMembers(): TeamMember[] {
  return getMarkDownData<{
    slug: string;
    content: string;
    title?: string;
    position?: string;
    image?: string;
  }>('src/data/team', false, 'title').map((item) => ({
    name: typeof item.title === 'string' ? item.title : '',
    position: typeof item.position === 'string' ? item.position : '',
    image: typeof item.image === 'string' ? item.image : '',
    href: `/team/${item.slug}`,
  }));
}
