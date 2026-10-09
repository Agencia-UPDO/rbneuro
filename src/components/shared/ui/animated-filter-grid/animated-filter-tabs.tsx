'use client';

import { cn } from '@/src/utils/cn';
import { forwardRef, ReactNode } from 'react';

interface AnimatedFilterTabsProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedFilterTabs = forwardRef<HTMLDivElement, AnimatedFilterTabsProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap items-center justify-center gap-[15px]', className)}
    >
      {children}
    </div>
  )
);

AnimatedFilterTabs.displayName = 'AnimatedFilterTabs';
