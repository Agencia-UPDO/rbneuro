'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { FacebookBrandIcon, GoogleIcon } from '@/src/components/shared/icon';
import { SubmitPrimary } from '@/src/components/shared/ui/button/submit-primary';
import Image from 'next/image';
import Link from 'next/link';

const SignupForm = () => (
  <section className="pt-34 pb-12 2xl:pt-44">
    <div className="main-container">
      <div className="from-background-6/95 to-background-5 mx-auto w-full rounded-lg bg-linear-to-br bg-cover bg-center bg-no-repeat p-4 bg-blend-lighten lg:p-20 xl:p-28 2xl:p-39">
        <div className="flex flex-col items-stretch justify-center gap-y-12 lg:flex-row lg:gap-x-8 2xl:gap-x-12">
          <div className="w-full space-y-8 lg:w-1/2 xl:w-auto">
            <div className="space-y-3 text-center lg:text-left">
              <RevealAnimation delay={0.1} instant>
                <h2 className="text-is-heading-2 font-normal text-white">Let&apos;s get started</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2} instant>
                <p className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[330px] text-center font-normal text-white/60 lg:mx-0 lg:text-left">
                  Let&apos;s explore how Nexsas can support your goals with AI-driven solutions.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div className="hidden h-fit w-full max-w-[509px] flex-1 flex-col lg:flex">
                <figure className="block h-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/opai-img-267.png"
                    alt="signup-hero"
                    width={509}
                    height={450}
                    className="size-full object-cover"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3} instant>
            <div className="bg-background-6 w-full flex-1 rounded-lg p-6 sm:p-8 md:p-11 lg:min-h-[577px] lg:w-1/2 xl:w-full xl:max-w-[460px]">
              <form>
                <fieldset className="mb-4 space-y-2 md:mb-6">
                  <label htmlFor="email" className="text-tagline-2 block font-normal text-white/90">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    placeholder="Enter your email"
                    className="border-stroke-1/11 text-tagline-3 placeholder:text-tagline-3 bg-background-5 focus-visible:border-stroke-1/50 block w-full rounded-md border px-[18px] py-2.5 font-normal text-white/90 placeholder:text-white/60 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-4 space-y-2 md:mb-6">
                  <label
                    htmlFor="password"
                    className="text-tagline-2 block font-normal text-white/90"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    name="password"
                    placeholder="At least 8 character"
                    className="border-stroke-1/11 text-tagline-3 placeholder:text-tagline-3 bg-background-5 focus-visible:border-stroke-1/50 block w-full rounded-md border px-[18px] py-2.5 font-normal text-white/90 placeholder:text-white/60 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-4 space-y-2 md:mb-6">
                  <label
                    htmlFor="confirm-password"
                    className="text-tagline-2 block font-normal text-white/90"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    required
                    name="confirm-password"
                    placeholder="At least 8 character"
                    className="border-stroke-1/11 text-tagline-3 placeholder:text-tagline-3 bg-background-5 focus-visible:border-stroke-1/50 block w-full rounded-md border px-[18px] py-2.5 font-normal text-white/90 placeholder:text-white/60 focus:outline-none"
                  />
                </fieldset>

                <div className="w-full [&>button]:w-full [&>button]:py-2.5!">
                  <SubmitPrimary>Sign up</SubmitPrimary>
                </div>
                <p className="text-tagline-3 mt-4 text-center font-normal text-white/60">
                  Forget your password? Reset{' '}
                  <Link
                    href="/login"
                    className="font-medium text-white/90 underline underline-offset-2 hover:text-white"
                  >
                    here
                  </Link>
                </p>
              </form>

              <div className="py-6">
                <p className="text-tagline-4 relative px-2 text-center font-normal text-white/90 before:absolute before:top-1/2 before:left-[30%] before:block before:h-px before:w-[43px] before:-translate-y-1/2 before:bg-[linear-gradient(270deg,rgba(210,223,240,0.40)_0%,rgba(210,223,240,0.00)_78.71%)] before:content-[''] after:absolute after:top-1/2 after:right-[30%] after:block after:h-px after:w-[43px] after:-translate-y-1/2 after:rotate-180 after:bg-[linear-gradient(270deg,rgba(210,223,240,0.40)_0%,rgba(210,223,240,0.00)_78.71%)] after:content-[''] max-[376px]:before:left-[26%] max-[376px]:after:right-[26%] sm:before:left-[33%] sm:after:right-[33%] md:before:left-[40%] md:after:right-[40%] lg:before:left-[29%] lg:after:right-[29%] xl:before:left-[33%] xl:after:right-[33%]">
                  Or
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Link
                  href="#"
                  className="border-stroke-3/25 hover:bg-stroke-3/25 group flex w-full items-center justify-center gap-2 rounded-md border px-8 py-3 transition-all duration-300 ease-in-out"
                >
                  <span className="size-6">
                    <GoogleIcon className="size-6" />
                  </span>
                  <span className="text-tagline-3 font-normal text-nowrap text-white/90">
                    Continue with Google
                  </span>
                </Link>
                <Link
                  href="#"
                  className="border-stroke-3/25 hover:bg-stroke-3/25 group flex w-full items-center justify-center gap-2 rounded-md border px-8 py-3 transition-all duration-300 ease-in-out"
                >
                  <span className="size-6">
                    <FacebookBrandIcon className="size-6" />
                  </span>
                  <span className="text-tagline-3 font-normal text-nowrap text-white/90">
                    Continue with facebook
                  </span>
                </Link>
              </div>

              <p className="text-tagline-3 mt-4 text-center font-normal text-white/60">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-white/90 underline underline-offset-2 hover:text-white"
                >
                  Log in
                </Link>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default SignupForm;
