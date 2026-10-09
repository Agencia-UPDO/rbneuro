// Conteúdo da página /curso, extraído da ficha do curso (Método COR IA, v1.0, set/2026).

// ID do vídeo de apresentação no YouTube (ex.: em youtube.com/watch?v=abc123, o ID é abc123).
export const videoApresentacao = '';

// Preço. Preencha valorParcela com o valor exato que o checkout da Hotmart mostra em 12x (ex.: 'R$ 51,40').
export const preco = {
  aVista: 'R$ 497',
  parcelas: 12,
  valorParcela: 'R$ 51,40', // valor informado pelo Rodrigo; conferir no checkout antes de publicar
  // Preço cheio depois da promoção de lançamento da nova versão (aparece riscado). Deixe vazio para não mostrar.
  precoCheio: 'R$ 997',
  // Data e hora em que termina o preço promocional (horário de Brasília), ex.: '2026-10-31T23:59:00-03:00'.
  // Enquanto estiver vazio, o contador não aparece. Precisa ser uma data real: o preço tem que subir depois dela.
  fimPromocao: '',
};

// Link do checkout da Hotmart. Enquanto estiver vazio, o botão do final leva de volta para a oferta.
export const linkCheckout = '';

// Bônus que acompanham o curso (seção própria e resumo no card da oferta).
// "valor" é o preço de venda de cada um fora do curso (aparece riscado, com "grátis para alunos").
export const bonus = [
  {
    titulo: 'Sites profissionais sem WordPress, com IA',
    texto:
      'Crie e venda sites de ticket mais alto com as tecnologias que as grandes empresas usam (Next.js e React), sem os bugs do WordPress. Com a IA, você parte de um template já otimizado, troca imagens e textos e publica no servidor.',
    icone: 'site',
    selo: '',
    valor: 997,
  },
  {
    titulo: 'Neurovendas: do diagnóstico ao contrato',
    texto:
      'Como conduzir a conversa, apresentar o diagnóstico e fechar o projeto usando neurovendas, e ainda transformar clientes em indicações.',
    icone: 'vendas',
    selo: 'Curso completo',
    valor: 667,
  },
  {
    titulo: 'Neuromarketing aplicado ao digital',
    texto: 'Como o cérebro do consumidor presta atenção, confia e decide, aplicado a páginas, conteúdos e anúncios.',
    icone: 'cerebro',
    selo: 'Curso completo',
    valor: 997,
  },
];

// Os títulos das aulas estão em forma de pergunta, do jeito que as pessoas buscam no Google e perguntam às IAs.
export type Modulo = {
  numero: string;
  titulo: string;
  proposito: string;
  entrega: string;
  iconClass: string;
  imagem: string;
  aulas: { titulo: string; tempo: string }[];
  resumo: string;
};

export const pilares = [
  {
    sigla: 'SEO',
    titulo: 'Ser encontrado',
    texto: 'Páginas acessíveis, compreensíveis e relevantes para as buscas que importam ao negócio.',
    iconClass: 'ns-shape-10',
  },
  {
    sigla: 'AEO',
    titulo: 'Ser citado',
    texto: 'Respostas claras, completas e verificáveis, que mecanismos e assistentes conseguem recuperar.',
    iconClass: 'ns-shape-11',
  },
  {
    sigla: 'GEO',
    titulo: 'Ser considerado',
    texto: 'Uma marca presente nas fontes, comparações e recomendações usadas pelas respostas de IA.',
    iconClass: 'ns-shape-13',
  },
];

