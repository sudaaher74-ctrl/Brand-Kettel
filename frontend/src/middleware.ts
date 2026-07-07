import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_COOKIE = 'brandkettle_admin_token';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page itself through.
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Require the session cookie for every other /admin route. The backend still
  // verifies the token cryptographically; this just avoids rendering the admin
  // shell to anonymous users.
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!token) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
