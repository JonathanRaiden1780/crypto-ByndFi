import { useState } from 'react';
import { Card, Col, Dropdown, Form, ListGroup, ProgressBar, Row, Table } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { DayCounter, Delivered, DonutChart, Inventory, Monthly, Onhold, Pending, Sales, Totalproducts, WorldMap } from '../../../shared/data/ecommerce/poverdata';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const EcDashboard = () => {
   const [content, _setContent] = useState('');
   const [fullshow1, setfullshow1] = useState(true);

   return (
      <>

         <Seo title={"Ecommerce-Dashboard"} />
         <Pageheaderecommerce title="Ecommerce Dashboard" heading='Ecommerce' active='Dashboard' />

         <div className="main-container container-fluid">

            <div className="">
               {fullshow1 ?
                  <Card className="big-deal onsale border-0">
                     <Card.Body className=" position-relative align-items-center">
                        <Link href="#!" onClick={() => setfullshow1(false)} id="skip2"><i className="fe fe-x"></i></Link>
                        <Row>
                           <Col xl={8} lg={6} md={12}>

                              <div className="d-sm-flex">
                                 <img src="../../../assets/images/png/16.png" alt="" className="h-120" />
                                 <div className="ms-4">
                                    <h3 className="mb-0 mt-1">Deal Of The Day</h3>
                                    <p className="mt-2 mb-0">Dont miss on this 2days deals Buy now quantities are limited !!!!!</p>
                                    <div className="btn-list mt-3">
                                       <Link href="#!" className="btn btn-teal">Show deals</Link>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                           <Col xl={4} lg={6} md={12} className="text-end my-auto">
                              <div id="launch_date-1" className="ecommerce-counter">
                                 <DayCounter />
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card> : null}
            </div>
            <div className="ecommerce-dashboard-swiper">
               <Swiper
                  centeredSlides={false}
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                     640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                     },
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                     },
                     1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                     },
                  }}
                  autoplay={{
                     delay: 10000,
                     disableOnInteraction: false,
                  }}
               >
                  {/* <div id="small-categories-2" className="owl-carousel owl-carousel-icons2">
                     <div className="item"> */}
                  <SwiperSlide className='col-lg-3 '>
                     <div id="small-categories-2" className="owl-carousel owl-carousel-icons2">
                        <div className="item">
                           <Card>
                              <Card.Body>
                                 <h6 className="mb-3 text-start">Total Orders <span className="badge badge-success-light float-end"><i className="bi bi-arrow-up-right"></i> 2.02%</span></h6>
                                 <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-cart3 text-primary avatar avatar-md bg-primary-transparent br-5 fs-18"></i><span>1,520</span></h2>
                                 <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">Completed Orders<span className="float-end">487</span></h6>
                              </Card.Body>
                           </Card>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide className='col-lg-3'>
                     <div id="small-categories-2" className="owl-carousel owl-carousel-icons2">
                        <div className="item">
                           <Card>
                              <Card.Body>
                                 <h6 className="mb-3 text-start">Total Sales <span className="badge badge-danger-light float-end"><i className="bi bi-arrow-down-right"></i> 0.02%</span></h6>
                                 <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-pie-chart text-secondary avatar avatar-md bg-secondary-transparent br-5 fs-18"></i><span>12,534</span></h2>
                                 <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">This month<span className="float-end">287</span></h6>
                              </Card.Body>
                           </Card>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide className='col-lg-3 '>
                     <Card>
                        <Card.Body>
                           <h6 className="mb-3 text-start">Revenue <span className="badge badge-success-light float-end"><i className="bi bi-arrow-up-right"></i> 1.02%</span></h6>
                           <h2 className="d-flex align-items-center justify-content-between"><i className="bi-bar-chart text-info avatar avatar-md bg-info-transparent br-5 fs-18"></i><span>$52,347</span></h2>
                           <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">Total Revenue<span className="float-end">$2,534</span></h6>
                        </Card.Body>
                     </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                     <Card>
                        <Card.Body>
                           <h6 className="mb-3 text-start">Total Profit <span className="badge badge-success-light float-end"><i className="bi bi-arrow-up-right"></i> 3.01%</span></h6>
                           <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-wallet2 text-success avatar avatar-md bg-success-transparent br-5 fs-18"></i><span>$3,746</span></h2>
                           <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">Today Profit<span className="float-end">20%</span></h6>
                        </Card.Body>
                     </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                     <Card>
                        <Card.Body>
                           <h6 className="mb-3 text-start">Customer Visits <span className="badge badge-danger-light float-end"><i className="bi bi-arrow-down-right"></i> 0.03%</span></h6>
                           <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-eye text-danger avatar avatar-md bg-danger-transparent br-5 fs-18"></i><span>2635</span></h2>
                           <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">This Month<span className="float-end">72,5364</span></h6>
                        </Card.Body>
                     </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                     <Card>
                        <Card.Body>
                           <h6 className="mb-3 text-start">Pending Orders <span className="badge badge-success-light float-end"><i className="bi bi-arrow-up-right"></i> 2.02%</span></h6>
                           <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-clock text-purple avatar avatar-md bg-purple-transparent br-5 fs-18"></i><span>4,137</span></h2>
                           <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">This Month<span className="float-end">2,135</span></h6>
                        </Card.Body>
                     </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Card>
                        <Card.Body>
                           <h6 className="mb-3 text-start">Invoice <span className="badge badge-danger-light float-end"><i className="bi bi-arrow-down-right"></i> 2.24%</span></h6>
                           <h2 className="d-flex align-items-center justify-content-between"><i className="bi bi-receipt text-warning avatar avatar-md bg-warning-transparent br-5 fs-18"></i><span>$3,746</span></h2>
                           <h6 className="font-weight-normal mb-0 fs-14 text-muted text-start">This Month<span className="float-end">$5,624</span></h6>
                        </Card.Body>
                     </Card>
                  </SwiperSlide>
                  {/* </div>
                  </div> */}
               </Swiper>
            </div>
            <Row>
               <Col md={12} xl={8} lg={12} sm={12} xs={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Total Sales</Card.Title>
                        <Dropdown className="ms-auto">
                           <Dropdown.Toggle variant="" className=" btn-outline-default btn-sm fw-500 text-primary fs-12 d-flex align-items-center ">
                              <i className="bi bi-calendar-date fw-semibold mx-1"></i> Sort By: New
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Popular</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>

                     </Card.Header>
                     <Card.Body>
                        <div id="ecommerceChart">
                           <Sales />
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={4} lg={12} md={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Activity</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="product-timeline">
                           <ul className="timeline-1 mb-0">
                              <li className="mt-0">
                                 <i className="mdi mdi-map-marker-radius bg-primary text-fixed-white primary-dropshadow product-icon"></i>
                                 <Link href="#!" className="fw-500 mb-4 fs-15">Delivered</Link>
                                 <Link href="#!" className="float-end fs-13 text-muted badge badge-default-light">20 mins ago</Link>
                                 <p className="mb-0 text-muted fs-14">mobile phone</p>
                              </li>
                              <li className="mt-0">
                                 <i className="mdi mdi-cart-outline bg-info text-fixed-white info-dropshadow product-icon"></i>
                                 <Link href="#!" className="fw-500 mb-4 fs-15">Invoice</Link>
                                 <Link href="#!" className="float-end fs-12 text-muted badge badge-default-light">35 mins ago</Link>
                                 <p className="mb-0 text-muted fs-14">Sports Shoes</p>
                              </li>
                              <li className="mt-0">
                                 <i className="mdi mdi-file-outline bg-danger text-fixed-white danger-dropshadow product-icon"></i>
                                 <Link href="#!" className="fw-500 mb-4 fs-15">Dispatched</Link>
                                 <Link href="#!" className="float-end fs-12 text-muted badge badge-default-light">50 mins ago</Link>
                                 <p className="mb-0 text-muted fs-14">Digital watch</p>
                              </li>
                              <li className="mt-0">
                                 <i className="mdi mdi-delete-variant bg-success  success-dropshadow text-fixed-white product-icon"></i>
                                 <Link href="#!" className="fw-500 mb-4 fs-15">Received</Link>
                                 <Link href="#!" className="float-end fs-12 text-muted badge badge-default-light">1 hour ago</Link>
                                 <p className="mb-0 text-muted fs-14">Tablet</p>
                              </li>
                              <li className="mt-0 mb-1">
                                 <i className="mdi mdi-shield-outline bg-warning warning-dropshadow text-fixed-white product-icon"></i>
                                 <Link href="#!" className="fw-500 mb-4 fs-15">System Error</Link>
                                 <Link href="#!" className="float-end fs-12 text-muted badge badge-default-light">1 day ago</Link>
                                 <p className="mb-0 text-muted fs-14">Hand Bag</p>
                              </li>
                           </ul>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col md={12} lg={12} xl={4} xxl={5} sm={12}>
                  <Card className="overflow-hidden">
                     <Card.Header>
                        <Card.Title as="h4">Monthly Sessions</Card.Title>
                     </Card.Header>
                     <Card.Body className="pb-0">
                        <Row className="border-bottom pb-0 mb-0">
                           <Col md={6}>
                              <div className="d-flex align-items-center">
                                 <span className="avatar avatar-md bg-info-transparent rounded">
                                    <i className="bi bi-currency-dollar fs-20"></i>
                                 </span>
                                 <div className="flex-grow-1 ms-3">
                                    <p className="mb-1">Conversion Rate</p>
                                    <h4 className="mb-0">35,543 <i className="bi bi-arrow-up-circle fs-12 text-success"></i></h4>
                                 </div>
                              </div>
                           </Col>
                           <Col md={6}>
                              <div className="d-flex align-items-center mb-4">
                                 <span className="avatar avatar-md bg-primary-transparent rounded">
                                    <i className="bi bi-bootstrap-reboot fs-20"></i>
                                 </span>
                                 <div className="flex-grow-1 ms-3">
                                    <p className="mb-1">Transactions</p>
                                    <h4 className="mb-0">$8457 <i className="bi bi-arrow-up-circle fs-12 text-success"></i></h4>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                        <div id="monthlysession">
                           <Monthly />
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={6} lg={12} xl={4} xxl={4} sm={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Top Customers</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <ul className="top-customers list-unstyled mb-0">
                           <li className="list-item d-flex align-items-center">
                              <img src="../../../assets/images/users/1.jpg" alt="" className="avatar avatar-md rounded-circle d-block" />
                              <div className="wrapper w-100 ms-3">
                                 <div className="mb-0 d-flex">
                                    <div>
                                       <a href="#!" className="mb-1 fw-500 fs-15">Lillian Blake</a>
                                       <div>
                                          <span className="badge badge-primary-light me-1">Beauty</span>
                                          <span className="badge badge-secondary-light">Accessories</span>
                                       </div>
                                    </div>
                                    <div className="ms-auto  my-auto">
                                       <h5 className="mb-0 mt-0">$48,908</h5>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="list-item d-flex align-items-center">
                              <img src="../../../assets/images/users/14.jpg" alt="" className="avatar avatar-md rounded-circle d-block" />
                              <div className="wrapper w-100 ms-3">
                                 <div className="mb-0 d-flex">
                                    <div>
                                       <Link href="#!" className="mb-1 fw-500 fs-15">Tim Gray</Link>
                                       <div>
                                          <span className="badge badge-success-light me-1">Electronics</span>
                                          <span className="badge badge-danger-light">Mobile</span>
                                       </div>
                                    </div>
                                    <div className="ms-auto  my-auto">
                                       <h5 className="mb-0 mt-0">$32,146</h5>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="list-item d-flex align-items-center">
                              <img src="../../../assets/images/users/4.jpg" alt="" className="avatar avatar-md rounded-circle d-block" />
                              <div className="wrapper w-100 ms-3">
                                 <div className="mb-0 d-flex">
                                    <div>
                                       <Link href="#!" className="mb-1 fw-500 fs-15">Rose Nash</Link>
                                       <div>
                                          <span className="badge badge-info-light me-1">Groceries</span>
                                          <span className="badge badge-warning-light">mobile</span>
                                       </div>
                                    </div>
                                    <div className="ms-auto  my-auto">
                                       <h5 className="mb-0 mt-0">$652</h5>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="list-item d-flex align-items-center">
                              <img src="../../../assets/images/users/5.jpg" alt="" className="avatar avatar-md rounded-circle d-block" />
                              <div className="wrapper w-100 ms-3">
                                 <div className="mb-0 d-flex">
                                    <div>
                                       <Link href="#!" className="mb-1 fw-500 fs-15">Kevin North</Link>
                                       <div>
                                          <span className="badge badge-success-light me-1">Groceries</span>
                                          <span className="badge badge-info-light">Beauty</span>
                                       </div>
                                    </div>
                                    <div className="ms-auto  my-auto">
                                       <h5 className="mb-0 mt-0">$13,625</h5>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="list-item d-flex align-items-center">
                              <img src="../../../assets/images/users/12.jpg" alt="" className="avatar avatar-md rounded-circle d-block" />
                              <div className="wrapper w-100 ms-3">
                                 <div className="mb-0 d-flex">
                                    <div>
                                       <Link href="#!" className="mb-1 fw-500 fs-15">Robert Maph</Link>
                                       <div>
                                          <span className="badge badge-info-light me-1">Followers</span>
                                          <span className="badge badge-warning-light">HOMe Decore</span>
                                       </div>
                                    </div>
                                    <div className="ms-auto my-auto">
                                       <h5 className="mb-0 mt-0">$452</h5>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={4} xxl={3} md={6} lg={12}>
                  <Card className="custom-card overflow-hidden">
                     <Card.Header className=" d-flex">
                        <Card.Title as="h3">Daily Statistics</Card.Title>
                        <Link href="#!" className="btn btn-sm btn-primary-light d-flex align-items-center ms-auto">View all <i className="ri-arrow-right-line ms-1"></i></Link>
                     </Card.Header>
                     <Card.Body>
                        <ListGroup className="list-group mb-0 daily-statistics">
                           <ListGroup.Item className="list-group-item  p-0 border-0">
                              <div className="d-flex align-items-center">
                                 <div>
                                    <p className="fw-500 mb-2 fs-14 text-muted">Total Products</p>
                                    <h5 className="fw-500 mb-0 text-gray-700">2,042</h5>
                                 </div>
                                 <div className="ms-auto">
                                    <div id="line-graph1">
                                       <Totalproducts />
                                    </div>
                                    <Link href="#!" className="fs-12 mt-1 fw-400 text-muted float-end d-inline-flex">
                                       <span>See more</span>
                                       <span><i className="ms-1 ri-arrow-right-line"></i></span>
                                    </Link>
                                 </div>
                              </div>
                           </ListGroup.Item>
                           <ListGroup.Item className="p-0  border-0">
                              <div className="d-flex align-items-center">
                                 <div>
                                    <p className="fw-500 mb-2 fs-14 text-muted">Delivered</p>
                                    <h5 className="fw-500 mb-0 text-gray-700">24.13%</h5>
                                 </div>
                                 <div className="ms-auto">
                                    <div id="line-graph2">
                                       <Delivered />
                                    </div>
                                    <Link href="#!" className="fs-12 mt-1 fw-400 text-muted float-end d-inline-flex">
                                       <span>See more</span>
                                       <span><i className="ms-1 ri-arrow-right-line"></i></span>
                                    </Link>
                                 </div>
                              </div>
                           </ListGroup.Item>
                           <ListGroup.Item className="p-0 border-0">
                              <div className="d-flex align-items-center">
                                 <div>
                                    <p className="fw-500 mb-2 fs-14 text-muted">Pending</p>
                                    <h5 className="fw-500 mb-0 text-gray-700">10.02%</h5>
                                 </div>
                                 <div className="ms-auto">
                                    <div id="line-graph3">
                                       <Pending />
                                    </div>
                                    <Link href="#!" className="fs-12 mt-1 fw-400 text-muted float-end d-inline-flex">
                                       <span>See more</span>
                                       <span><i className="ms-1 ri-arrow-right-line"></i></span>
                                    </Link>
                                 </div>
                              </div>
                           </ListGroup.Item>
                           <ListGroup.Item className="mb-0 p-0 border-0">
                              <div className="d-flex align-items-center">
                                 <div>
                                    <p className="fw-500 mb-2 fs-14 text-muted">On Hold</p>
                                    <h5 className="fw-500 mb-0 text-gray-700">12.24%</h5>
                                 </div>
                                 <div className="ms-auto">
                                    <div id="line-graph4">
                                       <Onhold />
                                    </div>
                                    <Link href="#!" className="fs-12 mt-1 fw-400 text-muted float-end d-inline-flex">
                                       <span>See more</span>
                                       <span><i className="ms-1 ri-arrow-right-line"></i></span>
                                    </Link>
                                 </div>
                              </div>
                           </ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col md={12} sm={12} lg={12} xl={6}>
                  <Card className="custom-card overflow-hidden">
                     <Card.Header className="justify-content-between d-sm-flex d-block border-bottom-0">
                        <Card.Title as="h6">
                           Recent Orders
                        </Card.Title>
                        <Dropdown className="dropdown my-1">
                           <Dropdown.Toggle className="btn btn-outline-default btn-sm no-caret" variant='' data-bs-toggle="dropdown" aria-expanded="false">
                              Last Week<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                           </Dropdown.Toggle>
                           <Dropdown.Menu role="menu">
                              <Dropdown.Item href="#">Last Month</Dropdown.Item>
                              <Dropdown.Item href="#">Yearly</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </Card.Header>
                     <Card.Body className="p-0">
                        <div className="table-responsive">
                           <Table className="card-table table-vcenter text-nowrap mb-0">
                              <tbody className="active-tab">
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/4.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Amanda Nanes</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$229.99</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">24 May 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/10.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/10.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Peter Parkour</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$135.29</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">18 May 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/7.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/12.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Jackie Chen</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$1,299.99</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">29 May 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/4.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/5.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Ryan Gercia</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$249.29</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">05 Jun 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/6.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/14.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Hugh Jackma</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$499.99</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">15 May 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/12.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/13.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">Morph Jhon</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$805.10</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">29 May 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/users/1.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="lh-1">
                                             <span>
                                                <img src="../../../assets/images/users/9.jpg" alt="" className="avatar avatar-md rounded-circle me-2" />
                                             </span>
                                          </div>
                                          <div className="align-items-center">
                                             <span className="fs-12 text-muted">Name</span>
                                             <p className="mb-0">sweety Calson</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Price</span>
                                          <p className="mb-0 fw-semibold">$448.20</p>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="align-items-center">
                                          <span className="fs-12 text-muted">Delivery Date</span>
                                          <p className="mb-0">05 Jun 2022</p>
                                       </div>
                                    </td>
                                    <td>
                                       <span>
                                          <img src="../../../assets/images/media/14.jpg" alt="" className="avatar avatar-md br-3" />
                                       </span>
                                    </td>
                                    <td>
                                       <Link href="#!">
                                          <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                       </Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12} xl={6} lg={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h4">Product Status</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Row>
                           <Col md={6}>
                              <div className="h-200">
                                 <DonutChart />
                              </div>
                           </Col>
                           <Col md={5} lg={6}>
                              <div className="mb-4">
                                 <p className="mb-2">Completed<span className="float-end text-muted">90%</span></p>
                                 <ProgressBar now={90} className="  progress-xs" />
                              </div>
                              <div className="mb-4">
                                 <p className="mb-2">Pending<span className="float-end text-muted">70%</span></p>
                                 <ProgressBar now={70} variant='secondary' className="  progress-xs" />

                              </div>
                              <div className="mb-4">
                                 <p className="mb-2">Out Standing<span className="float-end text-muted">65%</span></p>
                                 <ProgressBar now={65} variant="success" className="  progress-xs" />

                              </div>
                              <div className="mb-2">
                                 <p className="mb-2">Started<span className="float-end text-muted">80%</span></p>
                                 <ProgressBar now={85} variant="danger" className="  progress-xs" />
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col xl={7} sm={12}>
                              <Card.Title className="mb-4" as="h4">Most Sales Locations</Card.Title>
                              <h2 className="mb-0">5700<span className="text-success fs-13 ms-2">(+08%)</span></h2>
                              <div className="mt-1">
                                 <div className="mb-4 mt-2">
                                    <p className="mb-2">Overview<span className="float-end text-muted">25.32%</span></p>
                                    <ProgressBar className="progress h-1" variant='secondary' now={80} />
                                 </div>
                                 <p className="mb-0 text-muted fs-14 mt-1">Itaque earum rerum hic tenetur a lihduir hyneu aliqua..</p>
                              </div>
                           </Col>
                           <div className="col-xl-5 col-sm-12 mt-4 mt-xl-0">
                              <div id="world-map-markers" className="worldh sales-location-map" >
                                 <WorldMap />

                              </div>
                           </div>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={8} md={12} lg={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Inventory</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Row>
                           <Col xl={5} lg={6} md={12}>
                              <div className="widget">
                                 <h6 className="mb-2">Revenue</h6>
                                 <h3 className="fw-500">$834,452<span className="text-success  fs-14 ms-3">( + 12 % )</span></h3>
                              </div>
                              <div className="overflow-hidden revenue-chart-ht">
                                 <Inventory />
                              </div>
                           </Col>
                           <Col xl={7} lg={6} md={12} className="mt-5 mt-lg-0">
                              <div className="table-responsive">
                                 <Table className="border mb-0 text-nowrap table-striped">
                                    <tbody>
                                       <tr className="border-bottom bg-body">
                                          <th className="p-2">Customer</th>
                                          <th className="p-2">Order Status</th>
                                          <th className="p-2">Order Date</th>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Pete Sariya</td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">02 Jul 2022</td>
                                       </tr>
                                       <tr className="border-bottom">

                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Robin </td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">07 Jul 2022</td>
                                       </tr>
                                       <tr className="border-bottom">

                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Jimmy </td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">12 Jul 2022</td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Barry Cade</td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">16 Jul 2022</td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Tara Zona</td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">20 Jul 2022</td>
                                       </tr>
                                       <tr>
                                          <td className="p-2"><i className="fa fa-check text-success me-2"></i>Steven Fisher </td>
                                          <td className="p-2">Shipped</td>
                                          <td className="p-2">25 Jul 2022</td>
                                       </tr>
                                    </tbody>
                                 </Table>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={12} md={12} sm={12} xl={4}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h4">Tickets</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <ul className="visitor users-images list-unstyled list-unstyled-border mb-0">
                           <li className="media mt-0 pt-0">
                              <img className="me-3 rounded-circle avatar avatar-md" src="../../../assets/images/users/12.jpg" alt="avatar" />
                              <div className="media-body mb-1">
                                 <div className="float-end"><Link href="#!" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link></div>
                                 <h6 className="media-title mb-0">Vanessa</h6>
                                 <small className="text-muted">sed do eiusmod </small>
                              </div>
                           </li>
                           <li className="media">
                              <img className="me-3 rounded-circle avatar avatar-md" src="../../../assets/images/users/5.jpg" alt="avatar" />
                              <div className="media-body mb-1 mt-1">
                                 <div className="float-end"><Link href="#!" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link></div>
                                 <h6 className="media-title mb-0"> Rutherford</h6>
                                 <small className="text-muted">sed do eiusmod </small>
                              </div>
                           </li>
                           <li className="media">
                              <img className="me-3 rounded-circle avatar avatar-md" src="../../../assets/images/users/8.jpg" alt="avatar" />
                              <div className="media-body mb-1 mt-1">
                                 <div className="float-end"><Link href="#!" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link></div>
                                 <h6 className="media-title mb-0">Elizabeth </h6>
                                 <small className="text-muted">sed do eiusmod </small>
                              </div>
                           </li>
                           <li className="media">
                              <img className="me-3 rounded-circle avatar avatar-md" src="../../../assets/images/users/9.jpg" alt="avatar" />
                              <div className="media-body mb-1 mt-1">
                                 <div className="float-end"><Link href="#!" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link></div>
                                 <h6 className="media-title mb-0">Anthony</h6>
                                 <small className="text-muted">sed do eiusmod </small>
                              </div>
                           </li>
                           <li className="media border-b0 mb-0">
                              <img className="me-3 rounded-circle avatar avatar-md" src="../../../assets/images/users/11.jpg" alt="avatar" />
                              <div className="media-body mb-0 mt-1">
                                 <div className="float-end"><Link href="#!" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link></div>
                                 <h6 className="media-title mb-0"> Lambert</h6>
                                 <small className="text-muted">sed do eiusmod</small>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card className="custom-card products-overview">
                     <Card.Header className="justify-content-between">
                        <Card.Title as="h6">
                           Products Overview
                        </Card.Title>
                        <div className="d-block d-sm-flex">
                           <div className="me-3">
                              <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                           </div>
                           <Dropdown className="mt-2 mt-sm-0">
                              <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false">
                                 Sort By
                              </Dropdown.Toggle>

                              <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                 <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                                 <Dropdown.Item href="#/action-2">Popular</Dropdown.Item>
                                 <Dropdown.Item href="#/action-3">Relevant</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-responsive">
                           <table className="table text-nowrap table-bordered">
                              <thead>
                                 <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Product Id</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Sales</th>
                                    <th scope="col">Revenue</th>
                                 </tr>
                              </thead>
                              <tbody className="fw-500">
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="me-2 lh-1">
                                             <span>
                                                <img src="../../../assets/images/media/7.jpg" className="avatar avatar-sm bg-transparent br-5 " alt="img" />
                                             </span>
                                          </div>
                                          <div className="fs-14">Furniture</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span className="fw-500">#1734-9743</span>
                                    </td>
                                    <td>
                                       $199.99
                                    </td>
                                    <td>
                                       <span className="badge bg-success-transparent">Available</span>
                                    </td>
                                    <td>
                                       <span className="">3,903</span>
                                    </td>
                                    <td>
                                       <span className="">$67,899.24</span>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="me-2 lh-1">
                                             <span>
                                                <img src="../../../assets/images/media/10.jpg" className="avatar avatar-sm bg-transparent br-5 " alt="img" />
                                             </span>
                                          </div>
                                          <div className="fs-14">Outdoor Blue Jacket</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span className="fw-500">#1234-4567</span>
                                    </td>
                                    <td>
                                       $1,299.99
                                    </td>
                                    <td>
                                       <span className="badge bg-success-transparent">Available</span>
                                    </td>
                                    <td>
                                       <span className="">12,435</span>
                                    </td>
                                    <td>
                                       <span className="">$3,24,781.92</span>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="me-2 lh-1">
                                             <span>
                                                <img src="../../../assets/images/media/11.jpg" className="avatar avatar-sm bg-transparent br-5 " alt="img" />
                                             </span>
                                          </div>
                                          <div className="fs-14">Mobile</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span className="fw-500">#1902-9883</span>
                                    </td>
                                    <td>
                                       $99.99
                                    </td>
                                    <td>
                                       <span className="badge bg-danger-transparent">Not Available</span>
                                    </td>
                                    <td>
                                       <span className="">5,143</span>
                                    </td>
                                    <td>
                                       <span className="">$76,102.76</span>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="me-2 lh-1">
                                             <span>
                                                <img src="../../../assets/images/media/4.jpg" className="avatar avatar-sm bg-transparent br-5 " alt="img" />
                                             </span>
                                          </div>
                                          <div className="fs-14">Digital watch</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span className="fw-500">#8745-1232</span>
                                    </td>
                                    <td>
                                       $79.00
                                    </td>
                                    <td>
                                       <span className="badge bg-warning-transparent">Limited Deal</span>
                                    </td>
                                    <td>
                                       <span className=""> 7,183</span>
                                    </td>
                                    <td>
                                       <span className="">$78,211.83</span>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <div className="me-2 lh-1">
                                             <span>
                                                <img src="../../../assets/images/media/6.jpg" className="avatar avatar-sm bg-transparent br-5 " alt="img" />
                                             </span>
                                          </div>
                                          <div className="fs-14">Women handbag</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span className="fw-500">#1962-9033</span>
                                    </td>
                                    <td>
                                       $199.99
                                    </td>
                                    <td>
                                       <span className="badge bg-primary-transparent">In Offer</span>
                                    </td>
                                    <td>
                                       <span className="">10,287</span>
                                    </td>
                                    <td>
                                       <span className="">$2,32,982.99</span>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card.Body>
                     <div className="card-footer">
                        <div className="d-flex align-items-center">
                           <div>
                              Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                           </div>
                           <div className="ms-auto">
                              <nav aria-label="Page navigation" className="pagination-style-4">
                                 <ul className="pagination mb-0">
                                    <li className="page-item disabled">
                                       <Link className="page-link" href="#!">
                                          Prev
                                       </Link>
                                    </li>
                                    <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                    <li className="page-item">
                                       <Link className="page-link text-primary" href="#!">
                                          next
                                       </Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   );
};
EcDashboard.layout = "Contentlayout";
export default EcDashboard;
