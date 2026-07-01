'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, blog: 0, leads: 0, services: 0, careers: 0 });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [projectsRes, blogRes, leadsRes, servicesRes, careersRes] = await Promise.all([
          fetch('/api/admin/projects'),
          fetch('/api/admin/blog'),
          fetch('/api/admin/leads'),
          fetch('/api/admin/services'),
          fetch('/api/admin/careers/jobs')
        ]);
        
        const projects = await projectsRes.json();
        const blog = await blogRes.json();
        const leads = await leadsRes.json();
        const services = await servicesRes.json();
        const careers = await careersRes.json();

        setStats({
          projects: Array.isArray(projects) ? projects.length : 0,
          blog: Array.isArray(blog) ? blog.length : 0,
          leads: Array.isArray(leads) ? leads.length : 0,
          services: Array.isArray(services) ? services.length : 0,
          careers: Array.isArray(careers) ? careers.length : 0,
        });

        if (Array.isArray(leads)) {
          setRecentLeads(leads.slice(0, 5)); // Top 5
        }
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

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 mb-10">
        {/* Projects Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Projects</h2>
            <span className="text-xl">◉</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.projects}
            </span>
          </div>
        </div>

        {/* Services Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Services</h2>
            <span className="text-xl">◈</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.services}
            </span>
          </div>
        </div>

        {/* Blog Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Blog Posts</h2>
            <span className="text-xl">◎</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.blog}
            </span>
          </div>
        </div>

        {/* Careers Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Job Openings</h2>
            <span className="text-xl">👥</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.careers}
            </span>
          </div>
        </div>

        {/* Leads Stat Card */}
        <div className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md" style={cardStyle}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Enquiries</h2>
            <span className="text-xl">✉</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
              {loading ? '-' : stats.leads}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-bold" style={{ color: '#0f172a' }}>Recent Enquiries</h2>
          <div className="rounded-xl overflow-hidden shadow-sm" style={cardStyle}>
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentLeads.length === 0 && !loading && (
                  <tr><td colSpan={4} className="px-4 py-6 text-center text-gray-500">No recent enquiries</td></tr>
                )}
                {recentLeads.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                    <td className="px-4 py-3 text-gray-600">{lead.email}</td>
                    <td className="px-4 py-3 text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lead.status || 'New'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link href="/admin/leads" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View all enquiries →
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold" style={{ color: '#0f172a' }}>Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <Link
              href="/admin/projects/new"
              className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] text-center"
              style={{ background: '#0f172a', color: '#fff' }}
            >
              + Add New Project
            </Link>
            <Link
              href="/admin/blog/new"
              className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] text-center"
              style={{ background: '#fff', color: '#0f172a', border: '1px solid #e2e8f0' }}
            >
              + Write Blog Post
            </Link>
            <Link
              href="/admin/services/new"
              className="rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] text-center"
              style={{ background: '#fff', color: '#0f172a', border: '1px solid #e2e8f0' }}
            >
              + Add Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
