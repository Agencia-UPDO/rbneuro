'use client';

import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode, useRef, useState } from 'react';
import { AnimatedFilterGridContext } from './animated-filter-grid-context';

gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

interface AnimatedFilterGridProps {
  children: ReactNode;
  defaultCategory?: string;
  className?: string;
}

export const AnimatedFilterGrid = ({
  children,
  defaultCategory = 'all',
  className,
}: AnimatedFilterGridProps) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const registerItem = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (!itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      const items = itemRefs.current;
      const container = containerRef.current;

      if (!items.length) return;

      const state = Flip.getState(items);
      const currentHeight = container?.offsetHeight || 0;

      if (container) {
        container.style.height = `${currentHeight}px`;
      }

      items.forEach((item) => {
        const category = item.dataset.category;
        const visible = activeCategory === 'all' || category === activeCategory;

        item.style.display = visible ? 'block' : 'none';
      });

      Flip.from(state, {
        duration: 0.8,
        scale: true,
        absolute: true,
        ease: 'power1.inOut',
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.2 }),
        onLeave: (els) =>
          gsap.to(els, {
            opacity: 0,
            scale: 0.96,
            duration: 0.25,
          }),
        onComplete: () => {
          if (container) container.style.height = '';
          ScrollTrigger.refresh();
        },
      });
    },
    {
      dependencies: [activeCategory],
      scope: containerRef,
      revertOnUpdate: false,
    }
  );

  return (
    <AnimatedFilterGridContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        registerItem,
        containerRef,
      }}
    >
      <div className={cn('space-y-[70px]', className)}>{children}</div>
    </AnimatedFilterGridContext.Provider>
  );
};
