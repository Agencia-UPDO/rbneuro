import RevealAnimation from '@/src/components/animation/reveal-animation';
import { cn } from '@/src/utils/cn';

// Seção logo após o hero: desenha o caminho real de um cliente até decidir. Não é uma linha reta:
// ele passa pelo Google, pergunta à IA, pede indicação, lê avaliações e só então decide.
type Parada = {
  id: string;
  titulo: string;
  exemplo: string;
  icone: 'duvida' | 'google' | 'ia' | 'amigos' | 'video' | 'estrela' | 'site' | 'decisao';
  // Posição no desenho (viewBox 1000 x 540).
  x: number;
  y: number;
};

const paradas: Parada[] = [
  { id: 'duvida', titulo: 'Surge a necessidade', exemplo: '“Minha conta de luz está alta demais”', icone: 'duvida', x: 95, y: 280 },
  { id: 'google', titulo: 'Pesquisa no Google', exemplo: 'energia solar vale a pena', icone: 'google', x: 270, y: 95 },
  { id: 'ia', titulo: 'Pergunta ao ChatGPT', exemplo: '“Quais empresas de energia solar são confiáveis na minha cidade?”', icone: 'ia', x: 490, y: 300 },
  { id: 'amigos', titulo: 'Pede indicação', exemplo: '“Alguém conhece uma empresa boa?”', icone: 'amigos', x: 270, y: 455 },
  { id: 'video', titulo: 'Vê vídeos e redes', exemplo: 'instalação antes e depois', icone: 'video', x: 680, y: 455 },
  { id: 'avaliacoes', titulo: 'Confere avaliações', exemplo: 'empresa X é confiável?', icone: 'estrela', x: 640, y: 95 },
  { id: 'site', titulo: 'Visita o site', exemplo: 'orçamento e casos reais', icone: 'site', x: 880, y: 150 },
  { id: 'decisao', titulo: 'Decide', exemplo: 'Escolhe quem apareceu em todo o caminho', icone: 'decisao', x: 890, y: 380 },
];

// Curva suave (Catmull-Rom convertida em Bézier) passando por todas as paradas, na ordem.
const caminho = (pontos: { x: number; y: number }[]) => {
  let d = `M${pontos[0].x} ${pontos[0].y}`;
  for (let i = 0; i < pontos.length - 1; i++) {
    const p0 = pontos[i - 1] ?? pontos[i];
    const p1 = pontos[i];
    const p2 = pontos[i + 1];
    const p3 = pontos[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 5;
    const c1y = p1.y + (p2.y - p0.y) / 5;
    const c2x = p2.x - (p3.x - p1.x) / 5;
    const c2y = p2.y - (p3.y - p1.y) / 5;
    d += ` C${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
};

const trajeto = caminho(paradas);
// Volta ao Google depois das avaliações: mostra que o caminho vai e volta.
const volta = 'M640 95 C 560 20, 360 20, 270 95';

const Icone = ({ tipo }: Readonly<{ tipo: Parada['icone'] }>) => {
  const comum = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (tipo) {
    case 'duvida':
      return (
        <svg viewBox="0 0 24 24" {...comum}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 24 24" {...comum}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="M15 15l5 5" />
        </svg>
      );
    case 'ia':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
        </svg>
      );
    case 'amigos':
      return (
        <svg viewBox="0 0 24 24" {...comum}>
          <path d="M4 5h16v10H9l-5 4z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    case 'video':
      return (
        <svg viewBox="0 0 24 24" {...comum}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M10 9l5 3-5 3z" fill="currentColor" />
        </svg>
      );
    case 'estrela':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
        </svg>
      );
    case 'site':
      return (
        <svg viewBox="0 0 24 24" {...comum}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...comum} strokeWidth={2.6}>
          <path d="M5 12l5 5L20 7" />
        </svg>
      );
  }
};

const CartaoParada = ({ p, className }: Readonly<{ p: Parada; className?: string }>) => {
  const destaque = p.icone === 'decisao';
  return (
    <div
      className={cn(
        'flex w-[230px] items-start gap-3 rounded-xl px-4 py-3 text-left shadow-[0_14px_40px_rgba(0,0,0,.25)]',
        destaque ? 'bg-sag-yellow text-background-13' : 'bg-white text-background-13',
        className
      )}
    >
      <span
        className={cn(
          'mt-0.5 grid size-8 shrink-0 place-items-center rounded-full [&_svg]:size-[18px]',
          destaque ? 'bg-background-13 text-sag-yellow' : 'bg-(--cor-roxo) text-white'
        )}
      >
        <Icone tipo={p.icone} />
      </span>
      <div className="min-w-0">
        <p className="text-base leading-tight font-bold">{p.titulo}</p>
        <p className={cn('mt-1 text-sm leading-snug', destaque ? 'text-background-13/80' : 'text-background-13/60')}>
          {p.exemplo}
        </p>
      </div>
    </div>
  );
};

const CursoJornada = () => (
  <section className="bg-background-5 overflow-hidden py-14 md:py-20">
    <div className="main-container">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Como o cliente busca hoje</p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
            O caminho até a compra <br className="hidden md:block" />
            <span className="text-sag-yellow">não é uma linha reta</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-white/70">
            Ele pesquisa, pergunta para a IA, pede indicação, lê avaliações, volta ao Google e só então decide.
            Sua marca precisa aparecer em cada parada.
          </p>
        </RevealAnimation>
      </div>

      {/* Desenho em telas médias e grandes */}
      <div className="relative mx-auto mt-12 hidden aspect-[1000/540] w-full max-w-[1120px] md:block">
        <svg viewBox="0 0 1000 540" className="absolute inset-0 size-full overflow-visible" fill="none" aria-hidden>
          <path d={volta} stroke="rgba(255,255,255,.22)" strokeWidth="2" strokeDasharray="4 8" />
          <text x="455" y="30" fill="rgba(255,255,255,.45)" fontSize="13" textAnchor="middle">
            volta ao Google
          </text>
          <path d={trajeto} stroke="rgba(255,255,255,.18)" strokeWidth="3" />
          <path d={trajeto} className="jornada-tracejado" stroke="#F9B000" strokeWidth="3" strokeDasharray="10 14" strokeLinecap="round" />
          <circle r="7" fill="#F9B000">
            <animateMotion dur="9s" repeatCount="indefinite" path={trajeto} />
          </circle>
        </svg>
        {paradas.map((p) => (
          <div
            key={p.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x / 10}%`, top: `${(p.y / 540) * 100}%` }}
          >
            <CartaoParada p={p} className="lg:w-[240px]" />
          </div>
        ))}
      </div>

      {/* Lista vertical no celular */}
      <ol className="relative mx-auto mt-12 max-w-[360px] space-y-4 border-l-2 border-dashed border-[#F9B000]/60 pl-6 md:hidden">
        {paradas.map((p) => (
          <li key={p.id} className="relative">
            <span className="bg-sag-yellow absolute top-5 -left-[31px] size-3 rounded-full" aria-hidden />
            <CartaoParada p={p} className="w-full" />
          </li>
        ))}
      </ol>

      {/* Diferencial do método: comportamento do consumidor + aplicação no próprio site. */}
      <RevealAnimation delay={0.2}>
        <p className="text-tagline-1 mx-auto mt-12 max-w-[760px] rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-5 text-center text-white/80">
          Por isso o Método SAG não é uma lista de técnicas.{' '}
          <strong className="text-white">
            Ele parte do comportamento do consumidor, e você aplica tudo no seu próprio site durante o curso.
          </strong>
        </p>
      </RevealAnimation>
    </div>
  </section>
);

export default CursoJornada;
