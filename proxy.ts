import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const PROTECTED_PREFIXES = ['/dashboard', '/plan', '/profile'];

export default auth((req) => {
  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    req.nextUrl.pathname.startsWith(prefix)
  );

  if (isProtected && !req.auth) {
    const loginUrl = new URL('/', req.nextUrl.origin);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: ['/dashboard/:path*', '/plan/:path*', '/profile/:path*'],
};