import RevealAnimation from '@/src/components/animation/reveal-animation';
import { AnimatedFilterGrid } from '@/src/components/shared/ui/animated-filter-grid/animated-filter-grid';
import { AnimatedFilterItem } from '@/src/components/shared/ui/animated-filter-grid/animated-filter-item';
import { AnimatedFilterTabButton } from '@/src/components/shared/ui/animated-filter-grid/animated-filter-tab-button';
import { AnimatedFilterTabs } from '@/src/components/shared/ui/animated-filter-grid/animated-filter-tabs';
import BlogCardV2 from '@/src/components/shared/ui/card/blog-card-v2';
import type { BlogPost } from '@/src/interface';
import { getBlogPosts } from '@/src/utils/getBlogPosts';

const BLOG_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai-basics', label: 'AI Basics' },
  { id: 'automation', label: 'Automation' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'ai-trends', label: 'AI Trends' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'product-updates', label: 'Product Updates' },
];

const BlogList = () => {
  const posts: BlogPost[] = getBlogPosts();
  return (
    <section className="pt-8 pb-20 md:pb-30 lg:pb-44">
      <div className="main-container">
        <AnimatedFilterGrid defaultCategory="all">
          <RevealAnimation delay={0.4}>
            <AnimatedFilterTabs>
              {BLOG_FILTERS.map((filter) => (
                <AnimatedFilterTabButton key={filter.id} value={filter.id}>
                  {filter.label}
                </AnimatedFilterTabButton>
              ))}
            </AnimatedFilterTabs>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="relative">
              <div className="grid h-full grid-cols-12 gap-x-0 gap-y-[70px] lg:gap-x-8">
                {posts.map((post) => (
                  <AnimatedFilterItem key={post.slug} category={post.category}>
                    <BlogCardV2
                      card={{
                        img: post.image,
                        date: post.date,
                        tags: post.tags,
                        title: post.title,
                        href: `/blog/${post.slug}`,
                      }}
                      category={post.category}
                    />
                  </AnimatedFilterItem>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </AnimatedFilterGrid>
      </div>
    </section>
  );
};

export default BlogList;
