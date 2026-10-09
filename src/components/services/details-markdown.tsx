import RevealAnimation from '@/src/components/animation/reveal-animation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface ServiceDetailsMarkdownProps {
  readonly content: string;
}

const ServiceDetailsMarkdown = ({ content }: ServiceDetailsMarkdownProps) => (
  <section className="relative z-10">
    <div className="main-container">
      <RevealAnimation delay={0.4}>
        <div className="service-details-markdown pt-10">
          <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
        </div>
      </RevealAnimation>
    </div>
  </section>
);

export default ServiceDetailsMarkdown;
