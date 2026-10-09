'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { SubmitPrimary } from '@/src/components/shared/ui/button/submit-primary';
import {
  ContactEmailIcon,
  ContactPhoneIcon,
  LocationIcon,
} from '@/src/components/shared/icon';
import { HeroGradientBlur } from '@/src/components/shared/hero-gradient-blur';

const ContactHero = () => (
  <section className="relative overflow-hidden pt-28 pb-20 md:pt-39 md:pb-25 lg:pb-30 lp:pb-44">
    <div className="main-container relative z-10">
      <div className="space-y-14 lg:space-y-[70px] xl:space-y-[120px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1} instant>
            <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
              Let&apos;s talk, we&apos;re here to help
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
              Got any questions or how Nexsas can help your business thrive?
              We&apos;re here for you.
            </p>
          </RevealAnimation>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-y-14 lg:flex-row">
          <div className="flex flex-col justify-between gap-y-10 lg:h-[606px]">
            <div className="space-y-4">
              <RevealAnimation delay={0.1} instant>
                <Badge badgeText="Contact Us" className="text-white/60" />
              </RevealAnimation>
              <RevealAnimation delay={0.2} instant>
                <h3 className="font-instrument-serif text-is-heading-5 md:text-is-heading-3 lg:text-is-heading-2 max-w-[400px] font-normal text-white/90">
                  Reach out — We&apos;ll get back within 24 hours
                </h3>
              </RevealAnimation>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <RevealAnimation delay={0.3} instant>
                <div className="bg-background-6 col-span-12 flex basis-1/2 gap-x-4 rounded-lg p-6 md:col-span-6 lg:col-span-12">
                  <span className="bg-background-1 flex size-13 items-center justify-center rounded-full">
                    <ContactEmailIcon className="size-7" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white">
                      Email
                    </p>
                    <a
                      href="mailto:support@Nexsas.com"
                      className="font-inter-tight text-tagline-3 font-normal text-white/60 hover:underline"
                    >
                      support@Nexsas.com
                    </a>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4} instant>
                <div className="bg-background-6 col-span-12 flex gap-x-4 rounded-lg p-6 md:col-span-6 lg:col-span-12">
                  <span className="bg-background-1 flex size-13 items-center justify-center rounded-full">
                    <ContactPhoneIcon className="size-7" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white">
                      Phone
                    </p>
                    <a
                      href="tel:+1 (202) 555-0130"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter-tight text-tagline-3 font-normal text-white/60 hover:underline"
                    >
                      +1 (202) 555-0130
                    </a>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5} instant>
                <div className="bg-background-6 col-span-12 flex gap-x-4 rounded-lg p-6">
                  <span className="bg-background-1 flex size-13 items-center justify-center rounded-full">
                    <LocationIcon className="size-7" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white">
                      Location
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter-tight text-tagline-3 font-normal text-white/60 hover:underline"
                    >
                      30 North Gould Street, Sheridan, WY 8280
                    </a>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.3} instant>
            <form
              action="#"
              className="bg-background-5 w-full max-w-[500px] rounded-xl p-6 xl:max-w-[595px]"
            >
              <fieldset className="mb-6 space-y-2">
                <label
                  htmlFor="name"
                  className="text-inter-tight text-tagline-2 inline-block font-normal text-white/90"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-md border px-4.5 py-3 text-white/90 placeholder:text-white/60 focus-within:outline-none"
                  required
                  aria-label="Your name"
                />
              </fieldset>

              <fieldset className="mb-6 space-y-2">
                <label
                  htmlFor="email"
                  className="text-inter-tight text-tagline-2 inline-block font-normal text-white/90"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-md border px-4.5 py-3 text-white/90 placeholder:text-white/60 focus-within:outline-none"
                  required
                  aria-label="Your email"
                />
              </fieldset>

              <fieldset className="mb-4 space-y-2">
                <label
                  htmlFor="message"
                  className="text-inter-tight text-tagline-2 inline-block font-normal text-white/90"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="border-stroke-3/25 focus-within:border-stroke-3/70 h-45.5 w-full rounded-md border px-4.5 py-3 text-white/90 placeholder:text-white/60 focus-within:outline-none"
                  aria-label="Your message"
                />
              </fieldset>

              <fieldset className="flex items-center justify-between gap-x-5">
                <label className="flex cursor-pointer items-center gap-1.5">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    className="peer sr-only"
                    aria-label="I accept with the Terms of uses and privacy policy"
                  />
                  <span className="border-stroke-3/40 peer-checked:border-primary-500 peer-checked:border-stroke-1/60 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-white/60 after:opacity-0 peer-checked:after:opacity-100" />
                  <span className="text-tagline-3 font-medium text-white/60 select-none peer-checked:text-white/90">
                    I accept with the Terms of uses and privacy policy
                  </span>
                </label>
              </fieldset>

              <div className="mt-9">
                <SubmitPrimary>Submit request</SubmitPrimary>
              </div>
            </form>
          </RevealAnimation>
        </div>
      </div>
    </div>

    <HeroGradientBlur />
  </section>
);

export default ContactHero;
