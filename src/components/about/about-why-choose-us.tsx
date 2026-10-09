import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';

const cards = [
  {
    iconClass: 'ns-shape-10 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Simplicity',
    desc: 'Easy-to-use tools with powerful capabilities.',
    delay: 0.1,
  },
  {
    iconClass: 'ns-shape-11 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Innovation',
    desc: 'Always at the forefront of AI technology.',
    delay: 0.2,
  },
  {
    iconClass: 'ns-shape-13 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Scalability',
    desc: 'Solutions that grow with your business needs.',
    delay: 0.3,
  },
  {
    iconClass: 'ns-shape-14 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Support',
    desc: 'A dedicated team committed to your success.',
    delay: 0.4,
  },
];

const AboutWhyChooseUs = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="space-y-17.5">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <Badge badgeText="Why Choose Us" className="justify-center" />
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
                  Why choose Nexsas?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                  Unparalleled expertise and innovation.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center justify-center gap-x-0 gap-y-6 md:gap-x-8 md:gap-y-8 lg:gap-y-0">
            {cards.map((card, index) => (
              <RevealAnimation key={card.title} delay={card.delay}>
                <div className="bg-background-9 col-span-12 flex h-[240px] flex-col items-center justify-between rounded-lg p-8 md:col-span-6 lg:col-span-3">
                  <span className={card.iconClass} />
                  <div className="space-y-2 text-center">
                    <h3 className="text-is-heading-5 text-background-13/90 font-instrument-serif font-normal">
                      {card.title}
                    </h3>
                    <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;

