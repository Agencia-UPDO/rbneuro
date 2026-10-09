import RevealAnimation from '@/src/components/animation/reveal-animation';
import { cn } from '@/src/utils/cn';
import BotaoInscricao from './botao-inscricao';

// Botão curto de compra no fim de uma seção. A oferta completa (preço e garantia) fica só no Hero e no fechamento.
const CtaSecao = ({ className }: Readonly<{ className?: string }>) => (
  <RevealAnimation delay={0.2}>
    <div className={cn('mt-12 flex justify-center', className)}>
      <BotaoInscricao />
    </div>
  </RevealAnimation>
);

export default CtaSecao;
