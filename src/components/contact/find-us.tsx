import MapImage from '@/public/images/opai-img-50.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const ContactFindUs = () => (
  <section className="bg-background-7">
    <div className="main-container">
      <div className="space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90">
              Find us on the map
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Check out our global office location on the map or get directions.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <figure className="h-[512px] w-full overflow-hidden">
            <Image
              src={MapImage}
              alt="find us on the map"
              width={1200}
              height={512}
              className="h-full w-full object-cover"
            />
          </figure>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export default ContactFindUs;
