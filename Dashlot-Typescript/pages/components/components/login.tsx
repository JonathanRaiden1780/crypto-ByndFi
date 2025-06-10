import { Card, Col, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    
    const handleLogin = (e:any) => {
        e.preventDefault();
        // Redirigir directamente al dashboard de Market Maker
        router.push('/components/marketmaker/dashboard');
    };

    return (
        <>
            <Seo title={"Login"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="col-login mx-auto">
                    <div className="text-center">
                        <Link href="/components/marketmaker/dashboard/">
                            <img src="../../../assets/images/brand-logos/desktop-logo.png" className="header-brand-img custom-logo-dark mb-4" alt="Dashlot logo" />
                        </Link>
                        <Link href="/components/marketmaker/dashboard/">
                            <img src="../../../assets/images/brand-logos/desktop-dark.png" className="header-brand-img custom-logo-light mb-4 " alt="Dashlot logo" />
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <Row>
                        <Col md={6} xl={5} className="justify-content-center mx-auto text-center">
                            <Card className="overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <Card.Body>
                                            <Card.Title className="text-center fw-500 mb-3">LOGIN</Card.Title>
                                            <Form onSubmit={handleLogin}>
                                                <Form.Group>
                                                    <Form.Control className='mb-3' type="email" placeholder="Email" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control className='mb-3' type="password" id="exampleInputPassword1" placeholder="Password" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <label className="custom-control mb-3 custom-checkbox">
                                                        <Link href="/components/custompages/forgotpassword/" className="float-end small text-info">Forgot password?</Link>
                                                    </label>
                                                </Form.Group>
                                                <div>
                                                    <Button type="submit" className="btn btn-success btn-block">Ingresar</Button>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

Login.layout = "Custompageslayout";
export default Login;