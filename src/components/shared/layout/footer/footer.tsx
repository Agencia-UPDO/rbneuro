'use client';

import Opai1 from '@/public/images/gradient/opai-1.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import ShuffledTitle from '@/src/components/animation/shuffled-title';
import Image from 'next/image';
import FooterBottom from './footer-bottom';
import FooterDivider from './footer-divider';
import FooterLinks from './footer-links';
import FooterLogoContact from './footer-logo-contact';
import FooterNewsletter from './newsletter';

const Footer = () => (
  <footer className="bg-background-6 relative z-10 overflow-hidden pt-[50px] pb-[20px] lg:pt-[120px] lg:pb-[30px] xl:pt-[176px]">
    <div className="main-container relative z-10 py-6">
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <FooterNewsletter />
      </div>
      <FooterDivider />
      <div className="grid grid-cols-12 gap-y-10 md:gap-10 lg:gap-6">
        <FooterLogoContact />
        <FooterLinks />
      </div>
      <ShuffledTitle text="Nexsas" className="py-12 lg:py-16" />
      <FooterBottom />
    </div>
    <RevealAnimation delay={1.2} direction="right" offset={100}>
      <figure className="pointer-events-none absolute right-0 bottom-0 z-0 h-full w-full select-none">
        <Image
          src={Opai1}
          alt=""
          fill
          className="h-full w-full object-cover"
          sizes="100vw"
          priority={false}
        />
      </figure>
    </RevealAnimation>
  </footer>
);

export default Footer;
