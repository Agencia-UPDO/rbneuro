import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

export type BlogCardV2Props = {
  card: {
    img: string;
    date: string;
    tags: string[];
    title: string;
    href: string;
  };
  /** Used for animated filter (data-flip-category). Optional. */
  category?: string;
  className?: string;
};

const BlogCardV2 = forwardRef<HTMLElement, BlogCardV2Props>(
  ({ card, category, className }, ref) => (
    <article
      ref={ref}
      data-flip-item
      {...(category && { 'data-flip-category': category })}
      className={cn(
        'group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4',
        className
      )}
    >
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <Link href={card.href}>
          <Image
            src={card.img}
            alt={card.title}
            width={380}
            height={380}
            quality={100}
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
          />
        </Link>
      </figure>
      <div className="space-y-4 px-2">
        <p className="text-tagline-5 font-normal text-white/60">{card.date}</p>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={card.href} className="blog-title">
            <h3 className="text-is-heading-5 font-normal text-white">{card.title}</h3>
          </Link>
        </div>
      </div>
    </article>
  )
);

BlogCardV2.displayName = 'BlogCardV2';

export default BlogCardV2;
