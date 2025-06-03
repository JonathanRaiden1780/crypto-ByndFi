import { FC, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Nav, Row, Tab } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import LabeledTwoThumbs, { Psoptions1 } from '../../../shared/data/ecommerce/psdata';
import Seo from '@/shared/layout-components/seo/seo';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import { connect } from 'react-redux';
import Link from 'next/link';


const ProductsStyle1 = ({ local_varaiable }: any) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Seo title={"Products-style1"} />
         <Pageheaderecommerce title="Products Style - 1" heading='Ecommerce' active='Products-style1' />


         <div className="main-container container-fluid">

            <div>
               <div className="search-product overflow-hidden br-5">
                  <div className="input-group mb-3">
                     <Form.Control type="text" className="form-control bg-white border-0 border-0 input-xl br-tr-md-0 br-br-md-0" id="text3" placeholder="Search Products" />
                     <Button className="br-tl-md-0 br-bl-md-0 btn btn-sm btn-primary">Search</Button>
                  </div>
               </div>
            </div>
            <Row>
               <Col xxl={9} md={12}>
                  <div className="mb-lg-0">
                     <div>
                        <div className="item2-gl product-style1">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                              <div className="item2-gl-nav bg-white d-sm-flex align-items-center">
                                 <h6 className="mb-3 mb-sm-0">Showing 1 to 10 of 30 entries</h6>
                                 <div className="d-flex align-items-center justify-content-end flex-grow-1">
                                    <label className="me-2 mb-0">Sort By:</label>
                                    <Select name='beast' id="select-beast4" classNamePrefix='Select2' defaultValue={[Psoptions1[0]]} options={Psoptions1} />
                                 </div>
                                 <Nav variant="" className="d-sm-flex d-none ms-sm-3">
                                    <Nav.Item> <Nav.Link eventKey="1" className="" data-bs-toggle="tab" title="List style"><i className="fa fa-list"></i> </Nav.Link> </Nav.Item>
                                    <Nav.Item> <Nav.Link eventKey="2" data-bs-toggle="tab" title="Grid"><i className="fa fa-th"></i></Nav.Link> </Nav.Item>
                                 </Nav>
                              </div>

                              <Tab.Content className="">
                                 <Tab.Pane className="p-0 border-0" eventKey="1" id="tab-11">
                                    <Card className="overflow-hidden">
                                       <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card9-imgs">
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/7.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card9-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className="mb-0 border-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="/components/ecommerce/productdetails/"><h4 className="fw-500 mt-1">Simple Leather Wrist Watch for Women. </h4></Link>
                                                   <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$263.99</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                       <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card9-imgs">
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/2.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card9-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className="mb-0 border-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="/components/ecommerce/productdetails/"><h4 className="fw-500 mt-1">Black Metal Watch for Men. </h4></Link>
                                                   <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$263.99</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                       <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card9-imgs">
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/3.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card9-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className=" border-0 mb-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="/components/ecommerce/productdetails/"><h4 className="fw-500 mt-1">Analog Fancy Style Wrist Watch.</h4></Link>
                                                   <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$149.00</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card2-img ">
                                                <div className="arrow-ribbon bg-primary">$13</div>
                                                <img src="../../../assets/images/media/ecommerce/4.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className=" border-0 mb-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">

                                                      <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Round-Dail Metal Watch for Men.</h4></Link>
                                                      <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card2-footer d-sm-flex">
                                                   <div className="rating-stars d-inline-flex">
                                                      <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                      <div className="rating-stars-container">
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <Link href="#!" className="location d-none d-lg-block"><i className="fa fa-map-marker text-muted me-1"></i> Los Angles</Link>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card2-img ">
                                                <div className="arrow-ribbon bg-primary">$42</div>
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/5.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className=" border-0 mb-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">
                                                      <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Modern Accessories Watch for Women.</h4></Link>
                                                      <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card2-footer d-sm-flex">
                                                   <div className="rating-stars d-inline-flex">
                                                      <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                      <div className="rating-stars-container">
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <Link href="#!" className="location d-none d-lg-block"><i className="fa fa-map-marker text-muted me-1"></i> Los Angles</Link>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                       <div className="d-md-flex">
                                          <div className="item-card9-img">
                                             <div className="item-card2-img ">
                                                <div className="arrow-ribbon bg-primary">$50</div>
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/6.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="#!" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                          </div>
                                          <Card className="border-0 mb-0 flex-grow-1">
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">
                                                      <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Stylish Gold Color Chain Watch With Analog.</h4></Link>
                                                      <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer className="pt-4 pb-4 bg-light">
                                                <div className="item-card2-footer d-sm-flex">
                                                   <div className="item-card2-rating">
                                                      <div className="rating-stars d-inline-flex">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <Link href="#!" className="location d-none d-lg-block"><i className="fa fa-map-marker text-muted me-1"></i> San Francisco</Link>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </div>
                                    </Card>
                                 </Tab.Pane>
                                 <Tab.Pane className="p-0 border-0" eventKey="2" id="tab-12">
                                    <Row>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="item-card9-img h-100">
                                                <div className="arrow-ribbon bg-primary">New</div>
                                                <div className="item-card9-imgs ">
                                                   <Link href="/components/ecommerce/productdetails/"></Link>
                                                   <img src="../../../assets/images/media/ecommerce/7.jpg" alt="img" className="cover-image" />
                                                </div>
                                                <div className="item-card9-icons">
                                                   <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                                </div>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="ecommerce-details" className=" mt-2"><h4 className="fw-500 mt-1">Black Chain Watch</h4></Link>
                                                   <p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   <div className="item-card9-desc d-flex">
                                                      <div className="me-3">
                                                         <i className="fe fe-map text-muted me-1"></i>
                                                         <span>USA</span>
                                                      </div>
                                                      <div>
                                                         <i className="fe fe-calendar text-muted me-1"></i>
                                                         <span>Nov-15-2018</span>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$263.99</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
                                             <div className="item-card9-img h-100">
                                                <div className="item-card9-imgs">
                                                   <Link href="/components/ecommerce/productdetails/"></Link>
                                                   <img src="../../../assets/images/media/ecommerce/8.jpg" alt="img" className="cover-image" />
                                                </div>
                                                <div className="item-card9-icons">
                                                   <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></Link>
                                                </div>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Model Chain Watch</h4></Link>
                                                   <p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   <div className="item-card9-desc d-flex">
                                                      <div className="me-3">
                                                         <i className="fe fe-map text-muted me-1"></i>
                                                         <span>USA</span>
                                                      </div>
                                                      <div>
                                                         <i className="fe fe-calendar text-muted me-1"></i>
                                                         <span>Nov-15-2018</span>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$745.00</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="2" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="ribbon ribbon-top-left text-primary"><span className="bg-primary">featured</span></div>
                                             <div className="item-card9-img h-100">
                                                <div className="item-card9-imgs">
                                                   <Link href="/components/ecommerce/productdetails/"></Link>
                                                   <img src="../../../assets/images/media/ecommerce/1.jpg" alt="img" className="cover-image" />
                                                </div>
                                                <div className="item-card9-icons">
                                                   <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                                </div>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card9 ">
                                                   <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                   <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Digital Time Watch</h4></Link>
                                                   <p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   <div className="item-card9-desc d-flex">
                                                      <div className="me-3">
                                                         <i className="fe fe-map text-muted me-1"></i>
                                                         <span>USA</span>
                                                      </div>
                                                      <div>
                                                         <i className="fe fe-calendar text-muted me-1"></i>
                                                         <span>Nov-15-2018</span>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card9-footer d-flex">
                                                   <div className="item-card9-cost">
                                                      <h4 className=" fw-500 mb-0 mt-0">$149.00</h4>
                                                   </div>
                                                   <div className="ms-auto">
                                                      <div className="rating-stars block">
                                                         <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                         <div className="rating-stars-container">
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-star sm">
                                                               <i className="fa fa-star"></i>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="item-card2-img h-100">
                                                <div className="arrow-ribbon bg-primary">$185</div>
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/2.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">
                                                      <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Leather Belt Watch</h4></Link>
                                                      <p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card2-footer">
                                                   <Link href="#!" className="location"><i className="fa fa-map-marker text-muted me-1"></i> Los Angles</Link>
                                                   <div className="rating-stars item-card2-rating d-inline-flex">
                                                      <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                      <div className="rating-stars-container">
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                      </div>(145 reviews)
                                                   </div>

                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="item-card2-img h-100">
                                                <div className="arrow-ribbon bg-primary">$158</div>
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/3.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">
                                                      <Link href="/components/ecommerce/productdetails/">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Model Watches</h4></Link>
                                                      <p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card2-footer">
                                                   <Link href="#!" className="location"><i className="fa fa-map-marker text-muted me-1"></i> Los Angles</Link>
                                                   <div className="rating-stars item-card2-rating d-inline-flex">
                                                      <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                      <div className="rating-stars-container">
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                      </div>(145 reviews)
                                                   </div>

                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                       <Col lg={6} md={12} xl={4}>
                                          <Card className="overflow-hidden">
                                             <div className="item-card2-img h-100">
                                                <div className="arrow-ribbon bg-primary">$172</div>
                                                <Link href="/components/ecommerce/productdetails/"></Link>
                                                <img src="../../../assets/images/media/ecommerce/4.jpg" alt="img" className="cover-image" />
                                             </div>
                                             <div className="item-card2-icons">
                                                <Link href="/components/ecommerce/productdetails/" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></Link>
                                             </div>
                                             <Card.Body>
                                                <div className="item-card2">
                                                   <div className="item-card2-desc">
                                                      <Link href="/components/ecommerce/productdetails/" className="fs-11 a-1">Accessories</Link>
                                                      <Link href="/components/ecommerce/productdetails/" className=" mt-2"><h4 className="fw-500 mt-1">Exclusive Watch</h4></Link>
                                                      <p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                             <Card.Footer>
                                                <div className="item-card2-footer">
                                                   <Link href="#!" className="location"><i className="fa fa-map-marker text-muted me-1"></i> San Francisco</Link>
                                                   <div className="rating-stars item-card2-rating d-inline-flex">
                                                      <Form.Control type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                                                      <div className="rating-stars-container">
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                         <div className="rating-star sm">
                                                            <i className="fa fa-star"></i>
                                                         </div>
                                                      </div>(46 reviews)
                                                   </div>

                                                </div>
                                             </Card.Footer>
                                          </Card>
                                       </Col>
                                    </Row>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>
                        <div className="center-block text-center">
                           <ul className="pagination">
                              <li className="page-item page-prev disabled">
                                 <Link className="page-link" href="#!" tabIndex={-1}>Prev</Link>
                              </li>
                              <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                              <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                              <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                              <li className="page-item page-next">
                                 <Link className="page-link" href="#!">Next</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </Col>

               <Col xxl={3} md={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Categories</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div id="container">
                           <div className="filter-product-checkboxs">
                              <div className="form-check mb-3 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="category1" />
                                 <label className="form-check-label d-block" htmlFor="category1">
                                     Electronics
                                    <span className="label label-secondary float-end">14</span>
                                 </label>
                              </div>
                              <div className="form-check mb-3 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="category2" />
                                 <label className="form-check-label d-block" htmlFor="category2">
                                    Women
                                    <span className="label label-secondary float-end">22</span>
                                 </label>
                              </div>
                              <div className="form-check mb-3 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="category3" />
                                 <label className="form-check-label d-block" htmlFor="category3">
                                    Men
                                    <span className="label label-secondary float-end">78</span>
                                 </label>
                              </div>
                              <div className="form-check mb-3 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="category4" />
                                 <label className="form-check-label d-block" htmlFor="category4">
                                    Clothes
                                    <span className="label label-secondary float-end">35</span>
                                 </label>
                              </div>
                              <div className="form-check mb-3 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="category5" />
                                 <label className="form-check-label d-block" htmlFor="category5">
                                    Baby & Kid
                                    <span className="label label-secondary float-end">23</span>
                                 </label>
                              </div>
                              <Collapse in={open}>
                                 <div id="example-collapse-text">
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category6" />
                                       <label className="form-check-label d-block" htmlFor="category6">
                                          Home & Furniture
                                          <span className="label label-secondary float-end">14</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category7" />
                                       <label className="form-check-label d-block" htmlFor="category7">
                                          TVs & Appliances
                                          <span className="label label-secondary float-end">45</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category8" />
                                       <label className="form-check-label d-block" htmlFor="category8">
                                          Shop & Store
                                          <span className="label label-secondary float-end">34</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category9" />
                                       <label className="form-check-label d-block" htmlFor="category9">
                                          Sports
                                          <span className="label label-secondary float-end">12</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category10" />
                                       <label className="form-check-label d-block" htmlFor="category10">
                                          Books
                                          <span className="label label-secondary float-end">18</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category11" />
                                       <label className="form-check-label d-block" htmlFor="category11">
                                          Grocery
                                          <span className="label label-secondary float-end">02</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category12" />
                                       <label className="form-check-label d-block" htmlFor="category12">
                                          Healthy Products
                                          <span className="label label-secondary float-end">15</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category13" />
                                       <label className="form-check-label d-block" htmlFor="category13">
                                          Makeup Items
                                          <span className="label label-secondary float-end">32</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category14" />
                                       <label className="form-check-label d-block" htmlFor="category14">
                                          Stationary
                                          <span className="label label-secondary float-end">23</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category15" />
                                       <label className="form-check-label d-block" htmlFor="category15">
                                          Toys
                                          <span className="label label-secondary float-end">19</span>
                                       </label>
                                    </div>
                                    <div className="form-check mb-3 flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category16" />
                                       <label className="form-check-label d-block" htmlFor="category16">
                                          Laptops
                                          <span className="label label-secondary float-end">12</span>
                                       </label>
                                    </div>
                                    <div className="form-check flex-grow-1">
                                       <Form.Check className="" type="checkbox" id="category17" />
                                       <label className="form-check-label d-block" htmlFor="category17">
                                          Foods
                                          <span className="label label-secondary float-end">09</span>
                                       </label>
                                    </div>
                                 </div>
                              </Collapse>
                              <Button
                                 onClick={() => setOpen(!open)}
                                 aria-controls="example-collapse-text"
                                 className='showmore-button btn  rounded-pill d-flex mx-auto justify-content-center'
                                 aria-expanded={open}
                                 variant={open ? 'outline-danger' : 'outline-primary'}
                              >
                                 {open ? 'Close' : 'Show more'}
                              </Button>

                           </div>
                        </div>
                     </Card.Body>
                     <Card.Header className="border-top">
                        <Card.Title as="h3">Price Range</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <h6 className="mb-4">

                        </h6>
                        <div id="slider-square">

                           <LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'} />
                        </div>
                     </Card.Body>
                     <Card.Header className="border-top">
                        <Card.Title as="h3">Condition</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="filter-product-checkboxs">
                           <div className="form-check mb-3 flex-grow-1">
                              <Form.Check className="" type="checkbox" id="conditin1" />
                              <label className="form-check-label d-block" htmlFor="conditin1">New</label>
                           </div>
                           <div className="form-check flex-grow-1">
                              <Form.Check className="" type="checkbox" id="conditin2" />
                              <label className="form-check-label d-block" htmlFor="conditin2">Used</label>
                           </div>
                        </div>
                     </Card.Body>
                     <Card.Header className="border-top">
                        <Card.Title as="h3">Posted By</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="filter-product-checkboxs">
                           <div className="form-check mb-3 flex-grow-1">
                              <Form.Check className="" type="checkbox" id="posted1" />
                              <label className="form-check-label d-block" htmlFor="posted1">Dealer</label>
                           </div>
                           <div className="form-check mb-3 flex-grow-1">
                              <Form.Check className="" type="checkbox" id="posted2" />
                              <label className="form-check-label d-block" htmlFor="posted2">Individual</label>
                           </div>
                           <div className="form-check flex-grow-1">
                              <Form.Check className="" type="checkbox" id="posted3" />
                              <label className="form-check-label d-block" htmlFor="posted3">Reseller</label>
                           </div>
                        </div>
                     </Card.Body>
                     <Card.Footer>
                        <Link href="#!" className="btn btn-primary btn-block">Apply Filter</Link>
                     </Card.Footer>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Shares</Card.Title>
                     </Card.Header>
                     <div className="card-body product-filter-desc">
                        <div className="product-filter-icons text-center">
                           <Link href="#!" className="facebook-bg"><i className="fa fa-facebook"></i></Link>&nbsp;
                           <Link href="#!" className="twitter-bg"><i className="ri-twitter-x-line"></i></Link>&nbsp;
                           <Link href="#!" className="google-bg"><i className="fa fa-google"></i></Link>&nbsp;
                           <Link href="#!" className="dribbble-bg"><i className="fa fa-dribbble"></i></Link>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>

         </div>

      </>
   );
};
const mapStateToProps = (state: any) => ({
   local_varaiable: state
});
ProductsStyle1.layout = "Contentlayout";
export default connect(mapStateToProps, {})(ProductsStyle1);

