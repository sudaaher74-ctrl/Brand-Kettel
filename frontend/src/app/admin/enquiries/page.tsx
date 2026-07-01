'use client';

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  status: string;
  createdAt: string;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function EnquiriesPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/leads');
    setLeads(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function updateStatus(id: string, newStatus: string) {
    const res = await fetch(`/api/admin/leads/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });

    if (res.ok) {
      setLeads(leads => leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    }
  }

  function exportToExcel() {
    const dataToExport = leads.map(l => ({
      Date: new Date(l.createdAt).toLocaleDateString(),
      Name: l.name,
      Phone: l.phone,
      Email: l.email,
      'Project Type': l.projectType,
      Message: l.message,
      Status: l.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Enquiries');
    XLSX.writeFile(workbook, 'BrandKettle_Enquiries.xlsx');
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Enquiries</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{leads.length} total enquiries</p>
        </div>
        <button
          onClick={exportToExcel}
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2"
          style={{ background: '#10B981', color: '#fff' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Export to Excel
        </button>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : leads.length === 0 ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>No enquiries yet.</div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Date</th>
                <th style={th}>Contact Details</th>
                <th style={th}>Project Type</th>
                <th style={th}>Message</th>
                <th style={th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr key={l.id} style={{ transition: 'background 0.15s', verticalAlign: 'top' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={td}>
                    {new Date(l.createdAt).toLocaleDateString()}
                  </td>
                  <td style={td}>
                    <div className="font-medium text-slate-900">{l.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{l.phone}</div>
                    <div className="text-sm text-slate-500">{l.email}</div>
                  </td>
                  <td style={td}>{l.projectType || '—'}</td>
                  <td style={td}>
                    <div className="max-w-xs truncate" title={l.message}>
                      {l.message || '—'}
                    </div>
                  </td>
                  <td style={td}>
                    <select
                      className="text-sm border-0 bg-transparent cursor-pointer rounded px-2 py-1 outline-none focus:ring-2 focus:ring-slate-200"
                      value={l.status}
                      onChange={(e) => updateStatus(l.id, e.target.value)}
                      style={{
                        background: l.status === 'New' ? '#dbeafe' : l.status === 'Contacted' ? '#fef9c3' : '#dcfce7',
                        color: l.status === 'New' ? '#1e3a8a' : l.status === 'Contacted' ? '#854d0e' : '#166534',
                        fontWeight: 500
                      }}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
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
