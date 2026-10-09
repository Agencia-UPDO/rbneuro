import RevealAnimation from '@/src/components/animation/reveal-animation';
import { bonus } from '@/src/data/curso';
import type { ReactNode } from 'react';
import CtaSecao from './cta-secao';

// Seção dos 4 bônus, logo antes da oferta final, para aumentar o valor percebido e quebrar objeções.
const icones: Record<string, ReactNode> = {
  contrato: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h7M9 17h4" />
    </>
  ),
  cerebro: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" />
    </>
  ),
  vendas: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  site: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 14l-2 2 2 2M15 14l2 2-2 2" />
    </>
  ),
};

const real = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;
const total = bonus.reduce((soma, b) => soma + b.valor, 0);

const CursoBonus = () => (
  <section className="bg-(--cor-roxo) py-14 md:py-20">
    <div className="main-container space-y-12">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Bônus exclusivos</p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
            E você ainda leva <span className="text-sag-yellow">{bonus.length} bônus</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-white/80">
            Para ir além do diagnóstico: entregar sites profissionais, entender o cliente e fechar mais projetos.
          </p>
        </RevealAnimation>
      </div>

      <div className="mx-auto grid max-w-[1120px] gap-4 md:grid-cols-3">
        {bonus.map((b, i) => (
          <RevealAnimation key={b.titulo} delay={0.1 + i * 0.08}>
            <article className="bg-background-13 flex h-full flex-col gap-5 rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-(--cor-amarelo)/60">
              <div className="flex items-center justify-between">
                <span className="bg-sag-yellow text-background-13 rounded-full px-3 py-1 text-xs font-bold uppercase">
                  Bônus {i + 1}
                </span>
                {b.selo && <span className="text-xs font-medium tracking-[0.06em] text-white/60 uppercase">{b.selo}</span>}
              </div>
              <span className="text-sag-yellow grid size-12 place-items-center rounded-xl bg-white/[0.06]" aria-hidden>
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icones[b.icone]}
                </svg>
              </span>
              <div className="space-y-2">
                <h3 className="font-instrument-serif text-[26px] leading-[1.05] text-white uppercase">{b.titulo}</h3>
                <p className="text-tagline-2 text-white/70">{b.texto}</p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-white/60">
                  Valor <s className="decoration-[#ff5a4f] decoration-2">{real(b.valor)}</s>
                </span>
                <span className="text-sm font-bold text-(--cor-verde) uppercase">Grátis para alunos</span>
              </div>
            </article>
          </RevealAnimation>
        ))}
      </div>

      <RevealAnimation delay={0.3}>
        <p className="text-center text-lg text-white/85">
          São <s className="decoration-[#ff5a4f] decoration-2">{real(total)}</s> em bônus que você leva{' '}
          <strong className="text-sag-yellow">de graça</strong> junto com o curso.
        </p>
      </RevealAnimation>
      <CtaSecao className="mt-0" />
    </div>
  </section>
);

export default CursoBonus;
