import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';

interface PlatformMenuItemLinkProps {
  href: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  setMenuDropdownId: (id: string | null) => void;
}

const PlatformMenuItemLink = ({
  href,
  title,
  description,
  Icon,
  setMenuDropdownId,
}: PlatformMenuItemLinkProps) => {
  return (
    <Link
      href={href}
      onClick={() => setMenuDropdownId(null)}
      className="group/platform-menu-item relative flex items-start gap-2 rounded-xl p-3 transition-all duration-300"
    >
      <HoverBgTransform className="group-hover/platform-menu-item:bg-background-13/50 group-hover/platform-menu-item:border-stroke-1/20 rounded-xl border border-transparent group-hover/platform-menu-item:opacity-100" />
      <div className="border-stroke-3/20 bg-background-3 shadow-14 group-hover/platform-menu-item:bg-primary-500 relative z-10 mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg border p-2 transition-all duration-300">
        <Icon className="stroke-background-7/60 size-5" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <p className="text-tagline-2 text-background-7 font-sora font-normal">{title}</p>
          <div className="-translate-x-2 opacity-0 transition-all delay-200 duration-300 group-hover/platform-menu-item:translate-x-0 group-hover/platform-menu-item:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M8 5H10V7H8V5Z" className="fill-white" />
              <path d="M11 8H13V10H11V8Z" className="fill-white" />
              <path d="M14 11H16V13H14V11Z" className="fill-white" />
              <path d="M11 14H13V16H11V14Z" className="fill-white" />
              <path d="M8 17H10V19H8V17Z" className="fill-white" />
            </svg>
          </div>
        </div>
        <p className="text-tagline-3 text-background-7/60 font-normal">{description}</p>
      </div>
    </Link>
  );
};

PlatformMenuItemLink.displayName = 'PlatformMenuItemLink';
export default PlatformMenuItemLink;
