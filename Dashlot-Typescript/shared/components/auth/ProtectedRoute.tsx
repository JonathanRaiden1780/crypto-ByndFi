import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si no está cargando y no está autenticado, redirigir al login
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Cargando...</div>;
  }

  // Si está autenticado, mostrar el contenido protegido
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;