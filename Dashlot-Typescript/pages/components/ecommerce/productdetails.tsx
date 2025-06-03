import { FC, useState } from 'react';
import { Card, Col, ListGroup, ProgressBar, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Select from 'react-select';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Details1 } from '../../../shared/data/ecommerce/detailsdata';

import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const ProductDetails = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

   return (
      <>

         <Seo title={"Products-Details"} />
         <Pageheaderecommerce title="Products Details" heading='Ecommerce' active='Products details' />
         <div className="main-container container-fluid">

            <Row>
               <Col lg={12}>
                  <Card>
                     <div className="single-productslide h-100">
                        <Row className="no-gutter">
                           <Col lg={12} xxl={5} xl={5} md={12} className="border-end pe-0">
                              <div className="product-gallery pt-4 px-4 pb-4">

                                 <Swiper spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
                                    <SwiperSlide id="img-container">
                                       <img className="img-fluid" src="../../../assets/images/media/53.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/54.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/55.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/52.png" alt="img" />
                                    </SwiperSlide>
                                 </Swiper>
                                 <Swiper
                                    onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view-details mt-2">
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/53.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/54.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/55.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/52.png" alt="img" />
                                    </SwiperSlide>
                                 </Swiper>
                              </div>
                           </Col>
                           <Col lg={12} xxl={7} xl={7} md={12} className="my-auto">
                              <div className="product-gallery-data mb-0">
                                 <h2 className="mb-3 fw-500">Eiusmod Luxurious Tempor Car</h2>
                                 <div className="mb-3">
                                    <span className="fw-500 h2 text-danger">$5678</span>
                                 </div>
                                 <h6 className="fw-500">DESCRIPTION</h6>
                                 <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore and dolore magna aliqua domenus orioneu
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore and dolore magna aliqua domenus orioneu..
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore and dolore magna aliqua domenus orioneu..
                                 </p>
                                 <dl className="product-gallery-data1">
                                    <dt>Color</dt>
                                    <dd>White</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Features</dt>
                                    <dd>An automatic movement rather than quartz.</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Delivery</dt>
                                    <dd>Russia, USA, and Europe</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Rating :</dt>
                                    <dd>
                                       <ListGroup className="product-gallery-rating">
                                          <div>
                                             <Link href="#!"><i className="fa fa-star me-1 text-warning"></i></Link>
                                             <Link href="#!"><i className="fa fa-star me-1 text-warning"></i></Link>
                                             <Link href="#!"><i className="fa fa-star me-1 text-warning"></i></Link>
                                             <Link href="#!"><i className="fa fa-star me-1 text-warning"></i></Link>
                                             <Link href="#!"><i className="fa fa-star-half-o text-warning"></i></Link>
                                          </div>
                                       </ListGroup>
                                    </dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Quantity :</dt>
                                    <dd>
                                       <div className="form-group mb-0">
                                          <Select name="colors" options={Details1} className="basic-multi-select"
                                             menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Details1[0]]} />
                                       </div>
                                    </dd>
                                 </dl>
                                 <div className="btn-list">
                                    <Link href="/components/ecommerce/checkout/" className="btn btn-primary"><i className="fa fa-shopping-bag me-1"></i> Buy now </Link>
                                    <Link href="/components/ecommerce/cart/" className="btn btn-secondary"> <i className="fa fa-shopping-cart me-1"></i> Add to cart </Link>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md={12} xl={4} xs={12} sm={12}>
                  <Card>
                     <Card.Body>
                        <div className="avatar avatar-lg rounded-circle text-bg-success mb-3 fs-20">
                           <i className="mdi mdi-airplane-takeoff"></i>
                        </div>
                        <h4 className="mb-2">Free Shipping</h4>
                        <span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </Card.Body>
                  </Card>
               </Col>
               <Col md={12} xl={4} xs={12} sm={12}>
                  <Card>
                     <Card.Body>
                        <div className="avatar avatar-lg rounded-circle text-bg-secondary mb-3 fs-20">
                           <i className="mdi mdi-headset"></i>
                        </div>
                        <h4 className="mb-2">Customer Support</h4>
                        <span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </Card.Body>
                  </Card>
               </Col>
               <Col md={12} xl={4} xs={12} sm={12}>
                  <Card>
                     <Card.Body>
                        <div className="avatar avatar-lg rounded-circle text-bg-info mb-3 fs-20">
                           <i className="mdi mdi-refresh"></i>
                        </div>
                        <div className="icon-return"></div>
                        <h4 className="mb-2">30 days money back</h4>
                        <span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </Card.Body>
                  </Card>
               </Col>
            </Row>

            <div className="">
               <Card>
                  <Card.Header>
                     <Card.Title as="h3">Rating And Reviews</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Row>
                        <Col md={12}>
                           <div className="badge badge-default mb-2">5 <i className="fa fa-star"></i></div>
                           <ProgressBar variant='success' now={100} label="6,532" /><br />
                           <div className="badge badge-default mb-2">4 <i className="fa fa-star"></i></div>
                           <ProgressBar variant='primary' now={80} label="7,532" /><br />
                           <div className="badge badge-default mb-2">3 <i className="fa fa-star"></i></div>
                           <ProgressBar variant='info' now={60} label="3,526" /><br />
                           <div className="badge badge-default mb-2">2 <i className="fa fa-star"></i></div>
                           <ProgressBar variant='warning' now={60} label="485" /><br />
                           <div className="badge badge-default mb-2">1 <i className="fa fa-star"></i></div>
                           <ProgressBar variant='danger' now={20} label="123" /><br />
                        </Col>
                        <Col md={6} className="text-center align-items-center">

                        </Col>
                     </Row>
                  </Card.Body>
                  <Card.Body className="p-0">
                     <div className="media mt-0 p-4">
                        <div className="d-flex me-3">
                           <Link href="#!">
                              <img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../assets/images/users/5.jpg" />
                           </Link>
                        </div>
                        <div className="media-body ecommerce-2">
                           <h5 className="mt-0 mb-1 fw-500 d-inline-flex align-items-center">Joanne Scott

                              <OverlayTrigger

                                 placement="top"
                                 overlay={<Tooltip>verified</Tooltip>}
                              >
                                 <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="verified"><i className="fa fa-check-circle-o text-success ms-1"></i></span>
                              </OverlayTrigger>
                              <span className="fs-14 ms-2"> 4.5 <i className="fa fa-star text-warning"></i></span>
                           </h5>
                           <div className="d-flex">
                              <div className="text-muted me-3">
                                 <i className="fa fa-calendar me-1"></i>
                                 <span> Dec 22st</span>
                              </div>
                              <div className="text-muted me-3">
                                 <i className="fa fa-clock-o me-1"></i>
                                 <span> 6.00</span>
                              </div>
                              <div className="text-muted">
                                 <i className="fa fa-map-marker me-1"></i>
                                 <span> Brezil</span>
                              </div>
                           </div>
                           <p className="font-13  mb-2 mt-2">
                              Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
                           </p>
                           <Link href="#!" className="me-2"><span className="badge badge-primary">Helpful</span></Link>
                           <Link href="#!" className="me-2"><span className="">Comment</span></Link>
                           <Link href="#!" className="me-2"><span className="">Report</span></Link>
                           <div className="media mt-4">
                              <div className="d-flex me-3">
                                 <Link href="#!">
                                    <img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../assets/images/users/2.jpg" />
                                 </Link>
                              </div>
                              <div className="media-body ecommerce-2">
                                 <h5 className="mt-0 mb-1 fw-500">Rose Slater
                                    <OverlayTrigger

                                       placement="top"
                                       overlay={<Tooltip>verified</Tooltip>}
                                    >
                                       <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="verified"><i className="fa fa-check-circle-o text-success ms-1"></i></span>
                                    </OverlayTrigger></h5>
                                 <div className="d-flex">
                                    <div className="text-muted me-3">
                                       <i className="fa fa-calendar me-1"></i>
                                       <span> Dec 22st</span>
                                    </div>
                                    <div className="text-muted me-3">
                                       <i className="fa fa-clock-o me-1"></i>
                                       <span> 6.00</span>
                                    </div>
                                    <div className="text-muted">
                                       <i className="fa fa-map-marker me-1"></i>
                                       <span> Brezil</span>
                                    </div>
                                 </div>
                                 <p className="font-13  mb-2 mt-2">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   commodo Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur consequat.
                                 </p>
                                 <Link href="#!"><span className="badge badge-default">Comment</span></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="media p-4 border-top mt-0">
                        <div className="d-flex me-3">
                           <Link href="#!">
                              <img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../assets/images/users/5.jpg" />
                           </Link>
                        </div>
                        <div className="media-body ecommerce-2">
                           <h5 className="mt-0 mb-1 fw-500 d-inline-flex align-items-center">Edward
                              <OverlayTrigger

                                 placement="top"
                                 overlay={<Tooltip>verified</Tooltip>}
                              >
                                 <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="verified"><i className="fa fa-check-circle-o text-success ms-1"></i></span>
                              </OverlayTrigger>                              <span className="fs-14 ms-2"> 4 <i className="fa fa-star text-warning"></i></span>
                           </h5>
                           <div className="d-flex">
                              <div className="text-muted me-3">
                                 <i className="fa fa-calendar me-1"></i>
                                 <span> Dec 22st</span>
                              </div>
                              <div className="text-muted me-3">
                                 <i className="fa fa-clock-o me-1"></i>
                                 <span> 6.00</span>
                              </div>
                              <div className="text-muted">
                                 <i className="fa fa-map-marker me-1"></i>
                                 <span> Brezil</span>
                              </div>
                           </div>
                           <p className="font-13  mb-2 mt-2">
                              Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
                           </p>
                           <Link href="#!" className="me-2"><span className="badge badge-primary">Helpful</span></Link>
                           <Link href="#!" className="me-2"><span className="">Comment</span></Link>
                           <Link href="#!" className="me-2"><span className="">Report</span></Link>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </div>

         </div>

      </>
   );
};
ProductDetails.layout = "Contentlayout";
export default ProductDetails;
