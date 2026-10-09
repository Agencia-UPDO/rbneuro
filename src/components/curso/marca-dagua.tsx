import { cn } from '@/src/utils/cn';

// Elementos gigantes e bem apagados do logo do Método SAG, usados como fundo das seções claras.
// "sigla": as letras SAG só com contorno. "busca": o contorno da barra de pesquisa com a lupa.
const MarcaDagua = ({ tipo, className }: Readonly<{ tipo: 'sigla' | 'busca'; className?: string }>) =>
  tipo === 'sigla' ? (
    <span
      className={cn(
        'marca-dagua pointer-events-none absolute z-0 font-(family-name:--font-montserrat) leading-none font-black text-transparent select-none',
        className
      )}
      style={{ WebkitTextStroke: '2px rgba(75, 30, 135, 0.09)' }}
      aria-hidden
    >
      SAG
    </span>
  ) : (
    <svg
      viewBox="0 0 600 140"
      className={cn('marca-dagua pointer-events-none absolute z-0', className)}
      fill="none"
      stroke="rgba(75, 30, 135, 0.1)"
      strokeWidth="3"
      aria-hidden
    >
      <rect x="2" y="2" width="596" height="136" rx="68" />
      <circle cx="530" cy="70" r="52" />
      <circle cx="524" cy="64" r="20" />
      <path d="M539 79l18 18" strokeLinecap="round" />
      <path d="M60 70h330" strokeLinecap="round" strokeDasharray="1 18" />
    </svg>
  );

export default MarcaDagua;
