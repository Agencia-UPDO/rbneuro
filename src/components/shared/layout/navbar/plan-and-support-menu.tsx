import NewArrowWhiteIcon from '@/public/images/new-arrow-white.svg';
import FeaturedImage from '@/public/images/ns-img-423.jpg';
import {
  AffiliatePolicyIcon,
  AffiliateProgramIcon,
  GDPRIcon,
  LegalNoticeIcon,
  LoginIcon,
  PrivacyIcon,
  ReferralProgramIcon,
  RefundPolicyIcon,
  SignUpIcon,
  TermsConditionsIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import PlanSupportMenuItemLink from './plan-support-menu-item-link';

export interface PlanSupportMenuItem {
  id: string;
  href: string;
  title: string;
  icon: React.ReactNode;
}

const accountMenuItems: PlanSupportMenuItem[] = [
  { id: 'login', href: '/login', title: 'Login', icon: <LoginIcon className="size-5" /> },
  {
    id: 'signup',
    href: '/signup',
    title: 'Create Account',
    icon: <SignUpIcon className="size-5" />,
  },
  {
    id: 'referral',
    href: '#',
    title: 'Referral Program',
    icon: <ReferralProgramIcon className="size-5" />,
  },
  {
    id: 'affiliates',
    href: '#',
    title: 'Affiliate',
    icon: <AffiliateProgramIcon className="size-5" />,
  },
  {
    id: 'affiliate-policy',
    href: '#',
    title: 'Affiliate Policy',
    icon: <AffiliatePolicyIcon className="size-5" />,
  },
];

const legalMenuItems: PlanSupportMenuItem[] = [
  {
    id: 'terms',
    href: '#',
    title: 'Terms & Conditions',
    icon: <TermsConditionsIcon className="size-5" />,
  },
  {
    id: 'privacy',
    href: '#',
    title: 'Privacy Policy',
    icon: <PrivacyIcon className="size-5" />,
  },
  {
    id: 'refund',
    href: '#',
    title: 'Refund Policy',
    icon: <RefundPolicyIcon className="size-5" />,
  },
  { id: 'gdpr', href: '#', title: 'GDPR', icon: <GDPRIcon className="size-5" /> },
  { id: 'legal', href: '#', title: 'Legal', icon: <LegalNoticeIcon className="size-5" /> },
];

const PlanAndSupportMenu = ({
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
          'ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[972px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <div
        id="plan-and-support-mega-menu"
        className={cn(
          'ease border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border p-6 transition-all duration-300 lg:w-[972px] xl:block',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-4">
            <p className="text-tagline-2 font-sora text-background-7 p-3 font-medium">Account</p>
            <ul id="plan-support-account-menu" className="flex-1 space-y-1">
              {accountMenuItems.map((item, index) => (
                <PlanSupportMenuItemLink
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  icon={item.icon}
                  showDivider={index !== accountMenuItems.length - 1}
                  setMenuDropdownId={setMenuDropdownId}
                />
              ))}
            </ul>
          </div>
          <div className="col-span-4">
            <p className="text-tagline-2 font-sora text-background-7 p-3 font-medium">Legal</p>
            <ul id="plan-support-legal-menu" className="flex-1 space-y-1">
              {legalMenuItems.map((item, index) => (
                <PlanSupportMenuItemLink
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  icon={item.icon}
                  showDivider={index !== legalMenuItems.length - 1}
                  setMenuDropdownId={setMenuDropdownId}
                />
              ))}
            </ul>
          </div>
          <div className="col-span-4">
            <p className="text-tagline-2 font-sora text-background-7/60 mb-2 p-3 font-medium">
              Featured
            </p>
            <article
              onClick={() => setMenuDropdownId(null)}
              className="border-stroke-3/60 group/blog w-full space-y-3 rounded-[30px] border p-2"
            >
              <Link
                href="/blog/automated-reporting-connect-ads-plus-crm-and-end-manual-updates"
                className="block"
              >
                <figure className="h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src={FeaturedImage}
                    alt="Featured"
                    width={400}
                    height={220}
                    className="h-full w-full rounded-3xl object-cover transition-transform duration-500 ease-in-out group-hover/blog:scale-105"
                  />
                </figure>
              </Link>
              <div className="space-y-7 p-2">
                <Link
                  href="/blog/automated-reporting-connect-ads-plus-crm-and-end-manual-updates"
                  className="block"
                >
                  <p className="text-tagline-2 font-sora text-background-7/60 font-normal">
                    AI Trends to Watch in 2025
                  </p>
                </Link>
                <Link
                  href="/blog/automated-reporting-connect-ads-plus-crm-and-end-manual-updates"
                  className="bg-background-13 ring-background-12 relative flex h-9.5 w-16 items-center justify-center space-y-5 overflow-hidden rounded-[40px] px-5 py-2 ring-[6px] transition-all duration-500 ease-in-out"
                >
                  <figure className="relative size-6 items-center justify-center overflow-hidden">
                    <Image
                      src={NewArrowWhiteIcon}
                      alt="new-arrow"
                      width={24}
                      height={24}
                      className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover/blog:translate-x-1"
                    />
                    <Image
                      src={NewArrowWhiteIcon}
                      alt="new-arrow"
                      width={24}
                      height={24}
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover/blog:translate-x-6"
                    />
                  </figure>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanAndSupportMenu.displayName = 'PlanAndSupportMenu';
export default PlanAndSupportMenu;
