import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';

interface PlanSupportMenuItemLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  showDivider?: boolean;
  setMenuDropdownId: (id: string | null) => void;
}

const PlanSupportMenuItemLink = ({
  href,
  title,
  icon,
  showDivider = false,
  setMenuDropdownId,
}: PlanSupportMenuItemLinkProps) => (
  <>
    <li className="group/item">
      <Link
        href={href}
        onClick={() => setMenuDropdownId(null)}
        className="relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300"
      >
        <HoverBgTransform className="group-hover/item:opacity-100" />
        <div className="shadow-14 border-stroke-3/20 bg-background-3 [&_svg]:stroke-background-7/80 group-hover/item:[&_svg]:stroke-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border p-3">
          {icon}
        </div>
        <div className="relative z-10">
          <p className="text-tagline-2 font-sora text-background-7 font-normal">{title}</p>
        </div>
      </Link>
    </li>
    {showDivider && (
      <li>
        <div className="bg-stroke-4 mx-auto h-px w-[calc(100%-16px)]" />
      </li>
    )}
  </>
);
PlanSupportMenuItemLink.displayName = 'PlanSupportMenuItemLink';
export default PlanSupportMenuItemLink;
