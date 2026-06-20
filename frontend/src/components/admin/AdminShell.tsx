'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV = [
  { href: '/admin/projects', label: 'Projects', icon: '◉' },
  { href: '/admin/blog', label: 'Blog', icon: '◎' },
  { href: '/admin/content', label: 'Content', icon: '◈' },
  { href: '/admin/leads', label: 'Leads', icon: '✉' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

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
      {/* Sidebar */}
      <aside
        className="fixed inset-y-0 left-0 z-40 flex w-56 flex-col"
        style={{ background: '#0f172a' }}
      >
        <div className="px-5 py-6" style={{ borderBottom: '1px solid #1e293b' }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: '#c9a86a', textTransform: 'uppercase' }}>
            Admin
          </p>
          <p className="mt-1 text-sm font-semibold leading-tight" style={{ color: '#f8fafc' }}>
            Brand Kettle<br />BuildSpaces
          </p>
        </div>

        <nav className="flex-1 space-y-0.5 px-3 py-5">
          {NAV.map(item => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: active ? '#c9a86a' : '#94a3b8',
                  background: active ? 'rgba(201,168,106,0.08)' : 'transparent',
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
      <div className="ml-56 flex-1">
        {children}
      </div>
    </div>
  );
}
