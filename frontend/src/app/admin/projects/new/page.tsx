import Link from 'next/link';
import ProjectForm from '@/components/admin/ProjectForm';

export default function NewProjectPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href="/admin/projects" className="text-sm" style={{ color: '#64748b' }}>
          ← Back to projects
        </Link>
        <h1 className="mt-4 text-2xl font-bold" style={{ color: '#0f172a' }}>New project</h1>
      </div>

      <div className="max-w-2xl rounded-xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        <ProjectForm />
      </div>
    </div>
  );
}
