import { cn } from '@/src/utils/cn';
import Link from 'next/link';

// Botão principal de compra: brilho passando de tempos em tempos, pulso suave em volta e seta que avança no hover.
const BotaoInscricao = ({ href = '#inscricao', className }: Readonly<{ href?: string; className?: string }>) => (
  <Link
    href={href}
    className={cn(
      'botao-cta group relative inline-flex bg-(--cor-verde) text-white items-center gap-3 overflow-hidden rounded-xl px-6 py-4 text-base font-bold whitespace-nowrap uppercase transition hover:brightness-110 sm:px-10 sm:py-5 sm:text-lg md:text-xl',
      className
    )}
  >
    <span className="relative z-10">Quero me inscrever</span>
    <span className="relative z-10 grid size-8 bg-white place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1.5">
      <svg viewBox="0 0 24 24" className="size-5 text-(--cor-verde)" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  </Link>
);

export default BotaoInscricao;
