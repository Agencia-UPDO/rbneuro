import RevealAnimation from '@/src/components/animation/reveal-animation';
import BlogCard from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface';

export interface DetailsRelatedArticlesProps {
  readonly posts: readonly BlogPost[];
  readonly currentSlug: string;
  readonly limit?: number;
}

const RELATED_DESCRIPTION =
  'Discover more insights and strategies from our latest blog articles to help you stay ahead in AI-driven marketing and business optimization.';

export const DetailsRelatedArticles = ({
  posts,
  currentSlug,
  limit = 3,
}: DetailsRelatedArticlesProps) => {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="bg-background-7 pb-20 md:pb-30 lg:pb-44">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2 className="font-instrument-serif text-is-heading-4 text-background-13/90 md:text-is-heading-3 lg:text-is-heading-2 font-normal">
                Related articles
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                {RELATED_DESCRIPTION}
              </p>
            </RevealAnimation>
          </div>

          <div
            className="flex flex-wrap items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-9 md:flex-nowrap md:space-x-[30px]"
            aria-label="Related blog posts"
          >
            {related.map((post, index) => (
              <RevealAnimation key={post.slug} delay={0.4 + index * 0.1}>
                <BlogCard
                  card={{
                    img: post.image,
                    date: post.date,
                    tags: post.tags,
                    title: post.title,
                    href: `/blog/${post.slug}`,
                  }}
                  className="min-w-0 flex-1 max-lg:w-full"
                />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
