import NsImg420 from '@/public/images/ns-img-420.jpg';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import CompanyMenuItemLink from './company-menu-item-link';

interface MenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const leftColumnMenuItems: MenuItemProps[] = [
  {
    id: 'about-us',
    href: '/about',
    title: 'About Us',
    description: 'See how others are using NextSaaS',
    icon: <AboutIcon className="size-5" />,
  },
  {
    id: 'services',
    href: '/services',
    title: 'Services',
    description: 'See how others are using NextSaaS',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'our-team',
    href: '/team',
    title: 'Our Team',
    description: 'Dynamic content solutions',
    icon: <TeamIcon className="size-5" />,
  },
  {
    id: 'career',
    href: '#',
    title: 'Career',
    description: 'Free marketing templates',
    icon: <CareerIcon />,
  },
  {
    id: 'our-manifesto',
    href: '#',
    title: 'Our Manifesto',
    description: 'Our core values and principles',
    icon: <ManifestoIcon />,
  },
  {
    id: 'why-choose-us',
    href: '#',
    title: 'Why Choose Us',
    description: 'Our unique selling points and competitive advantages',
    icon: <WhyChooseUsIcon />,
  },
  {
    id: 'customers',
    href: '#',
    title: 'Customers',
    description: 'Schedule your demo today',
    icon: <CustomersIcon />,
  },
];

const CompanyMenu = ({
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
          '0.3 ease ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[752px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'company-mega-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'ease border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border p-4 transition-all duration-300 md:w-[752px] md:gap-x-6 xl:flex',
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <ul id="product-dropdown-menu" className="flex-1 space-y-1">
          {leftColumnMenuItems.map((item, index) => (
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              key={item.id}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={item.icon}
              showDivider={index !== leftColumnMenuItems.length - 1}
            />
          ))}
        </ul>

        <div className="flex-1 space-y-[15px]">
          <ul id="product-dropdown-menu" className="flex-1 space-y-1">
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="#"
              title="Use Cases"
              description="See how others are using NextSaaS"
              icon={<UseCaseIcon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/case-study"
              title="Case Studies"
              description="Real-world examples of our work"
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="#"
              title="Testimonials"
              description="What our customers say about us"
              icon={<TestimonialIcon />}
              showDivider={false}
            />
          </ul>
          <figure className="relative min-h-[220px] w-full max-w-full overflow-hidden rounded-[14px]">
            <Image
              src={NsImg420}
              alt="What's New"
              width={420}
              height={220}
              className="h-full w-full rounded-[14px] object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
