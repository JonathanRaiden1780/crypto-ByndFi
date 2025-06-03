import { auth } from "@/shared/firebase/firebaseapi";
import { basePath } from "@/next.config";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Alert, Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import { useAuth } from "@/shared/context/AuthContext";

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
    const path = "/components/crm/crmdashboard/";
    navigate.push(path);
  };

  // Usar el contexto de autenticación
  const { login, loginWithOAuth, isAuthenticated, isLoading, error } = useAuth();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      routeChange();
    }
  }, [isAuthenticated]);

  // Manejar el inicio de sesión con credenciales
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  // Manejar el inicio de sesión con OAuth
  const handleOAuthLogin = () => {
    loginWithOAuth();
  };

  return (
    <Fragment>
      <Seo title={"Login"}/>
      <div className="page main-error-page justify-content-center">

        <div className="col-login mx-auto">
          <div className="text-center">
            <Link href="/components/crm/crmdashboard/">
              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} className="header-brand-img custom-logo-dark mb-4" alt="Dashlot logo" />
            </Link>
            <Link href="/components/crm/crmdashboard/">
              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} className="header-brand-img custom-logo-light mb-4 " alt="Dashlot logo" />
            </Link>
          </div>
        </div>

        <div className="container">
          <Row>
            <Col md={6} xl={4} className="justify-content-center mx-auto text-center">
              <Card>
                <Card.Title className="text-center fw-500 mb-3 mt-4">LOGIN</Card.Title>
                <Tab.Container defaultActiveKey='cognito'>
                  <Nav variant="pills" className="justify-content-center authentication-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="cognito" > <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/aws-cognito.png`} alt='AWS Cognito' style={{ width: '24px', height: '24px' }} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="credentials"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjslogo.png`}alt='Credentials' /></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='cognito' className='border-0'>
                      <div className="row g-0">
                        {err && <Alert variant="danger">{err}</Alert>}
                        <div className="col-12">
                          <Card.Body>
                            <div className="text-center mb-4">
                              <p>Inicie sesión con su cuenta de AWS Cognito</p>
                            </div>
                            <div>
                              <Button variant='primary' onClick={handleOAuthLogin} role="button" className="btn-block">
                                <i className="fa fa-sign-in me-2"></i>Iniciar sesión con AWS Cognito
                              </Button>
                            </div>
                            <hr className="divider" />
                            <div className="mt-2">
                              <div className="btn-list">
                                <Button onClick={handleOAuthLogin} role="button" className="btn btn-facebook btn-block">Iniciar sesión con Facebook</Button>
                                <Button onClick={handleOAuthLogin} role="button" className="btn btn-google btn-block">Iniciar sesión con Google</Button>
                              </div>
                            </div>
                          </Card.Body>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="credentials" className='border-0'>
                      <div className="row g-0">
                        {err && <Alert variant="danger">{err}</Alert>}
                        <div className="col-12">
                          <Card.Body>
                            <Form.Group className='form-group'>
                              <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={changeHandler} required />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <Form.Control 
                                type={(passwordshow1) ? 'text' : "password"} 
                                id="exampleInputPassword1" 
                                name="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={changeHandler} 
                                required 
                              />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <label className="custom-control custom-checkbox">
                                <Link href="/components/custompages/forgotpassword/" className="float-end small text-info">¿Olvidó su contraseña?</Link>
                              </label>
                            </Form.Group>
                            <div>
                              <Button variant='success' role="button" className="btn-block" onClick={handleLogin}>Iniciar sesión</Button>
                            </div>
                            <div className="text-center fs-15 mt-4">
                              ¿No tiene una cuenta? <Link href="/components/custompages/register/" className="text-primary">Registrarse</Link>
                            </div>
                          </Card.Body>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
