import { cn } from '@/src/utils/cn';
import type { ReactNode } from 'react';

// Capas dos módulos desenhadas em código: número serifado, título e um desenho de traço fino que resume o tema.
const Y = 'var(--color-sag-yellow)';
const W = 'rgba(255,255,255,.75)';

const desenhos: Record<string, ReactNode> = {
  // Fundamentos: rastrear, indexar, apresentar
  '00': (
    <g fill="none" strokeWidth="4">
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40 + i * 95} y={60} width="70" height="90" rx="6" stroke={i === 2 ? Y : W} />
      ))}
      <path d="M110 105h25M205 105h25" stroke={W} />
      <path d="M52 82h46M52 96h34M147 82h46M147 96h34M242 82h46M242 96h34" stroke={W} />
    </g>
  ),
  // Jornada: da busca à decisão
  '01': (
    <g fill="none" strokeWidth="4">
      <path d="M40 150 C 110 150, 110 60, 180 60 S 250 150, 320 110" stroke={W} />
      {[
        [40, 150],
        [135, 92],
        [225, 98],
      ].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="6" fill="#4B1E87" stroke={W} />
      ))}
      <circle cx="320" cy="110" r="9" fill={Y} />
    </g>
  ),
  // Perguntas e intenção
  '02': (
    <g fill="none" strokeWidth="4">
      <rect x="40" y="50" width="170" height="44" rx="22" stroke={W} />
      <rect x="130" y="110" width="190" height="44" rx="22" stroke={Y} />
      <path d="M62 72h110M152 132h130" stroke={W} />
      <text x="292" y="139" fill={Y} fontSize="22" fontFamily="serif">?</text>
    </g>
  ),
  // Diagnóstico: marcações em uma grade de resultados
  '03': (
    <g fill="none" strokeWidth="4">
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <path d={`M40 ${60 + r * 28}h210`} stroke={W} />
          <circle cx="290" cy={60 + r * 28} r="7" stroke={r === 1 ? Y : W} fill={r === 1 ? Y : 'none'} />
        </g>
      ))}
    </g>
  ),
  // Conteúdo: resposta primeiro, aprofundamento depois
  '04': (
    <g fill="none" strokeWidth="4">
      <rect x="90" y="40" width="180" height="130" rx="6" stroke={W} />
      <path d="M110 64h140" stroke={Y} strokeWidth="4" />
      <path d="M110 88h140M110 104h120M110 120h140M110 136h90" stroke={W} />
    </g>
  ),
  // Conteúdo multicanal: um texto que vira artigo, post e vídeo
  '05': (
    <g fill="none" strokeWidth="4">
      <rect x="40" y="55" width="80" height="100" rx="6" stroke={W} />
      <path d="M55 80h50M55 97h50M55 114h35" stroke={W} />
      <rect x="140" y="55" width="80" height="100" rx="6" stroke={W} />
      <circle cx="180" cy="95" r="18" stroke={W} />
      <rect x="240" y="65" width="90" height="80" rx="8" stroke={Y} />
      <path d="M277 90l20 15-20 15z" fill={Y} stroke={Y} />
    </g>
  ),
  // Autoridade: fontes que apontam para a marca
  '06': (
    <g fill="none" strokeWidth="4">
      {[
        [60, 60],
        [60, 150],
        [300, 60],
        [300, 150],
        [180, 40],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y}L180 108`} stroke={W} />
          <circle cx={x} cy={y} r="7" fill="#4B1E87" stroke={W} />
        </g>
      ))}
      <circle cx="180" cy="108" r="14" fill={Y} />
    </g>
  ),
  // Mensuração: evolução em 90 dias
  '07': (
    <g fill="none" strokeWidth="4">
      <path d="M40 170h280" stroke={W} />
      {[40, 58, 52, 80, 96, 118].map((h, i) => (
        <rect key={i} x={55 + i * 44} y={170 - h} width="24" height={h} stroke={i === 5 ? Y : W} fill={i === 5 ? Y : 'none'} />
      ))}
    </g>
  ),
};

interface CapaModuloProps {
  numero: string;
  titulo: string;
  className?: string;
}

const CapaModulo = ({ numero, titulo, className }: CapaModuloProps) => (
  <figure aria-label={titulo}
    className={cn('relative flex size-full bg-(--cor-roxo) flex-col justify-between overflow-hidden rounded-xl border border-white/8 p-6', className)}
  >
    <span className="font-instrument-serif text-[72px] leading-[0.8] text-white/90">{numero}</span>
    <svg viewBox="25 25 320 165" className="mt-2 w-full flex-1" aria-hidden>
      {desenhos[numero]}
    </svg>
  </figure>
);

export default CapaModulo;
