'use client';

import PricingImage from '@/public/images/opai-img-109.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { CheckIcon } from '@/src/components/shared/icon';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { pricingPlan } from '@/src/data/pricing';
import Image from 'next/image';
import { useState } from 'react';

const PricingPlan = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="price-scope pt-28 md:pt-39">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1} instant>
              <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                Pricing plan
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2} instant>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                Choose the perfect plan for your business and supercharge your marketing with
                AI-powered insights.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3} instant>
            <div className="bg-background-4 flex flex-col-reverse items-center justify-center gap-y-4 rounded-[20px] p-2 lg:flex-row">
              <figure className="size-full h-fit w-full overflow-hidden rounded-xl lg:h-[702px] lg:basis-1/2">
                <Image
                  src={PricingImage}
                  alt="pricing"
                  width={600}
                  height={702}
                  className="size-full object-cover"
                />
              </figure>

              <div className="bg-background-6 w-full rounded-xl p-9 lg:basis-1/2">
                <div className="mb-6">
                  <fieldset className="flex h-11 items-center gap-x-2">
                    <label
                      className="bg-background-3 relative h-7 w-[72px] cursor-pointer rounded-full p-1"
                      aria-label="Toggle pricing plan"
                    >
                      <input
                        type="checkbox"
                        checked={yearly}
                        onChange={(e) => setYearly(e.target.checked)}
                        className="peer sr-only"
                        aria-checked={yearly}
                        role="switch"
                      />
                      <span className="bg-background-7 absolute left-1 h-5 w-8 rounded-full transition-all duration-300 ease-in-out peer-checked:left-1/2" />
                    </label>
                    <span
                      className={
                        yearly
                          ? 'hidden'
                          : 'font-inter-tight text-tagline-2 font-normal text-white/90'
                      }
                    >
                      Monthly
                    </span>
                    <span
                      className={
                        yearly
                          ? 'font-inter-tight text-tagline-2 font-normal text-white/90'
                          : 'hidden'
                      }
                    >
                      Yearly
                    </span>
                  </fieldset>
                </div>

                <div className="mb-8 h-[76px] space-y-2">
                  <h3 className="font-instrument-serif text-is-heading-4 font-normal text-white/90">
                    {pricingPlan.name}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    {pricingPlan.description}
                  </p>
                </div>

                <h4 className="border-stroke-1/11 font-instrument-serif text-is-heading-3 space-x-1 border-b pb-5 font-normal text-white/90">
                  <span className="text-is-heading-6 mr-1">$</span>
                  {yearly ? pricingPlan.priceYearly : pricingPlan.priceMonthly}
                  <span className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    {yearly ? '/Year' : '/Month'}
                  </span>
                </h4>

                <div className="space-y-14 pt-8">
                  <ul className="space-y-4 py-2">
                    {pricingPlan.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
                      >
                        <span className="flex size-4 items-center justify-center">
                          <CheckIcon className="size-4" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <PrimaryLinkButton href={pricingPlan.ctaHref} displayClassName="w-fit">
                    {pricingPlan.ctaText}
                  </PrimaryLinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
