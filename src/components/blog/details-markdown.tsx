import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

const DEFAULT_SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

const DEFAULT_AVATAR = '/images/opai-avatar-img-111.png';

export interface DetailsMarkdownProps {
  readonly content: string;
  /** Optional two images shown side by side above the markdown */
  readonly contentImages?: readonly [string, string?];
  readonly author?: string;
  readonly authorImage?: string;
  readonly date?: string;
  readonly readingTime?: string;
  readonly socialLinks?: readonly { name: string; href: string }[];
}

export const DetailsMarkdown = ({
  content,
  contentImages,
  author = 'Noah Brown',
  authorImage = DEFAULT_AVATAR,
  date,
  readingTime = '5 min read',
  socialLinks = DEFAULT_SOCIAL_LINKS,
}: DetailsMarkdownProps) => {
  const hasImages = contentImages?.length && contentImages[0];
  const firstImage = hasImages ? contentImages[0] : '';
  const secondImage = hasImages ? (contentImages[1] ?? contentImages[0]) : '';

  return (
    <section className="bg-background-7 pb-20 md:pb-30 lg:pb-44">
      <div className="main-container">
        <div className="space-y-8">
          {hasImages && (
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <RevealAnimation delay={0.1}>
                <figure className="h-[400px] w-full overflow-hidden rounded-xl lg:h-[550px]">
                  <Image
                    src={firstImage}
                    alt="Blog"
                    width={550}
                    height={550}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <figure className="h-[400px] w-full overflow-hidden rounded-xl lg:h-[550px]">
                  <Image
                    src={secondImage}
                    alt="Blog"
                    width={550}
                    height={550}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
            </div>
          )}

          <RevealAnimation delay={0.3}>
            <div className="blog-details-markdown">
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className="divide-background-13/10 mt-[70px] space-y-6 divide-y">
              <div className="space-y-4 pb-6">
                <p className="font-inter-tight text-tagline-2 text-background-13/90 font-medium">
                  Share this post
                </p>
                <SocialIcons links={socialLinks} iconClassName="stroke-background-13" />
              </div>

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
                  <h4 className="font-inter-tight text-tagline-3 text-background-13/90">
                    {author}
                  </h4>
                  <p className="font-inter-tight text-tagline-4 text-background-13/60 flex items-center justify-center gap-x-[5px] font-normal">
                    {date && <span>{date}</span>}
                    {date && (
                      <span className="bg-background-13/60 inline-block size-1 rounded-full" />
                    )}
                    <span>{readingTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
