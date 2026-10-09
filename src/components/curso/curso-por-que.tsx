import { existsSync } from 'node:fs';
import path from 'node:path';
import RevealAnimation from '@/src/components/animation/reveal-animation';

// Por que aparecer nas IAs importa: três dados públicos, cada um com um gráfico simples e a fonte.
// Conferir e atualizar as fontes antes de cada lançamento.
type Barra = { rotulo: string; valor: number; texto: string; destaque?: boolean };

const VERMELHO = '#d93a2f';
const VERDE = '#15994a';

const indicadores: {
  titulo: string;
  numero: string;
  legenda: string;
  cor: string;
  barras: Barra[];
  conclusao: string;
  fonte: string;
  link: string;
}[] = [
  {
    titulo: 'O Google está mandando menos visitas',
    numero: '-33%',
    legenda: 'de visitas do Google para sites de notícia em um ano',
    cor: VERMELHO,
    barras: [
      { rotulo: 'Um ano antes', valor: 100, texto: '100 visitas' },
      { rotulo: 'Um ano depois', valor: 67, texto: '67 visitas', destaque: true },
    ],
    conclusao: 'A cada 100 visitas que o Google mandava, sobraram 67. Nos EUA, a queda foi de 38%.',
    fonte: 'Reuters Institute e Chartbeat, 2026',
    link: 'https://reutersinstitute.politics.ox.ac.uk/journalism-media-and-technology-trends-and-predictions-2026',
  },
  {
    titulo: 'Com o resumo de IA, o clique some',
    numero: '-47%',
    legenda: 'de cliques nos sites quando aparece o resumo de IA',
    cor: VERMELHO,
    barras: [
      { rotulo: 'Sem resumo de IA', valor: 15, texto: '15 em 100' },
      { rotulo: 'Com resumo de IA', valor: 8, texto: '8 em 100', destaque: true },
    ],
    conclusao: 'Sem o resumo, 15 em cada 100 buscas viram clique. Com o resumo, só 8: quase metade some.',
    fonte: 'Pew Research Center, 2025',
    link: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
  },
  {
    titulo: 'Quem vem da IA converte o dobro',
    numero: '7,8%',
    legenda: 'das visitas vindas das IAs viram lead no Brasil',
    cor: VERDE,
    barras: [
      { rotulo: 'IAs (ChatGPT e outras)', valor: 7.8, texto: '7,8%', destaque: true },
      { rotulo: 'Meta Ads', valor: 3.9, texto: '3,9%' },
      { rotulo: 'Google Ads', valor: 3.4, texto: '3,4%' },
      { rotulo: 'Google orgânico', valor: 2.4, texto: '2,4%' },
    ],
    conclusao: 'A pessoa chega com a dúvida resolvida pela IA e mais perto de decidir.',
    fonte: 'Leadster, Panorama de Geração de Leads 2026',
    link: 'https://leadster.com.br/blog/panorama-geracao-de-leads-2026/',
  },
];

