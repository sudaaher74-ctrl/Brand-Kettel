'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from './RichTextEditor';

type JobOpeningData = {
  id?: string;
  title?: string;
  location?: string;
  type?: string;
  description?: string;
  requirements?: string;
  isActive?: boolean;
};

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

export default function CareerForm({ initial = {} }: { initial?: JobOpeningData }) {
  const router = useRouter();
  const isEdit = !!initial.id;

  const [form, setForm] = useState({
    title: initial.title ?? '',
    location: initial.location ?? '',
    type: initial.type ?? 'Full-time',
    description: initial.description ?? '',
    requirements: initial.requirements ?? '',
    isActive: initial.isActive ?? true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const url = isEdit ? `/api/admin/careers/${initial.id}` : '/api/admin/careers';
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

    router.push('/admin/careers');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label style={label}>Job Title *</label>
          <input style={input} value={form.title} onChange={e => set('title', e.target.value)} required />
        </div>
        <div>
          <label style={label}>Location</label>
          <input style={input} value={form.location} onChange={e => set('location', e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label style={label}>Employment Type</label>
          <select
            style={{ ...input, cursor: 'pointer' }}
            value={form.type}
            onChange={e => set('type', e.target.value)}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="flex items-center gap-2 pt-8">
          <input
            type="checkbox"
            id="isActive"
            checked={form.isActive}
            onChange={e => set('isActive', e.target.checked)}
            style={{ width: 16, height: 16, accentColor: '#10B981', cursor: 'pointer' }}
          />
          <label htmlFor="isActive" style={{ fontSize: 14, color: '#374151', cursor: 'pointer' }}>
            Job is active
          </label>
        </div>
      </div>

      <div>
        <label style={label}>Job Description</label>
        <RichTextEditor value={form.description} onChange={(val) => set('description', val)} />
      </div>

      <div>
        <label style={label}>Requirements</label>
        <RichTextEditor value={form.requirements} onChange={(val) => set('requirements', val)} />
      </div>

      {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create job opening'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/careers')}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#f1f5f9', color: '#374151' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
