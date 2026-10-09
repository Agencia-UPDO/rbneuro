import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { TestimonialMarquee } from '@/src/components/shared/testimonial-marquee';

const PricingTestimonial = () => (
  <section className="bg-background-7 overflow-hidden py-20 md:py-25 lg:py-30 lp:py-44">
    <div className="main-container">
      <div className="space-y-4">
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <Badge badgeText="Testimonial" className="text-background-13/60 justify-center" />
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 text-center font-normal">
            What Our Clients Are Saying.
          </h2>
        </RevealAnimation>
      </div>
    </div>
    <RevealAnimation delay={0.3}>
      <div className="mt-[70px]">
        <TestimonialMarquee />
      </div>
    </RevealAnimation>
  </section>
);

export default PricingTestimonial;
