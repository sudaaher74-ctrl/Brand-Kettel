'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Invalid password');
      setLoading(false);
      return;
    }

    router.push('/admin/projects');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: '#10B981', textTransform: 'uppercase', marginBottom: 8 }}>
            Admin Portal
          </p>
          <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Brand Kettle</h1>
          <p className="mt-1 text-sm" style={{ color: '#64748b' }}>Sign in to manage your website</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8"
          style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoFocus
            placeholder="Enter admin password"
            className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
            style={{
              border: '1px solid #e2e8f0',
              color: '#1e293b',
              background: '#f8fafc',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129,0.15)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
          />

          {error && (
            <p className="mt-3 text-sm" style={{ color: '#dc2626' }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors"
            style={{ background: '#0f172a', color: '#ffffff', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
