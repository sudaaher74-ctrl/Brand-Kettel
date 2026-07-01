'use client';

import { useEffect, useState } from 'react';

type SettingsData = {
  contactEmail?: string;
  contactPhone?: string;
  officeAddress?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  defaultKeywords?: string;
};

const label = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 };
const input = {
  width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #e2e8f0',
  fontSize: 14, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};

export default function SettingsPage() {
  const [form, setForm] = useState<SettingsData>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/settings');
    setForm(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function set(field: keyof SettingsData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');

    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || 'Save failed');
    } else {
      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
    setSaving(false);
  }

  if (loading) return <div className="p-8 text-sm" style={{ color: '#64748b' }}>Loading settings…</div>;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Settings</h1>
        <p className="mt-1 text-sm" style={{ color: '#64748b' }}>Manage website and SEO settings.</p>
      </div>

      <div className="max-w-3xl rounded-xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-5">
            <h2 className="text-lg font-bold border-b pb-2">Company Details</h2>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label style={label}>Contact Email</label>
                <input style={input} value={form.contactEmail || ''} onChange={e => set('contactEmail', e.target.value)} type="email" placeholder="info@brandkettle.com" />
              </div>
              <div>
                <label style={label}>Contact Phone</label>
                <input style={input} value={form.contactPhone || ''} onChange={e => set('contactPhone', e.target.value)} placeholder="+1 234 567 890" />
              </div>
            </div>
            <div>
              <label style={label}>Office Address</label>
              <textarea style={{ ...input, minHeight: 80, resize: 'vertical' }} value={form.officeAddress || ''} onChange={e => set('officeAddress', e.target.value)} placeholder="123 Design St..." />
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-lg font-bold border-b pb-2">Social Media</h2>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label style={label}>Facebook URL</label>
                <input style={input} value={form.facebookUrl || ''} onChange={e => set('facebookUrl', e.target.value)} />
              </div>
              <div>
                <label style={label}>Instagram URL</label>
                <input style={input} value={form.instagramUrl || ''} onChange={e => set('instagramUrl', e.target.value)} />
              </div>
              <div>
                <label style={label}>LinkedIn URL</label>
                <input style={input} value={form.linkedinUrl || ''} onChange={e => set('linkedinUrl', e.target.value)} />
              </div>
              <div>
                <label style={label}>Twitter URL</label>
                <input style={input} value={form.twitterUrl || ''} onChange={e => set('twitterUrl', e.target.value)} />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-lg font-bold border-b pb-2">Global SEO Defaults</h2>
            <div>
              <label style={label}>Default Meta Title</label>
              <input style={input} value={form.defaultMetaTitle || ''} onChange={e => set('defaultMetaTitle', e.target.value)} placeholder="BrandKettle - Premium Interior Design" />
            </div>
            <div>
              <label style={label}>Default Meta Description</label>
              <textarea style={{ ...input, minHeight: 80, resize: 'vertical' }} value={form.defaultMetaDescription || ''} onChange={e => set('defaultMetaDescription', e.target.value)} placeholder="We design beautiful..." />
            </div>
            <div>
              <label style={label}>Default Keywords (comma separated)</label>
              <input style={input} value={form.defaultKeywords || ''} onChange={e => set('defaultKeywords', e.target.value)} placeholder="interior design, branding, commercial" />
            </div>
          </div>

          {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}
          {message && <p style={{ color: '#10B981', fontSize: 14 }}>{message}</p>}

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors w-full sm:w-auto"
              style={{ background: '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
            >
              {saving ? 'Saving…' : 'Save all settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
