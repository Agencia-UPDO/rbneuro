import PaginaLegal, { EMPRESA } from '@/src/components/curso/pagina-legal';
import type { Metadata } from 'next';

// Modelo de termos de uso. Revisar com um advogado antes de publicar.
export const metadata: Metadata = {
  title: 'Termos de uso | Método SAG',
  robots: { index: false, follow: true },
};

export default function TermosPage() {
  return (
    <PaginaLegal titulo="Termos de uso" atualizado="setembro de 2026">
      <p>
        Estes termos regulam o uso desta página e a compra do curso Método SAG, oferecido pela {EMPRESA.nome}, inscrita no
        CNPJ {EMPRESA.cnpj}. Ao comprar o curso, você concorda com estas condições.
      </p>

      <h2>1. O curso</h2>
      <p>
        O Método SAG é um curso online de SEO, AEO e GEO, com aulas gravadas, materiais de apoio e atividades práticas. O
        conteúdo pode ser atualizado ao longo do tempo para acompanhar mudanças no Google e nas plataformas de inteligência
        artificial.
      </p>

      <h2>2. Compra e acesso</h2>
      <p>
        A compra, o pagamento e a liberação do acesso são feitos pela Hotmart, que também tem seus próprios termos. O acesso
        é individual e intransferível, pelo período informado na oferta.
      </p>

      <h2>3. Garantia</h2>
      <p>
        Você tem 30 dias de garantia a partir da compra. Se o curso não fizer sentido para você nesse período, basta pedir
        o reembolso pela Hotmart, que devolve o valor pago.
      </p>

      <h2>4. Resultados</h2>
      <p>
        O curso ensina um método e ferramentas de trabalho. Os resultados dependem da aplicação, do mercado, da concorrência
        e das próprias plataformas. Por isso, não garantimos posições no Google, menções, citações ou recomendações em
        ferramentas de inteligência artificial.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Aulas, materiais, marcas e demais conteúdos pertencem à {EMPRESA.nome} e a Rodrigo Bueno. É proibido copiar,
        revender, compartilhar o acesso ou distribuir o conteúdo sem autorização por escrito. Os modelos e planilhas podem
        ser usados nos seus próprios projetos e nos de seus clientes.
      </p>

      <h2>6. Conduta no grupo e nos encontros</h2>
      <p>
        Nos espaços coletivos da turma, esperamos respeito entre os participantes. Conteúdos ofensivos, spam ou divulgação
        não autorizada podem levar à remoção do participante desses espaços.
      </p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp {EMPRESA.whatsapp}. Estes termos seguem a legislação
        brasileira, incluindo o Código de Defesa do Consumidor.
      </p>
    </PaginaLegal>
  );
}
