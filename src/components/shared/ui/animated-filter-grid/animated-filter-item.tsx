'use client';

import { cn } from '@/src/utils/cn';
import { ReactNode } from 'react';
import { useAnimatedFilterGridContext } from './animated-filter-grid-context';

interface AnimatedFilterItemProps {
  category: string;
  children: ReactNode;
  className?: string;
}

export const AnimatedFilterItem = ({ category, children, className }: AnimatedFilterItemProps) => {
  const { registerItem } = useAnimatedFilterGridContext();

  return (
    <div
      ref={registerItem}
      data-category={category}
      className={cn('col-span-12 md:col-span-6 lg:col-span-4', className)}
    >
      {children}
    </div>
  );
};
