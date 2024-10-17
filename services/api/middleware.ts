import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('keystonejs-session');
  const { pathname } = request.nextUrl;



  if (sessionCookie && pathname === '/admin/signin') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  if (
    !sessionCookie &&
    pathname.startsWith('/admin') &&
    pathname !== '/admin/signin'
  ) {
    return NextResponse.redirect(new URL('/admin/signin', request.url));
  }

  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher:'/'
};
