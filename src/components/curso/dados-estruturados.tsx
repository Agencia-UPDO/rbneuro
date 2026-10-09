import { faq, modulos, preco } from '@/src/data/curso';

// Dados estruturados (schema.org) para o Google e as IAs entenderem a página:
// o curso, o professor e as perguntas frequentes.
// A nota 4,7 da Udemy não entra aqui porque é do curso antigo, não deste produto.
const DadosEstruturados = () => {
  const valor = Number(preco.aVista.replace(/[^\d,]/g, '').replace(',', '.'));

  const professor = {
    '@type': 'Person',
    name: 'Rodrigo Bueno',
    jobTitle: 'Fundador da UPDO e professor de marketing',
    worksFor: { '@type': 'Organization', name: 'UPDO' },
  };

  const dados = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Método SAG: curso de SEO, AEO e GEO',
      description:
        'Aprenda a posicionar seu site e seus conteúdos no Google e nas IAs, como ChatGPT, Gemini, Claude e Perplexity: ser encontrado, citado e considerado.',
      inLanguage: 'pt-BR',
      provider: { '@type': 'Organization', name: 'UPDO' },
      instructor: professor,
      syllabusSections: modulos.map((m) => ({
        '@type': 'Syllabus',
        name: m.titulo,
        description: m.aulas.map((a) => a.titulo).join(' '),
      })),
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        instructor: professor,
      },
      offers: {
        '@type': 'Offer',
        price: valor,
        priceCurrency: 'BRL',
        category: 'Paid',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
};

export default DadosEstruturados;
