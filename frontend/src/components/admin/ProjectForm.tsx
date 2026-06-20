'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ProjectData = {
  id?: string;
  slug?: string;
  name?: string;
  location?: string;
  category?: string;
  area?: string;
  year?: string;
  segment?: string;
  image?: string;
  gallery?: string[];
  blurb?: string;
  order?: number;
};

const CATEGORIES = ['Hospitality', 'Commercial Spaces', 'Government', 'Luxury Retail', 'Jewellery Showroom', 'Office', 'Residential'];

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ProjectForm({ initial = {} }: { initial?: ProjectData }) {
  const router = useRouter();
  const isEdit = !!initial.id;

  const [form, setForm] = useState({
    name: initial.name ?? '',
    slug: initial.slug ?? '',
    location: initial.location ?? '',
    category: initial.category ?? 'Commercial Spaces',
    area: initial.area ?? '',
    year: initial.year ?? '',
    segment: initial.segment ?? 'commercial',
    image: initial.image ?? '',
    gallery: (initial.gallery ?? []).join('\n'),
    blurb: initial.blurb ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: string, value: string) {
    setForm(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'name' && !isEdit) next.slug = slugify(value);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      ...form,
      gallery: form.gallery.split('\n').map(s => s.trim()).filter(Boolean),
    };

    const url = isEdit ? `/api/admin/projects/${initial.id}` : '/api/admin/projects';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || 'Save failed');
      setSaving(false);
      return;
    }

    router.push('/admin/projects');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label style={label}>Name *</label>
          <input style={input} value={form.name} onChange={e => set('name', e.target.value)} required />
        </div>
        <div>
          <label style={label}>Slug *</label>
          <input style={input} value={form.slug} onChange={e => set('slug', e.target.value)} required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label style={label}>Location</label>
          <input style={input} value={form.location} onChange={e => set('location', e.target.value)} />
        </div>
        <div>
          <label style={label}>Category</label>
          <select
            style={{ ...input, cursor: 'pointer' }}
            value={form.category}
            onChange={e => set('category', e.target.value)}
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div>
          <label style={label}>Area (sq ft / sq yd)</label>
          <input style={input} value={form.area} onChange={e => set('area', e.target.value)} />
        </div>
        <div>
          <label style={label}>Year</label>
          <input style={input} value={form.year} onChange={e => set('year', e.target.value)} />
        </div>
        <div>
          <label style={label}>Segment</label>
          <select
            style={{ ...input, cursor: 'pointer' }}
            value={form.segment}
            onChange={e => set('segment', e.target.value)}
          >
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
          </select>
        </div>
      </div>

      <div>
        <label style={label}>Cover Image URL</label>
        <input style={input} value={form.image} onChange={e => set('image', e.target.value)} placeholder="/imgs/commercial/photo.jpg" />
        {form.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.image} alt="" className="mt-2 rounded-lg object-cover" style={{ height: 80, width: 140 }} />
        )}
      </div>

      <div>
        <label style={label}>Gallery URLs (one per line)</label>
        <textarea
          style={{ ...input, minHeight: 90, resize: 'vertical' }}
          value={form.gallery}
          onChange={e => set('gallery', e.target.value)}
          placeholder="/imgs/commercial/photo1.jpg&#10;/imgs/commercial/photo2.jpg"
        />
      </div>

      <div>
        <label style={label}>Blurb / Description</label>
        <textarea
          style={{ ...input, minHeight: 80, resize: 'vertical' }}
          value={form.blurb}
          onChange={e => set('blurb', e.target.value)}
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
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create project'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/projects')}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#f1f5f9', color: '#374151' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
