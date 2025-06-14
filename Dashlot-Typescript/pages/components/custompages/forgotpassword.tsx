
import { Card, Col, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';


const ForgotPassword = () => {

   return (
      <>
         <Seo title={"ForgotPassword"} />
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
                        <Row className="g-0">
                           <div className="col-12 my-auto">
                              <Card.Body>
                                 <div className="fw-500 text-center mb-1 card-title">Forgot Password</div>
                                 <p className="mb-0 text-muted mb-3">Please select option to send link reset your password</p>
                                 <Form.Group className="forgot-password">
                                    <Form.Label className="d-flex p-3 br-5 align-items-center mb-4" htmlFor="flexCheckDefault2">
                                       <span className="d-flex">
                                          <span>
                                             <i className="icons bi bi-envelope bg-secondary-transparent"></i>
                                          </span>
                                          <span className="form-check-label text-start ms-3 d-flex flex-column">
                                             <span className="fw-500 mb-0">Reset Via Email</span>
                                             <small className="text-muted fs-13">Link will be send to your email registered</small>
                                          </span>
                                       </span>
                                       <Form.Check className=" ms-auto mt-0" type="checkbox" defaultValue="" id="flexCheckDefault2" />
                                    </Form.Label>
                                    <Form.Label className="d-flex p-3 br-5 align-items-center mb-4" htmlFor="flexCheckDefault">
                                       <span className="d-flex">
                                          <span className="align-self-start">
                                             <i className="icons bi bi-telephone-forward bg-info-transparent"></i>
                                          </span>
                                          <span className="form-check-label text-start ms-3 d-flex flex-column 	">
                                             <span className="fw-500 mb-0">Reset Via SMS</span>
                                             <small className="text-muted fs-13">Link reset will be send to your phone number registered</small>
                                          </span>
                                       </span>
                                       <Form.Check className=" ms-auto mt-0" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                    </Form.Label>
                                 </Form.Group>
                                 <div>
                                    <Link href="#!" role="button" className="btn btn-primary btn-block">Send</Link>
                                 </div>
                                 <div className="text-center text-muted mt-3 ">
                                    Forget it, <Link href={"/components/custompages/login"}>send me back</Link> to the sign in screen.
                                 </div>
                              </Card.Body>
                           </div>
                        </Row>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
      </>
   );
};
ForgotPassword.layout = "Custompageslayout";
export default ForgotPassword;
