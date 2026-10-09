import { Anton, Montserrat, Roboto } from 'next/font/google';

// Montserrat é a fonte do logo do Método COR; usada no logo do Método SAG.
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '500', '900'],
});

// Fontes da identidade do Método COR: Anton no lugar da Impact nos títulos e Roboto nos textos.
export const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  weight: ['400'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '500', '700'],
});
