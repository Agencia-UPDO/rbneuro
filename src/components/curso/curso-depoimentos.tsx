import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';
import CtaSecao from './cta-secao';
import DicaArrastar from './dica-arrastar';

// Prints reais de alunos do Método COR (nomes já borrados nos originais), em mural.
type Print = { src: string; alt: string; largura: number; altura: number; legenda?: string; fundo?: 'whats' | 'claro' };

const prints: Print[] = [
  { src: 'whats-sensacional.png', alt: 'Aluno no WhatsApp: o Método COR é um curso sensacional, com aulas diretas ao ponto', largura: 640, altura: 358, fundo: 'whats' },
  { src: 'search-console-1.jpg', alt: 'Gráfico do Google Search Console de um aluno com cliques e impressões subindo', largura: 900, altura: 576, legenda: 'Search Console de um aluno depois de aplicar o método', fundo: 'claro' },
  { src: 'whats-so-o-que-interessa.png', alt: 'Aluno no WhatsApp: no curso do Rodrigo tem só o que interessa', largura: 640, altura: 177, fundo: 'whats' },
  { src: 'facebook-comentario.jpg', alt: 'Comentário de aluno no Facebook elogiando a abordagem do curso', largura: 640, altura: 758, fundo: 'claro' },
  { src: 'whats-primeiro-lead.png', alt: 'Aluno mostra no WhatsApp o crescimento no Search Console e o primeiro lead vindo do SEO', largura: 640, altura: 635, legenda: 'O primeiro lead vindo do SEO', fundo: 'whats' },
  { src: 'whats-seo-raiz.png', alt: 'Aluno no WhatsApp: aprendi SEO raiz, focado no comportamento do consumidor. Recomendo demais', largura: 640, altura: 318, fundo: 'whats' },
  { src: 'search-console-2.jpg', alt: 'Outro gráfico de Search Console de aluno com tendência de alta', largura: 900, altura: 374, legenda: 'Mais cliques e impressões, mês a mês', fundo: 'claro' },
  { src: 'whats-grupo.png', alt: 'Aluno no WhatsApp: que grupo maravilhoso, ótimas respostas', largura: 640, altura: 140, fundo: 'whats' },
];

const CursoDepoimentos = () => (
  <section className="bg-background-5 py-14 md:py-20">
    <div className="main-container space-y-12">
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-[640px] space-y-5">
          <RevealAnimation delay={0.1}>
            <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">Alunos</p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
              Quem aplicou o método <br className="hidden md:block" />
              <span className="text-sag-yellow">conta como foi</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-tagline-1 text-white/70">Mensagens e resultados reais enviados por alunos do Método COR.</p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4">
            <span className="font-instrument-serif text-sag-yellow text-[56px] leading-none whitespace-nowrap">
              4,7<span className="text-2xl text-white/60"> de 5</span>
            </span>
            <div className="text-left">
              <span className="text-sag-yellow block text-lg tracking-[0.12em]" aria-hidden>
                ★★★★★
              </span>
              <p className="text-tagline-3 text-white/70">1.543 avaliações na Udemy</p>
            </div>
          </div>
        </RevealAnimation>
      </div>

      <div className="carrossel-celular -mx-5 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:block sm:columns-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:columns-3">
        {prints.map((p, i) => (
          <RevealAnimation key={p.src} delay={0.05 * i}>
            <figure
              className={`w-[82%] shrink-0 snap-center sm:mb-4 sm:w-auto break-inside-avoid overflow-hidden rounded-2xl p-3 ${
                p.fundo === 'whats' ? 'bg-[#e9e3da]' : 'bg-white'
              }`}
            >
              <Image
                src={`/images/curso/depoimentos/${p.src}`}
                alt={p.alt}
                width={p.largura}
                height={p.altura}
                className="h-auto w-full rounded-lg"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              />
              {p.legenda && (
                <figcaption className="text-background-13/70 px-1 pt-3 pb-1 text-sm font-medium">{p.legenda}</figcaption>
              )}
            </figure>
          </RevealAnimation>
        ))}
      </div>
      <DicaArrastar className="-mt-8 text-white/50 sm:hidden" />
      <CtaSecao className="mt-0" />
    </div>
  </section>
);

export default CursoDepoimentos;
