'use client';

import { preco } from '@/src/data/curso';
import { cn } from '@/src/utils/cn';
import { useEffect, useState } from 'react';

// Contagem regressiva até o fim do preço promocional (preco.fimPromocao).
// Não aparece se a data estiver vazia ou já tiver passado. Nunca reinicia sozinha.
const calcular = (fim: number) => {
  const resto = Math.max(0, fim - Date.now());
  return {
    resto,
    dias: Math.floor(resto / 86_400_000),
    horas: Math.floor((resto / 3_600_000) % 24),
    minutos: Math.floor((resto / 60_000) % 60),
    segundos: Math.floor((resto / 1000) % 60),
  };
};

const ContagemRegressiva = ({ className }: Readonly<{ className?: string }>) => {
  const fim = preco.fimPromocao ? new Date(preco.fimPromocao).getTime() : NaN;
  const [tempo, setTempo] = useState<ReturnType<typeof calcular> | null>(null);

  useEffect(() => {
    if (Number.isNaN(fim)) return;
    setTempo(calcular(fim));
    const id = setInterval(() => setTempo(calcular(fim)), 1000);
    return () => clearInterval(id);
  }, [fim]);

  if (!tempo || tempo.resto <= 0) return null;

  const blocos: [number, string][] = [
    [tempo.dias, 'dias'],
    [tempo.horas, 'horas'],
    [tempo.minutos, 'min'],
    [tempo.segundos, 'seg'],
  ];

  return (
    <div className={cn('flex flex-col items-center gap-2', className)} role="timer" aria-live="off">
      <p className="text-tagline-3 text-white/80">O preço promocional termina em</p>
      <div className="flex gap-2">
        {blocos.map(([valor, rotulo]) => (
          <div key={rotulo} className="bg-background-13 min-w-[62px] rounded-lg px-2 py-2 text-center">
            <span className="font-instrument-serif text-sag-yellow block text-[30px] leading-none tabular-nums">
              {String(valor).padStart(2, '0')}
            </span>
            <span className="text-[11px] tracking-[0.06em] text-white/60 uppercase">{rotulo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContagemRegressiva;
