'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Testimonial = {
  id: string;
  clientName: string;
  company: string;
  rating: number;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/testimonials');
    setItems(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function deleteItem(id: string, name: string) {
    if (!confirm(`Delete testimonial from "${name}"?`)) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
    setItems(s => s.filter(x => x.id !== id));
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Testimonials</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{items.length} testimonials</p>
        </div>
        <Link
          href="/admin/testimonials/new"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff' }}
        >
          + Add Testimonial
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : items.length === 0 ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>No testimonials yet.</div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Client Name</th>
                <th style={th}>Company</th>
                <th style={th}>Rating</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(t => (
                <tr key={t.id} style={{ transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ ...td, fontWeight: 500 }}>{t.clientName}</td>
                  <td style={td}>{t.company || '—'}</td>
                  <td style={td}>{'⭐'.repeat(t.rating)}</td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <Link
                      href={`/admin/testimonials/${t.id}/edit`}
                      className="mr-3 text-sm font-medium"
                      style={{ color: '#10B981' }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteItem(t.id, t.clientName)}
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
