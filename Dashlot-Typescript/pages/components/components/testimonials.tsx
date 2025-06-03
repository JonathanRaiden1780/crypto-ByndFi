
import { Card, Col, Row, Collapse, Modal, InputGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import { useState } from 'react';
const Testimonials = () => {
   // Collapse
   const [BasicExpanded, setBasicExpanded] = useState(true);
   const [BasicExpanded1, setBasicExpanded1] = useState(true);
   const [BasicExpanded2, setBasicExpanded2] = useState(true);
   const [BasicExpanded3, setBasicExpanded3] = useState(true);
   const BasicHandleExpandClick = () => {
      setBasicExpanded(!BasicExpanded);
   };
   const BasicHandleExpandClick1 = () => {
      setBasicExpanded1(!BasicExpanded1);
   };
   const BasicHandleExpandClick2 = () => {
      setBasicExpanded2(!BasicExpanded2);
   };
   const BasicHandleExpandClick3 = () => {
      setBasicExpanded3(!BasicExpanded3);
   };
   // Close Button
   const [Basicshow, setBasicshow] = useState(true);
   const [Basicshow1, setBasicshow1] = useState(true);
   const [Basicshow2, setBasicshow2] = useState(true);
   const [Basicshow3, setBasicshow3] = useState(true);
   //fullscreen
   const [fullScreen, setFullscreen] = useState('true');
   const [fullscreenshow, setfullscreenShow] = useState(false);
   const fullscreenmodalClose = () => setfullscreenShow(false);
   function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setfullscreenShow(true);
   }

   const [fullScreen1, setFullscreen1] = useState('true');
   const [fullscreenshow1, setfullscreenShow1] = useState(false);
   const fullscreenmodalClose1 = () => setfullscreenShow1(false);
   function handleShow1(breakpoint: any) {
      setFullscreen1(breakpoint);
      setfullscreenShow1(true);
   }

   const [fullScreen2, setFullscreen2] = useState('true');
   const [fullscreenshow2, setfullscreenShow2] = useState(false);
   const fullscreenmodalClose2 = () => setfullscreenShow2(false);
   function handleShow2(breakpoint: any) {
      setFullscreen2(breakpoint);
      setfullscreenShow2(true);
   }

   const [fullScreen3, setFullscreen3] = useState('true');
   const [fullscreenshow3, setfullscreenShow3] = useState(false);
   const fullscreenmodalClose3 = () => setfullscreenShow3(false);
   function handleShow3(breakpoint: any) {
      setFullscreen3(breakpoint);
      setfullscreenShow3(true);
   }

   return (

      <>
         <Seo title={"Testimonials"} />
         <PageheaderDB heading="Components" active="Testimonials" />
         <div className="main-container container-fluid">
            <Row>
               <Col xl={12}>
                  {Basicshow ?
                     <Card className="card1">
                        <Card.Header>
                           <Card.Title>Testimonials Styles 01</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Testimonials Styles 01</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded} timeout={3000}>
                              <Modal.Body>
                                 <div id="myCarousel" className="">
                                    <Swiper
                                       loop={true}
                                       autoplay={{
                                          delay: 2500,
                                          disableOnInteraction: false,
                                       }}
                                       centeredSlides={false}

                                       breakpoints={{
                                          640: {
                                             slidesPerView: 1,
                                             spaceBetween: 10,
                                          },
                                          768: {
                                             slidesPerView: 2,
                                             spaceBetween: 30,
                                          },
                                          1024: {
                                             slidesPerView: 3,
                                             spaceBetween: 30,
                                          },
                                          1400: {
                                             slidesPerView: 4,
                                             spaceBetween: 30,
                                          },
                                       }}

                                       modules={[Pagination, Autoplay]}
                                       className="mySwiper"
                                    >
                                       <SwiperSlide>
                                          <div className="item">
                                             <Card className="mb-0">
                                                <Card.Body className="">
                                                   <div className="team-section text-center">
                                                      <div className="team-img">
                                                         <img src="../../../assets/images/users/9.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                      </div>
                                                      <h4 className="fw-500 dark-grey-text mt-4 mb-1">Tracey Poole</h4>
                                                      <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                      <p className="font-weight-normal dark-grey-text">
                                                         <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                      <div className="text-warning">
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star-half-full"> </i>
                                                      </div>
                                                   </div>
                                                </Card.Body>
                                             </Card>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="item">
                                             <Card className="mb-0">
                                                <Card.Body className="">
                                                   <div className="team-section text-center">
                                                      <div className="team-img">
                                                         <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                      </div>
                                                      <h4 className="fw-500 dark-grey-text mt-4 mb-1">Harry Walker</h4>
                                                      <h6 className="font-weight-normal blue-text ">Web Developer</h6>
                                                      <p className="font-weight-normal dark-grey-text">
                                                         <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                      <div className="text-warning">
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                      </div>
                                                   </div>
                                                </Card.Body>
                                             </Card>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="item">
                                             <Card className="mb-0">
                                                <Card.Body className="">
                                                   <div className="team-section text-center">
                                                      <div className="team-img">
                                                         <img src="../../../assets/images/users/10.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                      </div>
                                                      <h4 className="fw-500 dark-grey-text mt-4 mb-1">Paul White</h4>
                                                      <h6 className="font-weight-normal blue-text ">Photographer</h6>
                                                      <p className="font-weight-normal dark-grey-text">
                                                         <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                      <div className="text-warning">
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star-o"> </i>
                                                      </div>
                                                   </div>
                                                </Card.Body>
                                             </Card>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="item">
                                             <Card className="mb-0">
                                                <Card.Body className="">
                                                   <div className="team-section text-center">
                                                      <div className="team-img">
                                                         <img src="../../../assets/images/users/9.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                      </div>
                                                      <h4 className="fw-500 dark-grey-text mt-4 mb-1">Tracey Poole</h4>
                                                      <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                      <p className="font-weight-normal dark-grey-text">
                                                         <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                         <div className="text-warning"> 
                                                         <i className="fa fa-star me-1"> </i>
                                                          <i className="fa fa-star"> </i> 
                                                          <i className="fa fa-star"> </i> 
                                                          <i className="fa fa-star"> </i> 
                                                          <i className="fa fa-star-o"> </i>
                                                           </div>
                                                   </div>
                                                </Card.Body>
                                             </Card>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="item">
                                             <Card className="mb-0">
                                                <Card.Body className="">
                                                   <div className="team-section text-center">
                                                      <div className="team-img">
                                                         <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                      </div>
                                                      <h4 className="fw-500 dark-grey-text mt-4 mb-1">Harry Walker</h4>
                                                      <h6 className="font-weight-normal blue-text ">Web Developer</h6>
                                                      <p className="font-weight-normal dark-grey-text">
                                                         <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                      <div className="text-warning">
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                         <i className="fa fa-star"> </i>
                                                      </div>
                                                   </div>
                                                </Card.Body>
                                             </Card>
                                          </div>
                                       </SwiperSlide>
                                    </Swiper>
                                 </div>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded} timeout={3000}>
                           <Card.Body>
                              <div id="myCarousel" className="">
                                 <Swiper
                                    loop={true}
                                    autoplay={{
                                       delay: 2500,
                                       disableOnInteraction: false,
                                    }}
                                    centeredSlides={false}

                                    breakpoints={{
                                       640: {
                                          slidesPerView: 1,
                                          spaceBetween: 10,
                                       },
                                       768: {
                                          slidesPerView: 2,
                                          spaceBetween: 30,
                                       },
                                       1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                       },
                                       1400: {
                                          slidesPerView: 4,
                                          spaceBetween: 30,
                                       },
                                    }}

                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                 >
                                    <SwiperSlide>
                                       <div className="item">
                                          <Card className="mb-0">
                                             <Card.Body className="">
                                                <div className="team-section text-center">
                                                   <div className="team-img">
                                                      <img src="../../../assets/images/users/9.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                   </div>
                                                   <h4 className="fw-500 dark-grey-text mt-4 mb-1">Tracey Poole</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                   <p className="font-weight-normal dark-grey-text">
                                                      <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                   <div className="text-warning">
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star-half-full me-1"> </i>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Card>
                                       </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className="item">
                                          <Card className="mb-0">
                                             <Card.Body className="">
                                                <div className="team-section text-center">
                                                   <div className="team-img">
                                                      <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                   </div>
                                                   <h4 className="fw-500 dark-grey-text mt-4 mb-1">Harry Walker</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Developer</h6>
                                                   <p className="font-weight-normal dark-grey-text">
                                                      <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                   <div className="text-warning">
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Card>
                                       </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className="item">
                                          <Card className="mb-0">
                                             <Card.Body className="">
                                                <div className="team-section text-center">
                                                   <div className="team-img">
                                                      <img src="../../../assets/images/users/10.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                   </div>
                                                   <h4 className="fw-500 dark-grey-text mt-4 mb-1">Paul White</h4>
                                                   <h6 className="font-weight-normal blue-text ">Photographer</h6>
                                                   <p className="font-weight-normal dark-grey-text">
                                                      <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                   <div className="text-warning">
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star-o me-1"> </i>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Card>
                                       </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className="item">
                                          <Card className="mb-0">
                                             <Card.Body className="">
                                                <div className="team-section text-center">
                                                   <div className="team-img">
                                                      <img src="../../../assets/images/users/9.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                   </div>
                                                   <h4 className="fw-500 dark-grey-text mt-4 mb-1">Tracey Poole</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                   <p className="font-weight-normal dark-grey-text">
                                                      <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                   <div className="text-warning">
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star-half-full me-1"> </i>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Card>
                                       </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className="item">
                                          <Card className="mb-0">
                                             <Card.Body className="">
                                                <div className="team-section text-center">
                                                   <div className="team-img">
                                                      <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                   </div>
                                                   <h4 className="fw-500 dark-grey-text mt-4 mb-1">Harry Walker</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Developer</h6>
                                                   <p className="font-weight-normal dark-grey-text">
                                                      <i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                                   <div className="text-warning">
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star me-1"> </i>
                                                      <i className="fa fa-star"> </i>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Card>
                                       </div>
                                    </SwiperSlide>
                                 </Swiper>
                              </div>

                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  {Basicshow1 ?
                     <Card className="card2">
                        <Card.Header>
                           <Card.Title as="h4">Testimonials Styles 02</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow1(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow1} fullscreen={fullScreen1} onHide={() => setfullscreenShow1(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Testimonials Styles 02</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose1}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded1} timeout={3000}>
                              <Modal.Body>
                                 <div className="row" id="collapseExample-11">
                                    <div className="col-lg-12">
                                       <div>
                                          <div className="testimonial-style-02">
                                             <Swiper autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                             }} navigation={true} modules={[Navigation, EffectFade, Autoplay]} className="mySwiper1">


                                                <SwiperSlide >
                                                   <div className="item text-center">
                                                      <div className="card-body">
                                                         <div className="row">
                                                            <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                               <div className="testimonia">
                                                                  <div className="testimonia-img mx-auto mb-3">
                                                                     <img src="../../../assets/images/users/3.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                                  </div>
                                                                  <p>
                                                                     <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                                  </p>
                                                                  <div className="testimonia-data">
                                                                     <h4 className="fs-20">Heather Bell</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                   <div className="item text-center">
                                                      <div className="card-body">
                                                         <div className="row">
                                                            <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                               <div className="testimonia">
                                                                  <div className="testimonia-img mx-auto mb-3">
                                                                     <img src="../../../assets/images/users/8.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                                  </div>
                                                                  <p><i className="fa fa-quote-left"></i> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. </p>
                                                                  <div className="testimonia-data">
                                                                     <h4 className="fs-20">David Blake</h4>
                                                                     <div className="rating-stars">
                                                                        <input type="number" className="rating-value star" name="rating-stars-value" defaultValue="3" />
                                                                        <div className="rating-stars">
                                                                           <div className="rating-stars-container">
                                                                              <div className="rating-star sm text-warning">
                                                                                 <i className="fa fa-star"></i>
                                                                              </div>
                                                                              <div className="rating-star sm text-warning">
                                                                                 <i className="fa fa-star"></i>
                                                                              </div>
                                                                              <div className="rating-star sm text-warning">
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
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </SwiperSlide>

                                                <SwiperSlide >
                                                   <div className="item text-center">
                                                      <div className="card-body">
                                                         <div className="row">
                                                            <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                               <div className="testimonia">
                                                                  <div className="testimonia-img mx-auto mb-3">
                                                                     <img src="../../../assets/images/users/4.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                                  </div>
                                                                  <p><i className="fa fa-quote-left"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                                                  <div className="testimonia-data">
                                                                     <h4 className="fs-20">Sophie Carr</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </SwiperSlide>

                                             </Swiper>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded1} timeout={3000}>
                           <Card.Body>

                              <div className="row" id="collapseExample-11">
                                 <div className="col-lg-12">
                                    <div>
                                       <div className="testimonial-style-02">
                                          <Swiper autoplay={{
                                             delay: 2500,
                                             disableOnInteraction: false,
                                          }} navigation={true} modules={[Navigation, EffectFade, Autoplay]} className="mySwiper1">


                                             <SwiperSlide >
                                                <div className="item text-center">
                                                   <div className="card-body">
                                                      <div className="row">
                                                         <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <img src="../../../assets/images/users/3.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                               </div>
                                                               <p>
                                                                  <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                               </p>
                                                               <div className="testimonia-data">
                                                                  <h4 className="fs-20">Heather Bell</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                             <SwiperSlide >
                                                <div className="item text-center">
                                                   <div className="card-body">
                                                      <div className="row">
                                                         <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <img src="../../../assets/images/users/8.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                               </div>
                                                               <p><i className="fa fa-quote-left"></i> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. </p>
                                                               <div className="testimonia-data">
                                                                  <h4 className="fs-20">David Blake</h4>
                                                                  <div className="rating-stars">
                                                                     <input type="number" className="rating-value star" name="rating-stars-value" defaultValue="3" />
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>

                                             <SwiperSlide >
                                                <div className="item text-center">
                                                   <div className="card-body">
                                                      <div className="row">
                                                         <div className="col-xl-8 col-md-12 d-block mx-auto">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <img src="../../../assets/images/users/4.jpg" className="img-thumbnail rounded-circle text-center mx-auto img-swiper" alt="" />
                                                               </div>
                                                               <p><i className="fa fa-quote-left"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                                               <div className="testimonia-data">
                                                                  <h4 className="fs-20">Sophie Carr</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>

                                          </Swiper>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  {Basicshow2 ?
                     <Card className='card3'>
                        <Card.Header>
                           <Card.Title as="h4">Testimonials Styles 03</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow2(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow2} fullscreen={fullScreen2} onHide={() => setfullscreenShow2(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Contact Styles 03</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose2}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded2} timeout={3000}>
                              <Modal.Body>
                                 <Row>
                                    <Col lg={12}>
                                       <Swiper
                                          loop={true}
                                          centeredSlides={false}
                                          autoplay={{
                                             delay: 2500,
                                             disableOnInteraction: false,
                                          }}
                                          breakpoints={{
                                             640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                             },
                                             768: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                             },
                                             1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                             },
                                             1400: {
                                                slidesPerView: 4,
                                                spaceBetween: 30,
                                             },
                                          }}
                                          modules={[Autoplay]}
                                          className="mySwiper"
                                       >
                                          <SwiperSlide className="item">
                                             <Card className=" testimonial-card mb-0">
                                                <div className="card-up testbgpattern1"></div>
                                                <div className="test-img mx-auto white">
                                                   <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                                </div>
                                                <Card.Body className=" pt-3 text-center">
                                                   <h4 className="fw-500 mt-0 mb-2">Trevor Nash</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                   <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                                </Card.Body>
                                             </Card>
                                          </SwiperSlide>
                                          <SwiperSlide className="item">
                                             <div className="card testimonial-card mb-0">
                                                <div className="card-up testbgpattern2"></div>
                                                <div className="test-img mx-auto white">
                                                   <img src="../../../assets/images/users/7.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                                </div>
                                                <div className="card-body pt-3 text-center">
                                                   <h4 className="fw-500 mt-0 mb-2">Paul White</h4>
                                                   <h6 className="font-weight-normal blue-text ">Project Leader</h6>
                                                   <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                                </div>
                                             </div>
                                          </SwiperSlide>
                                          <SwiperSlide className="item">
                                             <div className="card testimonial-card mb-0">
                                                <div className="card-up testbgpattern3"></div>
                                                <div className="test-img mx-auto white">
                                                   <img src="../../../assets/images/users/5.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                                </div>
                                                <div className="card-body pt-3 text-center">
                                                   <h4 className="fw-500 mt-0 mb-2">Sophie Carr</h4>
                                                   <h6 className="font-weight-normal blue-text ">Ui/UX Designer</h6>
                                                   <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                                </div>
                                             </div>
                                          </SwiperSlide>
                                          <SwiperSlide className="item">
                                             <Card className=" testimonial-card mb-0">
                                                <div className="card-up testbgpattern1"></div>
                                                <div className="test-img mx-auto white">
                                                   <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                                </div>
                                                <Card.Body className=" pt-3 text-center">
                                                   <h4 className="fw-500 mt-0 mb-2">Trevor Nash</h4>
                                                   <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                   <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                                </Card.Body>
                                             </Card>
                                          </SwiperSlide>
                                          <SwiperSlide className="item">
                                             <div className="card testimonial-card mb-0">
                                                <div className="card-up testbgpattern2"></div>
                                                <div className="test-img mx-auto white">
                                                   <img src="../../../assets/images/users/7.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                                </div>
                                                <div className="card-body pt-3 text-center">
                                                   <h4 className="fw-500 mt-0 mb-2">Paul White</h4>
                                                   <h6 className="font-weight-normal blue-text ">Project Leader</h6>
                                                   <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                                </div>
                                             </div>
                                          </SwiperSlide>
                                       </Swiper>
                                    </Col>
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded2} timeout={3000}>
                           <Card.Body>
                              <Row>
                                 <Col lg={12}>
                                    <Swiper
                                       loop={true}
                                       centeredSlides={false}
                                       autoplay={{
                                          delay: 2500,
                                          disableOnInteraction: false,
                                       }}
                                       breakpoints={{
                                          640: {
                                             slidesPerView: 1,
                                             spaceBetween: 10,
                                          },
                                          768: {
                                             slidesPerView: 2,
                                             spaceBetween: 30,
                                          },
                                          1024: {
                                             slidesPerView: 3,
                                             spaceBetween: 30,
                                          },
                                          1400: {
                                             slidesPerView: 4,
                                             spaceBetween: 30,
                                          },
                                       }}
                                       modules={[Autoplay]}
                                       className="mySwiper"
                                    >
                                       <SwiperSlide className="item">
                                          <Card className=" testimonial-card mb-0">
                                             <div className="card-up testbgpattern1"></div>
                                             <div className="test-img mx-auto white">
                                                <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                             </div>
                                             <Card.Body className=" pt-3 text-center">
                                                <h4 className="fw-500 mt-0 mb-2">Trevor Nash</h4>
                                                <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                             </Card.Body>
                                          </Card>
                                       </SwiperSlide>
                                       <SwiperSlide className="item">
                                          <div className="card testimonial-card mb-0">
                                             <div className="card-up testbgpattern2"></div>
                                             <div className="test-img mx-auto white">
                                                <img src="../../../assets/images/users/7.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                             </div>
                                             <div className="card-body pt-3 text-center">
                                                <h4 className="fw-500 mt-0 mb-2">Paul White</h4>
                                                <h6 className="font-weight-normal blue-text ">Project Leader</h6>
                                                <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide className="item">
                                          <div className="card testimonial-card mb-0">
                                             <div className="card-up testbgpattern3"></div>
                                             <div className="test-img mx-auto white">
                                                <img src="../../../assets/images/users/5.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                             </div>
                                             <div className="card-body pt-3 text-center">
                                                <h4 className="fw-500 mt-0 mb-2">Sophie Carr</h4>
                                                <h6 className="font-weight-normal blue-text ">Ui/UX Designer</h6>
                                                <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide className="item">
                                          <Card className=" testimonial-card mb-0">
                                             <div className="card-up testbgpattern1"></div>
                                             <div className="test-img mx-auto white">
                                                <img src="../../../assets/images/users/1.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                             </div>
                                             <Card.Body className=" pt-3 text-center">
                                                <h4 className="fw-500 mt-0 mb-2">Trevor Nash</h4>
                                                <h6 className="font-weight-normal blue-text ">Web Designer</h6>
                                                <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                             </Card.Body>
                                          </Card>
                                       </SwiperSlide>
                                       <SwiperSlide className="item">
                                          <div className="card testimonial-card mb-0">
                                             <div className="card-up testbgpattern2"></div>
                                             <div className="test-img mx-auto white">
                                                <img src="../../../assets/images/users/7.jpg" className="img-thumbnail rounded-circle  alt=" alt="" />
                                             </div>
                                             <div className="card-body pt-3 text-center">
                                                <h4 className="fw-500 mt-0 mb-2">Paul White</h4>
                                                <h6 className="font-weight-normal blue-text ">Project Leader</h6>
                                                <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                    </Swiper>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>
            <Row>
               <Col xl={12}>
                  {Basicshow3 ?
                     <Card >
                        <Card.Header>
                           <Card.Title as="h4">Testimonials Styles 04</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow3(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow3} fullscreen={fullScreen3} onHide={() => setfullscreenShow3(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Contact Styles 04</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose3}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded3} timeout={3000}>
                              <Modal.Body>
                                 <Row >
                                    <Col md={12} className="">
                                       <div className="card-body">
                                          <Swiper autoplay={{
                                             delay: 2500,
                                             disableOnInteraction: false,
                                          }} navigation={true} modules={[Navigation, EffectFade, Autoplay]} className="mySwiper1">

                                             <SwiperSlide >
                                                <div className="item text-center">
                                                   <div className="card-body">
                                                      <div className="row">
                                                         <div className="col-xl-6 col-md-12">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <div className="d-flex justify-content-center">
                                                                     <img src="../../../assets/images/users/2.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                                  </div>
                                                                  <div className="testimonia-data mt-2">
                                                                     <h4 className="fs-20 mb-0">Tracey Parr</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                               <p>
                                                                  <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                               </p>
                                                            </div>
                                                         </div>
                                                         <div className="col-xl-6 col-md-12">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <div className="d-flex justify-content-center">
                                                                     <img src="../../../assets/images/users/6.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                                  </div>
                                                                  <div className="testimonia-data mt-2">
                                                                     <h4 className="fs-20 mb-0">Joan	Rees</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                               <p>
                                                                  <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                               </p>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                             <SwiperSlide >
                                                <div className="item text-center">
                                                   <div className="card-body">
                                                      <div className="row">
                                                         <div className="col-xl-6 col-md-12">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <div className="d-flex justify-content-center">
                                                                     <img src="../../../assets/images/users/8.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                                  </div>
                                                                  <div className="testimonia-data mt-2">
                                                                     <h4 className="fs-20 mb-0">Austin Peake</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                               <p>
                                                                  <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                               </p>
                                                            </div>
                                                         </div>
                                                         <div className="col-xl-6 col-md-12">
                                                            <div className="testimonia">
                                                               <div className="testimonia-img mx-auto mb-3">
                                                                  <div className="d-flex justify-content-center">
                                                                     <img src="../../../assets/images/users/4.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                                  </div>
                                                                  <div className="testimonia-data mt-2">
                                                                     <h4 className="fs-20 mb-0">Edward Lambert</h4>
                                                                     <div className="rating-stars">
                                                                        <div className="rating-stars-container">
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
                                                                              <i className="fa fa-star"></i>
                                                                           </div>
                                                                           <div className="rating-star sm text-warning">
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
                                                               <p>
                                                                  <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                               </p>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>


                                          </Swiper>
                                       </div>
                                    </Col>
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded3} timeout={3000}>
                           <Card.Body id="collapseExample-13">
                              <Row >
                                 <Col md={12} className="">
                                    <div className="card-body">
                                       <Swiper autoplay={{
                                          delay: 2500,
                                          disableOnInteraction: false,
                                       }} navigation={true} modules={[Navigation, EffectFade, Autoplay]} className="mySwiper1">

                                          <SwiperSlide >
                                             <div className="item text-center">
                                                <div className="card-body">
                                                   <div className="row">
                                                      <div className="col-xl-6 col-md-12">
                                                         <div className="testimonia">
                                                            <div className="testimonia-img mx-auto mb-3">
                                                               <div className="d-flex justify-content-center">
                                                                  <img src="../../../assets/images/users/2.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                               </div>
                                                               <div className="testimonia-data mt-2">
                                                                  <h4 className="fs-20 mb-0">Tracey Parr</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                            <p>
                                                               <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                            </p>
                                                         </div>
                                                      </div>
                                                      <div className="col-xl-6 col-md-12">
                                                         <div className="testimonia">
                                                            <div className="testimonia-img mx-auto mb-3">
                                                               <div className="d-flex justify-content-center">
                                                                  <img src="../../../assets/images/users/6.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                               </div>
                                                               <div className="testimonia-data mt-2">
                                                                  <h4 className="fs-20 mb-0">Joan	Rees</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                            <p>
                                                               <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                            </p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </SwiperSlide>
                                          <SwiperSlide >
                                             <div className="item text-center">
                                                <div className="card-body">
                                                   <div className="row">
                                                      <div className="col-xl-6 col-md-12">
                                                         <div className="testimonia">
                                                            <div className="testimonia-img mx-auto mb-3">
                                                               <div className="d-flex justify-content-center">
                                                                  <img src="../../../assets/images/users/8.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                               </div>
                                                               <div className="testimonia-data mt-2">
                                                                  <h4 className="fs-20 mb-0">Austin Peake</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                            <p>
                                                               <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                            </p>
                                                         </div>
                                                      </div>
                                                      <div className="col-xl-6 col-md-12">
                                                         <div className="testimonia">
                                                            <div className="testimonia-img mx-auto mb-3">
                                                               <div className="d-flex justify-content-center">
                                                                  <img src="../../../assets/images/users/4.jpg" className="img-thumbnail rounded-circle img-swiper" alt="" />
                                                               </div>
                                                               <div className="testimonia-data mt-2">
                                                                  <h4 className="fs-20 mb-0">Edward Lambert</h4>
                                                                  <div className="rating-stars">
                                                                     <div className="rating-stars-container">
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
                                                                           <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-star sm text-warning">
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
                                                            <p>
                                                               <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                                                            </p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </SwiperSlide>


                                       </Swiper>
                                    </div>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>
         </div>
      </>
   );
};
Testimonials.layout = "Contentlayout";
export default Testimonials
