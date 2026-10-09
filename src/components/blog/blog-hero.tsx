import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden pt-33 pb-10 md:pt-39 lg:pb-20">
      <div className="main-container">
        <div className="space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center">
              <Badge badgeText="Blog" className="justify-center text-white" />
            </div>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[550px] font-normal text-white/90">
                Stay Ahead with the Latest in AI Automation
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                Discover expert tips, industry trends, and actionable strategies to power your
                growth with Nexsas.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

