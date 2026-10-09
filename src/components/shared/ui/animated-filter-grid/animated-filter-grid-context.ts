'use client';

import { createContext, useContext } from 'react';

interface AnimatedFilterGridContextValue {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  registerItem: (el: HTMLDivElement | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const AnimatedFilterGridContext = createContext<AnimatedFilterGridContextValue | null>(null);

export const useAnimatedFilterGridContext = () => {
  const context = useContext(AnimatedFilterGridContext);

  if (!context) {
    throw new Error('AnimatedFilterGrid components must be used inside AnimatedFilterGrid');
  }

  return context;
};
