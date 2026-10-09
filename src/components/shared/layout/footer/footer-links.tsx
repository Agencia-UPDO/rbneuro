'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { footerLinkGroups } from '@/src/data/footer';
import Link from 'next/link';

const FooterLinks = () => (
  <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
    {footerLinkGroups.map((group, index) => (
      <div key={group.title} className="col-span-12 sm:col-span-4">
        <div className="space-y-2 text-left lg:text-right">
          <RevealAnimation delay={0.1}>
            <p className="text-tagline-2 font-semibold text-white/90">{group.title} </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2 + index * 0.1}>
            <ul>
              {group.links.map((link) => (
                <li key={link.href + link.label} className="py-2">
                  <Link
                    href={link.href}
                    className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealAnimation>
        </div>
      </div>
    ))}
  </div>
);

export default FooterLinks;
