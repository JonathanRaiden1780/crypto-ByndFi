import { auth } from "@/shared/firebase/firebaseapi";
import { basePath } from "@/next.config";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";

const Home = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "",
    "password": "",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const navigate = useRouter();
  const routeChange = () => {
    const path = "/components/marketmaker/dashboard/";
    navigate.push(path);
  };

  // Manejar el inicio de sesión con credenciales locales
  const handleLogin = (e: any) => {
    e.preventDefault();
    
    // Verificar las credenciales locales (admin/123)
    if (email === "admin" && password === "123") {
      // Guardar información de sesión en localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({ username: email }));
      
      // Redirigir al dashboard
      routeChange();
    } else {
      setError("Credenciales incorrectas. Intente con admin/123");
    }
  };

  // Verificar si ya está autenticado al cargar la página
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    if (isAuth) {
      routeChange();
    }
  }, []);

  return (
    <Fragment>
      <Seo title={"Login"}/>
      <div className="page main-error-page justify-content-center">

        <div className="col-login mx-auto">
          <div className="text-center">
            <Link href="/components/marketmaker/dashboard/">
              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} className="header-brand-img custom-logo-dark mb-4" alt="Dashlot logo" />
            </Link>
            <Link href="/components/marketmaker/dashboard/">
              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} className="header-brand-img custom-logo-light mb-4 " alt="Dashlot logo" />
            </Link>
          </div>
        </div>

        <div className="container">
          <Row>
            <Col md={6} xl={4} className="justify-content-center mx-auto text-center">
              <Card>
                <Card.Title className="text-center fw-500 mb-3 mt-4">LOGIN</Card.Title>
                <div className="row g-0">
                  {err && <Alert variant="danger">{err}</Alert>}
                  <div className="col-12">
                    <Card.Body>
                      <Form.Group className='form-group'>
                        <Form.Control type="text" placeholder="Usuario" name="email" value={email} onChange={changeHandler} required />
                      </Form.Group>
                      <Form.Group className='form-group'>
                        <Form.Control 
                          type={(passwordshow1) ? 'text' : "password"} 
                          id="exampleInputPassword1" 
                          name="password" 
                          placeholder="Contraseña" 
                          value={password} 
                          onChange={changeHandler} 
                          required 
                        />
                      </Form.Group>
                      <div>
                        <Button variant='success' role="button" className="btn-block" onClick={handleLogin}>Iniciar sesión</Button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
