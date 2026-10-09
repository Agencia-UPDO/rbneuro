import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import type { CaseStudy } from '@/src/interface';
import { cn } from '@/src/utils/cn';

const SHAPE_CLASSES = ['ns-shape-37', 'ns-shape-38', 'ns-shape-39'] as const;

export interface CaseStudyDetailsAchievementProps {
  readonly studies: readonly CaseStudy[];
  readonly currentSlug: string;
  readonly limit?: number;
}

export const CaseStudyDetailsAchievement = ({
  studies,
  currentSlug,
  limit = 3,
}: CaseStudyDetailsAchievementProps) => {
  const related = studies
    .filter((s) => s.slug !== currentSlug)
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="bg-background-7 pb-20 md:pb-30 lg:pb-44">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <div className="flex items-center justify-center">
                <Badge badgeText="Achievement" className="justify-center text-black" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
                Read more success stories
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 gap-y-6 md:gap-x-8 md:gap-y-0">
            {related.map((study, index) => (
              <RevealAnimation key={study.slug} delay={0.1 + index * 0.1}>
                <div
                  className={cn(
                    'bg-background-6 col-span-12 space-y-6 rounded-xl p-8 md:col-span-4'
                  )}
                >
                  <span
                    className={cn(
                      SHAPE_CLASSES[index % SHAPE_CLASSES.length],
                      'inline-block text-[48px] text-white/90'
                    )}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-instrument-serif text-is-heading-5 font-normal text-nowrap text-white/90">
                      {study.client ?? study.title}
                    </h3>
                    <p className="font-inter-tight text-tagline-2 line-clamp-2 font-normal text-white/60">
                      {study.excerpt}
                    </p>
                  </div>
                  <div>
                    <PrimaryLinkButton
                      href={`/case-study/${study.slug}`}
                      displayClassName="w-fit !py-2.5 !px-4"
                    >
                      Read more
                    </PrimaryLinkButton>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
