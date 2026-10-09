import SmoothScrollProvider from '@/src/components/animation/smooth-scroll';
import { fontVariables } from '@/src/utils/font';
import type { Metadata } from 'next';
import Script from 'next/script';
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

const GTM_ID = 'GTM-PCXG9CZ';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Suspense>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
