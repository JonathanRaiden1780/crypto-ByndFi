
import { Button, Card, Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const PricingTables = () => {
   return (
      <>
         <Seo title={"Pricing"} />
         <PageheaderDB heading="Pages" active="Pricing" />
         <div className="main-container container-fluid">
            <Row>
               <Col md={4} lg={4}>
                  <Card className="text-center">
                     <Card.Header className="text-center mx-auto">
                        <Card.Title className="fw-500" as="h3">Basic</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <h1 className="pricing-card-title mb-4">$12 <small className="text-muted fs-20">/ month</small></h1>
                        <p className="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        <Button className="btn btn-primary">Sign up Now</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={4}>
                  <Card className="text-center overflow-hidden">
                     <div className="card-status bg-danger"></div>
                     <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">New</span></div>
                     <Card.Header className="text-center mx-auto">
                        <Card.Title className="fw-500" as="h3">Pro</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <h1 className="pricing-card-title mb-4">$25<small className="text-muted fs-20"> / month</small></h1>
                        <p className="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        <Button className="btn btn-danger" variant=''>Sign up Now</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={4}>
                  <Card className="text-center">
                     <Card.Header className="text-center mx-auto">
                        <Card.Title className="fw-500" as="h3">Unlimited</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <h1 className="pricing-card-title mb-4">$89 <small className="text-muted fs-20">/ month</small></h1>
                        <p className="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        <Button type="button" className="btn btn-success">Sign up Now</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="card-category">Free</div>
                        <div className="display-3 my-4">$0</div>
                        <ul className="list-unstyled leading-loose">
                           <li className='border-0'><strong>4</strong> Ads</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> 30 days</li>
                           <li className='border-0'><i className="fe fe-x text-danger me-2"></i> Private Messages</li>
                           <li className='border-0'><i className="fe fe-x text-danger me-2"></i> Urgent Ads</li>
                        </ul>
                        <div className="text-center mt-6">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-primary">Choose plan</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <div className="card-status bg-secondary"></div>
                     <Card.Body className="text-center">
                        <div className="card-category">Premium</div>
                        <div className="display-3 my-4">$65</div>
                        <ul className="list-unstyled leading-loose">
                           <li className='border-0'><strong>50</strong> Ads</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> 60 Days</li>
                           <li className='border-0'><i className="fe fe-x text-danger me-2"></i> Private Messages</li>
                           <li className='border-0'><i className="fe fe-x text-danger me-2"></i> Urgent ads</li>
                        </ul>
                        <div className="text-center mt-6">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-secondary">Choose plan</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="card-category">Enterprise</div>
                        <div className="display-3 my-4">$100</div>
                        <ul className="list-unstyled leading-loose">
                           <li className='border-0'><strong>100</strong> Ads</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> 180 days</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> Private Messages</li>
                           <li className='border-0'><i className="fe fe-x text-danger me-2"></i> Urgent ads</li>
                        </ul>
                        <div className="text-center mt-6">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-primary">Choose plan</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="card-category">Unlimited</div>
                        <div className="display-3 my-4">$150</div>
                        <ul className="list-unstyled leading-loose">
                           <li className='border-0'><strong>Unlimited</strong> Ads</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> 365 Days</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> Private Messages</li>
                           <li className='border-0'><i className="fe fe-check text-success me-2"></i> Urgent ads</li>
                        </ul>
                        <div className="text-center mt-6">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-primary">Choose plan</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col lg={4}>
                  <Card className="pt-inner">
                     <Card.Body>
                        <div className="pti-header bg-primary">
                           <h2 className="">$25 <small>/ month</small></h2>
                           <div className="ptih-title">Basic</div>
                        </div>
                        <div className="pti-body border p-0">
                           <div className="ptib-item">
                              <b>2</b> Free Domain Name
                           </div>
                           <div className="ptib-item">
                              <b>3</b> One-Click Apps
                           </div>
                           <div className="ptib-item">
                              <b>1</b> Databases
                           </div>
                           <div className="ptib-item">
                              <b>Money</b> BackGuarntee
                           </div>
                           <div className="ptib-item">
                              <b>24/7</b> support
                           </div>
                        </div>
                        <div className="pti-footer border">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-primary btn-lg btn-square">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={4}>
                  <Card className="pt-inner">
                     <Card.Body>
                        <div className="pti-header bg-success">
                           <h2>$50 <small>/ month</small></h2>
                           <div className="ptih-title">Premium</div>
                        </div>
                        <div className="pti-body border p-0">
                           <div className="ptib-item">
                              <b>5</b> Free Domain Name
                           </div>
                           <div className="ptib-item">
                              <b>5</b> One-Click Apps
                           </div>
                           <div className="ptib-item">
                              <b>3</b> Databases
                           </div>
                           <div className="ptib-item">
                              <b>Money</b> BackGuarntee
                           </div>
                           <div className="ptib-item">
                              <b>24/7</b> support
                           </div>
                        </div>
                        <div className="pti-footer border">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-success btn-lg btn-square">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={4}>
                  <Card className="pt-inner">
                     <Card.Body>
                        <div className="pti-header bg-secondary">
                           <h2>$99 <small>/ month</small></h2>
                           <div className="ptih-title">Business</div>
                        </div>
                        <div className="pti-body border p-0">
                           <div className="ptib-item">
                              <b>12</b> Free Domain Name
                           </div>
                           <div className="ptib-item">
                              <b>7</b> One-Click Apps
                           </div>
                           <div className="ptib-item">
                              <b>5</b> Databases
                           </div>
                           <div className="ptib-item">
                              <b>Money</b> BackGuarntee
                           </div>
                           <div className="ptib-item">
                              <b>24/7</b> support
                           </div>
                        </div>
                        <div className="pti-footer border">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-secondary btn-lg btn-square">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm={12} xxl={3} md={6}>
                  <div className="pricing-table">
                     <div className="price-header">
                        <h3 className="title">Basic</h3>
                        <div className="price">
                           <span className="dollar">$</span>5
                        </div>
                        <span className="permonth">Monthly</span>
                     </div>
                     <div className="price-body mt-5">
                        <ListGroup>
                           <ListGroup.Item className='border-top-0'><b>1 Free</b> Domain Name</ListGroup.Item>
                           <ListGroup.Item><b>1</b> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><b>1</b> Databases</ListGroup.Item>
                           <ListGroup.Item><b> Money</b> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item className='rounded-0'><b>24/7</b> Support</ListGroup.Item>
                        </ListGroup>
                     </div>
                     <div className="price-footer">
                        <Link className="order-btn btn btn-primary rounded-pill" href="#!">Buy Now</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} xxl={3} md={6}>
                  <div className="pricing-table">
                     <div className="price-header">
                        <h3 className="title">Personal</h3>
                        <div className="price">
                           <span className="dollar">$</span>10
                        </div>
                        <span className="permonth">Monthly</span>
                     </div>
                     <div className="price-body mt-5">
                        <ListGroup>
                           <ListGroup.Item className='border-top-0'><b>2 Free</b> Domain Name</ListGroup.Item>
                           <ListGroup.Item><b>2</b> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><b>1</b> Databases</ListGroup.Item>
                           <ListGroup.Item><b> Money</b> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item className='rounded-0'><b>24/7</b> Support</ListGroup.Item>
                        </ListGroup>
                     </div>
                     <div className="price-footer">
                        <Link className="order-btn btn btn-primary rounded-pill" href="#!">Buy Now</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} xxl={3} md={6}>
                  <div className="pricing-table active">
                     <div className="price-header bg-primary">
                        <h3 className="title text-fixed-white">Business</h3>
                        <div className="price text-fixed-white"><span className="dollar">$</span>23</div>
                        <span className="permonth">Monthly</span>
                     </div>
                     <div className="price-body mt-5">
                        <ListGroup>
                           <ListGroup.Item className='border-top-0'><b>3 Free</b> Domain Name</ListGroup.Item>
                           <ListGroup.Item><b>5</b> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><b>3</b> Databases</ListGroup.Item>
                           <ListGroup.Item><b> Money</b> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item className='rounded-0'><b>24/7</b> Support</ListGroup.Item>
                        </ListGroup>
                     </div>
                     <div className="price-footer">
                        <Link className="order-btn btn btn-primary rounded-pill" href="#!">Buy Now</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} xxl={3} md={6}>
                  <div className="pricing-table">
                     <div className="price-header">
                        <h3 className="title">Enterprise</h3>
                        <div className="price"><span className="dollar">$</span>10</div>
                        <span className="permonth">Monthly</span>
                     </div>
                     <div className="price-body mt-5">
                        <ListGroup>
                           <ListGroup.Item className='border-top-0'><b>10 Free</b> Domain Name</ListGroup.Item>
                           <ListGroup.Item><b>10</b> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><b>8</b> Databases</ListGroup.Item>
                           <ListGroup.Item><b> Money</b> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item className='rounded-0'><b>24/7</b> Support</ListGroup.Item>
                        </ListGroup>
                     </div>
                     <div className="price-footer">
                        <Link className="order-btn btn btn-primary rounded-pill" href="#!">Buy Now</Link>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col sm={6} xl={3} md={6} className="primary">
                  <Card className="princing-item mb-4 ">
                     <div className="pricing-divider text-center">
                        <h3 className="text-fixed-white">Basic</h3>
                        <h4 className="my-0 display-2 text-fixed-white font-weight-normal mb-3"><span className="h3">$</span>
                           200 <span className="h5">/mo</span></h4>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1"
                           preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve"
                           xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                           <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                     c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6">
                           </path>
                           <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                     c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6">
                           </path>
                           <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                     H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7">
                           </path>
                           <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF">

                           </path>
                        </svg>
                     </div>
                     <div className=" br-br-0 br-bl-0 bg-white mt-0 shadow text-center">
                        <ListGroup className="list-group list-group-flush text-center">
                           <ListGroup.Item className="list-group-item"><b>10</b> users included</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>2 GB</b> of storage</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>Free </b>Email support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b> 24/7</b> support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item border-bottom-0"><b>Help center access</b></ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                           <div className="d-grid">
                              <Button className="btn btn-primary">Sign up for free</Button>
                           </div>
                        </Card.Footer>
                     </div>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6} className="secondary">
                  <Card className="princing-item mb-4">
                     <div className="pricing-divider text-center">
                        <h3 className="text-fixed-white">Premium</h3>
                        <h4 className="my-0 display-2 text-fixed-white font-weight-normal mb-3"><span className="h3">$</span>
                           150 <span className="h5">/mo</span></h4>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100"
                           height="100px" id="Layer_2" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px"
                           xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                           <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                     c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6">
                           </path>
                           <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                     c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6">
                           </path>
                           <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                     H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7">
                           </path>
                           <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF">
                           </path>
                        </svg>
                     </div>
                     <div className=" br-br-0 br-bl-0 bg-white mt-0 shadow text-center">
                        <ListGroup className="list-group list-group-flush text-center">
                           <ListGroup.Item className="list-group-item"><b>10</b> users included</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>2 GB</b> of storage</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>Free </b>Email support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b> 24/7</b> support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item border-bottom-0"><b>Help center access</b></ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                           <div className="d-grid">
                              <Button className="btn btn-secondary" variant=''>Sign up for free</Button>
                           </div>
                        </Card.Footer>
                     </div>
                  </Card>
               </Col>
               <div className="col-sm-6 col-xl-3 col-md-6 success">
                  <Card className="princing-item mb-4 mb-sm-0">
                     <div className="pricing-divider text-center">
                        <h3 className="text-fixed-white">Enterprise</h3>
                        <h4 className="my-0 display-2 text-fixed-white font-weight-normal mb-3"><span className="h3">$</span> 200 <span className="h5">/mo</span></h4>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_3" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                           <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                     c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                           <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                     c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                           <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                     H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                           <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                        </svg>
                     </div>
                     <div className=" br-br-0 br-bl-0 bg-white mt-0 shadow text-center">
                        <ListGroup className="list-group list-group-flush text-center">
                           <ListGroup.Item className="list-group-item"><b>10</b> users included</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>2 GB</b> of storage</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>Free </b>Email support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b> 24/7</b> support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item border-bottom-0"><b>Help center access</b></ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                           <div className="d-grid">
                              <Button className="btn btn-success" variant=''>Sign up for free</Button>
                           </div>
                        </Card.Footer>
                     </div>
                  </Card>
               </div>
               <Col sm={6} xl={3} md={6} className="danger">
                  <Card className="princing-item mb-4">
                     <div className="pricing-divider text-center">
                        <h3 className="text-fixed-white">Enterprise</h3>
                        <h4 className="my-0 display-2 text-fixed-white font-weight-normal mb-3"><span className="h3">$</span> 180 <span className="h5">/mo</span></h4>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_4" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                           <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                     c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                           <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                     c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                           <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                     H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                           <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                        </svg>
                     </div>
                     <div className=" br-br-0 br-bl-0 bg-white mt-0 shadow text-center">
                        <ListGroup className="list-group list-group-flush text-center">
                           <ListGroup.Item className="list-group-item"><b>10</b> users included</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>2 GB</b> of storage</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b>Free </b>Email support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item"><b> 24/7</b> support</ListGroup.Item>
                           <ListGroup.Item className="list-group-item border-bottom-0"><b>Help center access</b></ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                           <div className="d-grid">
                              <Button className="btn btn-danger" variant=''>Sign up for free</Button>
                           </div>
                        </Card.Footer>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <Card.Body className="text-center pricing bg-primary">
                        <div className="card-category">Basic</div>
                        <div className="display-3 my-4">$10</div>
                        <ul className="list-unstyled leading-loose">
                           <li><strong>2 </strong> FreeDomain Name</li>
                           <li><strong>2</strong> One-Click Apps</li>
                           <li><strong>1</strong>  Databases</li>
                           <li><strong>Money</strong> BackGuarantee</li>
                           <li><strong>24/7</strong> Support</li>
                        </ul>
                        <div className="text-center mt-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-white btn-lg">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card>
                     <Card.Body className="text-center  pricing bg-warning ">
                        <div className="card-category">Premium</div>
                        <div className="display-3 my-4">$49</div>
                        <ul className="list-unstyled leading-loose">
                           <li><strong>3 </strong> FreeDomain Name</li>
                           <li><strong>5</strong> One-Click Apps</li>
                           <li><strong>3</strong>  Databases</li>
                           <li><strong>Money</strong> BackGuarantee</li>
                           <li><strong>24/7</strong> Support</li>
                        </ul>
                        <div className="text-center mt-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-white btn-lg">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card className="mb-sm-0">
                     <Card.Body className="text-center pricing bg-success">
                        <div className="card-category">Enterprise</div>
                        <div className="display-3 my-4">$99</div>
                        <ul className="list-unstyled leading-loose">
                           <li><strong>10 </strong> FreeDomain Name</li>
                           <li><strong>10</strong> One-Click Apps</li>
                           <li><strong>8</strong>  Databases</li>
                           <li><strong>Money</strong> BackGuarantee</li>
                           <li><strong>24/7</strong> Support</li>
                        </ul>
                        <div className="text-center mt-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-white btn-lg">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={3} md={6}>
                  <Card className="mb-sm-0">
                     <Card.Body className="text-center  pricing bg-danger">
                        <div className="card-category">Unlimited</div>
                        <div className="display-3 my-4">$139</div>
                        <ul className="list-unstyled leading-loose">
                           <li><strong>12 </strong> FreeDomain Name</li>
                           <li><strong>10</strong> One-Click Apps</li>
                           <li><strong>6</strong>  Databases</li>
                           <li><strong>Money</strong> BackGuarantee</li>
                           <li><strong>24/7</strong> Support</li>
                        </ul>
                        <div className="text-center mt-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-white btn-lg">Buy Now</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xs={12} md={6} xl={3} className="mt-2">
                  <div className="panel price  panel-color card overflow-hidden">
                     <div className="ribbon ribbon-top-left text-primary"><span className="bg-primary">Free</span></div>
                     <div className="panel-body text-center">
                        <p className="display-4 mb-0">$0.00</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Free</span> Ad Posting</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 0 </span> Featured Ad</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 100% </span> Secure</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Custom </span> Reviews</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 24/7</span> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer border-top-0 text-center">
                        <Link className="btn btn-primary" href="#!">Purchase Now</Link>
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={3} className="mt-2">
                  <div className="panel price panel-color card overflow-hidden">
                     <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">Premium</span></div>
                     <div className="panel-body text-center">
                        <p className="display-4 mb-0">$19</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Featured</span> Ad Posting</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 20 </span> Featured Ad</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 100% </span> Secure</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Custom </span> Reviews</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 24/7</span> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center border-top-0">
                        <Link className="btn btn-primary" href="#!">Purchase Now</Link>
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={3} className="mt-2">
                  <div className="panel price  panel-color card overflow-hidden">
                     <div className="ribbon ribbon-top-left text-info"><span className="bg-info">Silver</span></div>
                     <div className="panel-body text-center">
                        <p className="display-4 mb-0">$67</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Featured</span> Ad Posting</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500">30 </span> Featured Ad</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 100% </span> Secure</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Custom </span> Reviews</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 24/7</span> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center border-top-0">
                        <Link className="btn btn-primary" href="#!">Purchase Now</Link>
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={3} className="mt-2">
                  <div className="panel price  panel-color card overflow-hidden ">
                     <div className="ribbon ribbon-top-left text-yellow"><span className="bg-yellow">Gold</span></div>
                     <div className="panel-body text-center">
                        <p className="display-4 mb-0">$78</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Featured</span> Ad Posting</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500">50 </span> Featured Ad</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 100% </span> Secure</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> Custom </span> Reviews</ListGroup.Item>
                        <ListGroup.Item className="list-group-item list-group-item-action"><span className="fw-500"> 24/7</span> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center border-top-0">
                        <Link className="btn btn-primary" href="#!">Purchase Now</Link>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row className="row-deck">
               <Col md={12} lg={4}>
                  <Card>
                     <Card.Body className="text-center price-1">
                        <div className="price-img">
                           <img src="../../../assets/images/svg/pri1.svg" alt="img" />
                        </div>
                        <div className="display-3 my-4">$9.99</div>
                        <div className="h3">Starter</div>
                        <ListGroup className="list-unstyled mb-0">
                           <ListGroup.Item>Limited marketing growth</ListGroup.Item>
                           <ListGroup.Item>More Widgets</ListGroup.Item>
                           <ListGroup.Item>300 Keywords</ListGroup.Item>
                           <ListGroup.Item>Unlimited Updates</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center mt-4">
                           <Link href="#!" className="btn btn-primary">Purchase Now</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12} lg={4}>
                  <Card>
                     <Card.Body className="text-center price-1">
                        <div className="price-img">
                           <img src="../../../assets/images/svg/pri2.svg" alt="img" />
                        </div>
                        <div className="display-3 my-4">$35.99</div>
                        <div className="h3">Business</div>
                        <ListGroup className="list-unstyled mb-0">
                           <ListGroup.Item>Limited marketing growth</ListGroup.Item>
                           <ListGroup.Item>More Widgets</ListGroup.Item>
                           <ListGroup.Item>500 Keywords</ListGroup.Item>
                           <ListGroup.Item>Unlimited Updates</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center mt-4">
                           <Link href="#!" className="btn btn-primary">Purchase Now</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12} lg={4}>
                  <Card>
                     <Card.Body className="text-center price-1">
                        <div className="price-img">
                           <img src="../../../assets/images/svg/pri3.svg" alt="img" />
                        </div>
                        <div className="display-3 my-4">$99.99</div>
                        <div className="h3">Team</div>
                        <ListGroup className="list-unstyled mb-0">
                           <ListGroup.Item>Limited marketing growth</ListGroup.Item>
                           <ListGroup.Item>More Widgets</ListGroup.Item>
                           <ListGroup.Item>900 Keywords</ListGroup.Item>
                           <ListGroup.Item>Unlimited Updates</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center mt-4">
                           <Link href="#!" className="btn btn-primary">Purchase Now</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm={12} lg={6} md={6} xl={3}>
                  <Card className="overflow-hidden">
                     <div className="text-center pricing pricing1">
                        <div className="card-category bg-primary">Free</div>
                        <div className="display-3 my-4">$0</div>
                        <ListGroup className="list-unstyled leading-loose">
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>2</strong> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>1</strong>  Databases</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>24/7</strong> Support</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center m-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-primary">Buy Now</Link>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col sm={12} lg={6} md={6} xl={3}>
                  <Card className="overflow-hidden">
                     <div className="text-center pricing pricing1">
                        <div className="card-category bg-secondary">Personal</div>
                        <div className="display-3 my-4">$29</div>
                        <ListGroup className="list-unstyled leading-loose">
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>2</strong> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>1</strong>  Databases</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>24/7</strong> Support</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center m-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-secondary">Buy Now</Link>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col sm={12} lg={6} md={6} xl={3}>
                  <Card className="overflow-hidden">
                     <div className="text-center pricing pricing1 ">
                        <div className="card-category bg-info">Premium</div>
                        <div className="display-3 my-4">$39</div>
                        <ListGroup className="list-unstyled leading-loose">
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>3 </strong> FreeDomain Name</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>5</strong> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>3</strong>  Databases</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-x text-danger me-2"></i><strong>24/7</strong> Support</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center m-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-info">Buy Now</Link>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col sm={12} lg={6} md={6} xl={3}>
                  <Card className="overflow-hidden">
                     <div className="text-center pricing pricing1">
                        <div className="card-category bg-success">Enterprise</div>
                        <div className="display-3 my-4">$79</div>
                        <ListGroup className="list-unstyled leading-loose">
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>10 </strong> FreeDomain Name</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>10</strong> One-Click Apps</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>8</strong>  Databases</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                           <ListGroup.Item><i className="fe fe-check text-success me-2"></i><strong>24/7</strong> Support</ListGroup.Item>
                        </ListGroup>
                        <div className="text-center m-4">
                           <div className="d-grid">
                              <Link href="#!" className="btn btn-success">Buy Now</Link>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row className="panel-shape">
               <Col xs={12} lg={6} md={6} xl={3}>
                  <div className="panel price  panel-color mb-xl-0">
                     <div className=" bg-white text-center ">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path fill="#306eff" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                        L0.732,193.75z"></path>
                           </g>
                           <text transform="matrix(1 0 0 1 69.7256 116.2686)" style={{ fill: 'white' }} fontSize="50.4489">Personal</text>
                        </svg>
                     </div>
                     <div className="panel-body text-center">
                        <p className="lead"><strong>$15 /</strong>  Month</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item"><strong> 2 Free</strong> Domain Name</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong>3 </strong> One-Click Apps</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 1 </strong> Databases</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 24/7</strong> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center">
                        <div className="d-grid">
                           <Link className="btn btn-primary" href="#!">Purchase Now!</Link>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xs={12} lg={6} md={6} xl={3}>
                  <div className="panel price  panel-color mb-xl-0">
                     <div className=" bg-white text-center">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path fill="#510fa8" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                        L0.732,193.75z"></path>
                           </g>
                           <text transform="matrix(1 0 0 1 69.7256 116.2686)" style={{ fill: 'white' }} fontSize="50.4489">Premium</text>
                        </svg>
                     </div>
                     <div className="panel-body text-center">
                        <p className="lead"><strong>$25 /</strong> Month</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item"><strong> 3 Free</strong> Domain Name</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong>4 </strong> One-Click Apps</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 2 </strong> Databases</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 24/7</strong> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center">
                        <div className="d-grid">
                           <Link className="btn btn-secondary" href="#!">Purchase Now!</Link>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xs={12} lg={6} md={6} xl={3}>
                  <div className="panel price  panel-color">
                     <div className=" bg-white text-center">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path fill="#35d7f1" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                        L0.732,193.75z"></path>
                           </g>
                           <text transform="matrix(1 0 0 1 69.7256 116.2686)" style={{ fill: 'white' }} fontSize="50.4489">Corporate</text>
                        </svg>
                     </div>
                     <div className="panel-body text-center">
                        <p className="lead"><strong>$35 /</strong>  Month</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item"><strong> 4 Free</strong> Domain Name</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong>6 </strong> One-Click Apps</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 2 </strong> Databases</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 24/7</strong> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center">
                        <div className="d-grid">
                           <Link className="btn btn-info" href="#!">Purchase Now!</Link>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xs={12} lg={6} md={6} xl={3}>
                  <div className="panel price  panel-color">
                     <div className=" bg-white text-center">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path fill="#f43f86" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                        L0.732,193.75z"></path>
                           </g>
                           <text transform="matrix(1 0 0 1 69.7256 116.2686)" style={{ fill: 'white' }} fontSize="50.4489">Business</text>
                        </svg>
                     </div>
                     <div className="panel-body text-center">
                        <p className="lead"><strong>$99 /</strong> Month</p>
                     </div>
                     <ListGroup className="list-group list-group-flush text-center">
                        <ListGroup.Item className="list-group-item"><strong> 5 Free</strong> Domain Name</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong>8 </strong> One-Click Apps</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 2 </strong> Databases</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroup.Item>
                        <ListGroup.Item className="list-group-item"><strong> 24/7</strong> support</ListGroup.Item>
                     </ListGroup>
                     <div className="panel-footer text-center">
                        <div className="d-grid">
                           <Link className="btn btn-pink" href="#!">Purchase Now!</Link>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col xs={12} lg={12} xl={12}>
                  <Card>
                     <div className="section-title center-block text-center mt-5">
                        <h3>Pricing Styles</h3>
                        <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                     </div>
                     <div className="pricing-tabs">
                        <Tab.Container defaultActiveKey="1">
                           <div className=" text-center">
                              <div className="pri-tabs-heading">
                                 <Nav as='ul' variant="pills" className="justify-content-center nav-price">
                                    <Nav.Item as='li'><Nav.Link eventKey="1" href="# week">Year</Nav.Link></Nav.Item>
                                    <Nav.Item as='li'><Nav.Link eventKey="2" href="#month2">Month</Nav.Link></Nav.Item>
                                 </Nav>
                              </div>

                              <Tab.Content>
                                 <Tab.Pane eventKey="1" className="pb-0" id="week">
                                    <Row>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-xl-0">

                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-primary">Free</div>
                                                <div className="display-3 my-4">$0</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>0</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>0</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-primary">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-xl-0">
                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-secondary">Personal</div>
                                                <div className="display-3 my-4">$29</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>2</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>1</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-secondary">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden">
                                             <div className="text-center pricing pricing1 ">
                                                <div className="card-category bg-info">Premium</div>
                                                <div className="display-3 my-4">$39</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>3 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>5</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>3</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-info">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-0">
                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-success">Enterprise</div>
                                                <div className="display-3 my-4">$79</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>10 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>10</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>8</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-success">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                    </Row>
                                 </Tab.Pane>

                                 <Tab.Pane eventKey="2" className="tab-pane  show" >
                                    <Row>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-xl-0">
                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-primary">Free</div>
                                                <div className="display-3 my-4">$0</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>0</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>0</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-primary">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-xl-0">
                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-secondary">Personal</div>
                                                <div className="display-3 my-4">$11</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>2 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>2</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>1</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-secondary">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden">
                                             <div className="text-center pricing pricing1 ">
                                                <div className="card-category bg-info">Premium</div>
                                                <div className="display-3 my-4">$22</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>3 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>5</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>3</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-info">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                       <Col sm={12} md={6} lg={6} xl={3}>
                                          <Card className="overflow-hidden mb-0">
                                             <div className="text-center pricing pricing1">
                                                <div className="card-category bg-success">Enterprise</div>
                                                <div className="display-3 my-4">$44</div>
                                                <ListGroup className="list-unstyled leading-loose">
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>10 </strong> FreeDomain Name</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>10</strong> One-Click Apps</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>8</strong>  Databases</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-close me-2 text-danger"></i><strong>Money</strong> BackGuarntee</ListGroup.Item>
                                                   <ListGroup.Item><i className="fa fa-check me-2 text-success"></i><strong>24/7</strong> Support</ListGroup.Item>
                                                </ListGroup>
                                                <div className="text-center m-4">
                                                   <div className="d-grid">
                                                      <Link href="#!" className="btn btn-success">Buy Now</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </Card>
                                       </Col>
                                    </Row>
                                 </Tab.Pane>
                              </Tab.Content>
                           </div>
                        </Tab.Container>
                     </div>
                  </Card>
               </Col>
            </Row>
         </div>

      </ >
   );
};
PricingTables.layout = "Contentlayout";

export default PricingTables;

