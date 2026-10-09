import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { pilares } from '@/src/data/curso';

// Baseado no AboutWhyChooseUs do tema.
const CursoPilares = () => (
  <section className="bg-background-7 py-14 md:py-20">
    <div className="main-container">
      <div className="space-y-17.5">
        <div className="mx-auto max-w-[720px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <Badge badgeText="O método" className="[&_svg]:fill-sag-yellow justify-center" />
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
                Aparecer em links já não basta
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                A marca precisa ser encontrada, entendida como fonte confiável e lembrada entre as opções.
                O Método SAG trabalha as três camadas como uma estratégia só.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-6 md:gap-8">
          {pilares.map((pilar, index) => (
            <RevealAnimation key={pilar.sigla} delay={0.1 + index * 0.1}>
              <div className="bg-background-9 col-span-12 flex min-h-[280px] flex-col justify-between gap-8 rounded-lg p-8 lg:col-span-4">
                <div className="flex items-start justify-between">
                  <span className={`${pilar.iconClass} !text-background-13 text-[45px] md:text-[36px]`} aria-hidden />
                  <span className="font-ibm-plex-mono text-tagline-3 text-background-13/50">{pilar.sigla}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-is-heading-5 text-background-13/90 font-instrument-serif font-normal">
                    {pilar.titulo}
                  </h3>
                  <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">{pilar.texto}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CursoPilares;
