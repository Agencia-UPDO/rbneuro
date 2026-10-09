import palestraImage from '@/public/images/curso/rodrigo-palestra.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

// Seção do professor com o minicurrículo enviado pelo Rodrigo.
const instituicoes = ['PUCPR', 'UFPR', 'Universidade Positivo', 'Faculdade IBRATE'];

const numeros = [
  { valor: '+300', texto: 'empresas atendidas' },
  { valor: '+6 mil', texto: 'alunos no curso de SEO' },
  { valor: '3x', texto: 'finalista RD Station' },
  { valor: '+10', texto: 'anos em marketing e vendas' },
];

const CursoProfessor = () => (
  <section className="bg-background-6 py-14 md:py-20" id="sobre">
    <div className="main-container">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <RevealAnimation delay={0.1}>
          <figure className="relative">
            <span className="bg-sag-yellow absolute -right-3 -bottom-3 size-full rounded-2xl md:-right-4 md:-bottom-4" aria-hidden />
            <Image
              src={palestraImage}
              alt="Rodrigo Bueno dando palestra para um auditório lotado"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <figcaption className="bg-background-13/85 absolute bottom-4 left-4 rounded-full px-4 py-2 text-sm text-white backdrop-blur">
              Palestrante em eventos de marketing e vendas
            </figcaption>
          </figure>
        </RevealAnimation>

        <div className="space-y-8">
          <div className="space-y-5">
            <RevealAnimation delay={0.2}>
              <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Seu professor</p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
                Rodrigo Bueno
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-tagline-1 text-white/80">
                Fundador da UPDO e estrategista de marketing e vendas há mais de uma década. Estruturou a captação de
                instituições de ensino, varejistas, e-commerces e empresas B2B em todo o Brasil, sempre como ponte
                entre estratégia, dados e execução, sempre partindo do comportamento do consumidor. Nos últimos anos, acompanhou de perto empresas que sentiram a busca mudar e sabe como é frustrante investir em conteúdo e não ser encontrado.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <p className="text-tagline-2 text-white/60">Professor de pós-graduação, MBA e educação executiva em:</p>
              <ul className="flex flex-wrap gap-2">
                {instituicoes.map((inst) => (
                  <li key={inst} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white">
                    {inst}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.55}>
            <blockquote className="border-sag-yellow flex flex-col gap-4 rounded-r-xl border-l-4 bg-white/[0.04] px-5 py-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="shrink-0">
                <p className="font-instrument-serif text-sag-yellow text-[56px] leading-none">9,3</p>
                <p className="text-tagline-3 mt-1 font-bold tracking-[0.06em] text-white uppercase">NPS médio</p>
              </div>
              <div>
                <p className="text-tagline-1 text-white/85">
                  Nas avaliações das turmas, os alunos destacam a didática:{' '}
                  <strong className="text-white">traduz temas complexos em passos simples de entender e aplicar.</strong>
                </p>
                <p className="text-tagline-3 mt-2 text-white/60">
                  Avaliações de alunos da PUCPR e de outras instituições, com turmas chegando a 9,7.
                </p>
              </div>
            </blockquote>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {numeros.map((n) => (
                <div key={n.texto} className="bg-background-4 rounded-xl p-4">
                  <dt className="font-instrument-serif text-sag-yellow text-[34px] leading-none">{n.valor}</dt>
                  <dd className="text-tagline-3 mt-2 leading-snug text-white/70">{n.texto}</dd>
                </div>
              ))}
            </dl>
          </RevealAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default CursoProfessor;
