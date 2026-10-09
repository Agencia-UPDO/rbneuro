import SmoothScrollProvider from '@/src/components/animation/smooth-scroll';
import { fontVariables } from '@/src/utils/font';
import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  // Endereço público do site, usado para montar o link absoluto da imagem de compartilhamento.
  // No lançamento, defina NEXT_PUBLIC_SITE_URL com o domínio final (ex.: https://rbneuro.com.br).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000'),
  title: 'Método SAG | SEO, AEO e GEO',
  description:
    'Aprenda SEO, AEO e GEO para ser encontrado nas buscas, citado nas respostas e considerado nas decisões.',
  icons: { icon: '/images/curso/favicon.svg', apple: '/images/curso/apple-touch-icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Suspense>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
