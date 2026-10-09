import RevealAnimation from '@/src/components/animation/reveal-animation';

// O que está em jogo (StoryBrand): o custo de não agir e como fica depois de aplicar o método.
const seNaoAgir = [
  'Seu concorrente é citado pela IA no seu lugar',
  'Você depende cada vez mais de anúncio para ter contatos',
  'Seu conteúdo continua sem trazer visitas nem clientes',
];

const aplicando = [
  'Seu site preparado para aparecer no Google e ser citado pelas IAs',
  'Mais contatos e propostas vindos da busca, sem pagar por clique',
  'Um plano claro, medido mês a mês, para continuar evoluindo',
];

const Check = () => (
  <span
    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-(--cor-verde) text-white"
    aria-hidden
  >
    <svg
      viewBox="0 0 24 24"
      className="size-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

const CursoCaminhos = () => (
  <section className="bg-(--cor-roxo) py-14 md:py-20" id="caminhos">
    <div className="main-container">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">
            O que está em jogo
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
            Dois caminhos para <span className="text-sag-yellow">a sua marca</span>
          </h2>
        </RevealAnimation>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1000px] gap-4 md:grid-cols-2">
        <RevealAnimation delay={0.2}>
          <div className="h-full rounded-2xl border border-white/10 bg-black/20 p-6">
            <p className="font-ibm-plex-mono text-tagline-3 mb-4 text-white/60 uppercase">
              Se você não agir agora
            </p>
            <ul className="space-y-3">
              {seNaoAgir.map((item) => (
                <li key={item} className="text-tagline-1 flex gap-3 text-white/75">
                  <span
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#d93a2f] text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <div className="bg-background-13 h-full rounded-2xl border border-(--cor-amarelo)/40 p-6">
            <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow mb-4 uppercase">
              Aplicando o Método SAG
            </p>
            <ul className="space-y-3">
              {aplicando.map((item) => (
                <li key={item} className="text-tagline-1 flex gap-3 text-white">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export default CursoCaminhos;
