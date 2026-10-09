import RevealAnimation from '@/src/components/animation/reveal-animation';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/src/components/shared/icon';

const socialCards = [
  {
    Icon: LinkedInIcon,
    href: 'https://linkedin.com',
    label: 'Follow Nexsas on LinkedIn (opens in new tab)',
    labelText: 'Linkedin:',
    handle: '@Nexsas',
  },
  {
    Icon: XIcon,
    href: 'https://x.com',
    label: 'Follow Nexsas on X / Twitter (opens in new tab)',
    labelText: 'Twitter:',
    handle: '@Nexsas',
  },
  {
    Icon: InstagramIcon,
    href: 'https://instagram.com',
    label: 'Follow Nexsas on Instagram (opens in new tab)',
    labelText: 'Instagram:',
    handle: '@Nexsas',
  },
];

const ContactFollowUs = () => (
  <section className="bg-background-7 py-20 md:py-30 lg:py-44">
    <div className="main-container">
      <div className="space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90">
              Follow us on social media
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Stay connected with us and explore the latest AI trends:
            </p>
          </RevealAnimation>
        </div>

        <div className="mx-auto grid max-w-[850px] grid-cols-12 items-center justify-center gap-y-6 md:gap-x-8 md:gap-y-0">
          {socialCards.map(({ Icon, href, label, labelText, handle }, index) => (
            <RevealAnimation key={href} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-4">
                <div className="border-stroke-3/18 space-y-6 rounded-lg border bg-white p-6 text-center transition-transform duration-450 ease-in-out hover:scale-105 lg:p-14">
                  <span className="mx-auto flex size-9 items-center justify-center">
                    <Icon className="stroke-background-6 mx-auto fill-none" />
                  </span>
                  <p className="font-inter-tight text-tagline-1 text-background-13/90 font-normal text-nowrap">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="hover:underline"
                    >
                      {labelText} <span className="text-background-13/60">{handle}</span>
                    </a>
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactFollowUs;
