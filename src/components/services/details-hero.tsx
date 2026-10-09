import RevealAnimation from '@/src/components/animation/reveal-animation';
import GradientImg from '@/src/components/home/gradient-img';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';

export interface ServiceDetailsHeroProps {
  readonly title: string;
  readonly description: string;
}

const ServiceDetailsHero = ({ title, description }: ServiceDetailsHeroProps) => (
  <section className="bg-background-5 relative overflow-hidden pt-34 pb-28 md:pt-39">
    <div className="main-container relative z-20">
      <div className="space-y-14">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
              {title}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <p className="text-tagline-2 font-inter-tight text-background-13/60 mx-auto w-full max-w-[514px] font-normal">
              {description}
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="text-center">
            <SecondaryLinkButton href="/pricing" className="mx-auto w-fit">
              Get started
            </SecondaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </div>

    <GradientImg
      imagePath="/images/gradient/opai-2.png"
      className="absolute bottom-0 left-0 z-4 h-[646px] w-full min-[2000px]:bottom-0 md:-bottom-4 md:h-[580px] lg:h-[596px] 2xl:h-[696px]"
    />
  </section>
);

export default ServiceDetailsHero;
