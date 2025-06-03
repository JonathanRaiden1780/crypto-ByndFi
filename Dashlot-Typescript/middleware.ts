import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas que no requieren autenticación
const publicPaths = ['/', '/auth/callback', '/components/custompages/forgotpassword', '/components/custompages/register'];

export function middleware(request: NextRequest) {
  // Verificar si la ruta actual es pública
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname === path);
  
  // Obtener el token de autenticación de las cookies
  const token = request.cookies.get('auth_token')?.value;

  // Si es una ruta pública y el usuario está autenticado, redirigir al dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/components/crm/crmdashboard', request.url));
  }

  // Si no es una ruta pública y el usuario no está autenticado, redirigir al login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continuar con la solicitud normal
  return NextResponse.next();
}

// Configurar el middleware para que se ejecute en todas las rutas excepto las estáticas
export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * 1. /api (rutas API)
     * 2. /_next (rutas internas de Next.js)
     * 3. /_static (si estás usando imágenes estáticas exportadas)
     * 4. /favicon.ico, /assets, etc. (archivos estáticos)
     */
    '/((?!api|_next|_static|assets|favicon.ico).*)',
  ],
};