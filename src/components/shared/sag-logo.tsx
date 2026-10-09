import { cn } from '@/src/utils/cn';

interface SagLogoProps {
  compact?: boolean;
  className?: string;
}

const SagLogo = ({ compact = false, className }: Readonly<SagLogoProps>) => (
  <div className={cn('inline-flex items-center', compact ? 'gap-2.5' : 'gap-4', className)} aria-label="Método SAG">
    <span
      className={cn(
        'flex shrink-0 items-center justify-center overflow-hidden rounded-[28%] border border-white/12 bg-white/[0.07]',
        compact ? 'size-10' : 'size-16 md:size-[72px]'
      )}
      aria-hidden="true"
    >
      <span className={cn('mr-1.5 flex flex-col', compact ? 'gap-0.5' : 'gap-1')}>
        <span className={cn('rounded-full bg-[#38b6ff]', compact ? 'size-1' : 'size-1.5')} />
        <span className={cn('rounded-full bg-[#38e8a2]', compact ? 'size-1' : 'size-1.5')} />
        <span className={cn('rounded-full bg-[#7257ff]', compact ? 'size-1' : 'size-1.5')} />
      </span>
      <span className={cn('font-sora font-bold tracking-[-0.08em] text-white', compact ? 'text-[11px]' : 'text-lg md:text-xl')}>SAG</span>
    </span>
    <span className="flex flex-col text-left">
      <span className={cn('font-sora font-semibold tracking-[-0.045em] text-white', compact ? 'text-sm' : 'text-2xl md:text-3xl')}>
        Método SAG
      </span>
      <span className={cn('font-medium tracking-[0.15em] text-white/42 uppercase', compact ? 'text-[9px]' : 'mt-1 text-[10px] md:text-xs')}>
        SEO · AEO · GEO
      </span>
    </span>
  </div>
);

export default SagLogo;
