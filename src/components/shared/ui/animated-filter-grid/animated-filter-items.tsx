'use client';

import { cn } from '@/src/utils/cn';
import { ReactNode } from 'react';
import { useAnimatedFilterGridContext } from './animated-filter-grid-context';

interface AnimatedFilterItemsProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedFilterItems = ({ children, className }: AnimatedFilterItemsProps) => {
  const { containerRef } = useAnimatedFilterGridContext();

  return (
    <div ref={containerRef} className="relative">
      <div className={cn('grid grid-cols-12 gap-x-0 gap-y-[70px] lg:gap-x-8', className)}>
        {children}
      </div>
    </div>
  );
};
