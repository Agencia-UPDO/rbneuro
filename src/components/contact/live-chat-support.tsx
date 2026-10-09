import LiveChatSupportImage from '@/public/images/opai-img-267.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const ContactLiveChatSupport = () => (
  <section className="bg-background-7 py-20 md:py-25 lg:py-30">
    <div className="main-container">
      <RevealAnimation delay={0.1}>
        <figure className="h-[500px] w-full overflow-hidden rounded-xl md:h-[806px]">
          <Image
            src={LiveChatSupportImage}
            alt="live chat support"
            width={1200}
            height={806}
            className="size-full object-cover"
          />
        </figure>
      </RevealAnimation>
    </div>
  </section>
);

export default ContactLiveChatSupport;
