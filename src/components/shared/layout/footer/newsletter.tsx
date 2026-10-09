'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SubmitPrimary } from '@/src/components/shared/ui/button/submit-primary';
import Link from 'next/link';

const FooterNewsletter = () => (
  <>
    <RevealAnimation delay={0.1}>
      <div className="text-center lg:text-left">
        <p className="text-background-11 text-it-heading-5 font-medium">Join our newsletter</p>
        <p className="text-tagline-2 max-w-[400px] font-normal text-white/50">
          Get the latest AI marketing tips, strategies, and agency insights delivered to your inbox.
        </p>
      </div>
    </RevealAnimation>

    <RevealAnimation delay={0.2}>
      <div className="space-y-3 text-center lg:text-left">
        <form
          className="flex flex-col items-center gap-2 md:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type="email"
              aria-label="Enter your email"
              required
              placeholder="Enter your email"
              className="border-stroke-3/30 bg-background-6 placeholder:text-background-8/60 placeholder:text-tagline-3 text-background-8 text-tagline-3 focus-visible:border-stroke-3/80 block h-10 w-full min-w-[255px] rounded-md border px-4 py-2 font-normal placeholder:font-normal focus:outline-none"
            />
          </div>
          <SubmitPrimary className="h-10 w-[80%] rounded-md max-md:w-full md:w-fit">
            Learn more
          </SubmitPrimary>
        </form>
        <p className="text-tagline-4 font-normal text-white/60">
          By subscribing you agree to with our{' '}
          <Link href="#" className="font-medium text-white hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </RevealAnimation>
  </>
);

export default FooterNewsletter;
