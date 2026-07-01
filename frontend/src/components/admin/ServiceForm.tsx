'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from './RichTextEditor';

type ServiceData = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
};

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

export default function ServiceForm({ initial = {} }: { initial?: ServiceData }) {
  const router = useRouter();
  const isEdit = !!initial.id;

  const [form, setForm] = useState({
    title: initial.title ?? '',
    description: initial.description ?? '',
    image: initial.image ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const url = isEdit ? `/api/admin/services/${initial.id}` : '/api/admin/services';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || 'Save failed');
      setSaving(false);
      return;
    }

    router.push('/admin/services');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label style={label}>Title *</label>
        <input style={input} value={form.title} onChange={e => set('title', e.target.value)} required />
      </div>

      <div>
        <label style={label}>Image URL</label>
        <input style={input} value={form.image} onChange={e => set('image', e.target.value)} placeholder="/imgs/service.jpg" />
        {form.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.image} alt="" className="mt-2 rounded-lg object-cover" style={{ height: 80, width: 140 }} />
        )}
      </div>

      <div>
        <label style={label}>Description</label>
        <RichTextEditor value={form.description} onChange={(val) => set('description', val)} />
      </div>

      {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create service'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/services')}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#f1f5f9', color: '#374151' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
