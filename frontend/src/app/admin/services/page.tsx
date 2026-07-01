'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  image: string;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/services');
    setServices(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function deleteService(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
    setServices(s => s.filter(x => x.id !== id));
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Services</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{services.length} total</p>
        </div>
        <Link
          href="/admin/services/new"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff' }}
        >
          + Add service
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : services.length === 0 ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>No services yet.</div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Title</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(s => (
                <tr key={s.id} style={{ transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={td}>
                    <div className="flex items-center gap-3">
                      {s.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.image} alt="" className="rounded object-cover" style={{ width: 40, height: 32, flexShrink: 0 }} />
                      )}
                      <span className="font-medium">{s.title}</span>
                    </div>
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <Link
                      href={`/admin/services/${s.id}/edit`}
                      className="mr-3 text-sm font-medium"
                      style={{ color: '#10B981' }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteService(s.id, s.title)}
                      className="text-sm"
                      style={{ color: '#ef4444' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
