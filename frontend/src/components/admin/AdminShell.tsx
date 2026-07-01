'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '◱', exact: true },
  { href: '/admin/projects', label: 'Projects', icon: '◉' },
  { href: '/admin/services', label: 'Services', icon: '◈' },
  { href: '/admin/blog', label: 'Blogs', icon: '◎' },
  { href: '/admin/careers', label: 'Careers', icon: '👥' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: '★' },
  { href: '/admin/leads', label: 'Enquiries', icon: '✉' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === '/admin/login') {
    return (
      <div className="min-h-screen" style={{ background: '#f8fafc', color: '#1e293b' }}>
        {children}
      </div>
    );
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen" style={{ background: '#f1f5f9', color: '#1e293b' }}>
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4" style={{ background: '#0f172a' }}>
        <p className="text-sm font-semibold text-white">Brand Kettle Admin</p>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
          ☰
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-56 flex-col transition-transform duration-300 md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: '#0f172a' }}
      >
        <div className="px-5 py-6 flex items-center justify-between" style={{ borderBottom: '1px solid #1e293b' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: '#10B981', textTransform: 'uppercase' }}>
              Admin
            </p>
            <p className="mt-1 text-sm font-semibold leading-tight" style={{ color: '#f8fafc' }}>
              Brand Kettle<br />BuildSpaces
            </p>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto space-y-0.5 px-3 py-5">
          {NAV.map(item => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href) && pathname !== '/admin';
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: active ? '#10B981' : '#94a3b8',
                  background: active ? 'rgba(16, 185, 129,0.08)' : 'transparent',
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 pb-5" style={{ borderTop: '1px solid #1e293b', paddingTop: 16 }}>
          <button
            onClick={logout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors"
            style={{ color: '#64748b' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#f8fafc'; (e.currentTarget as HTMLButtonElement).style.background = '#1e293b'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#64748b'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="md:ml-56 flex-1 flex flex-col pt-16 md:pt-0 min-h-screen">
        {children}
      </div>
    </div>
  );
}
