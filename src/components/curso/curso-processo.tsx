import RevealAnimation from '@/src/components/animation/reveal-animation';
import { etapas } from '@/src/data/curso';
import { cn } from '@/src/utils/cn';
import { CapaAulaAmostra } from './cartoes-visuais';

// "Como funciona": as 4 etapas do método em uma roda (ciclo contínuo: depois de medir, volta a modelar),
// com a aula de amostra embaixo.
const exemplos = [
  'Entrega: canvas do projeto',
  'Entrega: mapa de demanda e diagnóstico',
  'Entrega: página revisada e mapa de fontes',
  'Entrega: relatório e plano de 90 dias',
];

// Posição de cada etapa na grade 3x3 em volta da roda: em cima, direita, embaixo, esquerda.
const posicoes = ['lg:col-start-2 lg:row-start-1', 'lg:col-start-3 lg:row-start-2', 'lg:col-start-2 lg:row-start-3', 'lg:col-start-1 lg:row-start-2'];

// "titulo" define a tag do nome da etapa: h3 na versão de computador e p na de celular, para não duplicar títulos no HTML.
const CartaoEtapa = ({ indice, className, titulo: Titulo = 'h3' }: Readonly<{ indice: number; className?: string; titulo?: 'h3' | 'p' }>) => (
  <div className={cn('border-background-13/10 rounded-2xl border bg-white p-6 shadow-[0_12px_40px_rgba(20,20,20,0.06)]', className)}>
    <div className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-(--cor-roxo) text-lg font-bold text-white">
        {indice + 1}
      </span>
      <Titulo className="font-instrument-serif text-background-13 text-[30px] leading-none uppercase">{etapas[indice].nome}</Titulo>
    </div>
    <p className="text-tagline-2 text-background-13/70 mt-3">{etapas[indice].texto}</p>
    <p className="text-tagline-3 mt-3 font-medium text-(--cor-roxo)">{exemplos[indice]}</p>
  </div>
);

const Roda = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[340px]" aria-hidden>
    <svg viewBox="0 0 340 340" className="absolute inset-0 size-full overflow-visible" fill="none">
      <circle cx="170" cy="170" r="140" stroke="#ece6f4" strokeWidth="26" />
      <circle cx="170" cy="170" r="140" stroke="#4B1E87" strokeWidth="3" strokeDasharray="6 12" className="roda-gira" style={{ transformOrigin: '170px 170px' }} />
      {/* setas no sentido horário entre as etapas */}
      {[45, 135, 225, 315].map((ang) => (
        <g key={ang} transform={`rotate(${ang} 170 170)`}>
          <path d="M170 24 l10 6 l-10 6" stroke="#4B1E87" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      {[0, 90, 180, 270].map((ang, i) => (
        <g key={ang} transform={`rotate(${ang} 170 170)`}>
          <circle cx="170" cy="30" r="22" fill="#4B1E87" />
          <text x="170" y="37" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" transform={`rotate(${-ang} 170 30)`}>
            {i + 1}
          </text>
        </g>
      ))}
      <circle r="8" fill="#F9B000">
        <animateMotion dur="8s" repeatCount="indefinite" path="M170 30 A140 140 0 1 1 169.99 30" />
      </circle>
    </svg>
    <div className="absolute inset-[70px] grid place-items-center rounded-full bg-(--cor-roxo) p-4 text-center">
      <div>
        <p className="font-instrument-serif text-sag-yellow text-[34px] leading-none uppercase">Ciclo</p>
        <p className="text-tagline-3 mt-1 leading-snug text-white/80">depois de medir, você volta a modelar</p>
      </div>
    </div>
  </div>
);

const CursoProcesso = () => (
  <section className="bg-background-7 py-14 md:py-20">
    <div className="main-container space-y-14">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">Como funciona</p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
            Você aplica <span className="text-(--cor-roxo)">enquanto assiste</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-background-13/70">
            Aulas de 8 a 15 minutos, um exercício por módulo e um projeto final feito em um site real, seguindo um
            ciclo de 4 etapas.
          </p>
        </RevealAnimation>
      </div>

      {/* Roda com as etapas em volta (computador) */}
      <div className="mx-auto hidden max-w-[1120px] grid-cols-[1fr_380px_1fr] grid-rows-[auto_auto_auto] items-center gap-x-8 gap-y-6 lg:grid">
        {etapas.map((etapa, i) => (
          <RevealAnimation key={etapa.nome} delay={0.1 + i * 0.1}>
            <div className={cn(posicoes[i], i === 0 || i === 2 ? 'mx-auto w-full max-w-[380px]' : '')}>
              <CartaoEtapa indice={i} />
            </div>
          </RevealAnimation>
        ))}
        <div className="col-start-2 row-start-2">
          <Roda />
        </div>
      </div>

      {/* Roda + lista no celular e tablet */}
      <div className="space-y-6 lg:hidden">
        <div className="mx-auto max-w-[280px]">
          <Roda />
        </div>
        <ol className="mx-auto grid max-w-[640px] gap-3">
          {etapas.map((etapa, i) => (
            <li key={etapa.nome}>
              <CartaoEtapa indice={i} titulo="p" />
            </li>
          ))}
        </ol>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="h-[360px] md:h-[560px]">
          <CapaAulaAmostra />
        </div>
      </RevealAnimation>
    </div>
  </section>
);

export default CursoProcesso;
