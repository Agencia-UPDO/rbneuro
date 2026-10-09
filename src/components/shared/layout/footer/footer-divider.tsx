'use client';

import { BorderExpand } from '@/src/components/animation/border-expand';

const FooterDivider = () => (
    <div className="py-12 lg:py-16">
      <BorderExpand
        delay={0.4}
        duration={2}
        scrollTrigger
        start="top 95%"
        end="top 50%"
      >
        <div className="bg-stroke-1/10 relative left-1/2 h-px w-full -translate-x-1/2" />
      </BorderExpand>
    </div>
);

export default FooterDivider;
