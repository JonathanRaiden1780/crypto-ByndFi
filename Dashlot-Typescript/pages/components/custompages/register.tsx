
import { Card, Col, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Register = () => {

   return (
      <>
         <Seo title={"Register"} />
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
                                 <Card.Title className="text-center fw-500 mb-3">SIGN UP</Card.Title>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="text" placeholder="Name" />
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="email" className="form-control" placeholder="Email" />
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" id="exampleInputPassword1" placeholder="Password" />
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" id="exampleInputPassword2" placeholder="Retype-Password" />
                                 </Form.Group>
                                 <div className="form-check text-start mb-3">
                                    <Form.Check type="checkbox" className="" id="agree_1" />
                                    <label htmlFor="agree_1" className="form-check-label ">I Agree With Terms and Conditions</label>
                                 </div>
                                 <div>
                                    <Link href="/components/crm/crmdashboard/" role="button" className="btn btn-success btn-block">Sign Up</Link>
                                 </div>
                                 <div className="text-center mt-3">
                                    Don't have account? <Link href="/components/custompages/login/" className="text-primary">Login</Link>
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
Register.layout = "Custompageslayout";
export default Register;
