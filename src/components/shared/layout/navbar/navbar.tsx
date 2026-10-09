'use client';

import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SagLogo from '../../sag-logo';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(80);
  const pathname = usePathname();

  // A página de vendas do curso não usa o menu.
  if (pathname?.startsWith('/curso')) return null;

  return (
    <header
      className={cn(
        'fixed left-1/2 z-50 w-[calc(100%-32px)] max-w-[1180px] -translate-x-1/2 transition-all duration-500',
        isScrolled ? 'top-3' : 'top-5'
      )}
    >
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0e18]/80 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Método SAG - início">
          <SagLogo compact />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/65 md:flex">
          <Link className="transition-colors hover:text-white" href="#metodo">O método</Link>
          <Link className="transition-colors hover:text-white" href="#ementa">Ementa</Link>
          <Link className="transition-colors hover:text-white" href="#sobre">Rodrigo Bueno</Link>
        </div>

        <Link
          href="#inscricao"
          className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#080a12] transition hover:bg-[#38e8a2]"
        >
          Conhecer o curso
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
