import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SagIcon, type SagIconName } from '@/src/components/sag/visual-system';
import Link from 'next/link';

const pillars = [
  {
    acronym: 'SEO',
    action: 'Ser encontrado',
    description: 'Construa presença para as buscas que realmente importam ao seu negócio.',
    color: '#38B6FF',
    icon: 'question' as SagIconName,
  },
  {
    acronym: 'AEO',
    action: 'Ser citado',
    description: 'Crie respostas claras e confiáveis para mecanismos de busca e assistentes.',
    color: '#38E8A2',
    icon: 'content' as SagIconName,
  },
  {
    acronym: 'GEO',
    action: 'Ser considerado',
    description: 'Fortaleça marca e autoridade para aparecer nas recomendações geradas por IA.',
    color: '#7257FF',
    icon: 'authority' as SagIconName,
  },
];

const VideoPlaceholder = () => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/12 bg-[#0e1220] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(114,87,255,.48),transparent_38%),radial-gradient(circle_at_85%_75%,rgba(56,232,162,.2),transparent_33%),linear-gradient(145deg,transparent,rgba(56,182,255,.1))]" />
    <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:42px_42px]" />
    <div className="sag-scan-line absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#38e8a2]/65 to-transparent shadow-[0_0_24px_#38e8a2]" />

    <span className="absolute top-[22%] right-5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-semibold text-white/50 backdrop-blur-lg">ChatGPT</span>
    <span className="absolute bottom-[31%] left-5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-semibold text-white/50 backdrop-blur-lg">Google</span>
    <span className="absolute top-[43%] left-7 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-semibold text-white/50 backdrop-blur-lg">Gemini</span>

    <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white/65 backdrop-blur-xl">
      <span className="size-1.5 rounded-full bg-[#ffc928]" />
      Vídeo de apresentação
    </div>

    <div className="absolute inset-0 grid place-items-center">
      <div className="text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-full border border-white/18 bg-white text-[#080a12] shadow-[0_16px_50px_rgba(0,0,0,.32)]" aria-hidden="true">
          <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-[#7257ff]" />
        </span>
        <p className="mt-5 font-sora text-sm font-semibold text-white">Em gravação</p>
      </div>
    </div>

    <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
      <p className="font-sora text-base font-semibold text-white">O Método SAG em 90 segundos</p>
      <p className="mt-1 text-sm text-white/48">Com Rodrigo Bueno</p>
    </div>
  </div>
);

const Hero = () => (
  <section
    className="relative overflow-hidden bg-[#080a12] pt-32 pb-20 text-white md:pt-40 md:pb-28 lg:pt-44 lg:pb-32"
    id="metodo"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(114,87,255,0.3),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(56,182,255,0.15),transparent_30%),radial-gradient(circle_at_55%_76%,rgba(56,232,162,0.1),transparent_28%)]" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:72px_72px]" />

    <div className="main-container relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <p className="mb-6 font-sora text-xs font-semibold tracking-[0.2em] text-white/48 uppercase">
              SEO, AEO e GEO na era da inteligência artificial
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="font-sora text-[clamp(2.75rem,5.2vw,5.7rem)] leading-[0.99] font-semibold tracking-[-0.065em] text-white">
              Seja <span className="text-[#38b6ff]">encontrado</span>,{' '}
              <span className="text-[#38e8a2]">citado</span> e{' '}
              <span className="text-[#9b86ff]">considerado.</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-7 max-w-[690px] text-lg leading-relaxed text-white/60 lg:mx-0">
              Transforme as perguntas dos seus clientes em presença no Google e nas respostas de inteligência artificial.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold tracking-[0.14em] text-white/38 uppercase">Curso completo</p>
                <div className="mt-1 flex items-end justify-center gap-2 sm:justify-start">
                  <span className="font-sora text-4xl font-semibold tracking-[-0.055em] text-white">R$ 497</span>
                  <span className="pb-1 text-sm text-white/42">à vista</span>
                </div>
                <p className="mt-1 text-xs text-white/35">ou em até 12x no cartão*</p>
              </div>
              <Link
                href="#inscricao"
                className="w-full rounded-xl bg-white px-7 py-4 text-center text-base font-semibold text-[#080a12] transition hover:bg-[#38e8a2] sm:w-auto"
              >
                Quero aprender o Método SAG
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5} asChild={false}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/45 lg:justify-start">
              <span><strong className="text-white">+6 mil</strong> alunos em SEO</span>
              <span className="size-1 rounded-full bg-white/18" />
              <span><strong className="text-white">4,7/5</strong> de avaliação</span>
              <span className="size-1 rounded-full bg-white/18" />
              <span>Acesso imediato</span>
            </div>
            <p className="mt-3 text-center text-[11px] text-white/25 lg:text-left">*O valor exato das parcelas será informado no checkout.</p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.25} direction="right" asChild={false}>
          <VideoPlaceholder />
        </RevealAnimation>
      </div>

      <div className="relative mt-16 md:mt-20">
        <div className="pointer-events-none absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-[#38b6ff]/60 via-[#38e8a2]/60 to-[#7257ff]/60 md:block" />
        <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <RevealAnimation key={pillar.acronym} delay={0.25 + index * 0.1}>
            <article className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#0d111d]/80 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-white/20 md:p-7">
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${pillar.color},transparent)` }} />
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/9 bg-white/5" style={{ color: pillar.color, boxShadow: `0 0 30px ${pillar.color}18` }}><SagIcon name={pillar.icon} className="size-6" /></span>
                <span className="font-sora text-sm font-semibold tracking-[.14em]" style={{ color: pillar.color }}>{pillar.acronym}</span>
              </div>
              <h2 className="font-sora text-2xl font-semibold tracking-[-0.035em] text-white">{pillar.action}</h2>
              <p className="mt-3 leading-relaxed text-white/52">{pillar.description}</p>
            </article>
          </RevealAnimation>
        ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
