import rodrigoApontando from '@/public/images/curso/rodrigo-apontando-frente.png';
import Image from 'next/image';

// Imagens da página /curso desenhadas em código, usando a tipografia e o amarelo do tema.

export const CartaoPergunta = () => (
  <figure className="bg-background-4 flex size-full flex-col justify-between gap-8 rounded-xl border border-white/8 p-6 md:p-7">
    <div className="space-y-4">
      <span className="font-ibm-plex-mono text-tagline-4 tracking-[0.1em] text-white/40 uppercase">
        A pergunta do seu cliente
      </span>
      <p className="font-instrument-serif text-[26px] leading-[1.1] text-white/90 md:text-[30px]">
        “Quais empresas de energia solar atendem a minha cidade?”
      </p>
    </div>
    <ol className="space-y-3">
      {[
        ['Google', 'Ser encontrado'],
        ['Resposta de IA', 'Ser citado'],
        ['Recomendação', 'Ser considerado'],
      ].map(([onde, acao], i) => (
        <li key={onde} className="flex items-center justify-between gap-3 border-t border-white/8 pt-3">
          <span className="font-ibm-plex-mono text-tagline-4 text-white/50 uppercase">{onde}</span>
          <span className="text-tagline-3 flex items-center gap-2 text-white/80">
            {acao}
            <span className={i === 2 ? 'bg-sag-yellow size-2 rounded-full' : 'size-2 rounded-full border border-white/40'} />
          </span>
        </li>
      ))}
    </ol>
  </figure>
);

export const CartaoUdemy = () => (
  <figure className="flex size-full flex-col justify-between rounded-xl bg-white p-8 md:p-10">
    <div className="space-y-2">
      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/50 tracking-[0.1em] uppercase">
        Curso original · Udemy
      </span>
      <p className="font-instrument-serif text-background-13 text-[30px] leading-[1.1]">Curso de SEO com Rodrigo Bueno</p>
    </div>
    <div className="flex items-end gap-4">
      <span className="font-instrument-serif text-background-13 text-[96px] leading-[0.8]">4,7</span>
      <div className="pb-1">
        <span className="text-sag-yellow block text-xl tracking-[0.15em]" aria-hidden>
          ★★★★★
        </span>
        <span className="font-ibm-plex-mono text-tagline-4 text-background-13/60 uppercase">1.543 avaliações</span>
      </div>
    </div>
    <dl className="border-background-13/10 grid grid-cols-3 gap-4 border-t pt-5">
      {[
        ['6.028', 'alunos'],
        ['47', 'aulas'],
        ['10h37', 'de vídeo'],
      ].map(([valor, rotulo]) => (
        <div key={rotulo}>
          <dt className="font-ibm-plex-mono text-tagline-4 text-background-13/50 uppercase">{rotulo}</dt>
          <dd className="font-instrument-serif text-background-13 text-[26px]">{valor}</dd>
        </div>
      ))}
    </dl>
    <figcaption className="font-ibm-plex-mono text-background-13/40 text-[11px] uppercase">
      Dados consultados em 28/09/2026
    </figcaption>
  </figure>
);

export const CapaAulaAmostra = () => (
  <figure className="relative size-full overflow-hidden rounded-xl bg-(--cor-roxo)" id="aula-amostra">
    <span
      className="bg-sag-yellow absolute right-[-8%] bottom-[-45%] aspect-square w-[60%] rounded-full max-md:hidden"
      aria-hidden
    />
    <Image
      src={rodrigoApontando}
      alt="Rodrigo Bueno apresentando a aula de amostra"
      className="absolute right-0 bottom-0 h-[92%] w-auto max-md:hidden md:right-[4%]"
      sizes="600px"
    />
    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
      <span className="font-ibm-plex-mono text-tagline-4 text-sag-yellow tracking-[0.1em] uppercase">
        Aula de amostra · Módulo 03
      </span>
      <div className="max-w-[520px] space-y-5">
        <p className="font-instrument-serif text-[32px] leading-[1.05] text-white md:text-[52px]">
          Como criar um protocolo de testes replicável
        </p>
        <div className="flex items-center gap-4">
          <span className="bg-sag-yellow grid size-16 place-items-center rounded-full" aria-hidden>
            <span className="border-l-background-13 ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent" />
          </span>
          <span className="font-ibm-plex-mono text-tagline-3 text-white/70 uppercase">12 min · vídeo em gravação</span>
        </div>
      </div>
    </div>
  </figure>
);
