import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

const [checkingAuth, setCheckingAuth] = useState(true);

useEffect(() => {
  if (localStorage.getItem('isAuthenticated') === 'true') {
    router.push('/components/marketmaker/dashboard');
  } else {
    setCheckingAuth(false);
  }
}, [router]);

  if (checkingAuth) return null; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;

    if (email === 'admin' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ username: email }));
      router.push('/components/marketmaker/dashboard');
    } else {
      setError('Credenciales incorrectas. Intente con admin/123');
    }
  };

  return (
    <>
      <Seo title="Login" />
      <div className="page main-error-page justify-content-center">
        <div className="col-login mx-auto text-center">
          <Link href="/components/marketmaker/dashboard">
            <img src="/assets/images/brand-logos/desktop-logo.png" alt="Dashlot logo" className="header-brand-img custom-logo-dark mb-4" />
          </Link>
        </div>

        <div className="container">
          <Row>
            <Col md={6} xl={4} className="justify-content-center mx-auto text-center">
              <Card>
                <Card.Title className="text-center fw-500 mb-3 mt-4">LOGIN</Card.Title>
                <Card.Body>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group">
                      <Form.Control
                        type="text"
                        placeholder="Usuario"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Button variant="success" type="submit" className="btn-block">
                      Iniciar sesión
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Login;