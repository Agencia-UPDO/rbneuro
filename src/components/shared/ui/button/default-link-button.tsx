'use client';

import { cn } from '@/src/utils/cn';
import Link from 'next/link';

export interface DefaultLinkButtonProps {
  href: string;
  children: string;
  className?: string;
  displayClassName?: string;
  external?: boolean;
}

const DefaultLinkButton = ({
  href,
  children,
  className,
  displayClassName,
  external = false,
}: Readonly<DefaultLinkButtonProps>) => {
  return (
    <Link
      href={href}
      aria-label={children}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group bg-background-7 hover:border-stroke-3 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[11px] transition-all duration-300 ease-in-out',
        displayClassName,
        className
      )}
    >
      <div className="h-full max-h-5 overflow-hidden">
        <span
          className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
          aria-hidden
        >
          {children}
        </span>
        <span
          className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
          aria-hidden
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export { DefaultLinkButton };
