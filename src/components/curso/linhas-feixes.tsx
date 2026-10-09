import { cn } from '@/src/utils/cn';

// Baseado no HeroLineGradient da variação Data Visualization do tema: linhas verticais finas
// com um feixe amarelo descendo por elas, cada uma em um ritmo.
const atrasos = ['0s', '0.9s', '1.5s', '0.01s', '1.8s', '0.6s', '2s', '1.2s'];

const LinhasFeixes = ({ className }: Readonly<{ className?: string }>) => (
  <figure
    className={cn(
      'pointer-events-none absolute top-0 left-1/2 z-0 flex h-full w-full max-w-[1180px] -translate-x-1/2 justify-between px-4',
      className
    )}
    aria-hidden
  >
    {atrasos.map((atraso, i) => (
      <div
        key={atraso}
        className={cn(
          'linha-feixe relative h-full w-px overflow-hidden bg-white/12',
          i > 1 && i < 6 && 'max-sm:hidden',
          i > 2 && i < 5 && 'max-lg:hidden'
        )}
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        <div
          className="feixe absolute left-0 h-[140px] w-px bg-linear-to-b from-transparent to-(--cor-amarelo)"
          style={{ animationDelay: atraso }}
        />
      </div>
    ))}
  </figure>
);

export default LinhasFeixes;
