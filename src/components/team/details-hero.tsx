import GradientBg from '@/public/images/opai-img-47.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

export interface TeamDetailsHeroProps {
  name: string;
  position: string;
  image: string;
  excerpt?: string;
  socialLinks?: { name: string; href: string }[];
}

const TeamDetailsHero = ({
  name,
  position,
  image,
  excerpt,
  socialLinks = DEFAULT_SOCIAL_LINKS,
}: TeamDetailsHeroProps) => (
  <section className="pt-28 md:pt-39">
    <div className="main-container">
      <RevealAnimation delay={0.1} instant>
        <div className="border-stroke-3/18 relative mx-auto w-full max-w-[850px] overflow-hidden rounded-xl border">
          {/* right gradient bg */}
          <RevealAnimation delay={0.4} direction="right" offset={100}>
            <div className="absolute right-0 bottom-0">
              <figure className="size-[552px] overflow-hidden">
                <Image src={GradientBg} alt="gradient bg" className="size-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="relative z-10 space-y-4">
            <div className="relative mx-auto h-[500px] w-full overflow-hidden rounded-xl md:h-[600px] lg:h-[770px]">
              <Image
                src={image}
                alt={name}
                width={850}
                height={770}
                className="size-full object-cover object-center"
              />
            </div>

            <div
              className="relative w-full max-w-full overflow-hidden p-6 lg:p-[42px]"
              aria-labelledby="team-member-heading"
            >
              <div className="flex flex-col items-center justify-between gap-x-4 gap-y-6 md:flex-row md:gap-y-0">
                <div className="border-stroke-3/18 basis-1/2 space-y-4 border-b pb-4 md:border-r md:border-b-0 md:pr-6 md:pb-0">
                  <div className="space-y-1">
                    <RevealAnimation delay={0.2}>
                      <p
                        id="team-member-heading"
                        className="font-inter-tight text-tagline-3 font-normal text-white/50"
                      >
                        {position}
                      </p>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                      <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                        {name}
                      </h2>
                    </RevealAnimation>
                  </div>
                  {excerpt && (
                    <RevealAnimation delay={0.4}>
                      <p className="font-inter-tight text-tagline-3 mr-5 font-normal text-white/60 lg:mr-0">
                        {excerpt}
                      </p>
                    </RevealAnimation>
                  )}
                </div>

                <div className="w-full space-y-5.5 md:basis-1/2 md:pl-6">
                  <div className="space-y-2">
                    <RevealAnimation delay={0.3}>
                      <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                        Contact information
                      </h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                        <Link href="mailto:john.doe@company.com" className="mb-1 block">
                          {name.toLowerCase().replaceAll(' ', '.')}@company.com
                        </Link>

                        <span>
                          <Link href="tel:+13685678954">+1 (368) 567 89 54</Link>
                        </span>
                      </p>
                    </RevealAnimation>
                  </div>
                  <RevealAnimation delay={0.5}>
                    <SocialIcons links={socialLinks} iconClassName="stroke-white" />
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  </section>
);

export default TeamDetailsHero;
