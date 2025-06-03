import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';



const CalToActions = () => {
   return (
      <Fragment>
         <Seo title={"Cal-to-actions"} />
         <PageheaderDB heading="Components" active="Cal-to-actions" />
         <div className="main-container container-fluid">
            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col md={12} xl={9} lg={8}>
                              <h3 className="mb-2">I must explain to you how all this mistaken idea</h3>
                              <p className="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                           </Col>
                           <div className="col-md-12 col-lg-4 col-xl-3 mt-4 mt-xl-0 text-center">
                              <Link className="btn btn-primary btn-lg" href="#!">Get Started Now</Link>
                           </div>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="p-2 bg-primary">
                     <Card.Body>
                        <Row>
                           <Col xl={9} md={12}>
                              <h3 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h3>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                           </Col>
                           <div className="col-xl-3 pt-2 mt-xl-0 col-md-12 text-center">
                              <Link className="btn btn-pink btn-lg mt-4 mt-md-0" href="#!">Get Started Now</Link>
                           </div>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <div className="cover-image bg-background card border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner1.jpg")` }}>
                     <Card.Body>
                        <Row className="background-text">
                           <Col md={12} xl={9}>
                              <h3 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h3>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                           </Col>
                           <div className="col-xl-3 pt-2 col-md-12 text-center">
                              <Link className="btn btn-secondary btn-lg mt-4 mt-md-0" href="#!">Get Started Now</Link>
                           </div>
                        </Row>
                     </Card.Body>
                  </div>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col md={12}>
                              <h2 className="mb-2">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-primary btn-lg mt-4 " href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col md={12} className="text-center">
                              <h2 className="mb-2">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-primary btn-lg mt-4 " href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="bg-primary">
                     <Card.Body>
                        <Row>
                           <Col md={12}>
                              <h2 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <div className=" cover-image bg-background card border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner1.jpg")` }}>
                     <Card.Body>
                        <Row className="background-text">
                           <Col md={12}>
                              <h2 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </div>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="bg-primary">
                     <Card.Body>
                        <Row>
                           <Col md={12} className="text-center">
                              <h2 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="cover-image bg-background border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner1.jpg")` }}>
                     <Card.Body>
                        <Row className="background-text">
                           <Col md={12} className="text-center">
                              <h2 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h2>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="cover-image bg-background border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner1.jpg")` }}>
                     <Card.Body>
                        <Row>
                           <Col xl={8} lg={11} md={12} className="contact-img text-center d-block mx-auto background-text">
                              <Card className="cover-image overflow-hidden mb-0 border-0 background-text" style={{ backgroundImage: `url("../../../assets/images/banners/banner1.jpg")` }}>
                                 <Row>
                                    <div className="col-md-6 m-0 p-0">
                                       <div className=" bg-white p-5 cal-to-action background-text">
                                          <h2 className="text-default contact-text">Call to Action</h2>
                                          <h5 className="mb-2 text-default">I must explain to you how all this mistaken idea</h5>
                                          <p className="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                                          <Link className="btn btn-primary btn-lg mt-4" href="#!">Get Started Now</Link>
                                       </div>
                                    </div>
                                 </Row>
                              </Card>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="cover-image bg-background border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner2.jpg")` }}>
                     <Card.Body>
                        <Row>
                           <Col xl={8} lg={11} md={12} className="contact-img text-center d-block mx-auto background-text">
                              <Card className="cover-image overflow-hidden mb-0 border-0" style={{ backgroundImage: `url("../../../assets/images/banners/banner4.jpg")` }}>
                                 <Row>
                                    <Col md={6}></Col>
                                    <div className="col-md-6 m-0 p-0">
                                       <div className=" bg-white cal-to-action p-5 ">
                                          <h2 className="text-default contact-text">Call to Action</h2>
                                          <h5 className="mb-2 text-default">I must explain to you how all this mistaken idea</h5>
                                          <p className="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                                          <Link className="btn btn-primary btn-lg mt-4" href="#!">Get Started Now</Link>
                                       </div>
                                    </div>
                                 </Row>
                              </Card>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col md={6} className="text-center d-block mx-auto">
                              <Card className="bg-primary mb-0">
                                 <Card.Body className="p-5">
                                    <h2 className="text-fixed-white">Call to Action</h2>
                                    <h4 className="mb-2 text-fixed-white">I must explain to you how all this mistaken idea</h4>
                                    <p className="mb-0 text-fixed-white-50">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                                    <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                                 </Card.Body>
                              </Card>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </Fragment>
   );
};
CalToActions.layout = "Contentlayout";
export default CalToActions;
