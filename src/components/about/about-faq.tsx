import faqImage from '@/public/images/opai-img-5.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Accordion } from '@/src/components/shared/ui/accordion/accordion';
import { AccordionAction } from '@/src/components/shared/ui/accordion/accordion-action';
import { AccordionContent } from '@/src/components/shared/ui/accordion/accordion-content';
import { AccordionItem } from '@/src/components/shared/ui/accordion/accordion-item';
import { Badge } from '@/src/components/shared/ui/badge';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';

const FAQ_ITEMS: { value: string; question: string; answer: string }[] = [
  {
    value: 'faq-1',
    question: 'What does an AI marketing agency do?',
    answer:
      'We plan, launch, and optimize campaigns using AI-assisted research, audience insights, creative testing, and automation. That includes paid ads, SEO, email, funnels, and tracking—so your marketing becomes measurable and scalable.',
  },
  {
    value: 'faq-2',
    question: 'Which channels do you manage?',
    answer:
      'We manage Google Ads, Meta ads, landing pages and CRO, SEO (local + content), email marketing, and remarketing. We also connect your analytics stack so every channel reports the same truth.',
  },
  {
    value: 'faq-3',
    question: 'How does AI actually improve performance?',
    answer:
      'AI helps us speed up research, generate and test more variations, spot patterns in data, and automate repetitive work. Human strategy still leads—AI helps us move faster and make smarter optimizations.',
  },
  {
    value: 'faq-4',
    question: 'How long until we see results?',
    answer:
      'Paid ads can show signals in the first 7–14 days. Strong, stable performance typically builds over 30–90 days as we test creatives, refine targeting, and improve landing pages and conversion paths.',
  },
  {
    value: 'faq-5',
    question: 'Do you provide reporting and dashboards?',
    answer:
      'Yes. You get clear weekly updates plus a live dashboard showing spend, leads, CAC/CPA, ROAS (when applicable), and funnel conversion rates. We focus on decisions—not just charts.',
  },
  {
    value: 'faq-6',
    question: 'What do you need from us to get started?',
    answer:
      "Access to your ad accounts (or we create them), website/landing page URLs, brand assets, and a quick kickoff call. If tracking isn't set up, we'll help configure analytics and conversion events.",
  },
  {
    value: 'faq-7',
    question: 'Do you work with small businesses or only big brands?',
    answer:
      "Both. We tailor the plan to your stage—whether you're launching your first campaigns or scaling an existing funnel. The goal is the same: consistent leads and profitable growth.",
  },
  {
    value: 'faq-8',
    question: "What's included in your monthly retainer?",
    answer:
      "Strategy, campaign setup, ongoing optimization, creative testing guidance, landing page and funnel recommendations, tracking support, and reporting. You'll always know what we're doing and why.",
  },
  {
    value: 'faq-9',
    question: 'Is there a minimum contract or long-term commitment?',
    answer:
      "No long-term lock-ins. We work on flexible monthly retainers. If we're not delivering value, you're free to pause or stop—simple and transparent.",
  },
];

const AboutFaq = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="flex flex-col items-start gap-x-0 gap-y-10 lg:flex-row lg:gap-x-25 lg:gap-y-0">
          <div className="space-y-12.5">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <Badge badgeText="FAQ" className="justify-center text-black lg:justify-start" />
              </RevealAnimation>

              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-is-heading-2 font-instrument-serif text-background-13 text-center font-normal lg:text-left">
                    Frequently asked questions
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-2 text-background-13/60 font-inter-tight text-center font-normal lg:text-left">
                    Quick answers to common questions about our AI marketing services, pricing,
                    timelines, reporting, and how we improve results over time.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <figure className="h-[492px] w-full overflow-hidden rounded-sm lg:max-w-[587px]">
                <Image
                  src={faqImage}
                  alt="faq"
                  width={587}
                  height={492}
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>

          <div className="w-full lg:max-w-[595px]">
            <Accordion defaultOpen="faq-1" className="space-y-0!">
              {FAQ_ITEMS.map((item) => (
                <RevealAnimation key={item.value} delay={0.1}>
                  <AccordionItem
                    value={item.value}
                    className={cn(
                      'group border-stroke-3/25 relative z-10 w-full cursor-pointer overflow-hidden border-b py-6'
                    )}
                  >
                    <AccordionAction
                      className={cn(
                        'text-background-13/60 font group-data-[state=open]:text-background-13/90 font-medium',
                        'md:text-tagline-1 group-data-[state=open]:pb-4!'
                      )}
                    >
                      {item.question}
                    </AccordionAction>
                    <AccordionContent className="text-background-13/60 px-0!">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </RevealAnimation>
              ))}
            </Accordion>
          </div>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-20 flex justify-center">
            <SecondaryLinkButton href="#" displayClassName="w-[85%] md:w-auto">
              Explore All FAQ
            </SecondaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutFaq;
