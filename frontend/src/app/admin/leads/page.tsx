'use client';

import { useEffect, useState } from 'react';

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  source: string;
  createdAt: string;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/leads');
    setLeads(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function deleteLead(id: string, name: string) {
    if (!confirm(`Delete lead from "${name}"?`)) return;
    await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
    setLeads(p => p.filter(x => x.id !== id));
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Leads</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{leads.length} total</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : leads.length === 0 ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>No leads yet.</div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Date</th>
                <th style={th}>Name</th>
                <th style={th}>Contact</th>
                <th style={th}>Type</th>
                <th style={th}>Message</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} style={{ transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ ...td, color: '#64748b' }}>
                    {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ ...td, fontWeight: 500 }}>{lead.name}</td>
                  <td style={td}>
                    <div className="text-sm">
                      <div>{lead.email}</div>
                      <div style={{ color: '#64748b' }}>{lead.phone}</div>
                    </div>
                  </td>
                  <td style={td}>
                    <span className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ background: '#f1f5f9', color: '#475569' }}>
                      {lead.projectType}
                    </span>
                  </td>
                  <td style={td}>
                    <div className="max-w-xs truncate text-sm" style={{ color: '#475569' }} title={lead.message}>
                      {lead.message || '—'}
                    </div>
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <button
                      onClick={() => deleteLead(lead.id, lead.name)}
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
