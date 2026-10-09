import RevealAnimation from '@/src/components/animation/reveal-animation';
import { modulos } from '@/src/data/curso';
import BotaoAbrirModulos from './botao-abrir-modulos';
import CapaModulo from './capa-modulo';
import MarcaDagua from './marca-dagua';
import CtaSecao from './cta-secao';

// Baseado na lista de serviços do tema (services/hero). Fundo branco com detalhes em roxo; cada linha abre as aulas do módulo.
const CursoEmenta = () => (
  <section className="relative overflow-hidden bg-white py-14 md:py-20" id="ementa">
    <MarcaDagua tipo="busca" className="top-12 right-[-60px] w-[520px] -rotate-3 max-lg:hidden" />
    <div className="main-container relative z-10">
      <div className="space-y-12">
        <div className="mx-auto max-w-[760px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">O que você vai aprender</p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
              Da pergunta do cliente <br className="hidden md:block" />
              <span className="text-(--cor-roxo)">ao plano de ação</span>
            </h2>
          </RevealAnimation>
          <BotaoAbrirModulos />
        </div>

        <div className="border-background-13/10 divide-background-13/10 divide-y border-y">
          {modulos.map((modulo, index) => (
            <RevealAnimation key={modulo.numero} delay={0.05 * index}>
              <details className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-x-5 py-6 transition-all duration-400 ease-in-out marker:hidden hover:pl-3 lg:gap-x-8 lg:py-7">
                  <span
                    className={`${modulo.iconClass} shrink-0 text-[48px] text-(--cor-roxo) lg:text-[64px]`}
                    aria-hidden
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-ibm-plex-mono text-tagline-3 font-bold text-(--cor-roxo) uppercase">
                      {modulo.numero === '00' ? 'Módulo Zero · alinhamento' : `Módulo ${modulo.numero}`} · {modulo.resumo}
                    </p>
                    <h3 className="font-instrument-serif md:text-is-heading-5 text-background-13 text-[26px] leading-tight font-normal">
                      {modulo.titulo}
                    </h3>
                    <p className="text-tagline-2 text-background-13/60 font-normal">{modulo.proposito}</p>
                  </div>
                  <span
                    className="border-background-13/15 text-background-13/60 grid size-10 shrink-0 place-items-center rounded-full border text-xl transition group-open:rotate-45 group-open:border-(--cor-roxo) group-open:bg-(--cor-roxo) group-open:text-white"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>

                <div className="grid gap-8 pb-10 md:grid-cols-[1fr_320px] lg:pl-[84px]">
                  <div className="space-y-6">
                    <ol className="space-y-3">
                      {modulo.aulas.map((aula, i) => (
                        <li key={aula.titulo} className="border-background-13/8 flex items-center gap-4 border-b pb-3">
                          <span className="bg-sag-yellow text-background-13 grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold">{i + 1}</span>
                          <span className="text-tagline-1 text-background-13/85 flex-1">{aula.titulo}</span>
                          <span className="font-ibm-plex-mono text-tagline-3 text-background-13/55 shrink-0">{aula.tempo}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-tagline-3 text-background-13/75 bg-background-9 rounded-lg px-4 py-3">
                      <span className="font-ibm-plex-mono text-tagline-4 mr-2 font-bold text-(--cor-roxo) uppercase">Entrega</span>
                      {modulo.entrega}
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full">
                    <CapaModulo numero={modulo.numero} titulo={modulo.titulo} />
                  </div>
                </div>
              </details>
            </RevealAnimation>
          ))}
        </div>
      </div>
      <CtaSecao />
    </div>
  </section>
);

export default CursoEmenta;
