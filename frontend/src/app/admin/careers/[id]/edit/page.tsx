'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import CareerForm from '@/components/admin/CareerForm';

export default function EditJobPage() {
  const { id } = useParams() as { id: string };
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/admin/careers/${id}`)
      .then(res => res.json())
      .then(setData);
  }, [id]);

  if (!data) return <div className="p-8 text-sm" style={{ color: '#64748b' }}>Loading…</div>;

  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href="/admin/careers" className="text-sm" style={{ color: '#64748b' }}>
          ← Back to careers
        </Link>
        <h1 className="mt-4 text-2xl font-bold" style={{ color: '#0f172a' }}>Edit Job Opening</h1>
      </div>

      <div className="max-w-2xl rounded-xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
        <CareerForm initial={data} />
      </div>
    </div>
  );
}
