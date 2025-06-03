import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const UserCards = () => {
   return (
      <>
         <Seo title={"Usercards"} />
         <PageheaderDB heading="Components" active="Usercards" />
         <div className="main-container container-fluid">
            <Row>
               <Col xxl={3} lg={6} md={12}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="user-info">
                           <div className="user-info-img">
                              <img src="../../../assets/images/users/3.jpg" alt="user" className="avatar cover-image avatar-xxl rounded-circle" />
                           </div>
                           <div className="user-info-2">
                              <h4 className="mt-3 mb-1">Robert	McLean</h4>
                              <h6 className="text-muted font-weight-normal">Member Since: November 2018</h6>
                              <span className="user-info-rating mt-2">
                                 <Link href="#!"><i className="fa fa-star text-warning"> </i></Link>&nbsp;
                                 <Link href="#!"><i className="fa fa-star text-warning"> </i></Link>&nbsp;
                                 <Link href="#!"><i className="fa fa-star text-warning"> </i></Link>&nbsp;
                                 <Link href="#!"><i className="fa fa-star text-warning"> </i></Link>&nbsp;
                                 <Link href="#!"><i className="fa fa-star-o text-warning"> </i></Link>
                              </span>
                           </div>
                           <div className="mt-2"><Link href="#!" className="btn btn-primary"><i className="fa fa-rss"></i> Follow</Link></div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card className="">
                     <Card.Body className="">
                        <div className="item-user text-center">
                           <div className="userprofile">
                              <div className="userpic"> <img src="../../../assets/images/users/4.jpg" alt="" className="avatar cover-image avatar-xxl rounded-circle" /> </div>
                              <h4 className="username mb-0 mt-2">Alica Nestle</h4>
                              <p className="mb-2 font-weight-normal">Web Designer, USA</p>
                              <div className="text-center mb-2">
                                 <i className="fa fa-star text-warning"></i>&nbsp;
                                 <i className="fa fa-star text-warning"></i>&nbsp;
                                 <i className="fa fa-star text-warning"></i>&nbsp;
                                 <i className="fa fa-star-half-o text-warning"></i>&nbsp;
                                 <i className="fa fa-star-o text-warning"></i>
                              </div>
                              <div className="item-user-icons">
                                 <Link href="#!" className="facebook-bg mt-0"><i className="fa fa-facebook"></i></Link>&nbsp;
                                 <Link href="#!" className="twitter-bg"><i className="ri-twitter-x-line"></i></Link>&nbsp;
                                 <Link href="#!" className="google-bg"><i className="fa fa-google"></i></Link>&nbsp;
                                 <Link href="#!" className="dribbble-bg"><i className="fa fa-dribbble"></i></Link>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <div className="card overflow-hidden">
                     <div className="user-wideget-text bg-primary p-4">
                        <h4 className=" text-fixed-white">A Guide  to Interviewing  for Product Design Interships</h4>
                     </div>
                     <Card.Body>
                        <div className="widget-image">
                           <img src="../../../assets/images/users/2.jpg" className="rounded-circle" alt="User Avatar" />
                        </div>
                        <div className="user-wideget d-flex align-items-baseline">
                           <h6 className="text-muted me-2 mb-0">EvaTaylor</h6>
                           <div className="userwideget-footer float-end ms-auto">
                              <Link href="#!" className="text-muted"><span className="me-3 fs-13 text-muted"><i className="fa fa-heart text-danger fs-13 me-1"></i> 123</span></Link>
                              <Link href="#!" className="text-muted"><span className="me-3 fs-13 text-muted"><i className="fa fa-thumbs-o-up fs-13 me-1"></i> 23</span>	</Link>
                              <Link href="#!" className="text-muted"><span className="me-3 fs-13 text-muted"><i className="fa fa-clock-o fs-13 me-1"></i> 10 mins ago</span></Link>
                           </div>
                        </div>
                        <div className="mt-4">
                           <Button variant='primary'>Follow</Button>&nbsp;
                           <Button variant="secondary ">Message</Button>
                        </div>
                     </Card.Body>
                  </div>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <div className="card box-widget widget-user overflow-hidden">
                     <div className="widget-user-header bg-primary">
                        <h4 className="widget-user-username">Neil Jackson</h4>
                        <h6 className="widget-user-desc">Web Designer</h6>
                     </div>
                     <div className="widget-user-image"><img alt="User Avatar" className="rounded-circle" src="../../../assets/images/users/2.jpg" /></div>
                     <div className="box-footer">
                        <div className="row g-0 border-top">
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">1,234</h5><span className="text-muted tx-12">PRODUCTS</span>
                              </div>
                           </div>
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">2,234</h5><span className="text-muted tx-12">PROFITS</span>
                              </div>
                           </div>
                           <div className="col-4">
                              <div className="description-block">
                                 <h5 className="description-header">23</h5><span className="text-muted tx-12">LOSS</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <div className="card box-widget widget-user overflow-hidden">
                     <div className="widget-user-header bg-pink">
                        <h3 className="widget-user-username">Lily Mathis</h3>
                        <h6 className="widget-user-desc">Project Manger</h6>
                     </div>
                     <div className="widget-user-image"><img alt="User Avatar" className="rounded-circle" src="../../../assets/images/users/6.jpg" /></div>
                     <div className="box-footer">
                        <div className="row g-0 border-top">
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">1,234</h5><span className="text-muted tx-12">PRODUCTS</span>
                              </div>
                           </div>
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">2,234</h5><span className="text-muted tx-12">PROFITS</span>
                              </div>
                           </div>
                           <div className="col-4">
                              <div className="description-block">
                                 <h5 className="description-header">23</h5><span className="text-muted tx-12">LOSS</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <div className="card box-widget widget-user overflow-hidden">
                     <div className="widget-user-header bg-teal">
                        <h3 className="widget-user-username">Justin	Ince</h3>
                        <h6 className="widget-user-desc">Sales manger</h6>
                     </div>
                     <div className="widget-user-image"><img alt="User Avatar" className="rounded-circle" src="../../../assets/images/users/9.jpg" /></div>
                     <div className="box-footer">
                        <div className="row g-0 border-top">
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">1,234</h5><span className="text-muted tx-12">PRODUCTS</span>
                              </div>
                           </div>
                           <div className="col-4 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">2,234</h5><span className="text-muted tx-12">PROFITS</span>
                              </div>
                           </div>
                           <div className="col-4">
                              <div className="description-block">
                                 <h5 className="description-header">23</h5><span className="text-muted tx-12">LOSS</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card className="card-blog-overlay1 text-fixed-white border-0 overflow-hidden">
                     <Card.Body className="text-center profile-bg">
                        <div className="text-center">
                           <div className="userprofile item-user">
                              <div className="userpic"> <img src="../../../assets/images/users/7.jpg" alt="" className="rounded-circle avatar-xxl" /> </div>
                              <h3 className="mt-2 mb-2">Liam Nolan</h3>
                              <p>Web Designer</p>
                              <div className="btn-list">
                                 <Button className="btn btn-primary btn-sm">
                                    <span className="ri-twitter-x-line me-2"></span> <span>Follow</span>
                                 </Button>
                                 <Link href="#!" className="btn btn-success btn-sm">
                                    <span className="fa fa-pencil me-2"></span> <span>Edit profile</span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card>
                     <Card.Body>
                        <div className="inner-all">
                           <ul className="list-unstyled mb-0">
                              <li className="text-center border-bottom-0">
                                 <img data-no-retina="" className="img-circle img-responsive img-bordered-primary br-5" src="../../../assets/images/users/4.jpg" alt="John Doe" />
                              </li>
                              <li className="text-center">
                                 <h4 className="text-capitalize mt-3 mb-0">Siu Waid </h4>
                                 <p className="text-muted text-capitalize">web designer</p>
                              </li>
                              <li>
                                 <div className="d-grid">
                                    <Link href="#!" className="btn btn-primary text-center">UserAccount</Link>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="profile-pic mb-4">
                           <img src="../../../assets/images/users/10.jpg" width="150" className="rounded-circle" alt="user" />
                           <h4 className="mt-5 mb-0 fw-500">Rebbaca Noim</h4>
                           <Link href="mailto:liamnolan@gmail.com">rebaccanoim@gmail.com</Link>
                        </div>
                        <div className="chip">Photoshop</div>
                        <div className="chip">Web</div>
                        <div className="chip bg-blue text-fixed-white">+5</div>
                     </Card.Body>
                     <div className="card-footer py-0">
                        <Row className="text-center">
                           <div className="col-6 border-end text-center py-2">
                              <div className="text-center">
                                 <Link href="#!" className="fw-500"><i className="fa fa-envelope me-3"></i>Message</Link>
                              </div>
                           </div>
                           <div className="col-6 text-center py-2">
                              <Link href="#!" className="fw-500"><i className="fa fa-user me-3"></i>Profile</Link>
                           </div>
                        </Row>
                     </div>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card className="profile">
                     <div className="user-wideget user-wideget-widget widget-user">
                        <div className="widget-user-header "></div>
                        <div className="widget-user-image">
                           <img src="../../../assets/images/users/8.jpg" className="avatar avatar-xxl rounded-circle" alt="User Avatar" />
                        </div>
                     </div>
                     <Card.Body className="text-center">
                        <h4 className=" text-primary mb-1 mt-5">Samantha Slater</h4>
                        <div className="text-muted fs-14">Web Designer</div>
                        <p className="mt-4 mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex social-icons justify-content-around align-items-center font-18">
                           <Link className="text-primary" href="#!"><i className="fa fa-facebook"></i></Link>
                           <Link className="text-primary" href="#!"><i className="ri-twitter-x-line"></i></Link>
                           <Link className="text-primary" href="#!"><i className="fa fa-pinterest-p"></i></Link>
                           <Link className="text-primary" href="#!"><i className="fa fa-instagram"></i></Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="text-center mt-3 mb-0">
                           <img className="rounded-circle avatar-xxl w-9 h-9" src="../../../assets/images/users/5.jpg" alt="image" />
                        </div>
                        <div className="mb-1 mt-4 fs-20 fw-500">Jonathan Mills</div>
                        <div className="text-primary fs-14"><i className="bi bi-geo-alt me-2"></i>California, USA</div>
                        <p className="mt-4 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                           <div className="text-center">
                              <h3 className="text-primary mb-1">1300</h3>
                              <div className="text-muted tx-12">FOLLOWERS</div>
                           </div>
                           <div className="text-center">
                              <h3 className="text-primary mb-1">450</h3>
                              <div className="text-muted tx-12">LIKES</div>
                           </div>
                           <div className="text-center">
                              <h3 className="text-primary mb-1">12.7K</h3>
                              <div className="text-muted tx-12">VIEWS</div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card>
                     <Card.Body className="text-center">
                        <div className="text-center mt-3 mb-0">
                           <img className="rounded-circle avatar-xxl w-9 h-9" src="../../../assets/images/users/9.jpg" alt="image" />
                        </div>
                        <h4 className=" text-primary mb-1 mt-4">Megan Peters</h4>
                        <div className="text-muted fs-14">Web Designer</div>
                        <p className="mt-3 mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                           <div className="text-center">
                              <div className="h3 mb-2"><i className="icon icon-camera text-primary"></i></div>
                              <div className="text-muted mb-0">32 photos</div>
                           </div>
                           <div className="text-center">
                              <div className="h3 mb-2"><i className="icon icon-people text-primary"></i></div>
                              <div className="text-muted mb-0">87 friends</div>
                           </div>
                           <div className="text-center">
                              <div className="h3 mb-2"><i className="icon icon-heart text-primary"></i></div>
                              <div className="text-muted mb-0">2.3k likes</div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <Card className="card-blog-overlay2 text-fixed-white border-0 overflow-hidden">
                     <Card.Body className="text-center profile-bg">
                        <div className="text-center">
                           <div className="userprofile item-user">
                              <div className="userpic"> <img src="../../../assets/images/users/1.jpg" alt="" className="rounded-circle avatar-xxl" /> </div>
                              <h3 className="mt-2 mb-2">Victorina</h3>
                              <p>Web Designer, USA</p>
                              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <div className="text-center mb-2">
                                 <i className="fa fa-star text-warning me-1"></i>
                                 <i className="fa fa-star text-warning me-1"></i>
                                 <i className="fa fa-star text-warning me-1"></i>
                                 <i className="fa fa-star-half-o text-warning me-1"></i>
                                 <i className="fa fa-star-o text-warning"></i>
                              </div>
                              <div className="item-user-icons">
                                 <Link href="#!" className="facebook-bg mt-0"><i className="fa fa-facebook"></i></Link>&nbsp;
                                 <Link href="#!" className="twitter-bg"><i className="ri-twitter-x-line"></i></Link>&nbsp;
                                 <Link href="#!" className="google-bg"><i className="fa fa-google"></i></Link>&nbsp;
                                 <Link href="#!" className="dribbble-bg"><i className="fa fa-dribbble"></i></Link>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={3} lg={6} md={12}>
                  <div className="card box-widget widget-user overflow-hidden">
                     <div className="widget-user-header testbgpattern1"></div>
                     <div className="widget-user-image"><img alt="User Avatar" className="rounded-circle" src="../../../assets/images/users/3.jpg" /></div>
                     <Card.Body className="text-center">
                        <div className="item-user pro-user">
                           <h4 className="pro-user-username mt-4 mb-1">Jenna Side</h4>
                           <h6 className="pro-user-desc font-weight-normal text-muted">Web Designer</h6>
                           <div className="btn-list">
                              <Button variant='primary' className=" btn-sm">
                                 <span className="ri-twitter-x-line me-2"></span> <span>Follow</span>
                              </Button>
                              <Button variant='success' className="btn  btn-sm">
                                 <span className="fa fa-pencil me-2"></span> <span>Edit profile</span>
                              </Button>
                           </div>
                           <div className="item-user-icons mt-2">
                              <Link href="#!" className="facebook-bg"><i className="fa fa-facebook"></i></Link>&nbsp;
                              <Link href="#!" className="twitter-bg"><i className="ri-twitter-x-line"></i></Link>&nbsp;
                              <Link href="#!" className="google-bg"><i className="fa fa-google"></i></Link>&nbsp;
                              <Link href="#!" className="dribbble-bg"><i className="fa fa-dribbble"></i></Link>
                           </div>
                        </div>
                     </Card.Body>
                     <div className="card-footer p-0">
                        <Row>
                           <div className="col-6 border-end">
                              <div className="description-block">
                                 <h5 className="description-header">689k</h5><span className="text-muted">Followers</span>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="description-block">
                                 <h5 className="description-header">3,765</h5><span className="text-muted">Following</span>
                              </div>
                           </div>
                        </Row>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      </>
   );
};
UserCards.layout = "Contentlayout";
export default UserCards;
