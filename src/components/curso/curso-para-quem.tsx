import RevealAnimation from '@/src/components/animation/reveal-animation';
import { publico } from '@/src/data/curso';

// Para quem é (e para quem não é), logo antes das perguntas frequentes.
const tiposDeSite = [
  'Site institucional',
  'Blog',
  'E-commerce',
  'Landing page',
  'Site de serviços',
  'Negócio local',
];

const naoEPara = [
  'Quem procura atalho, truque ou plugin mágico para aparecer no ChatGPT',
  'Quem espera garantia de primeira posição ou de citação nas IAs',
  'Quem não tem acesso a nenhum site para aplicar o projeto',
];

const Sim = () => (
  <span
    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-(--cor-verde) text-white"
    aria-hidden
  >
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

const Nao = () => (
  <span
    className="bg-background-13/10 text-background-13/60 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full"
    aria-hidden
  >
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  </span>
);

const CursoParaQuem = () => (
  <section className="bg-background-7 pt-14 pb-12 md:pt-20 md:pb-16" id="para-quem">
    <div className="main-container">
      {/* Para quem é */}
      <div className="space-y-10">
        <div className="mx-auto max-w-[760px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">
              Para quem é
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
              Esse curso <span className="text-(--cor-roxo)">é para você?</span>
            </h2>
          </RevealAnimation>
        </div>
        <div className="mx-auto grid max-w-[1080px] gap-4 md:grid-cols-[1.2fr_1fr]">
          <RevealAnimation delay={0.2}>
            <div className="border-background-13/10 space-y-4 rounded-2xl border bg-white p-7">
              <p className="text-background-13 text-lg font-bold">É para você que é</p>
              <ul className="space-y-4">
                {publico.map((item) => (
                  <li key={item} className="text-tagline-1 text-background-13/80 flex gap-3">
                    <Sim />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="bg-background-8 space-y-4 rounded-2xl p-7">
              <p className="text-background-13 text-lg font-bold">Não é para</p>
              <ul className="space-y-4">
                {naoEPara.map((item) => (
                  <li key={item} className="text-tagline-1 text-background-13/70 flex gap-3">
                    <Nao />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.3}>
        <div className="mx-auto mt-10 flex max-w-[1080px] flex-wrap items-center justify-center gap-x-2.5 gap-y-3">
          <span className="text-tagline-2 text-background-13/70 w-full text-center font-medium sm:mr-1 sm:w-auto">Serve para:</span>
          {tiposDeSite.map((tipo) => (
            <span
              key={tipo}
              className="border-background-13/15 text-background-13 rounded-full border bg-white px-4 py-2 text-sm font-medium"
            >
              {tipo}
            </span>
          ))}
        </div>
      </RevealAnimation>
    </div>
  </section>
);

export default CursoParaQuem;
