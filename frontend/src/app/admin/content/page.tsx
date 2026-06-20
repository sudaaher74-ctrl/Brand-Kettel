'use client';

import { useEffect, useState, useCallback } from 'react';

type Tab = 'testimonials' | 'services' | 'whyCards' | 'processSteps';

const TABS: { key: Tab; label: string }[] = [
  { key: 'testimonials', label: 'Testimonials' },
  { key: 'services', label: 'Services' },
  { key: 'whyCards', label: 'Why Cards' },
  { key: 'processSteps', label: 'Process Steps' },
];

const inp = {
  width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #e2e8f0',
  fontSize: 13, color: '#1e293b', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' as const,
};
const lbl = { fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.08em', display: 'block', marginBottom: 3 };

// --- Field schemas per content type ---
type Field = { key: string; label: string; multiline?: boolean };

const FIELDS: Record<Tab, Field[]> = {
  testimonials: [
    { key: 'quote', label: 'Quote', multiline: true },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role / Title' },
  ],
  services: [
    { key: 'title', label: 'Title' },
    { key: 'tag', label: 'Tag (Core / Premium / Craft)' },
    { key: 'description', label: 'Description', multiline: true },
    { key: 'image', label: 'Image URL' },
  ],
  whyCards: [
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body', multiline: true },
  ],
  processSteps: [
    { key: 'no', label: 'Step No (01, 02…)' },
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body', multiline: true },
  ],
};

function emptyItem(tab: Tab): Record<string, string> {
  return Object.fromEntries(FIELDS[tab].map(f => [f.key, '']));
}

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>('testimonials');
  const [items, setItems] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async (tab: Tab) => {
    setLoading(true);
    const res = await fetch(`/api/admin/content?type=${tab}`);
    setItems(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(activeTab); }, [activeTab, load]);

  function switchTab(tab: Tab) {
    setActiveTab(tab);
    setSaved(false);
  }

  function updateField(index: number, field: string, value: string) {
    setItems(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));
  }

  function addItem() {
    setItems(prev => [...prev, emptyItem(activeTab)]);
  }

  function removeItem(index: number) {
    if (!confirm('Remove this item?')) return;
    setItems(prev => prev.filter((_, i) => i !== index));
  }

  function moveItem(index: number, dir: -1 | 1) {
    const next = [...items];
    const swap = index + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[index], next[swap]] = [next[swap], next[index]];
    setItems(next);
  }

  async function save() {
    setSaving(true);
    await fetch(`/api/admin/content?type=${activeTab}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const fields = FIELDS[activeTab];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Content</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>Edit site content blocks that appear on public pages.</p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className="rounded-lg px-5 py-2 text-sm font-semibold transition-colors"
          style={{ background: saved ? '#166534' : '#0f172a', color: '#fff', opacity: saving ? 0.6 : 1 }}
        >
          {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save changes'}
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-xl p-1" style={{ background: '#e2e8f0', width: 'fit-content' }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => switchTab(t.key)}
            className="rounded-lg px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              background: activeTab === t.key ? '#fff' : 'transparent',
              color: activeTab === t.key ? '#0f172a' : '#64748b',
              boxShadow: activeTab === t.key ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20" style={{ color: '#64748b', fontSize: 14 }}>Loading…</div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-5"
              style={{ background: '#fff', border: '1px solid #e2e8f0' }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold" style={{ color: '#94a3b8' }}>Item {index + 1}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => moveItem(index, -1)} disabled={index === 0} className="text-xs" style={{ color: '#94a3b8', opacity: index === 0 ? 0.3 : 1 }}>↑</button>
                  <button onClick={() => moveItem(index, 1)} disabled={index === items.length - 1} className="text-xs" style={{ color: '#94a3b8', opacity: index === items.length - 1 ? 0.3 : 1 }}>↓</button>
                  <button onClick={() => removeItem(index)} className="text-xs" style={{ color: '#ef4444' }}>Remove</button>
                </div>
              </div>

              <div className={`grid gap-3 ${fields.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {fields.map(field => (
                  <div key={field.key} className={field.multiline ? 'col-span-2' : ''}>
                    <label style={lbl}>{field.label}</label>
                    {field.multiline ? (
                      <textarea
                        style={{ ...inp, minHeight: 72, resize: 'vertical' }}
                        value={item[field.key] ?? ''}
                        onChange={e => updateField(index, field.key, e.target.value)}
                      />
                    ) : (
                      <input
                        style={inp}
                        value={item[field.key] ?? ''}
                        onChange={e => updateField(index, field.key, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={addItem}
            className="w-full rounded-xl py-3 text-sm font-medium transition-colors"
            style={{ border: '2px dashed #e2e8f0', color: '#94a3b8', background: 'transparent' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a86a'; (e.currentTarget as HTMLButtonElement).style.color = '#c9a86a'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8'; }}
          >
            + Add item
          </button>
        </div>
      )}
    </div>
  );
}
