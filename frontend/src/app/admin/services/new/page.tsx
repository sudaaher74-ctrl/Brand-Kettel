import Link from 'next/link';
import ServiceForm from '@/components/admin/ServiceForm';

export default function NewServicePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href="/admin/services" className="text-sm" style={{ color: '#64748b' }}>
          ← Back to services
        </Link>
        <h1 className="mt-4 text-2xl font-bold" style={{ color: '#0f172a' }}>New Service</h1>
      </div>

      <div className="max-w-2xl rounded-xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        <ServiceForm />
      </div>
    </div>
  );
}