const Grafico = ({ barras, cor }: { barras: Barra[]; cor: string }) => {
  const maximo = Math.max(...barras.map((b) => b.valor));
  return (
    <ul className={barras.length > 2 ? 'space-y-3' : 'space-y-4'} aria-hidden>
      {barras.map((b) => (
        <li key={b.rotulo} className="space-y-1">
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className={b.destaque ? 'text-background-13 font-bold' : 'text-background-13/60'}>{b.rotulo}</span>
            <span
              className={`tabular-nums ${b.destaque ? 'font-bold' : 'text-background-13/60'}`}
              style={b.destaque ? { color: cor } : undefined}
            >
              {b.texto}
            </span>
          </div>
          <div className={`bg-background-13/[0.06] overflow-hidden rounded-full ${barras.length > 2 ? 'h-3' : 'h-4'}`}>
            <div
              className="h-full rounded-full"
              style={{ width: `${(b.valor / maximo) * 100}%`, background: b.destaque ? cor : 'rgba(20,20,20,.22)' }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

// Print real da matéria da Pew. Imagem em public/images/curso/prova-pew.png.
const PROVA_PEW = '/images/curso/prova-pew.png';
const temProvaPew = existsSync(path.join(process.cwd(), 'public', PROVA_PEW));
const LINK_PEW = indicadores[1].link;

const ProvaPew = () => (
  <figure className="space-y-3">
    <a
      href={LINK_PEW}
      target="_blank"
      rel="noopener noreferrer"
      className="border-background-13/10 block overflow-hidden rounded-2xl border bg-white shadow-[0_20px_50px_-24px_rgba(75,30,135,.45)] transition-transform hover:-translate-y-0.5"
    >
      {temProvaPew ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={PROVA_PEW}
          alt="Matéria do Pew Research Center: usuários do Google têm menos probabilidade de clicar em links quando um resumo gerado por IA aparece nos resultados"
          className="block h-auto w-full"
        />
      ) : (
        <div className="text-background-13/50 grid aspect-[4/3] place-items-center p-6 text-center text-sm">
          Salve o print da matéria em public/images/curso/prova-pew.png
        </div>
      )}
    </a>
    <figcaption className="text-tagline-2 text-background-13/70">
      <strong className="text-background-13">Pew Research Center, 22 jul. 2025:</strong> quando o Google mostra o resumo
      de IA, as pessoas clicam menos nos sites.{' '}
      <a
        href={LINK_PEW}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-(--cor-roxo) underline decoration-dotted underline-offset-2"
      >
        Ler a matéria
      </a>
    </figcaption>
  </figure>
);

const CursoPorQue = () => (
  <section className="bg-background-7 py-14 md:py-20" id="por-que">
    <div className="main-container">
      <div className="mx-auto max-w-[760px] space-y-5 text-center">
        <RevealAnimation delay={0.1}>
          <p className="font-ibm-plex-mono text-tagline-3 text-(--cor-roxo) uppercase">O que mudou na busca</p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal">
            Sente que seu site <br className="hidden md:block" />
            <span className="text-(--cor-roxo)">perdeu visitas?</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-tagline-1 text-background-13/70">
            Não é impressão. Se as visitas caíram, o conteúdo não traz contatos e cada cliente depende de um anúncio
            mais caro, é porque a busca mudou: as pessoas clicam menos no Google e perguntam mais para a IA. E quem
            chega por ela já chega mais decidido.
          </p>
        </RevealAnimation>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1120px] items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <RevealAnimation delay={0.2}>
          <div className="lg:sticky lg:top-24">
            <ProvaPew />
          </div>
        </RevealAnimation>

        <ol className="space-y-4">
          {indicadores.map((d, i) => (
            <RevealAnimation key={d.titulo} delay={0.2 + i * 0.1}>
              <li className="border-background-13/10 flex flex-col gap-4 rounded-2xl border bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-(--cor-roxo) text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-background-13 text-lg leading-snug font-bold">{d.titulo}</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
                  <div className="sm:max-w-[170px]">
                    <p className="font-instrument-serif text-[52px] leading-none" style={{ color: d.cor }}>
                      {d.numero}
                    </p>
                    <p className="text-tagline-3 text-background-13/70 mt-1">{d.legenda}</p>
                  </div>
                  <Grafico barras={d.barras} cor={d.cor} />
                </div>

                <p className="text-tagline-2 text-background-13 border-background-13/10 border-t pt-3">
                  {d.conclusao}{' '}
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background-13/50 hover:text-(--cor-roxo) underline decoration-dotted underline-offset-2"
                  >
                    Fonte: {d.fonte}
                  </a>
                </p>
              </li>
            </RevealAnimation>
          ))}
        </ol>
      </div>

      <RevealAnimation delay={0.3}>
        <p className="text-tagline-1 text-background-13/80 mx-auto mt-10 max-w-[820px] rounded-2xl border border-(--cor-roxo)/20 bg-(--cor-roxo)/[0.06] px-6 py-5 text-center">
          O Google não perdeu importância, e os canais se conversam.{' '}
          <strong className="text-background-13">
            A IA é um novo canal de busca do consumidor, e quem aparece em todos eles é lembrado na hora de decidir.
          </strong>
        </p>
      </RevealAnimation>
    </div>
  </section>
);

export default CursoPorQue;
