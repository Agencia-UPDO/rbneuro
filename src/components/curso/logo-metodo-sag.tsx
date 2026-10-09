import { cn } from '@/src/utils/cn';

interface LogoMetodoSagProps {
  className?: string;
  // "clara": caixa da barra de busca em branco, para usar sobre fundo preto (rodapé).
  caixa?: 'escura' | 'clara';
  // "pequeno": tamanho fixo reduzido, para o rodapé.
  tamanho?: 'normal' | 'pequeno';
}

// Logo do Método SAG no mesmo desenho do logo do Método COR: "MÉTODO" fino, a sigla grossa em amarelo
// e, ao lado, a caixa com a barra de busca.
const LogoMetodoSag = ({ className, caixa = 'escura', tamanho = 'normal' }: Readonly<LogoMetodoSagProps>) => {
  const pequeno = tamanho === 'pequeno';
  const clara = caixa === 'clara';
  return (
    <div
      className={cn('inline-flex items-stretch font-(family-name:--font-montserrat)', className)}
      role="img"
      aria-label="Método SAG: SEO, AEO e GEO"
    >
      <div className={cn('flex flex-col justify-center text-left leading-[0.85]', pequeno ? 'pr-2' : 'pr-3 md:pr-4')}>
        <span className={cn('font-light tracking-[0.02em] text-white', pequeno ? 'text-[18px]' : 'text-[26px] md:text-[40px]')}>
          MÉTODO
        </span>
        <span className={cn('text-sag-yellow font-black tracking-[-0.03em]', pequeno ? 'text-[40px]' : 'text-[56px] md:text-[88px]')}>
          SAG
        </span>
      </div>
      <div
        className={cn(
          'flex items-center',
          clara ? 'bg-white' : 'bg-background-13',
          pequeno ? 'rounded-md px-3' : 'rounded-lg px-4 md:rounded-xl md:px-7'
        )}
      >
        <div
          className={cn(
            'flex items-center rounded-full py-1 pr-1',
            clara ? 'bg-background-9 border-background-13/10 border' : 'bg-white',
            pequeno ? 'pl-2.5' : 'pl-3 md:pl-4'
          )}
        >
          {/* As iniciais em negrito formam a sigla SAG. */}
          <span
            className={cn(
              'text-background-13 font-light whitespace-nowrap',
              pequeno ? 'pr-1.5 text-[10px]' : 'pr-2 text-[11px] md:pr-3 md:text-[15px]'
            )}
          >
            <b className="font-black">S</b>EO · <b className="font-black">A</b>EO · <b className="font-black">G</b>EO
          </span>
          <span className={cn('bg-sag-yellow grid place-items-center rounded-full', pequeno ? 'size-5' : 'size-6 md:size-8')} aria-hidden>
            <svg viewBox="0 0 24 24" className={pequeno ? 'size-3' : 'size-4 md:size-5'} fill="none" stroke="#141414" strokeWidth="2.6" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6" />
              <path d="M15 15l5 5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoMetodoSag;
