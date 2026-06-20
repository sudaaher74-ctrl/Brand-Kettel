'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import ProjectForm from '@/components/admin/ProjectForm';

export default function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/projects/${id}`)
      .then(res => {
        if (!res.ok) { setNotFound(true); setLoading(false); return null; }
        return res.json();
      })
      .then(data => { if (data) { setProject(data); setLoading(false); } });
  }, [id]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href="/admin/projects" className="text-sm" style={{ color: '#64748b' }}>
          ← Back to projects
        </Link>
        <h1 className="mt-4 text-2xl font-bold" style={{ color: '#0f172a' }}>
          {loading ? 'Loading…' : notFound ? 'Not found' : `Edit — ${project?.name}`}
        </h1>
      </div>

      {!loading && !notFound && project && (
        <div className="max-w-2xl rounded-xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
          <ProjectForm initial={project as Parameters<typeof ProjectForm>[0]['initial']} />
        </div>
      )}

      {notFound && (
        <p style={{ color: '#64748b', fontSize: 14 }}>Project not found.</p>
      )}
    </div>
  );
}
