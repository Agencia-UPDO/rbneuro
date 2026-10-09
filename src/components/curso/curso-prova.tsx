import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { CartaoUdemy } from './cartoes-visuais';

const cards = [
  { valor: '+6 mil', texto: 'alunos no curso de SEO original' },
  { valor: '4,7', texto: 'de nota em 1.543 avaliações na Udemy' },
  { valor: '+30', texto: 'aulas curtas, cerca de 7h20 de vídeo' },
  { valor: '90 dias', texto: 'de plano de ação pronto ao final' },
];

// Baseado no AboutAchievement do tema.
const CursoProva = () => (
  <section className="bg-background-5 relative overflow-hidden py-14 md:py-20">
    <div className="main-container relative z-20">
      <div className="flex flex-col items-center justify-center gap-x-15 gap-y-18 lg:flex-row lg:gap-y-0 xl:gap-x-25">
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <Badge badgeText="A evolução do Método COR" className="[&_svg]:fill-sag-yellow text-white/60" />
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                  Um método que já formou milhares de alunos
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 max-w-[620px] font-normal text-white/60">
                  O Método SAG preserva o que funcionou no Método COR: começar pelo consumidor, pesquisar
                  antes de produzir e otimizar com propósito. Agora ampliado para as respostas de IA.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map((card, index) => (
              <RevealAnimation key={card.valor} delay={0.3 + index * 0.1}>
                <div className="bg-background-4 flex items-center gap-x-4 rounded-sm p-8">
                  <span className="font-instrument-serif text-is-heading-5 shrink-0 font-normal text-sag-yellow">
                    {card.valor}
                  </span>
                  <p className="text-tagline-3 font-inter-tight font-normal text-white/80">{card.texto}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="h-[377px] w-full lg:max-w-[451px] xl:h-[454px]">
            <CartaoUdemy />
          </div>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export default CursoProva;
