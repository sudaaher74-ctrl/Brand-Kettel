'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type TestimonialData = {
  id?: string;
  clientName?: string;
  company?: string;
  feedback?: string;
  rating?: number;
};

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

export default function TestimonialForm({ initial = {} }: { initial?: TestimonialData }) {
  const router = useRouter();
  const isEdit = !!initial.id;

  const [form, setForm] = useState({
    clientName: initial.clientName ?? '',
    company: initial.company ?? '',
    feedback: initial.feedback ?? '',
    rating: initial.rating ?? 5,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: string, value: string | number) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const url = isEdit ? `/api/admin/testimonials/${initial.id}` : '/api/admin/testimonials';
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

    router.push('/admin/testimonials');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label style={label}>Client Name *</label>
          <input style={input} value={form.clientName} onChange={e => set('clientName', e.target.value)} required />
        </div>
        <div>
          <label style={label}>Company</label>
          <input style={input} value={form.company} onChange={e => set('company', e.target.value)} />
        </div>
      </div>

      <div>
        <label style={label}>Rating (1-5)</label>
        <input 
          type="number" 
          min="1" 
          max="5" 
          style={input} 
          value={form.rating} 
          onChange={e => set('rating', parseInt(e.target.value) || 5)} 
          required 
        />
      </div>

      <div>
        <label style={label}>Feedback *</label>
        <textarea
          style={{ ...input, minHeight: 120, resize: 'vertical' }}
          value={form.feedback}
          onChange={e => set('feedback', e.target.value)}
          required
        />
      </div>

      {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors"
          style={{ background: '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create testimonial'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/testimonials')}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#f1f5f9', color: '#374151' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
