import type { ServiceItem } from '@/src/data/services';
import getMarkDownData from '@/src/utils/getMarkDownData';

export function getServices(): ServiceItem[] {
  return getMarkDownData<{
    slug: string;
    content: string;
    title?: string;
    description?: string;
    image?: string;
    iconClass?: string;
  }>('src/data/services', false, 'title').map((item) => ({
    iconClass: typeof item.iconClass === 'string' ? item.iconClass : '',
    title: typeof item.title === 'string' ? item.title : '',
    description: typeof item.description === 'string' ? item.description : '',
    image: typeof item.image === 'string' ? item.image : '',
    href: `/services/${item.slug}`,
  }));
}
