import {
  BlogIcon,
  FaqIcon,
  GlossaryIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import CompanyMenuItemLink from './company-menu-item-link';

type ResourcesMenuItem = {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const resourcesMenuItems: ResourcesMenuItem[] = [
  { href: '/blog', title: 'Blog', description: 'Latest articles and insights', icon: <BlogIcon /> },
  {
    href: '#',
    title: 'Tutorial',
    description: 'Step-by-step guides and tips',
    icon: <TutorialIcon />,
  },
  { href: '#', title: 'FAQ', description: 'Common questions answered', icon: <FaqIcon /> },
  {
    href: '#',
    title: 'Glossary',
    description: 'Terms and definitions',
    icon: <GlossaryIcon />,
  },
  {
    href: '#',
    title: 'Support',
    description: 'Get help and assistance',
    icon: <SupportIcon />,
  },
  {
    href: '#',
    title: 'Success Stories',
    description: 'Latest updates and changes',
    icon: <SuccessIcon />,
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <ul
        id="resources-dropdown-menu"
        className={cn(
          'ease border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 space-y-1 rounded-[20px] border p-3 transition-all duration-300',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        {resourcesMenuItems.map((item, index) => (
          <CompanyMenuItemLink
            key={item.title}
            {...item}
            showDivider={index < resourcesMenuItems.length - 1}
            setMenuDropdownId={setMenuDropdownId}
          />
        ))}
      </ul>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
