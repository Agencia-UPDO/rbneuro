'use client';

import { linkCheckout, preco } from '@/src/data/curso';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Barra de compra fixa no rodapé da tela. Aparece depois que o topo sai da tela
// e some quando a oferta final (#inscricao) está visível, para não repetir o botão.
const BarraCompraFixa = () => {
  const [heroVisivel, setHeroVisivel] = useState(true);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('metodo');
    const oferta = document.getElementById('inscricao');
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.target === hero) setHeroVisivel(e.isIntersecting);
          if (e.target === oferta) setOfertaVisivel(e.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    if (hero) obs.observe(hero);
    if (oferta) obs.observe(oferta);
    return () => obs.disconnect();
  }, []);

  const visivel = !heroVisivel && !ofertaVisivel;

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#141414]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur transition-transform duration-300',
        visivel ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      )}
      aria-hidden={!visivel}
    >
      <div className="main-container flex items-center justify-between gap-4 py-3">
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm text-white/70 max-sm:hidden">Método SAG · SEO, AEO e GEO</p>
          <p className="text-white">
            {preco.valorParcela ? (
              <>
                <span className="text-sm">{preco.parcelas}x de </span>
                <strong className="text-sag-yellow font-instrument-serif text-2xl">{preco.valorParcela}</strong>
              </>
            ) : (
              <strong className="text-sag-yellow font-instrument-serif text-2xl">{preco.aVista}</strong>
            )}
          </p>
        </div>
        <Link
          href={linkCheckout || '#inscricao'}
          tabIndex={visivel ? 0 : -1}
          className="shrink-0 rounded-xl bg-(--cor-verde) px-5 py-3 text-sm font-bold text-white uppercase transition hover:brightness-110 md:px-8 md:text-base"
        >
          Quero me inscrever
        </Link>
      </div>
    </div>
  );
};

export default BarraCompraFixa;
