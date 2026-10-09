import { cn } from '@/src/utils/cn';

// Aviso "arraste para o lado" dos carrosséis, só no celular.
const DicaArrastar = ({ className }: Readonly<{ className?: string }>) => (
  <p className={cn('text-tagline-3 flex items-center justify-center gap-2 md:hidden', className)} aria-hidden>
    Arraste para o lado
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </p>
);

export default DicaArrastar;
