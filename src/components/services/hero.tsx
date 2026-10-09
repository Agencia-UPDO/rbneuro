import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import ImageReveal from '@/src/components/shared/ui/image-reveal-on-hover/image-reveal';
import RevealItem from '@/src/components/shared/ui/image-reveal-on-hover/reveal-item';
import type { ServiceItem } from '@/src/data/services';
import Image from 'next/image';

const Hero = ({ services }: { services: ServiceItem[] }) => {
  const SERVICE_IMAGES = services.map((s) => s.image);
  return (
  <section className="bg-background-5 pt-39 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-38 xl:pt-56 xl:pb-44">
    <div className="medias pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden>
      {SERVICE_IMAGES.map((src) => (
        <Image key={src} src={src} alt="" width={1} height={1} />
      ))}
    </div>
    <div className="main-container">
      <div className="space-y-20">
        <div className="space-y-6 lg:max-w-[514px]">
          <RevealAnimation delay={0.1}>
            <Badge badgeText="Our Services" className="text-white/50" />
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-md:leading-[1.1]">
                Marketing solutions that drive results
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-2 font-normal text-white/60">
                Trusted by 100+ businesses in retail, healthcare, tech, and more.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <ImageReveal
          className="relative"
          cursorClassName="h-[180px] w-[200px] md:h-[300px] md:w-[292px] lg:h-[386px]"
        >
          <div className="divide-stroke-1/11 divide-y">
            {services.map((service, index) => (
              <RevealAnimation key={service.title} delay={0.1 + index * 0.1}>
                <RevealItem image={service.image} href={service.href}>
                  <div className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:py-8">
                    <div className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full" />
                    <div className="relative z-20 flex gap-x-4 gap-y-2">
                      <span
                        className={`${service.iconClass} text-[52px] text-white/60 transition-colors duration-400 ease-in-out max-lg:scale-90 group-hover:text-background-13/90!`}
                        aria-hidden
                      />
                      <div className="lg:max-w-[465px]">
                        <h3 className="font-instrument-serif md:text-is-heading-5 text-[26px] font-normal text-white/80 transition-colors duration-400 ease-in-out mix-blend-color-burn group-hover:text-background-13/90">
                          {service.title}
                        </h3>
                        <p className="text-tagline-2 font-normal text-white/60 transition-colors duration-400 ease-in-out mix-blend-color-burn group-hover:text-background-13/60">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              </RevealAnimation>
            ))}
          </div>
        </ImageReveal>
      </div>
    </div>
  </section>
  );
};

export default Hero;

