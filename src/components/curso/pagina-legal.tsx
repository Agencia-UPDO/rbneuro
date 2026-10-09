import '@/src/app/tema-cor.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { anton, montserrat, roboto } from './fontes';
import LogoMetodoSag from './logo-metodo-sag';

export const EMPRESA = {
  nome: 'UPDO',
  cnpj: '30.119.930/0001-20',
  whatsapp: '(41) 98879-7301',
};

// Moldura das páginas de política de privacidade e termos de uso do Método SAG.
const PaginaLegal = ({ titulo, atualizado, children }: Readonly<{ titulo: string; atualizado: string; children: ReactNode }>) => (
  <main className={`tema-cor bg-background-7 min-h-screen ${anton.variable} ${roboto.variable} ${montserrat.variable}`}>
    <header className="bg-(--cor-roxo) py-10">
      <div className="main-container flex flex-col items-center gap-6 text-center">
        <Link href="/" aria-label="Voltar para a página do Método SAG">
          <LogoMetodoSag tamanho="pequeno" />
        </Link>
        <h1 className="text-is-heading-4 md:text-is-heading-3 font-normal text-white">{titulo}</h1>
        <p className="text-tagline-3 text-white/70">Última atualização: {atualizado}</p>
      </div>
    </header>
    <article className="main-container text-background-13/80 mx-auto max-w-[760px] space-y-5 py-12 text-[17px] leading-relaxed md:py-16 [&_h2]:font-(family-name:--font-roboto) [&_h2]:pt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-background-13 [&_h2]:normal-case [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
      {children}
      <p className="pt-6">
        <Link href="/" className="font-bold text-(--cor-roxo) underline underline-offset-4">
          Voltar para o Método SAG
        </Link>
      </p>
    </article>
    <footer className="bg-background-13 py-6 text-center text-sm text-white/60">
      {EMPRESA.nome} · CNPJ {EMPRESA.cnpj}
    </footer>
  </main>
);

export default PaginaLegal;
