'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  category?: string;
  published: boolean;
  createdAt: string;
};

const th = { padding: '10px 16px', textAlign: 'left' as const, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '12px 16px', fontSize: 14, color: '#1e293b', borderBottom: '1px solid #f1f5f9' };

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/blog');
    setPosts(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
    setPosts(p => p.filter(x => x.id !== id));
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Blog</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{posts.length} posts</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-lg px-4 py-2 text-sm font-semibold"
          style={{ background: '#0f172a', color: '#fff' }}
        >
          + New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        {loading ? (
          <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <p style={{ color: '#64748b', fontSize: 14 }}>No posts yet.</p>
            <Link href="/admin/blog/new" className="text-sm font-medium" style={{ color: '#c9a86a' }}>Create your first post →</Link>
          </div>
        ) : (
          <table className="w-full">
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={th}>Title</th>
                <th style={th}>Category</th>
                <th style={th}>Status</th>
                <th style={th}>Date</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ ...td, fontWeight: 500 }}>{p.title}</td>
                  <td style={td}>{p.category || '—'}</td>
                  <td style={td}>
                    <span className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ background: p.published ? '#dcfce7' : '#f1f5f9', color: p.published ? '#166534' : '#64748b' }}>
                      {p.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ ...td, color: '#64748b' }}>
                    {new Date(p.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <Link href={`/admin/blog/${p.id}/edit`} className="mr-3 text-sm font-medium" style={{ color: '#c9a86a' }}>
                      Edit
                    </Link>
                    <button onClick={() => deletePost(p.id, p.title)} className="text-sm" style={{ color: '#ef4444' }}>
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
