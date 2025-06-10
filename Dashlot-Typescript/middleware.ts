import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verificar si la ruta requiere autenticación
  if (request.nextUrl.pathname.startsWith('/components/')) {
    // Obtener la cookie de autenticación
    const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
    
    // Si no está autenticado, redirigir al login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/components/:path*',
  ],
};