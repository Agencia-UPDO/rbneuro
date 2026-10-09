'use client';

import { ChevronRightIcon } from '@/src/components/shared/icon';
import { cn } from '@/src/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

export interface SubmitPrimaryProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  children: string;
  className?: string;
}

const SubmitPrimary = ({
  children,
  className,
  type = 'submit',
  ...rest
}: Readonly<SubmitPrimaryProps>) => {
  return (
    <button
      type={type}
      className={cn(
        'group bg-background-7 hover:border-stroke-3 relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out',
        className
      )}
      {...rest}
    >
      <div className="h-5 overflow-hidden">
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

      <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
        <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
          <span className="stroke-background-10 absolute size-[16px] -translate-x-2 translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
            <ChevronRightIcon className="size-[18px]" />
          </span>
        </span>
        <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
          <ChevronRightIcon className="size-[18px]" />
        </span>
      </div>
    </button>
  );
};

export { SubmitPrimary };
