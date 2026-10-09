import { videoApresentacao } from '@/src/data/curso';
import LinhasFeixes from './linhas-feixes';
import { PrecoDestaque, SeloHotmart } from './bloco-preco';
import ContagemRegressiva from './contagem-regressiva';
import BotaoInscricao from './botao-inscricao';
import LogoMetodoSag from './logo-metodo-sag';
import VideoYoutube from './video-youtube';

// Hero centralizado: logo, título, frase, vídeo, preço e botão, com a garantia logo abaixo.
// O texto não usa animação de entrada para ficar visível desde o carregamento.
const CursoHero = () => (
  <section className="relative overflow-hidden bg-(--cor-roxo) py-14 md:py-20" id="metodo">
    <LinhasFeixes />
    <div className="main-container relative z-10">
      <div className="mx-auto flex max-w-[920px] flex-col items-center space-y-8 text-center md:space-y-10">
        <LogoMetodoSag />

        <div className="space-y-5">
          <p className="font-ibm-plex-mono text-tagline-3 text-white/70 uppercase">Curso online completo de SEO, AEO e GEO</p>
          <h1 className="font-instrument-serif text-[40px] font-normal text-balance text-white md:text-[60px] xl:text-[72px]">
            Seja encontrado no Google, citado e <span className="text-sag-yellow">considerado pela IA</span>
          </h1>
          <p className="text-tagline-2 lg:text-tagline-1 mx-auto max-w-[680px] font-normal text-white/85">
            Aprenda a posicionar seu site e seus conteúdos no Google e nas IAs, como ChatGPT, Gemini, Claude e Perplexity, sem depender apenas
            de anúncios.
          </p>
        </div>

        <div className="relative w-full max-w-[860px]">
          <span className="bg-sag-yellow absolute -right-3 -bottom-3 size-full rounded-2xl md:-right-4 md:-bottom-4" aria-hidden />
          <div className="relative">
            <VideoYoutube id={videoApresentacao} titulo="Método SAG: apresentação do curso com Rodrigo Bueno" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 pt-2">
          <ContagemRegressiva />
          <PrecoDestaque />
          <BotaoInscricao />
          <p className="text-tagline-2 flex items-center gap-2 text-white/85">
            <svg viewBox="0 0 24 24" className="text-sag-yellow size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <strong className="text-white">30 dias de garantia</strong>
          </p>
          <SeloHotmart />
        </div>

        {/* Prova social: alunos do curso original e nota dos alunos ao professor. */}
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-left">
            <span className="font-instrument-serif text-sag-yellow text-[44px] leading-none whitespace-nowrap">+6 mil</span>
            <p className="text-tagline-3 leading-snug text-white/80">
              alunos no Brasil
              <br />e no mundo
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-left">
            <span className="font-instrument-serif text-sag-yellow text-[44px] leading-none whitespace-nowrap">
              4,7<span className="text-2xl text-white/70"> de 5</span>
            </span>
            <p className="text-tagline-3 leading-snug text-white/80">
              <span className="text-sag-yellow tracking-[0.1em]" aria-hidden>
                ★★★★★
              </span>
              <br />
              pelos alunos
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CursoHero;
