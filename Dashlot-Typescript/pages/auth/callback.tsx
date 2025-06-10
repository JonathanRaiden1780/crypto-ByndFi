import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    // Establecer la autenticación local
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify({ username: "admin" }));
    
    // Establecer cookie para el middleware
    document.cookie = "isAuthenticated=true; path=/";
    
    // Redirigir al dashboard
    router.push('/components/marketmaker/dashboard/');
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Seo title="Autenticación" />
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-3">Procesando la autenticación...</p>
      </div>
    </div>
  );
};

export default AuthCallback;