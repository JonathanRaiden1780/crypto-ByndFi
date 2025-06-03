
import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Select from 'react-select';
import { Options1 } from '../../../shared/data/ecommerce/infodata';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import { useState } from 'react';
import Seo from '@/shared/layout-components/seo/seo';


const ProductInfo = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

   return (
      <>

         <Seo title={"Product-info"} />
         <Pageheaderecommerce title="Products Info" heading='Ecommerce' active='Product-info' />

         <div className="main-container container-fluid">

            <Row>
               <Col lg={12}>
                  <Card>
                     <div className="single-productslide">
                        <Row className="no-gutter">
                           <Col lg={5} className="border-end pe-0">

                              <div className="product-gallery pt-4 px-4 pb-4">
                                 <Swiper spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
                                    <SwiperSlide id="img-container">
                                       <img className="img-fluid" src="../../../assets/images/media/48.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/49.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/51.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide className="image-container">
                                       <img className="img-fluid" src="../../../assets/images/media/48.jpg" alt="img" />
                                    </SwiperSlide>
                                 </Swiper>
                                 <Swiper
                                    onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view-details mt-2">
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/48.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/49.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/51.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <img className="img-fluid" src="../../../assets/images/media/48.jpg" alt="img" />
                                    </SwiperSlide>
                                 </Swiper>

                              </div>
                           </Col>
                           <Col lg={7} className=" my-auto">
                              <div className="product-gallery-data mb-0">
                                 <h3 className="mb-3 fs-20 fw-500">Dell Inspiron 15 3000 Core i3 6th Gen</h3>
                                 <div className="mb-3">
                                    <span className="fw-500 h2 text-danger">$5678</span>
                                    <span>/per kg</span>
                                 </div>
                                 <h6 className="fw-500">DESCRIPTION</h6>
                                 <p className="text-muted">
                                    labore et dolore magna  enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariaturDuis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                 </p>
                                 <dl className="product-gallery-data1">
                                    <dt>Color</dt>
                                    <dd>Black</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Features</dt>
                                    <dd>Pre-installed Genuine Windows 10 OS</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Delivery</dt>
                                    <dd>Russia, USA, and Europe</dd>
                                 </dl>
                                 <dl className="product-gallery-data1">
                                    <dt>Rating:</dt>
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
                                    <dt>Quantity:</dt>
                                    <dd>
                                       <div className="form-group mb-0">
                                          <Select name="colors" options={Options1} className="basic-multi-select"
                                             menuPlacement='auto' classNamePrefix="Select2" />
                                       </div>
                                    </dd>
                                 </dl>
                                 <div className="product-gallery-data1 mb-3">
                                    <dl className="product-gallery-size mb-0">
                                       <dt>Size:</dt>
                                       <dd className="mb-0 ms-0">
                                          <div className="product-gallery-checks custom-controls-stacked d-sm-flex align-items-cener">
                                             <div className="form-check flex-grow-1 me-3">
                                                <Form.Check className="" type="checkbox" id="size1" />
                                                <Form.Label className="form-check-label d-block mb-1" htmlFor="size1">SM</Form.Label>
                                             </div>
                                             <div className="form-check flex-grow-1 me-3">
                                                <Form.Check className="" type="checkbox" id="size2" />
                                                <Form.Label className="form-check-label d-block mb-1" htmlFor="size2">MD</Form.Label>
                                             </div>
                                             <div className="form-check flex-grow-1 me-3">
                                                <Form.Check className="" type="checkbox" id="size3" />
                                                <Form.Label className="form-check-label d-block mb-1" htmlFor="size3">XL</Form.Label>
                                             </div>
                                          </div>
                                       </dd>
                                    </dl>
                                 </div>
                                 <Link href={"/components/ecommerce/checkout"} className="btn btn-primary me-2 mt-1"> Buy now </Link>
                                 <Link href={"/components/ecommerce/cart"} className="btn btn-secondary mt-1"> <i className="fa fa-shopping-cart"></i> Add to cart </Link>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12} xxl={6}>
                  <Card>
                     <Card.Body>
                        <div className="product-singleinfo">
                           <div className="d-md-flex justify-content-center">
                              <div className="product-item text-center me-3">
                                 <img src="../../../assets/images/media/3.jpg" alt="img" />
                              </div>
                              <div className="product-item2-desc flex-fill">
                                 <h4 className="fw-500 fs-20 mt-1 mt-sm-0"><Link href="#!">Hp Laptops</Link></h4>
                                 <ListGroup className="product-item2-rating">
                                    <div className="me-2">
                                       <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                       <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                       <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                       <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                       <Link href="#!"><i className="fa fa-star-o text-warning"></i></Link>
                                    </div>
                                 </ListGroup>
                                 <div className="label-rating">793 reviews</div>
                                 <div className="label-rating">284 orders </div>
                                 <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                 <div className="btn-list">
                                    <Link href="#!" className="btn btn-primary">Buy Now</Link>
                                    <Link href="#!" className="btn btn-secondary">Details</Link>
                                 </div>
                              </div>
                              <div className="product-ship">
                                 <div className="product-item-price">
                                    <span className="newprice">$183</span>
                                    <del className="oldprice text-muted ms-1 d-inline-flex">$235</del>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={12} xxl={6}>
                  <Card>
                     <Card.Body>
                        <div className="product-single">
                           <div className="d-md-flex justify-content-between align-items-center">
                              <div className="product-item text-center me-3">
                                 <img src="../../../assets/images/media/14.jpg" alt="thumb1" className="thumb-img" />
                              </div>
                              <div className="product-info flex-fill">
                                 <h3 className="fw-500 fs-20 mb-2 mt-1 mt-sm-0">Leather Watch</h3>
                                 <p className="text-muted">Sed  unde omnis iste natus error sit voluptatem accusantium <br />doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                 <Link href="#!" className="btn btn-primary">More Info</Link>
                              </div>
                              <div className="product-ship">
                                 <div className="h3 fw-500 mb-1">$17.99</div>
                                 <Link href="#!" className="mb-4 fs-14 text-muted"> Free Shipping</Link><br />
                                 <Link href="#!" className="mb-3 fs-14 text-nowrap"> <i className="fa fa-heart text-danger me-1"></i> Add to wishlist</Link>
                                 <div className="product-rating mt-3 text-nowrap">
                                    <Link href="#!" className="btn btn-warning btn-sm me-1"><i className="fa fa-star text-fixed-white"></i></Link>
                                    <Link href="#!" className="btn btn-warning btn-sm me-1"><i className="fa fa-star text-fixed-white"></i></Link>
                                    <Link href="#!" className="btn btn-warning btn-sm"><i className="fa fa-star text-fixed-white"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={8}>
                  <Card>
                     <div className="product-multiinfo">
                        <Card className="border-0">
                           <Card.Body className="border-bottom-0 ">
                              <div className="product-singleinfo">
                                 <div className="d-md-flex justify-content-center align-items-center">
                                    <div className="product-item text-center me-3">
                                       <img src="../../../assets/images/media/11.jpg" alt="img" />
                                    </div>
                                    <div className="product-item2-desc flex-fill">
                                       <h3 className="fw-500 fs-20"><Link href="#!">Xiaomi Redmi Mi Max(4GB 64GB) </Link></h3>
                                       <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                       <div className="label-rating text-muted">934 reviews</div>
                                       <div className="label-rating text-muted">158 orders </div>
                                    </div>
                                    <div className="product-ship">
                                       <div className="product-item-price">
                                          <span className="newprice">$18</span>
                                          <del className="oldprice text-muted ms-1 d-inline-flex">$23</del>
                                       </div>
                                       <p><Link href="#!" className="fs-14 text-muted"> Free Shipping</Link></p>
                                       <div className="btn-list">
                                          <Link href="#!" className="btn btn-primary">Buy Now</Link>
                                          <Link href="#!" className="btn btn-secondary">Details</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                        <Card className="border-top-0 border-0">
                           <Card.Body>
                              <div className="product-singleinfo">
                                 <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="product-item text-center me-3">
                                       <img src="../../../assets/images/media/4.jpg" alt="img" />
                                    </div>
                                    <div className="product-item2-desc mt-2 flex-fill">
                                       <h3 className="fw-500 fs-20"><Link href="#!">Digital Smart Watch</Link></h3>
                                       <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                       <div className="label-rating text-muted">793 reviews</div>
                                       <div className="label-rating text-muted">457 orders </div>
                                    </div>
                                    <div className="product-ship">
                                       <div className="product-item-price">
                                          <span className="newprice">$13</span>
                                          <del className="oldprice text-muted ms-1 d-inline-flex">$35</del>
                                       </div>
                                       <p><Link href="#!" className="fs-14 text-muted"> Free Shipping</Link></p>
                                       <div className="btn-list">
                                          <Link href="#!" className="btn btn-primary">Buy Now</Link>
                                          <Link href="#!" className="btn btn-secondary">Details</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card>
               </Col>
               <Col xl={4}>
                  <Card>
                     <Card.Body>
                        <div className="product-slides">
                           <div className="product-top d-flex mb-3">
                              <div className="h4 mb-0 fw-500 fs-20">$87</div>
                              <div className="ms-auto">
                                 <Link href="#!" className="iconbage">
                                    <i className="fa fa-shopping-cart fs-5"></i>
                                    <span className="nav-unread badge badge-info  badge-pill">3</span>
                                 </Link>
                              </div>
                           </div>
                           <Row>
                              <Col lg={12} xl={6}>
                                 <div className="product-slidimgs">
                                    <Swiper
                                       loop={true}
                                       spaceBetween={10}
                                       slidesPerView={1}
                                       freeMode={true}
                                       autoplay={true}
                                       watchSlidesProgress={true}
                                       modules={[FreeMode, Navigation, Thumbs, Autoplay]
                                       } className="mySwiper2">

                                       <SwiperSlide>
                                          <img alt="product-image-1" src="../../../assets/images/media/5.jpg" />
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <img alt="product-image-2" src="../../../assets/images/media/7.jpg" />
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <img alt="product-image-3" src="../../../assets/images/media/6.jpg" />
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <img alt="product-image-4" src="../../../assets/images/media/9.jpg" />
                                       </SwiperSlide>

                                    </Swiper>
                                 </div>
                              </Col>
                              <Col lg={12} xl={6} className="my-auto">
                                 <div className="product-data">
                                    <h3 className="text-center fs-20 mb-1 mt-3">Branded Products</h3>
                                    <p className=" text-danger mt-0 text-center fs-16 mb-1">NEW ARRIVALS</p>
                                    <p className="text-muted text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea commodo . </p>
                                    <div className="text-center">
                                       <div className="product-rating text-muted">
                                          <Link href="#!" ><i className="fa fa-star text-warning me-1"></i></Link>
                                          <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                          <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                          <Link href="#!"><i className="fa fa-star text-warning me-1"></i></Link>
                                          <Link href="#!"><i className="fa fa-star-o text-warning me-1"></i></Link> 5 Reviews
                                       </div>
                                       <Link href="#!" className="btn btn-primary mt-4">Add to Shopping Cart</Link>
                                    </div>
                                 </div>
                              </Col>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

         </div>

      </>
   );
};
ProductInfo.layout = "Contentlayout";
export default ProductInfo;
