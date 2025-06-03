import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';

const AuthCallback = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener el código de autorización de la URL
    const { code, state, error } = router.query;

    if (error) {
      setError(error as string);
      return;
    }

    if (code) {
      // Enviar el código al backend para intercambiarlo por tokens
      exchangeCodeForTokens(code as string, state as string);
    }
  }, [router.query]);

  const exchangeCodeForTokens = async (code: string, state: string) => {
    try {
      // Llamar al endpoint del backend para intercambiar el código por tokens
      const response = await fetch('/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al intercambiar el código por tokens');
      }

      // Redirigir al dashboard después de la autenticación exitosa
      router.push('/components/crm/crmdashboard/');
    } catch (err: any) {
      setError(err.message || 'Error al procesar la autenticación');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Seo title="Autenticación" />
      {error ? (
        <Alert variant="danger">
          {error}
          <div className="mt-3">
            <button className="btn btn-primary" onClick={() => router.push('/')}>
              Volver al inicio
            </button>
          </div>
        </Alert>
      ) : (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" />
          <p className="mt-3">Procesando la autenticación...</p>
        </div>
      )}
    </div>
  );
};

export default AuthCallback;