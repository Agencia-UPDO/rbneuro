import type { ReactNode } from 'react';

export type SagIconName =
  | 'compass'
  | 'journey'
  | 'question'
  | 'scan'
  | 'content'
  | 'authority'
  | 'chart'
  | 'play'
  | 'refresh'
  | 'community'
  | 'access';

const paths: Record<SagIconName, ReactNode> = {
  compass: <><circle cx="12" cy="12" r="8"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></>,
  journey: <><circle cx="5" cy="17" r="2"/><circle cx="19" cy="7" r="2"/><path d="M7 17c6 0 3-10 10-10"/></>,
  question: <><path d="M9.4 9a3 3 0 1 1 4.1 2.8c-1 .45-1.5 1.1-1.5 2.2"/><path d="M12 18h.01"/><circle cx="12" cy="12" r="9"/></>,
  scan: <><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/><circle cx="12" cy="12" r="3"/><path d="M3 12h6m6 0h6"/></>,
  content: <><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></>,
  authority: <><path d="m12 3 2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 14l-4.3 2.3.8-4.8L5 8.1l4.8-.7L12 3Z"/><path d="m9 19 3 2 3-2"/></>,
  chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/><path d="m4 7 6-4 6 6 5-5"/></>,
  play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></>,
  refresh: <><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8a7 7 0 0 1 11.7-1L20 12M4 12l2.2 5a7 7 0 0 0 11.7-1"/></>,
  community: <><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c.4-4 2.5-6 6-6s5.6 2 6 6M15 15c3.3 0 5.2 1.7 5.5 5"/></>,
  access: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 9h8M8 13h5"/></>,
};

export const SagIcon = ({ name, className = '' }: { name: SagIconName; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {paths[name]}
  </svg>
);

const steps = [
  { acronym: 'SEO', verb: 'ENCONTRADO', label: 'Busca', color: '#38b6ff', icon: 'question' as SagIconName },
  { acronym: 'AEO', verb: 'CITADO', label: 'Resposta', color: '#38e8a2', icon: 'content' as SagIconName },
  { acronym: 'GEO', verb: 'CONSIDERADO', label: 'Decisão', color: '#9b86ff', icon: 'authority' as SagIconName },
];

export const MethodMap = () => (
  <div className="sag-map relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0e18] p-5 text-white shadow-[0_40px_110px_rgba(8,10,18,.24)] md:p-9">
    <div className="sag-noise absolute inset-0 opacity-30" />
    <div className="absolute -top-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-[#7257ff]/25 blur-[90px]" />
    <div className="relative">
      <div className="mb-7 flex items-center justify-between border-b border-white/8 pb-5">
        <div>
          <span className="font-sora text-xs font-semibold tracking-[.18em] text-white/42 uppercase">A lógica do método</span>
          <p className="mt-1 font-sora text-xl font-semibold tracking-[-.04em]">Da pergunta à escolha da marca</p>
        </div>
        <div className="hidden items-center gap-2 text-[10px] font-semibold tracking-[.15em] text-white/35 uppercase sm:flex">
          <span className="size-1.5 rounded-full bg-[#38e8a2] shadow-[0_0_12px_#38e8a2]" /> sistema ativo
        </div>
      </div>

      <div className="relative grid gap-3 md:grid-cols-3 md:gap-5">
        <div className="pointer-events-none absolute top-12 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-[#38b6ff] via-[#38e8a2] to-[#9b86ff] opacity-55 md:block" />
        {steps.map((step, index) => (
          <div key={step.acronym} className="group relative rounded-[22px] border border-white/9 bg-white/[.045] p-5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/[.075]">
            <div className="relative z-10 flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-[#0b0e18]" style={{ color: step.color, boxShadow: `0 0 30px ${step.color}22` }}>
                <SagIcon name={step.icon} className="size-6" />
              </span>
              <span className="font-sora text-[10px] font-semibold tracking-[.2em] text-white/28">0{index + 1}</span>
            </div>
            <p className="mt-8 font-sora text-sm font-semibold" style={{ color: step.color }}>{step.acronym}</p>
            <p className="mt-1 font-sora text-2xl font-semibold tracking-[-.045em]">Ser {step.verb.toLowerCase()}</p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/38"><span className="h-px w-6" style={{ background: step.color }} />{step.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-white/48">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/7 text-[#38b6ff]"><SagIcon name="question" className="size-4" /></span>
          “Qual é a melhor solução para o meu negócio?”
        </div>
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#080a12]">
          Pergunta <span className="text-[#7257ff]">→</span> presença <span className="text-[#7257ff]">→</span> decisão
        </div>
      </div>
    </div>
  </div>
);

export const MaterialPreview = () => (
  <div className="relative mx-auto min-h-[430px] w-full max-w-[520px]" aria-hidden="true">
    <div className="absolute top-16 left-3 w-[78%] -rotate-6 rounded-2xl border border-black/8 bg-[#111521] p-5 text-white shadow-2xl">
      <p className="text-[9px] font-semibold tracking-[.16em] text-[#38b6ff] uppercase">Diagnóstico SAG</p>
      <div className="mt-5 space-y-3">{[72, 90, 58, 82].map((width, index) => <div key={width} className="flex items-center gap-3"><span className="size-2 rounded-full" style={{ background: ['#38b6ff','#38e8a2','#9b86ff','#ffc928'][index] }} /><span className="h-2 rounded-full bg-white/12" style={{ width: `${width}%` }} /></div>)}</div>
      <div className="mt-7 grid grid-cols-3 gap-2">{['SEO','AEO','GEO'].map((item, index) => <div key={item} className="rounded-lg bg-white/6 p-3"><span className="text-[9px] text-white/35">{item}</span><p className="mt-2 font-sora text-xl font-semibold">{[74,51,36][index]}%</p></div>)}</div>
    </div>
    <div className="absolute top-5 right-1 w-[76%] rotate-5 rounded-2xl border border-black/8 bg-white p-5 shadow-[0_25px_70px_rgba(8,10,18,.18)]">
      <div className="flex items-center justify-between"><p className="font-sora text-sm font-semibold">Plano de 90 dias</p><span className="rounded-full bg-[#7257ff]/10 px-2 py-1 text-[8px] font-bold text-[#7257ff]">MÉTODO SAG</span></div>
      <div className="mt-5 grid grid-cols-3 gap-2">{['30','60','90'].map((day,index) => <div key={day} className="rounded-xl p-3" style={{ background: ['#38b6ff14','#38e8a214','#7257ff14'][index] }}><span className="text-[9px] text-black/35">DIAS</span><p className="font-sora text-2xl font-semibold">{day}</p></div>)}</div>
      <div className="mt-5 space-y-2">{['Prioridades','Responsáveis','Indicadores'].map((item,index) => <div key={item} className="flex items-center justify-between rounded-lg bg-[#f4f5f8] px-3 py-2 text-[10px] text-black/55"><span>{item}</span><span className="font-bold text-[#7257ff]">0{index+1}</span></div>)}</div>
    </div>
    <div className="absolute right-8 bottom-1 left-8 rounded-2xl border border-white/12 bg-[#7257ff] p-5 text-white shadow-[0_25px_60px_rgba(114,87,255,.35)]">
      <div className="flex items-center justify-between"><p className="font-sora text-sm font-semibold">Relatório executivo</p><SagIcon name="chart" className="size-5" /></div>
      <div className="mt-5 flex h-20 items-end gap-2">{[35,62,48,78,92,70].map((height,index) => <span key={index} className="flex-1 rounded-t bg-white/25" style={{ height: `${height}%` }} />)}</div>
    </div>
  </div>
);
