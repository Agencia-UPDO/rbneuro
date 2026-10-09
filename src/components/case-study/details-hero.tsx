import RevealAnimation from '@/src/components/animation/reveal-animation';
import { HeroGradientBlur } from '@/src/components/shared/hero-gradient-blur';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

const DEFAULT_SUBTITLE =
  'From automating complex workflows to delivering human-like support, Nexsas powers transformation at every level.';

const DEFAULT_SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

export interface CaseStudyDetailsHeroProps {
  readonly title: string;
  readonly client?: string;
  readonly excerpt?: string;
  readonly content: string;
  /** Main image (right top in grid) */
  readonly image?: string;
  /** Left column image */
  readonly detailsImgOne?: string;
  /** Right bottom image */
  readonly detailsImgTwo?: string;
}

export const CaseStudyDetailsHero = ({
  title,
  client,
  excerpt = DEFAULT_SUBTITLE,
  content,
  image,
  detailsImgOne,
  detailsImgTwo,
}: CaseStudyDetailsHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-39 md:pb-30 lg:pb-44">
      <div className="main-container relative z-10">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[982px] font-normal text-white/90">
                {client ? `Client ${client}: ${title}` : title}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-tagline-2 font-inter-tight font-normal text-white/60">{excerpt}</p>
            </RevealAnimation>
          </div>

          <div className="bg-background-6 rounded-2xl">
            {(detailsImgOne || image || detailsImgTwo) && (
              <div className="grid grid-cols-12 items-center gap-x-2">
                {detailsImgOne && (
                  <RevealAnimation delay={0.3}>
                    <div className="col-span-6 h-full">
                      <figure className="size-full overflow-hidden rounded-xl">
                        <Image
                          src={detailsImgOne}
                          alt="Case study"
                          width={600}
                          height={300}
                          className="size-full object-cover"
                        />
                      </figure>
                    </div>
                  </RevealAnimation>
                )}
                {(image || detailsImgTwo) && (
                  <div className={cn('h-full', detailsImgOne ? 'col-span-6' : 'col-span-12')}>
                    <div className="flex h-full flex-col items-stretch gap-y-2">
                      {image && (
                        <RevealAnimation delay={0.4}>
                          <figure className="h-1/2 w-full overflow-hidden rounded-xl">
                            <Image
                              src={image}
                              alt="Case study"
                              width={600}
                              height={300}
                              className="size-full object-cover"
                            />
                          </figure>
                        </RevealAnimation>
                      )}
                      {detailsImgTwo && (
                        <RevealAnimation delay={0.5}>
                          <figure className="h-1/2 w-full overflow-hidden rounded-xl">
                            <Image
                              src={detailsImgTwo}
                              alt="Case study"
                              width={600}
                              height={300}
                              className="size-full object-cover"
                            />
                          </figure>
                        </RevealAnimation>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mx-auto max-w-[850px] space-y-[70px] px-5 pb-28 lg:px-0">
              <RevealAnimation delay={0.1}>
                <div className="case-study-details-markdown">
                  <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
                </div>
              </RevealAnimation>

              <div className="space-y-4">
                <h3 className="font-inter-tight text-tagline-1 font-semibold text-white/90">
                  Share this post:
                </h3>
                <SocialIcons links={DEFAULT_SOCIAL_LINKS} iconClassName="stroke-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroGradientBlur />
    </section>
  );
};
