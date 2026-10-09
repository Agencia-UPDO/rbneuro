import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TestimonialMarquee } from '@/src/components/shared/testimonial-marquee';
import { Badge } from '@/src/components/shared/ui/badge';

const TeamTestimonial = () => (
  <section className="overflow-hidden pt-20 md:pt-30 lg:pt-44">
    <div className="main-container">
      <div className="space-y-4">
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <Badge badgeText="Testimonial" className="text-white/50" />
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90">
            What Our Clients Are Saying.
          </h2>
        </RevealAnimation>
      </div>
    </div>
    <div className="mt-14 xl:mt-[70px]">
      <TestimonialMarquee />
    </div>
  </section>
);

export default TeamTestimonial;
