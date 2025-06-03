
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const Newsletter = () => {
   return (
      <>
         <Seo title={"Newsletter"} />
         <PageheaderDB heading="Components" active="Newsletter" />
         <div className="main-container container-fluid">
            <Row>
               <Col xl={12}>
                  <Card className="p-3">
                     <Card.Body>
                        <Row>
                           <Col md={8}>
                              <h3 className="mb-2">Subscribe Our Newsletter</h3>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                           </Col>
                           <Col md={4} className="text-center">
                              <Link className="btn btn-primary btn-lg mt-4 mt-md-0" href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent p-3">
                     <Card.Body>
                        <Row>
                           <Col md={8}>
                              <h3 className="mb-3">Subscribe Our Newsletter</h3>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                           </Col>
                           <Col md={4} className="text-center">
                              <Link className="btn btn-primary btn-lg mt-4 mt-md-0" href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent p-3">
                     <Card.Body>
                        <Row>
                           <Col md={12}>
                              <h3 className="mb-2">Subscribe Our Newsletter</h3>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                              <Link className="btn btn-primary btn-lg mt-4 " href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent p-3 cover-image bg-background border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner6.jpg")` }} >
                     <Card.Body>
                        <Row className="background-text">
                           <Col md={8}>
                              <h3 className="mb-2 text-fixed-white">Subscribe Our Newsletter</h3>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                           </Col>
                           <Col md={4} className="text-center">
                              <Link className="btn btn-secondary btn-lg mt-4 mt-md-0" href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent p-3 cover-image bg-background3 border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner4.jpg")` }}>
                     <Card.Body>
                        <Row>
                           <Col md={12} className="background-text text-fixed-white text-center">
                              <h2 className="mb-2">Subscribe Our Newsletter</h2>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                              <Link className="btn btn-secondary btn-lg mt-4 " href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent p-3">
                     <Card.Body>
                        <Row>
                           <Col md={12}>
                              <h3 className="mb-2">Subscribe Our Newsletter</h3>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="p-3">
                     <Card.Body>
                        <Row>
                           <Col lg={12} xl={12} md={12} className=" text-center">
                              <div className="sub-newsletter">
                                 <h3 className="mb-2"><i className="fa fa-paper-plane-o me-2"></i> Subscribe To Our Newsletter</h3>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                 <InputGroup className="sub-input mt-5">
                                    <Form.Control type="text" className="input-md " placeholder="Enter your Email" />
                                    <Button type="button" className="btn btn-primary btn-lg br-tr-7 br-br-7">
                                       Subscribe
                                    </Button>
                                 </InputGroup>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <div className="sptb cover-image bg-background card border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner5.jpg")` }}>
                     <Card.Body>
                        <Row className="background-text">
                           <Col md={12}>
                              <h3 className="mb-2 text-fixed-white">Subscribe Our Newsletter</h3>
                              <p className="mb-0 text-fixed-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Subscribe</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="p-3">
                     <Card.Body>
                        <Row>
                           <Col lg={12} xl={12} md={12} className=" text-center">
                              <div className="sub-newsletter ">
                                 <h3 className="mb-2"><i className="fa fa-paper-plane-o me-2"></i> Subscribe To Our Newsletter</h3>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                 <InputGroup className="sub-input mt-5 mb-4">
                                    <Form.Control type="text" className="input-md " placeholder="Enter your Email" />
                                 </InputGroup>
                                 <div className="d-grid">
                                    <Button className="btn btn-primary btn-lg br-tr-7 br-br-7">
                                       Subscribe
                                    </Button>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="p-3 bg-primary-transparent">
                     <Card.Body>
                        <Row>
                           <Col md={12} className="text-center">
                              <h3 className="mb-2">Subscribe Our Newsletter</h3>
                              <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                              <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="p-4 bg-primary-transparent">
                     <Card.Body>
                        <Row>
                           <Col lg={7} xl={6} md={12}>
                              <div className="sub-newsletter">
                                 <h3 className="mb-2"><i className="fa fa-paper-plane-o me-2"></i> Subscribe To Our Newsletter</h3>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor</p>
                              </div>
                           </Col>
                           <Col lg={5} xl={6} md={12}>
                              <InputGroup className="sub-input mt-1">
                                 <Form.Control type="text" className="input-md " placeholder="Enter your Email" />
                                 <Button variant="" className="btn btn-secondary btn-lg br-tr-7 br-br-7">
                                    Subscribe
                                 </Button>
                              </InputGroup>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  <Card className="bg-primary-transparent">
                     <Card.Body>
                        <Row className='mx-0'>
                           <Col lg={9} className="text-center d-block mx-auto p-0">
                              <Card className="cover-image overflow-hidden mb-0 border-0 background-repeat box-shadow-0" style={{ backgroundImage: `url("../../../assets/images/banners/banner3.jpg")` }}>
                                 <Row>
                                    <Col md={6} className="m-0 p-0 text-fixed-white">
                                       <div className=" bg-white px-4 py-5  news-letter">
                                          <h3 className="text-default">Subscribe Our Newsletter</h3>
                                          <h3 className="mb-2 fs-18 text-default">I must explain to you how all this mistaken idea</h3>
                                          <p className="mb-0 text-default">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                          <Link className="btn btn-primary btn-lg mt-4" href="#!">Get Started Now</Link>
                                       </div>
                                    </Col>
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
                  <Card className="bg-primary-transparent">
                     <Card.Body>
                        <Row>
                           <Col lg={9} className="text-center d-block mx-auto background-text">
                              <Card className="cover-image overflow-hidden mb-0 border-0" style={{ backgroundImage: `url("../../../assets/images/banners/banner4.jpg")` }}>
                                 <Row>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 m-0 p-0">
                                       <div className=" bg-white px-4 py-5 news-letter">
                                          <h3 className="text-default">Subscribe Our Newsletter</h3>
                                          <h3 className="mb-2 fs-18 text-default">I must explain to you how all this mistaken idea</h3>
                                          <p className="mb-0 text-default">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
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
                  <Row>
                     <Card>
                        <Card.Body>
                           <Row>
                              <Col md={6} className="text-center d-block mx-auto">
                                 <div className="box-shadow-0 card border-0 bg-primary-transparent mb-0">
                                    <Card.Body className="p-5">
                                       <h2 className="">Subscribe Our Newsletter</h2>
                                       <h3 className="mb-2 fs-18">I must explain to you how all this mistaken idea</h3>
                                       <p className="mb-0 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                       <Link className="btn btn-secondary btn-lg mt-4" href="#!">Get Started Now</Link>
                                    </Card.Body>
                                 </div>
                              </Col>
                           </Row>
                        </Card.Body>
                     </Card>
                  </Row>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <div className="sptb cover-image bg-background3 card border-0 overflow-hidden" style={{ backgroundImage: `url("../../../assets/images/banners/banner2.jpg")` }}>
                     <Card.Body>
                        <Row>
                           <Col lg={11} xl={8} md={12} className="text-center d-block mx-auto background-text">
                              <Card className="cover-image overflow-hidden mb-0 border-0" style={{ backgroundImage: `url("../../../assets/images/banners/banner4.jpg")` }}>
                                 <Row>
                                    <div className="col-xl-4 col-md-12"></div>
                                    <div className="col-xl-8 col-md-12 m-0 p-0">
                                       <div className=" bg-white news-letter px-4 py-5 ">
                                          <h2 className="text-default">Subscribe to Our Newsletter</h2>
                                          <h3 className="mb-2 fs-18 text-default">I must explain to you this mistaken idea</h3>
                                          <p className="mb-0 text-default">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                          <InputGroup className="sub-input mt-5">
                                             <Form.Control type="text" className="input-md " placeholder="Enter your Email" />
                                             <Button className="btn btn-primary btn-lg br-tr-7 br-br-7">
                                                Subscribe
                                             </Button>
                                          </InputGroup>
                                       </div>
                                    </div>
                                 </Row>
                              </Card>
                           </Col>
                        </Row>
                     </Card.Body>
                  </div>
               </Col>
            </Row >

            <Row>
               <Col xl={12}>
                  <Card className="p-1">
                     <Card.Body>
                        <Row>
                           <Col lg={7} xl={6} md={12}>
                              <div className="sub-newsletter">
                                 <h3 className="mb-2"><i className="fa fa-paper-plane-o me-2"></i> Subscribe To Our Newsletter</h3>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                              </div>
                           </Col>
                           <Col lg={5} xl={6} md={12}>
                              <InputGroup className="sub-input mt-1">
                                 <Form.Control type="text" className="input-md " placeholder="Enter your Email" />
                                 <Button className="btn btn-primary btn-lg br-tr-7 br-br-7">
                                    Subscribe
                                 </Button>
                              </InputGroup>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="border-0 overflow-hidden sptb cover-image bg-background" style={{ backgroundImage: `url("../../../assets/images/banners/banner2.jpg")` }}>
                     <Card.Body>
                        <Row>
                           <Col lg={12} xl={12} md={12} className="text-center background-text">
                              <div className="sub-newsletter text-fixed-white">
                                 <h2 className="mb-2"><i className="fa fa-paper-plane-o me-2"></i> Subscribe To Our Newsletter</h2>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                 <Row className='mt-4'>
                                    <Col sm={6} className='mt-3'>
                                       <InputGroup className=" sub-input">
                                          <Form.Control type="text" className=" input-md " placeholder="Enter your Email" />
                                       </InputGroup>
                                    </Col>
                                    <Col sm={6} className='mt-3'>
                                       <div className="d-grid">
                                          <Button className="btn btn-secondary" variant=''>
                                             Subscribe
                                          </Button>
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div >
      </>

   );
};
Newsletter.layout = "Contentlayout";
export default Newsletter;
