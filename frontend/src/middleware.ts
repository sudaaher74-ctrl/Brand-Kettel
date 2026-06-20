import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, computeAdminToken } from '@/lib/adminAuth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  const expected = await computeAdminToken();

  if (!expected || cookie !== expected) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
