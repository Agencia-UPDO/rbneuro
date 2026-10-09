import { cn } from '@/src/utils/cn';

interface ImageSlotProps {
  label: string;
  kind?: 'Foto' | 'Vídeo' | 'Print' | 'Capa';
  tone?: 'dark' | 'light';
  play?: boolean;
  className?: string;
}

// Espaço reservado para uma imagem ou vídeo que ainda será enviado.
const ImageSlot = ({ label, kind = 'Foto', tone = 'dark', play = false, className }: ImageSlotProps) => (
  <figure
    className={cn(
      'relative flex size-full items-end overflow-hidden rounded-xl border border-dashed',
      tone === 'dark' ? 'border-white/15 bg-white/[0.04]' : 'border-background-13/15 bg-background-13/[0.04]',
      className
    )}
  >
    {play && (
      <span className="absolute inset-0 grid place-items-center" aria-hidden>
        <span className="grid size-16 place-items-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,.25)]">
          <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-background-13" />
        </span>
      </span>
    )}
    <figcaption className="relative space-y-1 p-5">
      <span className="font-ibm-plex-mono text-tagline-4 block tracking-[0.1em] text-sag-yellow uppercase">
        {kind} a inserir
      </span>
      <span className={cn('text-tagline-3 block', tone === 'dark' ? 'text-white/60' : 'text-background-13/60')}>
        {label}
      </span>
    </figcaption>
  </figure>
);

export default ImageSlot;
