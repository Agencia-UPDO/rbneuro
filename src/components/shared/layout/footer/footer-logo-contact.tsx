'use client';

import LogoWhite from '@/public/images/logo/logo-white.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

const FooterLogoContact = () => (
  <div className="col-span-12 lg:col-span-4">
    <div className="space-y-8">
      <RevealAnimation delay={0.1}>
        <Link href="/" className="-ml-3.5 block">
          <span className="sr-only">Nexsas</span>
          <figure className="relative h-[40px] w-[166px]">
            <Image src={LogoWhite} alt="Nexsas" fill className="object-contain object-left" />
          </figure>
        </Link>
      </RevealAnimation>
      <div className="space-y-6">
        <RevealAnimation delay={0.2}>
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Address:</p>
            <p className="text-tagline-3 font-normal text-white/50">
              30 North Gould Street, Sheridan, WY 8280
            </p>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Contact:</p>
            <Link
              href="tel:+12025550130"
              className="text-tagline-3 block font-normal text-white/50 hover:underline"
            >
              +1 (202) 555-0130
            </Link>
            <Link
              href="mailto:hello@pixels71.com"
              className="text-tagline-3 block font-normal text-white/50 hover:underline"
            >
              hello@pixels71.com
            </Link>
          </div>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.4}>
        <SocialIcons links={socialLinks} />
      </RevealAnimation>
    </div>
  </div>
);

export default FooterLogoContact;
