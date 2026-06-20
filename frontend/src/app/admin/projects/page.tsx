'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  segment: string;
  image: string;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/projects');
    setProjects(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function deleteProject(id: string, name: string) {
    if (!confirm(`Delete "${name}"?`)) return;
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
    setProjects(p => p.filter(x => x.id !== id));
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Projects</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{projects.length} total</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff' }}
        >
          + Add project
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : projects.length === 0 ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>No projects yet.</div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Location</th>
                <th style={th}>Category</th>
                <th style={th}>Segment</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id} style={{ transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={td}>
                    <div className="flex items-center gap-3">
                      {p.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.image} alt="" className="rounded object-cover" style={{ width: 40, height: 32, flexShrink: 0 }} />
                      )}
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </td>
                  <td style={td}>{p.location}</td>
                  <td style={td}>{p.category}</td>
                  <td style={td}>
                    <span className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ background: p.segment === 'commercial' ? '#dbeafe' : '#fce7f3', color: p.segment === 'commercial' ? '#1d4ed8' : '#9d174d' }}>
                      {p.segment}
                    </span>
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <Link
                      href={`/admin/projects/${p.id}/edit`}
                      className="mr-3 text-sm font-medium"
                      style={{ color: '#c9a86a' }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProject(p.id, p.name)}
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
