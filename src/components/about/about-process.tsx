import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import processImage from '@/public/images/opai-img-4.png';
import Image from 'next/image';

const AboutProcess = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="space-y-10 md:space-y-17.5">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <Badge badgeText="Process" className="justify-center" />
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
                  Revolutionizing workflows with AI
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                  Empowering businesses with cutting-edge AI solutions.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <figure className="h-[500px] max-w-full overflow-hidden rounded-lg md:h-[700px]">
              <Image
                src={processImage}
                alt="process"
                width={1200}
                height={700}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;

