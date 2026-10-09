import BarraCompraFixa from '@/src/components/curso/barra-compra-fixa';
import BotaoWhatsapp from '@/src/components/curso/botao-whatsapp';
import DadosEstruturados from '@/src/components/curso/dados-estruturados';
import CursoBonus from '@/src/components/curso/curso-bonus';
import CursoCaminhos from '@/src/components/curso/curso-caminhos';
import CursoDepoimentos from '@/src/components/curso/curso-depoimentos';
import CursoEvolucao from '@/src/components/curso/curso-evolucao';
import CursoEmenta from '@/src/components/curso/curso-ementa';
import CursoFaq from '@/src/components/curso/curso-faq';
import CursoHero from '@/src/components/curso/curso-hero';
import CursoGarantia from '@/src/components/curso/curso-garantia';
import CursoParaQuem from '@/src/components/curso/curso-para-quem';
import CursoPorQue from '@/src/components/curso/curso-por-que';
import CursoJornada from '@/src/components/curso/curso-jornada';
import CursoOferta from '@/src/components/curso/curso-oferta';
import CursoPorDentro from '@/src/components/curso/curso-por-dentro';
import CursoProcesso from '@/src/components/curso/curso-processo';
import CursoProfessor from '@/src/components/curso/curso-professor';
import { anton, montserrat, roboto } from '@/src/components/curso/fontes';
import type { Metadata } from 'next';
import './tema-cor.css';

// Protótipo da nova página do curso, montado com os blocos do tema.
// Fora do índice (noindex) até ser aprovado: trocar robots para index: true na publicação e definir o canonical.
export const metadata: Metadata = {
  title: 'Curso de SEO, AEO e GEO: apareça no Google e nas IAs | Método SAG',
  description:
    'Aprenda a posicionar seu site e seus conteúdos no Google e nas IAs, como ChatGPT, Gemini, Claude e Perplexity. Curso prático com Rodrigo Bueno.',
  robots: { index: false, follow: false },
  icons: {
    icon: '/images/curso/favicon.svg',
    apple: '/images/curso/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Método SAG: curso de SEO, AEO e GEO',
    description: 'Seja encontrado no Google, citado e considerado pela IA. Curso prático com Rodrigo Bueno.',
    type: 'website',
    locale: 'pt_BR',
    // Imagem de compartilhamento (WhatsApp, Instagram, Facebook, LinkedIn): 1200x630 px.
    // Para trocar pela arte final, basta substituir o arquivo mantendo o mesmo nome.
    images: [
      {
        url: '/images/curso/og-metodo-sag.jpg',
        width: 1200,
        height: 630,
        alt: 'Método SAG: seja encontrado no Google, citado e considerado pela IA. Curso com Rodrigo Bueno.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Método SAG: curso de SEO, AEO e GEO',
    description: 'Seja encontrado no Google, citado e considerado pela IA. Curso prático com Rodrigo Bueno.',
    images: ['/images/curso/og-metodo-sag.jpg'],
  },
};

export default function Page() {
  return (
    <main className={`tema-cor bg-background-5 ${anton.variable} ${roboto.variable} ${montserrat.variable}`}>
      {/* Ordem: promessa, por que importa, jornada, o que muda, prova, o método, o que está em jogo, quem ensina, conteúdo,
          entregas, bônus, para quem é, dúvidas, garantia, oferta. */}
      <DadosEstruturados />
      <CursoHero />
      <CursoPorQue />
      <CursoJornada />
      <CursoEvolucao />
      <CursoDepoimentos />
      <CursoProcesso />
      <CursoCaminhos />
      <CursoProfessor />
      <CursoEmenta />
      <CursoPorDentro />
      <CursoBonus />
      <CursoParaQuem />
      <CursoFaq />
      <CursoGarantia />
      <CursoOferta />
      <BarraCompraFixa />
      <BotaoWhatsapp />
    </main>
  );
}
