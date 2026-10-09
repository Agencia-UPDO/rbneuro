import RevealAnimation from '@/src/components/animation/reveal-animation';
import { HeroGradientBlur } from '@/src/components/shared/hero-gradient-blur';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';

const DEFAULT_SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

const DEFAULT_AVATAR = '/images/opai-avatar-img-111.png';

export interface DetailsHeroProps {
  readonly title: string;
  readonly author?: string;
  readonly authorImage?: string;
  readonly date?: string;
  readonly readingTime?: string;
  readonly image?: string;
  readonly excerpt?: string;
  readonly socialLinks?: readonly { name: string; href: string }[];
}

export const DetailsHero = ({
  title,
  author = 'Noah Brown',
  authorImage = DEFAULT_AVATAR,
  date,
  readingTime = '5 min read',
  image,
  excerpt,
  socialLinks = DEFAULT_SOCIAL_LINKS,
}: DetailsHeroProps) => {
  const imageSrc = typeof image === 'string' ? image : '';
  const imageAlt = typeof title === 'string' ? title : 'Blog';

  return (
    <section className="relative overflow-hidden bg-background-6 pt-36 pb-20 md:pt-39 md:pb-30 lg:pb-44">
      <div className="main-container relative z-10">
        <div className="space-y-9">
          <RevealAnimation delay={0.1}>
            <h2 className="font-instrument-serif text-is-heading-4 text-white/90 md:text-is-heading-3 lg:text-is-heading-2">
              {title}
            </h2>
          </RevealAnimation>

          <div className="space-y-[14px]">
            <RevealAnimation delay={0.2}>
              <div className="flex items-center gap-x-3">
                <figure className="size-12 overflow-hidden rounded-full">
                  <Image
                    src={authorImage}
                    alt="avatar"
                    width={48}
                    height={48}
                    className="size-full object-cover"
                  />
                </figure>
                <div className="space-y-[1.5px]">
                  <h4 className="font-inter-tight text-tagline-3 text-white">{author}</h4>
                  <p className="font-inter-tight text-tagline-4 flex items-center justify-center gap-x-[5px] font-normal text-white/60">
                    {date && <span>{date}</span>}
                    {date && <span className="inline-block size-1.5 rounded-full bg-white/60" />}
                    <span>{readingTime}</span>
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <SocialIcons links={socialLinks} iconClassName="stroke-white" />
            </RevealAnimation>
          </div>

          {imageSrc && (
            <RevealAnimation delay={0.4}>
              <figure className="h-[450px] w-full overflow-hidden rounded-[10px] md:h-[600px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={600}
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          )}

          {excerpt && (
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h3 className="font-instrument-serif text-is-heading-4 font-normal text-background-13/90">
                  Introduction
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="font-inter-tight text-tagline-2 font-normal text-background-13/60">
                  {excerpt}
                </p>
              </RevealAnimation>
            </div>
          )}
        </div>
      </div>

      <HeroGradientBlur />
    </section>
  );
};
