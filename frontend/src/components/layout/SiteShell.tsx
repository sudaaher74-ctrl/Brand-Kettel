'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import StickyContact from '@/components/ui/StickyContact';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return <>{children}</>;
  }

  const isHome = pathname === '/';

  return (
    <SmoothScroll>
      {!isHome && <Navbar />}
      {children}
      {!isHome && <Footer />}
      {!isHome && <StickyContact />}
    </SmoothScroll>
  );
}
