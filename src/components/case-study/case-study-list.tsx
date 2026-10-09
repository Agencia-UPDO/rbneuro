import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import CaseStudyCard from '@/src/components/shared/ui/card/case-study-card';
import { getCaseStudies } from '@/src/utils/getCaseStudies';

const DEFAULT_STATS = [
  { value: 0, suffix: '%', label: 'Impact' },
];

const CaseStudyList = () => {
  const studies = getCaseStudies();
  return (
    <section className="bg-white py-20 md:py-30 lg:py-44">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <div className="flex items-center justify-center">
                <Badge badgeText="Case Studies" className="justify-center text-black" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 mx-auto w-full max-w-[670px] text-center font-normal">
                Success stories that speak for themselves.
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="grid grid-cols-12 gap-y-[70px]">
              {studies.map((study) => (
                <div key={study.slug} className="col-span-12">
                  <CaseStudyCard
                    img={study.image}
                    title={study.title}
                    desc={study.excerpt}
                    href={`/case-study/${study.slug}`}
                    stats={study.stats?.length ? study.stats : DEFAULT_STATS}
                  />
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyList;
