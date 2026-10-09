import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { cn } from '@/src/utils/cn';

const STAT_CARDS = [
  {
    number: 83,
    suffix: '%',
    rooms: 2,
    label: 'Real-time support satisfaction across 100+ countries',
  },
  {
    number: 75,
    suffix: '%',
    rooms: 2,
    label: 'Improvement in agent resolution efficiency',
  },
  {
    number: 500,
    suffix: ' K+',
    rooms: 3,
    label: 'Customer interactions automated monthly',
  },
  {
    number: 60,
    suffix: ' +',
    rooms: 2,
    label: 'Many companies choose to collaborate with us',
  },
];

const CaseStudyHero = () => (
  <section className="lp:pb-44 pt-39 pb-20 md:pb-25 lg:pt-44 lg:pb-30 xl:pt-52">
    <div className="main-container">
      <div className="space-y-14 md:space-y-[70px]">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center">
              <Badge badgeText="By the Numbers" className="justify-center text-white" />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-md:leading-[1.1]">
              Real impact, measurable results.
            </h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="bg-background-6 flex flex-col items-center justify-center gap-y-8 rounded-xl p-8 md:flex-row md:gap-y-0">
            {STAT_CARDS.map((card, index) => (
              <RevealAnimation key={card.label} delay={0.3 + index * 0.1}>
                <div
                  className={cn(
                    'border-stroke-3/20 w-full border-r-0 px-10.5 py-8 text-center',
                    'md:border-r md:last:border-r-0'
                  )}
                >
                  <h3 className="font-instrument-serif text-is-heading-3 flex items-center justify-center text-white/90">
                    <NumberAnimation number={card.number} rooms={card.rooms} />
                    {card.suffix}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-white/60">{card.label}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export default CaseStudyHero;
