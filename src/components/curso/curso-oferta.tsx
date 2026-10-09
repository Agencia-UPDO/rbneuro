import rodrigoApontando from '@/public/images/curso/rodrigo-apontando-lado.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { bonus, linkCheckout } from '@/src/data/curso';
import Image from 'next/image';
import Link from 'next/link';
import { EMPRESA } from './pagina-legal';
import { PrecoDestaque, SeloHotmart } from './bloco-preco';
import BotaoInscricao from './botao-inscricao';
import ContagemRegressiva from './contagem-regressiva';
import LogoMetodoSag from './logo-metodo-sag';

// Oferta final: o Rodrigo apontando para um cartão com tudo o que a pessoa recebe, preço, botão e garantia.
const recebe = [
  'Mais de 30 aulas curtas, com cerca de 8h de vídeo',
  'Módulo Zero de alinhamento, para todos começarem na mesma base',
  '10 materiais de apoio: planilhas, checklists e modelos',
  'Grupo da turma e encontros coletivos ao vivo',
  'Projeto final com plano de ação de 90 dias',
  'Certificado de conclusão',
  '1 ano de acesso, com as atualizações do conteúdo incluídas',
];

const Check = () => (
  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-(--cor-verde) text-white" aria-hidden>
    <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

const CursoOferta = () => (
  <section className="relative overflow-hidden bg-(--cor-roxo)" id="inscricao">
    <div className="main-container pt-14 md:pt-20">
      <div className="mx-auto mb-12 max-w-[820px] text-center">
        <RevealAnimation delay={0.1}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white">
            Prepare sua marca para a busca <br className="hidden md:block" />
            <span className="text-sag-yellow">que já está acontecendo</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-tagline-1 mt-5 text-white/80">
            Quem aparece primeiro nas respostas das IAs vira referência. Depois, fica mais difícil entrar.
          </p>
        </RevealAnimation>
      </div>

      <div className="flex flex-col-reverse items-center gap-x-10 lg:flex-row lg:items-end">
        <div className="relative w-full lg:max-w-[500px]">
          <span
            className="bg-sag-yellow absolute bottom-[-30%] left-1/2 aspect-square w-[85%] -translate-x-1/2 rounded-full"
            aria-hidden
          />
          <Image
            src={rodrigoApontando}
            alt="Rodrigo Bueno apontando para a oferta do curso"
            className="relative h-auto w-full"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>

        <RevealAnimation delay={0.2}>
          <div className="bg-background-13 w-full flex-1 overflow-hidden rounded-2xl lg:mb-16">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-5 p-7 md:p-8">
                <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">O que você recebe</p>
                <ul className="space-y-3.5">
                  {recebe.map((item) => (
                    <li key={item} className="text-tagline-2 flex gap-3 text-white/85">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 border-t border-white/10 pt-5">
                  <p className="font-ibm-plex-mono text-tagline-3 text-sag-yellow uppercase">+ {bonus.length} bônus exclusivos</p>
                  <ul className="space-y-2.5">
                    {bonus.map((b) => (
                      <li key={b.titulo} className="text-tagline-2 flex gap-3 text-white/85">
                        <span className="text-sag-yellow mt-0.5 shrink-0" aria-hidden>
                          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="8" width="18" height="13" rx="2" />
                            <path d="M3 12h18M12 8v13M12 8S10.5 3 7.5 4 9 8 12 8zm0 0s1.5-5 4.5-4S15 8 12 8z" />
                          </svg>
                        </span>
                        {b.titulo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 border-t border-white/10 bg-white/[0.04] p-7 md:border-t-0 md:border-l md:p-8">
                <ContagemRegressiva className="items-start" />
                <PrecoDestaque className="items-start" />
                <BotaoInscricao href={linkCheckout || "#inscricao"} className="botao-sem-pulso w-full justify-center px-5 text-base whitespace-nowrap md:text-base" />
                <div className="flex items-center gap-3 rounded-xl border border-(--cor-amarelo)/40 px-4 py-3">
                  <svg viewBox="0 0 24 24" className="text-sag-yellow size-9 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-tagline-3 leading-snug text-white/80">
                    <strong className="block text-white">30 dias de garantia</strong>
                    Seu risco é zero para experimentar.
                  </p>
                </div>
                <SeloHotmart className="text-left" />
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </div>

    <footer className="bg-background-13 relative">
      <div className="main-container flex flex-col items-center justify-between gap-5 py-8 text-center md:flex-row md:text-left">
        <LogoMetodoSag caixa="clara" tamanho="pequeno" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/privacidade" className="hover:text-white">Política de privacidade</Link>
          <Link href="/termos" className="hover:text-white">Termos de uso</Link>
        </nav>
        <p className="text-sm leading-relaxed text-white/50 md:text-right">
          © {new Date().getFullYear()} Rodrigo Bueno · {EMPRESA.nome}
          <br />
          CNPJ {EMPRESA.cnpj}
        </p>
      </div>
    </footer>
  </section>
);

export default CursoOferta;
