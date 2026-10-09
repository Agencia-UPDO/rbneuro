import PaginaLegal, { EMPRESA } from '@/src/components/curso/pagina-legal';
import type { Metadata } from 'next';

// Modelo de política de privacidade. Revisar com um advogado antes de publicar.
export const metadata: Metadata = {
  title: 'Política de privacidade | Método SAG',
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <PaginaLegal titulo="Política de privacidade" atualizado="setembro de 2026">
      <p>
        Esta política explica como a {EMPRESA.nome}, inscrita no CNPJ {EMPRESA.cnpj}, responsável pelo curso Método
        SAG, trata os dados pessoais de quem visita esta página e de quem compra o curso, de acordo com a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li>Dados de navegação, como páginas visitadas, dispositivo, navegador e origem do acesso, por meio de cookies e ferramentas de análise.</li>
        <li>Dados que você envia ao falar com a gente pelo WhatsApp, como nome, telefone e o conteúdo da conversa.</li>
        <li>Dados de compra, como nome, e-mail, CPF e dados de pagamento, que são coletados e processados pela Hotmart, plataforma responsável pelo checkout e pela entrega do curso.</li>
      </ul>

      <h2>2. Para que usamos os dados</h2>
      <ul>
        <li>Liberar o acesso ao curso, aos materiais, ao grupo da turma e aos encontros ao vivo.</li>
        <li>Responder dúvidas e prestar suporte.</li>
        <li>Medir o desempenho da página e dos anúncios e melhorar a comunicação.</li>
        <li>Enviar comunicações sobre o curso, quando você autorizar.</li>
        <li>Cumprir obrigações legais e fiscais.</li>
      </ul>

      <h2>3. Cookies e ferramentas de terceiros</h2>
      <p>
        Esta página pode usar ferramentas como Google Analytics, Google Tag Manager e Pixel da Meta para entender como os
        visitantes usam o site e medir campanhas. Essas ferramentas usam cookies. Você pode bloquear ou apagar cookies nas
        configurações do seu navegador, o que pode afetar algumas funções da página.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Compartilhamos dados apenas com fornecedores necessários para operar o curso e a página, como a Hotmart
        (pagamento e acesso), provedores de hospedagem e as ferramentas de análise e anúncios citadas acima. Não vendemos
        dados pessoais.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para as finalidades descritas e para cumprir obrigações legais. Depois
        disso, eles são excluídos ou anonimizados.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode pedir a qualquer momento a confirmação do tratamento, o acesso, a correção, a portabilidade ou a
        exclusão dos seus dados, além de revogar consentimentos dados anteriormente.
      </p>

      <h2>7. Contato</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre esta política, fale com a {EMPRESA.nome} pelo WhatsApp{' '}
        {EMPRESA.whatsapp}.
      </p>
    </PaginaLegal>
  );
}
