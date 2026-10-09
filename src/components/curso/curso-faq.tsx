import RevealAnimation from '@/src/components/animation/reveal-animation';
import { faq } from '@/src/data/curso';

// Perguntas frequentes em cartões que abrem e fecham.
const CursoFaq = () => (
  <section className="bg-background-7 pt-4 pb-14 md:pt-4 md:pb-20">
    <div className="main-container">
      {/* Perguntas frequentes */}
      <div className="mx-auto max-w-[840px] space-y-10">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">Dúvidas</p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
              Perguntas <span className="text-(--cor-roxo)">frequentes</span>
            </h2>
          </RevealAnimation>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <RevealAnimation key={item.value} delay={0.04 * i}>
              <details
                className="group border-background-13/10 rounded-2xl border bg-white px-6 open:border-(--cor-roxo)/40 open:shadow-[0_12px_40px_rgba(75,30,135,0.08)]"
                open={i === 0}
              >
                <summary className="text-background-13 flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold marker:hidden">
                  {item.question}
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-(--cor-roxo)/10 text-xl text-(--cor-roxo) transition group-open:rotate-45 group-open:bg-(--cor-roxo) group-open:text-white"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="text-tagline-1 text-background-13/70 pb-6">{item.answer}</p>
              </details>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CursoFaq;
