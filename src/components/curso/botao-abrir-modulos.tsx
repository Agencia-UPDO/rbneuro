'use client';

import { useState } from 'react';

// Abre ou fecha todos os módulos da ementa de uma vez, para quem quer ver todas as aulas.
const BotaoAbrirModulos = () => {
  const [abertos, setAbertos] = useState(false);

  const alternar = () => {
    const novo = !abertos;
    document.querySelectorAll<HTMLDetailsElement>('#ementa details').forEach((d) => {
      d.open = novo;
    });
    setAbertos(novo);
  };

  return (
    <button
      type="button"
      onClick={alternar}
      className="font-ibm-plex-mono text-tagline-3 mx-auto flex cursor-pointer items-center gap-2 rounded-full border border-(--cor-roxo)/30 px-5 py-2.5 text-(--cor-roxo) uppercase transition hover:bg-(--cor-roxo) hover:text-white"
    >
      {abertos ? 'Fechar todos os módulos' : 'Ver todas as aulas'}
      <span className={`text-lg leading-none transition ${abertos ? 'rotate-45' : ''}`} aria-hidden>
        +
      </span>
    </button>
  );
};

export default BotaoAbrirModulos;
