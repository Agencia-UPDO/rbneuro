import RevealAnimation from '@/src/components/animation/reveal-animation';
import AboutSwiper from '@/src/components/home/about-swiper';
import { Badge } from '@/src/components/shared/ui/badge';

const TeamHero = () => (
  <section className="pt-34 md:pt-39">
    <div className="main-container">
      <div className="space-y-20 md:space-y-28">
        <div className="space-y-2 text-center md:space-y-4">
          <RevealAnimation delay={0.1} instant>
            <div className="flex justify-center">
              <Badge badgeText="Team" className="text-white/50" />
            </div>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2} instant>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[480px] font-normal text-white/90">
                Your growth partner with AI expertise
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} instant>
              <p className="font-inter-tight text-tagline-2 mx-auto w-full text-center font-normal text-white/60 lg:max-w-[482px]">
                Businesses trust Nexsas because of its proven ability to deliver data-driven
                insights that drive real results. With advanced AI technology, robust security
                protocols,
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="overflow-hidden">
          <AboutSwiper />
        </div>
      </div>
    </div>
  </section>
);

export default TeamHero;
