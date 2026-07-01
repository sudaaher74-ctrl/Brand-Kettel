'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from './RichTextEditor';

type PostData = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  published?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  imageAltText?: string;
};

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function BlogForm({ initial = {} }: { initial?: PostData }) {
  const router = useRouter();
  const isEdit = !!initial.id;

  const [form, setForm] = useState({
    title: initial.title ?? '',
    slug: initial.slug ?? '',
    excerpt: initial.excerpt ?? '',
    content: initial.content ?? '',
    coverImage: initial.coverImage ?? '',
    category: initial.category ?? '',
    tags: (initial.tags ?? []).join(', '),
    published: initial.published ?? false,
    metaTitle: initial.metaTitle ?? '',
    metaDescription: initial.metaDescription ?? '',
    keywords: (initial.keywords ?? []).join(', '),
    imageAltText: initial.imageAltText ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: string, value: string | boolean) {
    setForm(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && typeof value === 'string' && !isEdit) next.slug = slugify(value);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      keywords: form.keywords.split(',').map(k => k.trim()).filter(Boolean),
    };

    const url = isEdit ? `/api/admin/blog/${initial.id}` : '/api/admin/blog';
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

    router.push('/admin/blog');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Info */}
      <div className="space-y-5">
        <h2 className="text-lg font-bold border-b pb-2">Basic Info</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label style={label}>Title *</label>
            <input style={input} value={form.title} onChange={e => set('title', e.target.value)} required />
          </div>
          <div>
            <label style={label}>Slug *</label>
            <input style={input} value={form.slug} onChange={e => set('slug', e.target.value)} required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label style={label}>Category</label>
            <input style={input} value={form.category} onChange={e => set('category', e.target.value)} placeholder="Commercial, Office, Retail…" />
          </div>
          <div>
            <label style={label}>Tags (comma separated)</label>
            <input style={input} value={form.tags} onChange={e => set('tags', e.target.value)} placeholder="design, interior, retail" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label style={label}>Cover Image URL</label>
            <input style={input} value={form.coverImage} onChange={e => set('coverImage', e.target.value)} placeholder="/imgs/blog/cover.jpg" />
            {form.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={form.coverImage} alt="" className="mt-2 rounded-lg object-cover" style={{ height: 80, width: 140 }} />
            )}
          </div>
          <div>
            <label style={label}>Image Alt Text</label>
            <input style={input} value={form.imageAltText} onChange={e => set('imageAltText', e.target.value)} placeholder="A beautiful commercial interior..." />
          </div>
        </div>

        <div>
          <label style={label}>Excerpt</label>
          <textarea
            style={{ ...input, minHeight: 80, resize: 'vertical' }}
            value={form.excerpt}
            onChange={e => set('excerpt', e.target.value)}
            placeholder="A short summary shown on the blog listing page…"
          />
        </div>

        <div>
          <label style={label}>Content</label>
          <RichTextEditor value={form.content} onChange={(val) => set('content', val)} />
        </div>
      </div>

      {/* SEO Settings */}
      <div className="space-y-5">
        <h2 className="text-lg font-bold border-b pb-2">SEO Settings</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label style={label}>Meta Title</label>
            <input style={input} value={form.metaTitle} onChange={e => set('metaTitle', e.target.value)} placeholder="SEO Title (defaults to post title)" />
          </div>
          <div>
            <label style={label}>Keywords (comma separated)</label>
            <input style={input} value={form.keywords} onChange={e => set('keywords', e.target.value)} placeholder="interior design, architecture, office" />
          </div>
        </div>
        <div>
          <label style={label}>Meta Description</label>
          <textarea
            style={{ ...input, minHeight: 80, resize: 'vertical' }}
            value={form.metaDescription}
            onChange={e => set('metaDescription', e.target.value)}
            placeholder="SEO Description (defaults to excerpt)"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="published"
          checked={form.published}
          onChange={e => set('published', e.target.checked)}
          style={{ width: 16, height: 16, accentColor: '#10B981', cursor: 'pointer' }}
        />
        <label htmlFor="published" style={{ fontSize: 14, color: '#374151', cursor: 'pointer' }}>
          Publish this post
        </label>
      </div>

      {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create post'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/blog')}
          className="rounded-lg px-6 py-2.5 text-sm font-semibold"
          style={{ background: '#f1f5f9', color: '#374151' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
