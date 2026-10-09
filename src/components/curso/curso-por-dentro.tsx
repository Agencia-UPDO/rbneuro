import RevealAnimation from '@/src/components/animation/reveal-animation';
import CtaSecao from './cta-secao';
import DicaArrastar from './dica-arrastar';
import ImageSlot from './image-slot';

// "Por dentro do curso": prints das aulas em mosaico (a inserir) e os materiais de apoio como arquivos.
type Tipo = 'Canvas' | 'Planilha' | 'Checklist' | 'Modelo' | 'Roteiro';

const materiais: { nome: string; tipo: Tipo }[] = [
  { nome: 'Canvas do projeto', tipo: 'Canvas' },
  { nome: 'Palavras, perguntas e priorização', tipo: 'Planilha' },
  { nome: 'Diagnóstico de respostas e fontes', tipo: 'Planilha' },
  { nome: 'Checklist técnico independente de plataforma', tipo: 'Checklist' },
  { nome: 'Pauta para conteúdo encontrável e citável', tipo: 'Modelo' },
  { nome: 'Revisão de página', tipo: 'Checklist' },
  { nome: 'Mapa de fontes e autoridade da marca', tipo: 'Planilha' },
  { nome: 'Relatório executivo', tipo: 'Modelo' },
  { nome: 'Plano de ação de 90 dias', tipo: 'Modelo' },
  { nome: 'Apresentação do diagnóstico ao cliente', tipo: 'Roteiro' },
];

const IconeTipo = ({ tipo }: Readonly<{ tipo: Tipo }>) => {
  const comum = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (tipo === 'Planilha')
    return (
      <svg viewBox="0 0 24 24" {...comum}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M3 14h18M9 4v16M15 4v16" />
      </svg>
    );
  if (tipo === 'Checklist')
    return (
      <svg viewBox="0 0 24 24" {...comum}>
        <path d="M4 6l2 2 3-3M4 13l2 2 3-3M4 20l2 2 3-3M13 7h7M13 14h7M13 21h7" />
      </svg>
    );
  if (tipo === 'Canvas')
    return (
      <svg viewBox="0 0 24 24" {...comum}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M12 4v16M3 12h9" />
      </svg>
    );
  if (tipo === 'Roteiro')
    return (
      <svg viewBox="0 0 24 24" {...comum}>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4M8 10h8M8 13h5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" {...comum}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
};

const CursoPorDentro = () => (
  <section className="bg-background-5 py-14 md:py-20">
    <div className="main-container space-y-12">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Por dentro do curso</p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
            Você sai com o projeto <br className="hidden md:block" />
            <span className="text-sag-yellow">pronto para aplicar</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-white/70">
            Cada módulo gera uma parte do projeto final, com os mesmos modelos que você usaria com um cliente de
            verdade.
          </p>
        </RevealAnimation>
      </div>

      {/* Prints das aulas e dos materiais (a inserir) */}
      <div className="grid grid-cols-12 gap-3">
        <RevealAnimation delay={0.3}>
          <div className="col-span-12 h-[260px] md:col-span-7 md:h-[440px]">
            <ImageSlot kind="Print" label="Tela de uma aula: Rodrigo + demonstração no Search Console" />
          </div>
        </RevealAnimation>
        <div className="col-span-12 flex flex-col gap-3 md:col-span-5">
          <RevealAnimation delay={0.4}>
            <div className="h-[200px] md:h-[214px]">
              <ImageSlot kind="Print" label="Planilha de diagnóstico preenchida" />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="h-[200px] md:h-[214px]">
              <ImageSlot kind="Print" label="Modelo de relatório executivo" />
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* Materiais de apoio como arquivos */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h3 className="font-instrument-serif text-[28px] leading-none text-white uppercase md:text-[36px]">
            10 materiais de apoio inclusos
          </h3>
          <p className="text-tagline-2 text-white/60">Planilhas, checklists e modelos para usar no dia a dia.</p>
        </div>
        <ul className="carrossel-celular -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5">
          {materiais.map((m, i) => (
            <RevealAnimation key={m.nome} delay={0.04 * i}>
              <li className="group bg-background-4 flex w-[62%] shrink-0 snap-start flex-col md:w-auto justify-between gap-6 rounded-xl border border-white/8 p-5 transition hover:-translate-y-1 hover:border-(--cor-amarelo)/60">
                <span className="text-sag-yellow grid size-11 place-items-center rounded-lg bg-white/[0.06] [&_svg]:size-6">
                  <IconeTipo tipo={m.tipo} />
                </span>
                <div className="space-y-1.5">
                  <span className="font-ibm-plex-mono text-tagline-4 text-white/50 uppercase">{m.tipo}</span>
                  <p className="text-tagline-2 leading-snug font-medium text-white">{m.nome}</p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ul>
        <DicaArrastar className="text-white/50" />
      </div>

      <CtaSecao className="mt-0" />
    </div>
  </section>
);

export default CursoPorDentro;