export const modulos: Modulo[] = [
  {
    numero: '00',
    titulo: 'Fundamentos essenciais de SEO',
    proposito: 'Módulo de alinhamento: coloca todos na mesma base de conceitos, ferramentas e projeto antes de começar.',
    entrega: 'Site do projeto escolhido e situação inicial registrada',
    iconClass: 'ns-shape-3',
    imagem: 'Capa do Módulo Zero',
    resumo: '3 aulas · 30 min',
    aulas: [
      { titulo: 'O que é SEO, AEO e GEO, em linguagem simples?', tempo: '10 min' },
      { titulo: 'Como o Google encontra, lê e mostra as páginas?', tempo: '10 min' },
      { titulo: 'Quais ferramentas usar e qual site escolher para o projeto?', tempo: '10 min' },
    ],
  },
  {
    numero: '01',
    titulo: 'A nova jornada de descoberta',
    proposito: 'Como Google, ChatGPT, Gemini e outros sistemas participam da decisão do cliente.',
    entrega: 'Canvas do projeto com empresa, oferta, público e objetivo',
    iconClass: 'ns-shape-4',
    imagem: 'Capa do Módulo 1',
    resumo: '4 aulas · 40 min',
    aulas: [
      { titulo: 'Por que o Google deixou de ser só uma lista de links?', tempo: '10 min' },
      { titulo: 'O que é ser encontrado, citado e considerado?', tempo: '10 min' },
      { titulo: 'Qual a diferença entre resposta, menção, citação e recomendação?', tempo: '10 min' },
      { titulo: 'Como definir o projeto e o objetivo do seu site?', tempo: '10 min' },
    ],
  },
  {
    numero: '02',
    titulo: 'Palavras, perguntas e intenção',
    proposito: 'Transforme a linguagem do cliente em um mapa de demanda que dá para usar.',
    entrega: 'Mapa de demanda com 15 a 30 perguntas prioritárias',
    iconClass: 'ns-shape-5',
    imagem: 'Capa do Módulo 2',
    resumo: '6 aulas · 1h10',
    aulas: [
      { titulo: 'Como descobrir as palavras que o seu cliente realmente usa?', tempo: '10 min' },
      { titulo: 'O que é intenção de busca e por que ela muda tudo?', tempo: '12 min' },
      { titulo: 'Como ver o volume de busca e achar oportunidades de cauda longa?', tempo: '12 min' },
      { titulo: 'Quais perguntas e objeções levam o cliente a comprar?', tempo: '12 min' },
      { titulo: 'O que são entidades e temas relacionados, e como usá-los?', tempo: '10 min' },
      { titulo: 'Como escolher o que produzir primeiro?', tempo: '14 min' },
    ],
  },
  {
    numero: '03',
    titulo: 'Diagnóstico de presença em buscas e IA',
    proposito: 'Crie uma linha de base comparável da marca antes de mudar qualquer coisa.',
    entrega: 'Planilha de diagnóstico com marca, concorrentes e fontes',
    iconClass: 'ns-shape-6',
    imagem: 'Capa do Módulo 3',
    resumo: '5 aulas · 1h00',
    aulas: [
      { titulo: 'Como criar um protocolo de testes replicável?', tempo: '12 min' },
      { titulo: 'Como fazer o diagnóstico da sua marca no Google e no AI Overviews?', tempo: '12 min' },
      { titulo: 'Como testar o que o ChatGPT, o Gemini e o Copilot falam da sua marca?', tempo: '15 min' },
      { titulo: 'Como registrar menções, citações, concorrentes e fontes?', tempo: '12 min' },
      { titulo: 'Como transformar os testes em uma linha de base?', tempo: '9 min' },
    ],
  },
  {
    numero: '04',
    titulo: 'Conteúdo para ser encontrado e citado',
    proposito: 'Páginas claras, úteis e sustentadas por evidências, escritas para pessoas.',
    entrega: 'Uma página real reescrita com a pauta e o checklist do método',
    iconClass: 'ns-shape-7',
    imagem: 'Capa do Módulo 4',
    resumo: '6 aulas · 1h25',
    aulas: [
      { titulo: 'Qual página criar para cada intenção de busca?', tempo: '15 min' },
      { titulo: 'Como montar uma pauta a partir das perguntas do cliente?', tempo: '15 min' },
      { titulo: 'Como escrever respondendo primeiro e aprofundando depois?', tempo: '15 min' },
      { titulo: 'Como usar título, H1, H2, snippet e links internos do jeito certo?', tempo: '15 min' },
      { titulo: 'Como mostrar autoria, experiência e provas no conteúdo?', tempo: '15 min' },
      { titulo: 'Como otimizar uma página do começo ao fim?', tempo: '10 min' },
    ],
  },
  {
    numero: '05',
    titulo: 'Conteúdo com IA para site, redes e YouTube',
    proposito: 'Produza com IA do jeito certo e transforme uma pauta em conteúdo que aparece no Google, nas redes e nas IAs.',
    entrega: 'Uma pauta transformada em artigo, post e roteiro de vídeo',
    iconClass: 'ns-shape-37',
    imagem: 'Capa do Módulo 5',
    resumo: '5 aulas · 1h05',
    aulas: [
      { titulo: 'Como usar a IA para produzir conteúdo sem soar genérico?', tempo: '15 min' },
      { titulo: 'Como transformar uma pauta em artigo, post e vídeo ao mesmo tempo?', tempo: '12 min' },
      { titulo: 'Como otimizar vídeos do YouTube para o Google e as IAs?', tempo: '14 min' },
      { titulo: 'Como fazer posts de redes sociais que as IAs usam como fonte?', tempo: '12 min' },
      { titulo: 'Como revisar e checar um conteúdo feito com IA antes de publicar?', tempo: '12 min' },
    ],
  },
  {
    numero: '06',
    titulo: 'Autoridade e presença da marca',
    proposito: 'Alinhe o que a empresa diz sobre si com o que as fontes externas mostram.',
    entrega: 'Mapa de fontes próprias e externas com as lacunas priorizadas',
    iconClass: 'ns-shape-8',
    imagem: 'Capa do Módulo 6',
    resumo: '5 aulas · 1h00',
    aulas: [
      { titulo: 'Como o Google e as IAs reconhecem uma empresa?', tempo: '12 min' },
      { titulo: 'Como deixar site, perfis e informações da marca consistentes?', tempo: '12 min' },
      { titulo: 'Como conseguir menções, parcerias e avaliações que contam?', tempo: '12 min' },
      { titulo: 'Quando vale investir em SEO local?', tempo: '12 min' },
      { titulo: 'Como montar o mapa de fontes da sua marca?', tempo: '12 min' },
    ],
  },
  {
    numero: '07',
    titulo: 'Mensuração e plano de ação',
    proposito: 'Transforme observações soltas em indicadores, decisões e um relatório profissional.',
    entrega: 'Relatório executivo e plano de ação de 90 dias',
    iconClass: 'ns-shape-9',
    imagem: 'Capa do Módulo 7',
    resumo: '7 aulas · 1h20',
    aulas: [
      { titulo: 'Como fazer um diagnóstico técnico sem depender de plugin?', tempo: '15 min' },
      { titulo: 'Como usar o Search Console para ver consultas, cliques e páginas?', tempo: '12 min' },
      { titulo: 'Como medir no GA4 as visitas e os leads que vêm das IAs?', tempo: '12 min' },
      { titulo: 'Como usar o Bing Webmaster Tools para ver sua presença nas IAs?', tempo: '10 min' },
      { titulo: 'Como repetir os testes e comparar a evolução?', tempo: '12 min' },
      { titulo: 'Como montar o relatório para o cliente ou o gestor?', tempo: '10 min' },
      { titulo: 'Como fechar o plano de ação de 90 dias?', tempo: '9 min' },
    ],
  },
];

