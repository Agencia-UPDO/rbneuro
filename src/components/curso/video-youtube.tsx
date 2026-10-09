'use client';

import { useState } from 'react';

interface VideoYoutubeProps {
  // ID do vídeo (o trecho depois de "v=" no link do YouTube).
  id: string;
  titulo: string;
}

// Mostra a capa do YouTube e só carrega o player quando a pessoa clica, para a página abrir rápido.
const VideoYoutube = ({ id, titulo }: VideoYoutubeProps) => {
  const [tocando, setTocando] = useState(false);

  if (!id) {
    return (
      <div className="grid aspect-video w-full place-items-center bg-background-13 rounded-2xl p-6 text-center">
        <div className="space-y-3">
          <span className="bg-sag-yellow mx-auto grid size-16 place-items-center rounded-full" aria-hidden>
            <span className="border-l-background-13 ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent" />
          </span>
          <p className="text-tagline-2 font-medium text-white">Vídeo do YouTube a inserir</p>
          <p className="text-tagline-3 text-white/60">Basta colar o ID do vídeo em src/data/curso.ts</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
      {tocando ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setTocando(true)} className="group absolute inset-0 size-full cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={titulo}
            className="size-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/20">
            <span className="bg-sag-yellow grid size-20 place-items-center rounded-full shadow-lg transition group-hover:scale-110">
              <span className="border-l-background-13 ml-1.5 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent" />
            </span>
          </span>
          <span className="sr-only">Assistir: {titulo}</span>
        </button>
      )}
    </div>
  );
};

export default VideoYoutube;
