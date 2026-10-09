import RevealAnimation from '@/src/components/animation/reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import heroImage1 from '@/public/images/opai-img-1.png';
import heroImage2 from '@/public/images/opai-img-2.png';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section
      className="bg-background-5 lp:pb-44 pt-39 pb-20 md:pb-30"
      aria-label="About Nexsas - Company Overview"
    >
      <div className="main-container">
        <div className="flex flex-col items-start justify-between gap-x-15 gap-y-14 md:flex-row xl:gap-x-25">
          <div className="w-full max-w-[470px]">
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h1 className="font-instrument-serif text-is-heading-4 lg:text-is-heading-3 xl:text-is-heading-2 font-normal text-white/90">
                    Empowering the future with Nexsas
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-tagline-3 lg:text-tagline-2 font-normal text-white/80">
                    Revolutionizing business operations with AI-driven innovation is not just a
                    trend; it&apos;s a necessity in today&apos;s fast-paced market. Companies are
                    leveraging advanced algorithms and machine learning to streamline processes,
                    enhance decision-making, and improve customer experiences.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  <PrimaryLinkButton href="/contact" displayClassName="w-fit">
                    Get in touche
                  </PrimaryLinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          <div className="flex-auto">
            <div className="flex items-start gap-x-4 gap-y-6 md:gap-x-8">
              <RevealAnimation delay={0.3} instant direction="up">
                <figure className="w-full max-w-[288px] overflow-hidden rounded-md md:rounded-xl">
                  <Image
                    src={heroImage1}
                    alt="Nexsas team members collaborating on AI innovation and technology solutions"
                    width={288}
                    height={320}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.4} instant>
                <figure className="w-full max-w-[400px] overflow-hidden rounded-md md:rounded-xl">
                  <Image
                    src={heroImage2}
                    alt="Nexsas artificial intelligence technology powering business transformation and digital innovation"
                    width={400}
                    height={320}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
