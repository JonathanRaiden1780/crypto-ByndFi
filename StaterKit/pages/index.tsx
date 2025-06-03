import { auth } from "@/shared/firebase/firebaseapi";
import { basePath } from "@/next.config";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Alert, Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";

const Home = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
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
  const Login = (e: any) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        // console.log(user);
        routeChange();
      })
      .catch(err => {
        // console.log(err);
        setError(err.message);
      });
  };
  const Login1 = () => {
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
      routeChange();
    }
    else {
      setError("The Auction details did not Match");
      setData({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
      });
    }
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
                <Tab.Container defaultActiveKey='firebase'>
                  <Nav variant="pills" className="justify-content-center authentication-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="firebase" > <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/firbase.png`} alt='logo1' /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="react"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjslogo.png`}alt='logo2' /></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='firebase' className='border-0'>

                      <div className="row g-0">
                        {err && <Alert variant="danger">{err}</Alert>}
                        <div className="col-12">

                          <Card.Body>
                            <Form.Group className='form-group'>
                              <Form.Control type="email" placeholder="Email" name="email" defaultValue={email} onChange={changeHandler} required />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <Form.Control type={(passwordshow1) ? 'text' : "password"} id="exampleInputPassword1" name="password" placeholder="Password" defaultValue={password} onChange={changeHandler} required />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <label className="custom-control custom-checkbox">
                                <Link href="/components/custompages/forgotpassword/" className="float-end small text-info">Forgot password?</Link>
                              </label>
                            </Form.Group>
                            <div>
                              <Button variant='success' role="button" className=" btn-block" onClick={Login}>Sign In</Button>
                            </div>
                            <div className="text-center fs-15 mt-4">
                              Don't have account yet? <Link href="/components/crm/crmdashboard/" className="text-primary"
                              // onClick={Login}
                              >Login</Link>
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

                    </Tab.Pane>
                    <Tab.Pane eventKey="react" className='border-0'>

                      <div className="row g-0">
                        {err && <Alert variant="danger">{err}</Alert>}
                        <div className="col-12">
                          <Card.Body>
                            <Form.Group className='form-group'>
                              <Form.Control type="email" placeholder="Email" name='email' defaultValue={email} onChange={changeHandler} />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <Form.Control type="password" id="exampleInputPassword1" name="password" placeholder="Password" defaultValue={password} />
                            </Form.Group>
                            <Form.Group className='form-group'>
                              <label className="custom-control custom-checkbox">
                                <Link href="/components/custompages/forgotpassword" className="float-end small text-info">Forgot password?</Link>
                              </label>
                            </Form.Group>
                            <div>
                              <Button variant='success' onClick={Login1} role="button" className=" btn-block">Sign In</Button>
                            </div>
                            <div className="text-center fs-15 mt-4">
                              Don't have account yet? <Link href="/components/crm/crmdashboard/" className="text-primary">Login</Link>
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
