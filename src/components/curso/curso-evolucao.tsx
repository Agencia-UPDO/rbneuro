import RevealAnimation from '@/src/components/animation/reveal-animation';
import MarcaDagua from './marca-dagua';

// Junta as antigas seções de prova (Udemy) e de pilares (SEO, AEO, GEO) em uma só:
// o que continua valendo do Método COR e o que o Método SAG acrescenta.
const base = [
  'Começar pelo comportamento do consumidor: como ele pensa, pesquisa e decide',
  'Pesquisar antes de produzir qualquer conteúdo',
  'Otimizar páginas com propósito, não para robôs',
];

const camadas = [
  {
    sigla: 'SEO',
    titulo: 'Ser encontrado',
    texto: 'Páginas que o Google entende e mostra para quem procura.',
    exemplo: 'Seu site aparece quando alguém busca “energia solar vale a pena” no Google.',
  },
  {
    sigla: 'AEO',
    titulo: 'Ser citado',
    texto: 'Respostas claras que as IAs conseguem usar como fonte.',
    exemplo: 'O ChatGPT explica como funciona a energia solar e cita o seu site como fonte.',
  },
  {
    sigla: 'GEO',
    titulo: 'Ser considerado',
    texto: 'Uma marca presente nas comparações e recomendações das IAs.',
    exemplo: 'Perguntam à IA quais empresas são confiáveis na cidade, e a sua está na lista.',
  },
];

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    className="mt-0.5 size-5 shrink-0 text-(--cor-roxo)"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const CursoEvolucao = () => (
  <section className="bg-background-7 relative overflow-hidden py-14 md:py-20">
    <MarcaDagua
      tipo="sigla"
      className="-bottom-16 left-1/2 -translate-x-1/2 text-[260px] md:text-[420px] lg:text-[560px]"
    />
    <div className="main-container relative z-10">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">
            Uma base validada
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
            O SEO continua valendo. <br className="hidden md:block" />
            <span className="text-(--cor-roxo)">Mas não basta mais.</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-background-13/70">
            O Método SAG mantém a base que já formou milhares de alunos e acrescenta o que mudou com
            a chegada das respostas de IA.
          </p>
        </RevealAnimation>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1080px] items-center gap-5 lg:grid-cols-[1fr_auto_1.25fr]">
        {/* A base: Método COR */}
        <RevealAnimation delay={0.2}>
          <div className="border-background-13/10 flex flex-col justify-between gap-8 rounded-2xl border bg-white p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-ibm-plex-mono text-tagline-4 text-background-13/50 uppercase">
                  Método COR · a base
                </p>
                <h3 className="font-instrument-serif text-background-13 text-[32px] leading-none uppercase">
                  O que continua valendo
                </h3>
              </div>
              <ul className="space-y-4">
                {base.map((item) => (
                  <li key={item} className="text-tagline-1 text-background-13/80 flex gap-3">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background-9 flex items-center gap-4 rounded-xl px-5 py-4">
              <span className="font-instrument-serif shrink-0 text-[36px] leading-none whitespace-nowrap text-(--cor-roxo)">
                +6 mil
              </span>
              <p className="text-tagline-3 text-background-13/70">
                alunos no curso original
                <br />
                <strong className="text-background-13">4,7 de 5</strong> em 1.543 avaliações na
                Udemy
              </p>
            </div>
          </div>
        </RevealAnimation>

        {/* Seta de evolução */}
        <div className="flex items-center justify-center" aria-hidden>
          <span className="bg-sag-yellow grid size-14 place-items-center rounded-full shadow-[0_10px_30px_rgba(249,176,0,.35)]">
            <svg
              viewBox="0 0 24 24"
              className="text-background-13 size-7 rotate-90 lg:rotate-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* O que muda: Método SAG */}
        <RevealAnimation delay={0.3}>
          <div className="flex flex-col gap-6 rounded-2xl bg-(--cor-roxo) p-8 text-white">
            <div className="space-y-2">
              <p className="font-ibm-plex-mono text-tagline-4 text-white/60 uppercase">
                Método SAG · o que muda
              </p>
              <h3 className="font-instrument-serif text-[32px] leading-none uppercase">
                O que você passa a dominar
              </h3>
            </div>
            <ul className="divide-y divide-white/15">
              {camadas.map((c) => (
                <li key={c.sigla} className="space-y-3 py-5 first:pt-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-instrument-serif text-sag-yellow text-[40px] leading-none">
                      {c.sigla}
                    </span>
                    <p className="text-xl font-bold">{c.titulo}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-tagline-2 text-white/75">{c.texto}</p>
                    <p className="text-tagline-3 rounded-lg border-l-2 border-(--cor-amarelo) bg-white/10 px-3 py-2 text-white/90">
                      <span className="text-sag-yellow mr-1 font-bold">Exemplo:</span>
                      {c.exemplo}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-tagline-2 rounded-xl bg-white/10 px-5 py-4 text-white/85">
              E mais: <strong className="text-white">como medir</strong> menções, citações e
              contatos que chegam pelas IAs.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export default CursoEvolucao;
