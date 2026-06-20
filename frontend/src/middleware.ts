import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, computeAdminToken } from '@/lib/adminAuth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin/login') {
    return NextResponse.redirect(new URL('/admin/projects', request.url));
  }

  // Temporarily disable login system
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
