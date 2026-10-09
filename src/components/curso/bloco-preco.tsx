import { preco } from '@/src/data/curso';
import { cn } from '@/src/utils/cn';

// Formas de pagamento e selo de compra segura em uma linha discreta.
// Trocar o texto "Hotmart" pelo logo oficial quando o arquivo estiver na pasta.
export const SeloHotmart = ({ className }: Readonly<{ className?: string }>) => (
  <p className={cn('text-tagline-3 text-center text-balance text-white/70', className)}>
    <svg viewBox="0 0 24 24" className="mr-1.5 inline size-4 align-[-3px]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
    Pix, cartão ou boleto · Pagamento seguro via <strong className="font-bold text-[#F04E23]">Hotmart</strong>
  </p>
);

// Preço em destaque: selo de promoção da nova versão, preço cheio riscado e a parcela como número principal.
export const PrecoDestaque = ({ className }: Readonly<{ className?: string }>) => (
  <div className={cn('flex flex-col items-center gap-2', className)}>
    <span className="bg-sag-yellow text-background-13 rounded-full px-3 py-1 text-xs font-bold tracking-[0.06em] uppercase">
      Preço promocional
    </span>
    {preco.precoCheio && (
      <p className="flex items-baseline gap-2 text-white/70">
        <span className="text-xl">de</span>
        <del className="font-instrument-serif relative text-[46px] leading-none text-white/80 no-underline">
          {preco.precoCheio}
          <span className="absolute inset-x-[-4px] top-1/2 h-[4px] -rotate-[8deg] rounded bg-[#ff5a4f]" aria-hidden />
        </del>
        <span className="text-xl">por</span>
      </p>
    )}
    {preco.valorParcela ? (
      <>
        <p className="text-white/85">
          <span className="text-tagline-1 mr-2 font-medium">{preco.parcelas}x de</span>
          <span className="font-instrument-serif text-sag-yellow text-[56px] leading-none">{preco.valorParcela}</span>
        </p>
        <p className="text-tagline-2 text-white/70">ou {preco.aVista} à vista</p>
      </>
    ) : (
      <p className="text-white/85">
        <span className="font-instrument-serif text-sag-yellow text-[44px] leading-none">{preco.aVista}</span>
        <span className="text-tagline-2 ml-2">à vista ou em até {preco.parcelas}x</span>
      </p>
    )}
  </div>
);
