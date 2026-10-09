'use client';

import { cn } from '@/src/utils/cn';
import { ReactNode } from 'react';
import { useAnimatedFilterGridContext } from './animated-filter-grid-context';

interface AnimatedFilterTabButtonProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const AnimatedFilterTabButton = ({
  value,
  children,
  className,
}: AnimatedFilterTabButtonProps) => {
  const { activeCategory, setActiveCategory } = useAnimatedFilterGridContext();

  const isActive = activeCategory === value;

  return (
    <button
      type="button"
      onClick={() => setActiveCategory(value)}
      data-state={isActive ? 'selected' : undefined}
      className={cn(
        'border-stroke-3/25 text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out',
        'data-[state=selected]:text-background-13/90 data-[state=selected]:bg-white',
        className
      )}
    >
      {children}
    </button>
  );
};
