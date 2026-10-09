import RevealAnimation from '@/src/components/animation/reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';

const NotFoundHero = () => {
  return (
    <section className="bg-background-5 pt-28 pb-20 md:pt-39 md:pb-30 lg:pb-44">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="font-instrument-serif text-is-heading-1 text-[200px] text-white">
                404
              </h1>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
                  Oops! Page Not Found
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mx-auto max-w-[300px] font-normal text-white/60">
                  The page does&apos;t exist or was moved. Don&apos;t worry, we&apos;ll guide you
                  back.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="flex items-center justify-center">
              <PrimaryLinkButton href="/" displayClassName="w-[80%] sm:w-fit mx-auto">
                Go to Home
              </PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default NotFoundHero;
