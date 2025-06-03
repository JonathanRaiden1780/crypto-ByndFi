
import { Card, Col, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const Login = () => {

    return (
        <>
            <Seo title={"Login"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="col-login mx-auto">
                    <div className="text-center">
                        <Link href="/components/crm/crmdashboard/">
                            <img src="../../../assets/images/brand-logos/desktop-logo.png" className="header-brand-img custom-logo-dark mb-4" alt="Dashlot logo" />
                        </Link>
                        <Link href="/components/crm/crmdashboard/">
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
                                            <Form.Group >
                                                <Form.Control className='mb-3' type="email" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Control className='mb-3' type="password" id="exampleInputPassword1" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group >
                                                <label className="custom-control mb-3 custom-checkbox">
                                                    <Link href="/components/custompages/forgotpassword/" className="float-end small text-info">Forgot password?</Link>
                                                </label>
                                            </Form.Group>
                                            <div>
                                                <Link href="/components/crm/crmdashboard/" role="button" className="btn btn-success btn-block">SignIn</Link>
                                            </div>
                                            <div className="text-center fs-15 mt-4">
                                                Don't have account yet? <Link href="/components/custompages/register/" className="text-primary">Login</Link>
                                            </div>
                                            <hr className="divider" />
                                            <div className="mt-2">
                                                <div className="btn-list">
                                                    <Link href="https://www.facebook.com/" target="_blank" role="button" className="btn btn-facebook btn-block">SignIn via Facebook</Link>
                                                    <Link href="https://www.google.com/gmail/" target="_blank" role="button" className="btn btn-google btn-block">SignIn via Google</Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div> </>
    );
};
Login.layout = "Custompageslayout";
export default Login;
