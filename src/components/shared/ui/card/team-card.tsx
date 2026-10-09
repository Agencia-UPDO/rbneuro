import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export type TeamCardProps = {
  image: string;
  name: string;
  position: string;
  href?: string;
  className?: string;
};

const TeamCard = ({ image, name, position, href = '/team', className }: TeamCardProps) => (
  <div
    className={cn(
      'border-stroke-1/10 group bg-background-5 relative h-[420px] w-full overflow-hidden rounded-lg border',
      className
    )}
    aria-label={`Team member: ${name}`}
  >
    <figure className="size-full overflow-hidden rounded-lg grayscale transition-all duration-400 ease-in-out group-hover:grayscale-0">
      <Image
        src={image}
        alt={`${name}, ${position}`}
        width={400}
        height={420}
        className="size-full object-cover"
      />
    </figure>
    <Link href={href} className="text-center">
      <div
        className={cn(
          'bg-background-13/80 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-md',
          'transition-all duration-400 ease-in-out',
          'md:bottom-5 md:w-[calc(100%-40px)]',
          'lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
        )}
      >
        <h3 className="text-manrope-heading-6 font-medium text-white/80">{name}</h3>
        <p className="text-tagline-4 text-center font-normal text-white/50">{position}</p>
      </div>
    </Link>
  </div>
);

export default TeamCard;
