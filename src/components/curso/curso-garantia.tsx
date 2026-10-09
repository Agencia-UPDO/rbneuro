import RevealAnimation from '@/src/components/animation/reveal-animation';

// Garantia de 30 dias, com selo e a palavra do Rodrigo, logo antes da oferta final.
const SeloGarantia = () => (
  <svg viewBox="0 0 240 240" className="size-[200px] md:size-[240px]" role="img" aria-label="Selo de garantia de 30 dias">
    <defs>
      <path id="selo-circulo" d="M120 120 m-92 0 a92 92 0 1 1 184 0 a92 92 0 1 1 -184 0" />
    </defs>
    <circle cx="120" cy="120" r="118" fill="#F9B000" />
    <circle cx="120" cy="120" r="106" fill="none" stroke="#141414" strokeWidth="2" strokeDasharray="3 6" />
    <g className="roda-gira" style={{ transformOrigin: '120px 120px' }}>
      <text fill="#141414" fontSize="16" fontWeight="700" fontFamily="var(--font-roboto), sans-serif">
        <textPath href="#selo-circulo" textLength="572" lengthAdjust="spacing">
          GARANTIA INCONDICIONAL · RISCO ZERO ·
        </textPath>
      </text>
    </g>
    <circle cx="120" cy="120" r="72" fill="#141414" />
    <text x="120" y="128" textAnchor="middle" fill="#F9B000" fontSize="64" fontFamily="var(--font-anton), Impact, sans-serif">
      30
    </text>
    <text x="120" y="156" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" letterSpacing="3" fontFamily="var(--font-roboto), sans-serif">
      DIAS
    </text>
  </svg>
);

const CursoGarantia = () => (
  <section className="bg-background-5 py-14 md:py-20" id="garantia">
    <div className="main-container">
      <div className="mx-auto grid max-w-[1000px] items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <SeloGarantia />
          </div>
        </RevealAnimation>

        <div className="space-y-5 text-center md:text-left">
          <RevealAnimation delay={0.2}>
            <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Garantia</p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 font-normal text-white">
              30 dias para testar <span className="text-sag-yellow">sem risco</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="text-tagline-1 space-y-4 text-white/80">
              <p>
                Eu confio no Método SAG e me importo com a sua experiência como aluno. Por isso você tem 30 dias para
                assistir às aulas, aplicar no seu site e decidir com calma.
              </p>
              <p>
                Se não fizer sentido para você, basta pedir o reembolso pela Hotmart dentro do prazo.{' '}
                <strong className="text-white">Você recebe 100% do valor de volta, sem precisar explicar o motivo.</strong>
              </p>
              <p className="text-tagline-2 text-white/60">
                Se dependesse de mim, o prazo seria bem maior. 30 dias é o máximo que a Hotmart permite.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="font-instrument-serif text-sag-yellow text-2xl uppercase">Rodrigo Bueno</p>
          </RevealAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default CursoGarantia;
