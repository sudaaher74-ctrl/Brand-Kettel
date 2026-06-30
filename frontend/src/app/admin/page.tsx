'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, blog: 0, leads: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [projectsRes, blogRes, leadsRes] = await Promise.all([
          fetch('/api/admin/projects'),
          fetch('/api/admin/blog'),
          fetch('/api/admin/leads')
        ]);
        
        const projects = await projectsRes.json();
        const blog = await blogRes.json();
        const leads = await leadsRes.json();

        setStats({
          projects: Array.isArray(projects) ? projects.length : 0,
          blog: Array.isArray(blog) ? blog.length : 0,
          leads: Array.isArray(leads) ? leads.length : 0,
        });
      } catch (err) {
        console.error('Failed to load dashboard stats', err);
      } finally {
        setLoading(false);
      }
    }
    
    loadStats();
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0' };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Dashboard Overview</h1>
        <p className="mt-1 text-sm" style={{ color: '#64748b' }}>Welcome to the Brand Kettle Admin Panel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {/* Projects Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Total Projects</h2>
            <span className="text-xl">◉</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.projects}
            </span>
          </div>
        </div>

        {/* Blog Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Published Posts</h2>
            <span className="text-xl">◎</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.blog}
            </span>
          </div>
        </div>

        {/* Leads Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Active Leads</h2>
            <span className="text-xl">✉</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.leads}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold" style={{ color: '#0f172a' }}>Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/projects/new"
            className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]"
            style={{ background: '#0f172a', color: '#fff' }}
          >
            + Add New Project
          </Link>
          <Link
            href="/admin/blog/new"
            className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]"
            style={{ background: '#fff', color: '#0f172a', border: '1px solid #e2e8f0' }}
          >
            + Write Blog Post
          </Link>
          <Link
            href="/admin/leads"
            className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]"
            style={{ background: '#fff', color: '#0f172a', border: '1px solid #e2e8f0' }}
          >
            View Leads →
          </Link>
        </div>
      </div>
    </div>
  );
}
