'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { HeroGradientBlur } from '@/src/components/shared/hero-gradient-blur';
import { CheckIcon } from '@/src/components/shared/icon';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { pricingCards, pricingTableRows } from '@/src/data/pricing';
import { cn } from '@/src/utils/cn';

const PricingTable = () => (
  <section className="lp:py-44 relative overflow-hidden py-20 md:py-25 lg:py-30">
    <div className="main-container relative z-10">
      <div className="space-y-[70px]">
        <div className="space-y-2 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-inter-tight text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
              What&apos;s included in every plan
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
              Core Benefits for Every Plan
            </p>
          </RevealAnimation>
        </div>

        <div className="outline-background-4 bg-background-5 space-y-18 rounded-[20px] p-6 outline-8 md:p-11">
          <RevealAnimation delay={0.4}>
            <div
              className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0 xl:justify-end"
              aria-label="Pricing plans"
            >
              {pricingCards.map((card, index) => {
                const Wrapper = card.featured ? 'article' : 'div';
                return (
                  <Wrapper
                    key={card.id}
                    id={card.featured ? 'team-plan' : undefined}
                    className={cn(
                      'w-full max-w-[390px] space-y-[29px] rounded-lg px-8 pt-8 pb-6',
                      'bg-background-6',
                      index === 0 && 'md:rounded-none md:rounded-l-lg',
                      index === 1 && 'md:rounded-none md:rounded-r-lg',
                      card.featured && [
                        'ring-primary-500/50 ring-offset-background-5 ring-2 ring-offset-2',
                        'border-primary-500/30 border',
                        'shadow-primary-500/10 shadow-lg',
                      ]
                    )}
                  >
                    <p
                      className={cn(
                        'font-inter-tight text-tagline-2 font-normal',
                        card.featured ? 'text-primary-500' : 'text-background-7'
                      )}
                    >
                      {card.name}
                    </p>
                    <div className="space-y-3">
                      <h3
                        className={cn(
                          'font-instrument-serif text-is-heading-2',
                          card.featured ? 'text-white' : 'text-white/90'
                        )}
                      >
                        {card.price}
                      </h3>
                      <p className="font-inter-tight text-tagline-2 w-full max-w-[180px] font-normal text-white/60">
                        {card.description}
                      </p>
                    </div>
                    <PrimaryLinkButton href={card.ctaHref} displayClassName="!py-2.5 w-fit">
                      {card.ctaText}
                    </PrimaryLinkButton>
                  </Wrapper>
                );
              })}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="space-y-0">
              {pricingTableRows.map((row) => (
                <div
                  key={row.features[0]}
                  className="*:border-r-stroke-1/11 border-b-stroke-1/11 grid grid-cols-12 items-start justify-center border-b py-5 *:h-[330px] *:border-r last:border-b-0 md:*:h-[280px]"
                >
                  <ul className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 px-2 *:font-normal *:text-white/90 md:space-y-8 md:px-0">
                    {row.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <ul className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8">
                    {row.basic.map((cell, i) => (
                      <li
                        key={`basic-${row.features[i] ?? i}`}
                        className="flex items-center justify-center"
                      >
                        {cell === 'check' ? <CheckIcon className="size-4 stroke-white/90" /> : cell}
                      </li>
                    ))}
                  </ul>
                  <ul className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8">
                    {row.team.map((cell, i) => (
                      <li
                        key={`team-${row.features[i] ?? i}`}
                        className="flex items-center justify-center"
                      >
                        {cell === 'check' ? <CheckIcon className="size-4 stroke-white/90" /> : cell}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
    <HeroGradientBlur />
  </section>
);

export default PricingTable;