export const etapas = [
  { nome: 'Modelar', texto: 'Entenda negócio, cliente, oferta e a decisão que você quer influenciar.' },
  { nome: 'Pesquisar', texto: 'Mapeie linguagem, perguntas, fontes, concorrentes e oportunidades.' },
  { nome: 'Otimizar', texto: 'Melhore páginas, conteúdos, evidências e a presença fora do site.' },
  { nome: 'Medir', texto: 'Registre a linha de base, acompanhe indicadores e aprenda com as mudanças.' },
];

export const materiais = [
  'Canvas do projeto',
  'Planilha de palavras, perguntas e priorização',
  'Planilha de diagnóstico de respostas e fontes',
  'Checklist técnico independente de plataforma',
  'Modelo de pauta para conteúdo encontrável e citável',
  'Checklist de revisão de página',
  'Mapa de fontes e autoridade da marca',
  'Modelo de relatório executivo',
  'Modelo de plano de ação de 90 dias',
  'Roteiro de apresentação do diagnóstico ao cliente',
];

export const faq = [
  {
    value: 'faq-1',
    question: 'SEO morreu com o ChatGPT e as respostas de IA?',
    answer:
      'Não. As respostas geradas por IA continuam dependendo de páginas que possam ser encontradas, lidas e consideradas confiáveis. O curso mostra como SEO, AEO e GEO trabalham juntos na mesma estratégia.',
  },
  {
    value: 'faq-2',
    question: 'Qual é a diferença prática entre SEO, AEO e GEO?',
    answer:
      'SEO torna suas páginas acessíveis e relevantes para a busca. AEO organiza respostas claras e verificáveis, que podem ser citadas. GEO fortalece a presença da marca nas fontes e comparações usadas pelas respostas generativas.',
  },
  {
    value: 'faq-3',
    question: 'O curso garante que minha marca vai aparecer no ChatGPT ou no Google?',
    answer:
      'Não. Nenhum método sério garante posição, menção ou recomendação, porque as respostas variam conforme a pergunta, a plataforma, o momento e as fontes disponíveis. Você aprende a diagnosticar, melhorar o que depende de você e medir a evolução.',
  },
  {
    value: 'faq-4',
    question: 'Preciso ter conhecimento técnico?',
    answer:
      'Não há pré-requisito técnico. O Módulo Zero alinha os conceitos e as ferramentas antes de começar. O que você precisa é de acesso a um site próprio ou de um cliente para aplicar os exercícios.',
  },
  {
    value: 'faq-tipos-site',
    question: 'Serve para qual tipo de site?',
    answer:
      'Serve para site institucional, blog, e-commerce, landing page, site de serviços e negócio local. O método é o mesmo em todos: entender o que o cliente pergunta e organizar as páginas e os conteúdos para o Google e as IAs encontrarem, entenderem e citarem.',
  },
  {
    value: 'faq-5',
    question: 'Funciona para quem não usa WordPress?',
    answer:
      'Sim. O método não depende de WordPress, de plugins ou de uma plataforma específica. O diagnóstico técnico é ensinado de forma independente.',
  },
  {
    value: 'faq-6',
    question: 'Como é o formato das aulas?',
    answer:
      'Aulas gravadas de 8 a 15 minutos, com um exercício aplicado por módulo e um projeto final. A turma tem grupo e encontros coletivos ao vivo.',
  },
  {
    value: 'faq-acesso',
    question: 'Por quanto tempo tenho acesso ao curso?',
    answer:
      'Você tem 1 ano de acesso a partir da compra, com todas as atualizações do conteúdo feitas nesse período incluídas, sem custo extra.',
  },
  {
    value: 'faq-garantia',
    question: 'E se eu não gostar do curso?',
    answer:
      'Você tem 30 dias de garantia. Se o curso não fizer sentido para você nesse período, é só pedir o reembolso e devolvemos o valor pago.',
  },
  {
    value: 'faq-7',
    question: 'O que eu tenho nas mãos ao terminar?',
    answer:
      'Um diagnóstico documentado da presença da marca, uma página revisada e um plano de ação de 90 dias, prontos para aplicar na sua empresa ou apresentar a um cliente.',
  },
];

export const publico = [
  'Profissionais de marketing atualizando a estratégia de busca e conteúdo',
  'Agências, consultores e freelancers que querem oferecer o diagnóstico como serviço',
  'Empreendedores com acesso ao próprio site',
  'Times de conteúdo, comunicação e copywriting',
];
