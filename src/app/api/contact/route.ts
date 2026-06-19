import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export const runtime = 'nodejs';

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, phone, email, projectType, message } = body;

  if (!name || !phone || !email || !projectType) {
    return NextResponse.json(
      { error: 'Name, phone, email and project type are required.' },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    email,
    projectType,
    message: message ?? '',
    source: 'website-consultation',
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    if (db) {
      await db.collection('leads').insertOne(lead);
    } else {
      // No DB configured (e.g. local dev) — log so the lead is not lost.
      console.info('[contact] lead received (no MONGODB_URI configured):', lead);
    }

    return NextResponse.json({
      ok: true,
      message: 'Thank you — our team will contact you within one business day.',
    });
  } catch (err) {
    console.error('[contact] failed to store lead:', err);
    return NextResponse.json(
      { error: 'We could not submit your request. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
