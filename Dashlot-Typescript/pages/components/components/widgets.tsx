import { FC, useState } from 'react';
import { Card, Col, Form, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Select from 'react-select';
import { widget1 } from '../../../shared/data/components/widgetdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Widgets = () => {
   const [fullshow1, setfullshow1] = useState(true);
   const [fullshow2, setfullshow2] = useState(true);
   const [fullshow3, setfullshow3] = useState(true);
   const [fullshow4, setfullshow4] = useState(true);
   return (
      <>
         <Seo title={"Widgets"} />
         <PageheaderDB heading="Components" active="Widgets" />
         <div className="main-container container-fluid">
            <Row>
               <Col md={6} lg={6} xl={3} className="text-center">
                  <Card>
                     <Card.Body>
                        <div className="service-card text-center mb-7 mb-md-0">
                           <div className="bg-purple-transparent icon-bg icon-service text-purple">
                              <i className="fa fa-bandcamp"></i>
                           </div>
                           <div className="servic-data mt-3">
                              <h4>Web Design</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                              <Link className="btn btn-purple" href="#!">View  More</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={6} lg={6} xl={3} className="text-center">
                  <Card>
                     <Card.Body>
                        <div className="service-card text-center mb-7 mb-md-0">
                           <div className="bg-warning-transparent icon-bg icon-service text-warning">
                              <i className="fa fa-eercast"></i>
                           </div>
                           <div className="servic-data mt-3">
                              <h4>Web Developing</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                              <Link className="btn btn-warning" href="#!">View  More</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={6} lg={6} xl={3} className="text-center">
                  <Card>
                     <Card.Body>
                        <div className="service-card text-center">
                           <div className="bg-pink-transparent icon-bg icon-service text-pink">
                              <i className="fa fa-adjust"></i>
                           </div>
                           <div className="servic-data mt-3">
                              <h4>Services</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                              <Link className="btn btn-pink" href="#!">View  More</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={6} lg={6} xl={3} className="text-center">
                  <Card>
                     <Card.Body>
                        <div className="service-card text-center">
                           <div className="bg-primary-transparent icon-bg icon-service text-primary">
                              <i className="fa fa-cube"></i>
                           </div>
                           <div className="servic-data mt-3">
                              <h4>Management</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                              <Link className="btn btn-primary" href="#!">View  More</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={3} lg={6} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="item-box text-center">
                           <div className="stamp text-center stamp-lg bg-primary "><i className="fa fa-bandcamp"></i></div>
                           <div className="item-box-wrap">
                              <h5 className="mb-2">Creative solutions</h5>
                              <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} lg={6} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="item-box text-center">
                           <div className="stamp text-center stamp-lg bg-success"><i className="fa fa-cog"></i></div>
                           <div className="item-box-wrap">
                              <h5 className="mb-2">Trace your time</h5>
                              <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} lg={6} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="item-box text-center">
                           <div className="stamp text-center stamp-lg bg-info"><i className="fa fa-adjust"></i></div>
                           <div className="item-box-wrap">
                              <h5 className="mb-2">Business FrameWork</h5>
                              <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} lg={6} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="item-box text-center">
                           <div className="stamp text-center stamp-lg bg-danger"><i className="fa fa-eercast"></i></div>
                           <div className="item-box-wrap">
                              <h5 className="mb-2">Shares</h5>
                              <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col lg={6} md={12}>
                  <Card className="widgets-cards">
                     <Card.Body className="d-flex">
                        <div className="widgets-cards-icons">
                           <div className="wrp icon-circle bg-success">
                              <i className="fa fa-search icons"></i>
                           </div>
                        </div>
                        <div className="widgets-cards-data">
                           <div className="wrp text-wrapper">
                              <p>Search New Posts</p>
                              <p className="text-muted mt-1 mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={6} md={12}>
                  <Card className="widgets-cards">
                     <Card.Body className="d-flex">
                        <div className="widgets-cards-icons">
                           <div className="wrp icon-circle bg-warning">
                              <i className="fa fa-newspaper-o icons"></i>
                           </div>
                        </div>
                        <div className="widgets-cards-data">
                           <div className="wrp text-wrapper">
                              <p>Trend News</p>
                              <p className="text-muted mt-1 mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={4} md={6}>
                  <div className="info-box">
                     <span className="info-box-icon bg-info"><i className="fa fa-lightbulb-o text-fixed-white"></i></span>
                     <div className="info-box-content">
                        <span className="info-box-text">One request many offers</span>
                        <Link href="#!" className="info-box-number">good link</Link>
                     </div>
                  </div>
               </Col>
               <Col xl={4} md={6}>
                  <div className="info-box">
                     <span className="info-box-icon bg-danger"><i className="fa fa-cog text-fixed-white"></i></span>
                     <div className="info-box-content">
                        <span className="info-box-text">One request many offers</span>
                        <Link href="#!" className="info-box-number">good link</Link>
                     </div>
                  </div>
               </Col>
               <Col xl={4} md={12}>
                  <div className="info-box">
                     <span className="info-box-icon bg-success"><i className="fa fa-clock-o text-fixed-white"></i></span>
                     <div className="info-box-content">
                        <span className="info-box-text">One request many offers</span>
                        <Link href="#!" className="info-box-number">good link</Link>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col lg={12}>
                  <Card>
                     <Card.Body>
                        <div className="support">
                           <Row className="text-fixed-white">
                              <Col xl={4} lg={12} md={12} className="border-end mb-xl-0 mb-3">
                                 <div className="support-service bg-primary">
                                    <i className="fa fa-phone  float-start"></i>
                                    <h6>+68 872-627-9735</h6>
                                    <p>Free Support!</p>
                                 </div>
                              </Col>
                              <Col xl={4} lg={12} md={12} className="border-end mb-xl-0 mb-3">
                                 <div className="support-service bg-success">
                                    <i className="fa fa-clock-o  float-start"></i>
                                    <h6>Mon-Sat(10:00-19:00)</h6>
                                    <p>Working Hours!</p>
                                 </div>
                              </Col>
                              <div className="col-xl-4 col-lg-12 col-md-12 mb-xl-0">
                                 <div className="support-service bg-danger">
                                    <i className="fa fa-envelope-o float-start"></i>
                                    <h6>domain@gmail.com</h6>
                                    <p>Support us!</p>
                                 </div>
                              </div>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col lg={12}>
                  <Card>
                     <Card.Body>
                        <div className="support">
                           <Row className="text-fixed-white">
                              <Col xl={4} lg={12} md={12}>
                                 <div className="support-service  mb-xl-0 mb-3">
                                    <i className="fa fa-phone  float-start"></i>
                                    <h6>+68 872-627-9735</h6>
                                    <p>Free Support!</p>
                                 </div>
                              </Col>
                              <Col xl={4} lg={12} md={12}>
                                 <div className="support-service  mb-xl-0 mb-3">
                                    <i className="fa fa-clock-o  float-start"></i>
                                    <h6>Mon-Sat(10:00-19:00)</h6>
                                    <p>Working Hours!</p>
                                 </div>
                              </Col>
                              <Col xl={4} lg={12} md={12}>
                                 <div className="support-service  mb-xl-0">
                                    <i className="fa fa-envelope-o float-start"></i>
                                    <h6>domain@gmail.com</h6>
                                    <p>Support us!</p>
                                 </div>
                              </Col>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={3} md={6}>
                  {fullshow1 ?
                     <Card className="bg-blue text-fixed-white">
                        <Card.Header className="bg-blue border-bottom-light">
                           <Card.Title className="text-fixed-white mb-0">Task</Card.Title>
                           <div className="card-options ms-auto">
                              <Link href="#!" onClick={() => setfullshow1(false)} className="card-options-remove"
                                 data-bs-toggle="card-remove"><i className="fe fe-x text-fixed-white"></i>
                              </Link>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <div className="task-img text-center">
                              <i className="fe fe-chrome fs-50 text-fixed-white"></i>
                              <h5 className="mt-2 mb-0">Purchase completed</h5>
                           </div>
                        </Card.Body>
                     </Card> : null}
               </Col>
               <Col xl={3} md={6}>
                  {fullshow2 ?
                     <Card className="bg-pink text-fixed-white">

                        <div className="card-header bg-pink border-bottom-light">
                           <Card.Title className="text-fixed-white mb-0">Task</Card.Title>
                           <div className="card-options ms-auto">
                              <Link href="#!" onClick={() => setfullshow2(false)} className="card-options-remove"
                                 data-bs-toggle="card-remove"><i className="fe fe-x text-fixed-white"></i>
                              </Link>
                           </div>
                        </div>
                        <Card.Body>
                           <div className="task-img text-center">
                              <i className="fe fe-compass fs-50 text-fixed-white"></i>
                              <h5 className="mt-2 mb-0">Add to Cart</h5>
                           </div>
                        </Card.Body>
                     </Card> : null}
               </Col>
               <Col xl={3} md={6}>
                  {fullshow3 ?
                     <Card className="bg-info text-fixed-white">
                        <Card.Header className="bg-info border-bottom-light">
                           <Card.Title className="text-fixed-white mb-0">Task</Card.Title>
                           <div className="card-options ms-auto">
                              <Link href="#!" onClick={() => setfullshow3(false)} className="card-options-remove"
                                 data-bs-toggle="card-remove"><i className="fe fe-x text-fixed-white"></i>
                              </Link>                           </div>
                        </Card.Header>
                        <Card.Body>
                           <div className="task-img text-center">
                              <i className="fe fe-life-buoy fs-50 text-fixed-white"></i>
                              <h5 className="mt-2 mb-0 text-fixed-white">Remove from Cart</h5>
                           </div>
                        </Card.Body>
                     </Card> : null}
               </Col>
               <Col xl={3} md={6}>
                  {fullshow4 ?
                     <Card className="bg-danger text-fixed-white">
                        <Card.Header className=" bg-danger border-bottom-light">
                           <Card.Title className="text-fixed-white mb-0">Task</Card.Title>
                           <div className="card-options ms-auto">
                              <Link href="#!" onClick={() => setfullshow4(false)} className="card-options-remove"
                                 data-bs-toggle="card-remove"><i className="fe fe-x text-fixed-white"></i>
                              </Link>                               </div>
                        </Card.Header>
                        <Card.Body>
                           <div className="task-img text-center">
                              <i className="fe fe-slack fs-50 text-fixed-white"></i>
                              <h5 className="mt-2 mb-0 text-fixed-white">Send Feedback</h5>
                           </div>
                        </Card.Body>
                     </Card> : null}
               </Col>
            </Row>
            <Row>
               <Col xl={3} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="status-info text-center">
                           <div className="status-img">
                              <img src="../../../assets/images/other/2.png" alt="task" />
                           </div>
                           <h3 className="text-uppercase mt-2 mb-2">Status Verified</h3>
                           <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                           <Link href="#!" className="btn btn-success text-uppercase">Confirm</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} md={6}>
                  <Card>
                     <Card.Body>
                        <div className="task-info text-center">
                           <div className="task-img">
                              <img src="../../../assets/images/other/1.png" alt="task" />
                           </div>
                           <h3 className="text-uppercase mt-3 mb-3">Status Denied</h3>
                           <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                           <Link href="#!" className="btn btn-danger text-uppercase">Confirm</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} md={6}>
                  <Card className="card-blog-overlay6 minh-210 border-0 overflow-hidden">
                     <Card.Body className="text-center">
                        <div className="card-product">
                           <h3 className="text-fixed-white fw-500 fs-30">$15</h3>
                           <h4 className="text-fixed-white fw-500 text-uppercase mb-4">Sport shoes</h4>
                           <p className="text-fixed-white-50">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                           <Link href="#!" className="btn btn-primary mt-3">Shop Now</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={3} md={6}>
                  <Card>
                     <Card.Body className="h-100">
                        <div className="subnews text-center">
                           <div className="subnews-img mb-2 p-3">
                              <img src="../../../assets/images/svg/email.svg" alt="" className="w-25" />
                           </div>
                           <div className="subnews-info mt-3">
                              <h4 className=" mb-4">Subscribe to Our Daily Newsletter</h4>
                              <h6 className="text-muted">Be the first to be notified about our new content giveways!</h6>
                           </div>
                           <div className="subnews-input input-group mt-3">
                              <input type="text" className="form-control" placeholder="Email" />
                              <button type="button" className="btn btn-white">
                                 <i className="fa fa-search" aria-hidden="true"></i>
                              </button>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={3} sm={6} className="item-all-cat">
                  <div className="item-all-card text-dark text-center card mb-4">
                     <Link href="#!"></Link>
                     <div className="iteam-all-icon">
                        <img src="../../../assets/images/svg/icon1.svg" className="imag-service" alt="Sales" />
                     </div>
                     <div className="item-all-text mt-3">
                        <h5 className="text-default fw-500">User profile</h5>
                        <button className="btn btn-primary rounded-pill">Create your Profile</button>
                     </div>
                  </div>
               </Col>
               <Col xl={3} sm={6} className="item-all-cat">
                  <div className="item-all-card text-dark text-center card mb-4">
                     <Link href="#!"></Link>
                     <div className="iteam-all-icon">
                        <img src="../../../assets/images/svg/icon2.svg" className="imag-service" alt="Sales" />
                     </div>
                     <div className="item-all-text mt-3">
                        <h5 className="text-default fw-500">Upload Your Resume</h5>
                        <button className="btn btn-secondary rounded-pill">Upload</button>
                     </div>
                  </div>
               </Col>
               <Col xl={3} sm={6} className="item-all-cat">
                  <div className="item-all-card text-dark text-center card mb-4">
                     <Link href="#!"></Link>
                     <div className="iteam-all-icon h-100">
                        <img src="../../../assets/images/svg/icon3.svg" className="imag-service" alt="Sales" />
                     </div>
                     <div className="item-all-text mt-3">
                        <h5 className="text-default fw-500">Go With Premium Jobs </h5>
                        <button className="btn btn-info rounded-pill">Pay Premium</button>
                     </div>
                  </div>
               </Col>
               <Col xl={3} sm={6} className="item-all-cat">
                  <div className="item-all-card text-dark text-center card mb-4">
                     <Link href="#!"></Link>
                     <div className="iteam-all-icon">
                        <img src="../../../assets/images/svg/icon4.svg" className="imag-service" alt="Sales" />
                     </div>
                     <div className="item-all-text mt-3">
                        <h5 className="text-default fw-500">Companies</h5>
                        <button className="btn btn-success rounded-pill">Search</button>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col xxl={4} md={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Check List</Card.Title>
                        <div className="card-options ms-auto">
                           <Link className="btn btn-sm btn-primary " href="#!"><i className="fa fa-plus me-1"></i> Add Task</Link>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="custom-controls-stacked checklist-task">
                           <div className="form-check mb-3 checklist-desc">
                              <Form.Check className="" type="checkbox" id="check_list1" defaultChecked />
                              <label className="form-check-label d-block" htmlFor="check_list1">vero eos et accusamus et iusto odio dignissimos ducimus</label>
                              <span className="check-data d-flex mt-2">
                                 <span className="text-muted fs-12">Completed 2h ago</span>
                                 <span className="check-icon ms-auto">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                       <span className="text-muted me-1" data-bs-toggle="tooltip" title="Edit"><i className="fa fa-pencil-square-o "></i> </span>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                       <span className="text-muted" data-bs-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></span>
                                    </OverlayTrigger>

                                 </span>
                              </span>
                           </div>
                           <div className="form-check mb-3 checklist-desc">
                              <Form.Check className="" type="checkbox" id="check_list2" />
                              <label className="form-check-label d-block" htmlFor="check_list2">et iusto odio dignissimos ducimus</label>
                              <span className="check-data d-flex mt-2">
                                 <span className="text-muted fs-12">Completed 8h ago</span>
                                 <span className="check-icon ms-auto">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                       <span className="text-muted me-1" data-bs-toggle="tooltip" title="Edit"><i className="fa fa-pencil-square-o "></i> </span>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                       <span className="text-muted" data-bs-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></span>
                                    </OverlayTrigger>
                                 </span>
                              </span>
                           </div>
                           <div className="form-check mb-3 checklist-desc">
                              <Form.Check className="" type="checkbox" id="check_list3" defaultChecked />
                              <label className="form-check-label d-block" htmlFor="check_list3">eos  accusamus  iusto odio dignissimos</label>
                              <span className="check-data d-flex mt-2">
                                 <span className="text-muted fs-12">Completed 4h ago</span>
                                 <span className="check-icon ms-auto">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                       <span className="text-muted me-1" data-bs-toggle="tooltip" title="Edit"><i className="fa fa-pencil-square-o "></i> </span>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                       <span className="text-muted" data-bs-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></span>
                                    </OverlayTrigger>
                                 </span>
                              </span>
                           </div>
                           <div className="form-check mb-3 checklist-desc">
                              <Form.Check className="" type="checkbox" id="check_list5" />
                              <label className="form-check-label d-block" htmlFor="check_list5">eos  accusamus  iusto odio dignissimos</label>
                              <span className="check-data d-flex mt-2">
                                 <span className="text-muted fs-12">Completed 4h ago</span>
                                 <span className="check-icon ms-auto">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                       <span className="text-muted me-1" data-bs-toggle="tooltip" title="Edit"><i className="fa fa-pencil-square-o "></i> </span>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                       <span className="text-muted" data-bs-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></span>
                                    </OverlayTrigger>
                                 </span>
                              </span>
                           </div>
                           <div className="form-check checklist-desc">
                              <Form.Check className="" type="checkbox" id="check_list4" />
                              <label className="form-check-label d-block" htmlFor="check_list4">vet accusamus et iusto odio dignissimos</label>
                              <span className="check-data d-flex mt-2">
                                 <span className="text-muted fs-12">Completed 5h ago</span>
                                 <span className="check-icon ms-auto">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                       <span className="text-muted me-1" data-bs-toggle="tooltip" title="Edit"><i className="fa fa-pencil-square-o "></i> </span>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                       <span className="text-muted" data-bs-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></span>
                                    </OverlayTrigger>
                                 </span>
                              </span>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={4} md={6}>
                  <Card>
                     <div className="card-header d-block d-sm-flex justify-content-between align-items-center">
                        <Card.Title as="h3">Assign</Card.Title>
                        <div className="mt-2 mt-sm-0">
                           <div className="input-group">
                              <Form.Control type="text" className="form-control" placeholder="Find member name" />
                              <button type="button" className="btn btn-white box-shadow-0">
                                 <i className="fa fa-search" aria-hidden="true"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <Card.Body>
                        <div className="assign-user">
                           <div className="media m-0 mt-0 ">
                              <img className="avatar rounded-circle avatar-md me-3" src="../../../assets/images/users/8.jpg" alt="avatar-img" />
                              <div className="media-body">
                                 <Link href="#!" className="text-default fw-500">John Paige</Link>
                                 <p className="text-muted ">johan@gmail.com</p>
                              </div>
                           </div>
                           <div className="media mt-2 ">
                              <span className="avatar cover-image avatar-md rounded-circle bg-pink fw-500 text-fixed-white fs-20 me-3">LQ</span>
                              <div className="media-body">
                                 <Link href="#!" className="text-default fw-500">Lillian Quinn</Link>
                                 <p className="text-muted">lilliangore</p>
                              </div>
                           </div>
                           <div className="media mt-2 ">
                              <span className="avatar cover-image avatar-md rounded-circle bg-primary fw-500 fs-20 text-fixed-white me-3">IH</span>
                              <div className="media-body">
                                 <Link href="#!" className="text-default fw-500">Irene Harris</Link>
                                 <p className="text-muted">ireneharris@gmail.com</p>
                              </div>
                           </div>
                           <div className="media mt-2 ">
                              <span className="avatar cover-image avatar-md rounded-circle bg-primary fw-500 fs-20 text-fixed-white me-3">IH</span>
                              <div className="media-body">
                                 <Link href="#!" className="text-default fw-500">Irene Harris</Link>
                                 <p className="text-muted">ireneharris@gmail.com</p>
                              </div>
                           </div>
                           <div className="media mt-2 ">
                              <img className="avatar rounded-circle avatar-md me-3" src="../../../assets/images/users/2.jpg" alt="avatar-img" />
                              <div className="media-body">
                                 <Link href="#!" className="text-default fw-500">Harry Fisher</Link>
                                 <p className="text-muted mb-0">harryuqt</p>
                              </div>
                           </div>

                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xxl={4} ml={12}>
                  <Card className="overflow-hidden">
                     <div className="trend-bg p-4 bg-primary">
                        <h6 className="text-fixed-white text-center mb-0 text-uppercase fw-500">See What's Trending</h6>
                     </div>
                     <Card.Body>
                        <div className="trend">
                           <div className="visitor-list">
                              <div className="media m-0 mt-0">
                                 <span className="avatar  cover-image bg-gray-500 text-fixed-white rounded-circle"><i className="fa fa-chevron-right fs-10"></i></span>
                                 <div className="media-body">
                                    <Link href="#!" className="text-default fw-500 text-uppercase">More Beauty Products</Link>
                                    <p className="text-muted ">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                                 </div>
                              </div>
                              <div className="media mt-2">
                                 <span className="avatar  cover-image bg-gray-500 text-fixed-white rounded-circle"><i className="fa fa-chevron-right fs-10"></i></span>
                                 <div className="media-body">
                                    <Link href="#!" className="text-default fw-500 text-uppercase">Skills For UI Designers</Link>
                                    <p className="text-muted ">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                                 </div>
                              </div>
                              <div className="media mt-2">
                                 <span className="avatar  cover-image bg-gray-500 text-fixed-white rounded-circle"><i className="fa fa-chevron-right fs-10"></i></span>
                                 <div className="media-body">
                                    <Link href="#!" className="text-default fw-500 text-uppercase">Very easy to Buy a car</Link>
                                    <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                                 </div>
                              </div>
                              <div className="media mt-2">
                                 <span className="avatar  cover-image bg-gray-500 text-fixed-white rounded-circle"><i className="fa fa-chevron-right fs-10"></i></span>
                                 <div className="media-body">
                                    <Link href="#!" className="text-default fw-500 text-uppercase">Management Resources</Link>
                                    <p className="text-muted mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={4} md={4}>
                  <Card>
                     <div className="item-card">
                        <div className="item-card-desc">
                           <Link href="#!"></Link>
                           <div className="item-card-img">
                              <img src="../../../assets/images/media/45.png" alt="img" className="br-tr-7 br-tl-7" />
                           </div>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col xl={4} md={4}>
                  <Card>
                     <div className="item-card">
                        <div className="item-card-desc">
                           <Link href="#!"></Link>
                           <div className="item-card-img">
                              <img src="../../../assets/images/media/40.png" alt="img" className="br-tr-7 br-tl-7" />
                           </div>
                           <div className="item-card-text">
                              <h4>Home &amp; Furniture</h4>
                              <button className="btn btn-primary">View More</button>
                           </div>
                        </div>
                        <div className="item-card-btn">

                        </div>
                     </div>
                  </Card>
               </Col>
               <Col xl={4} md={4}>
                  <Card>
                     <div className="item-card">
                        <div className="item-card-desc data1">
                           <Link href="#!"></Link>
                           <div className="item-card-img">
                              <img src="../../../assets/images/media/53.png" alt="img" className="br-tr-7 br-tl-7" />
                           </div>
                        </div>
                        <div className="item-card-btn item-card-btn1">
                           <h3 className="text-fixed-white">Vehicles</h3>
                           <Link href="#!" className="btn btn-primary">View More</Link>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={4} md={6} lg={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">You may also like</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="category-card">
                           <div className="media  mt-0">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-5" src="../../../assets/images/background/1.jpg" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">Drones</h6>
                                 <p className="mb-0">Mouse</p>
                                 <span className="text-muted fs-12"><i className="fa fa-play me-2"></i> 1.922.569</span>
                              </div>
                           </div>
                           <div className="media  ">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-5" src="../../../assets/images/background/2.jpg" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">The Second law</h6>
                                 <p className="mb-0">Mouse</p>
                                 <span className="text-muted fs-12"><i className="fa fa-play me-2"></i> 1.922.569</span>
                              </div>
                           </div>
                           <div className="media  ">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-5" src="../../../assets/images/background/3.jpg" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">Origin of Symmetry</h6>
                                 <p className="mb-0">Mouse</p>
                                 <span className="text-muted fs-12"><i className="fa fa-play me-2"></i> 1.922.569</span>
                              </div>
                           </div>
                           <div className="media  ">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-5" src="../../../assets/images/background/4.jpg" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">The Resistance</h6>
                                 <p className="mb-0">Mouse</p>
                                 <span className="text-muted fs-12"><i className="fa fa-play me-2"></i> 1.922.569</span>
                              </div>
                           </div>
                           <div className="media  ">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-5" src="../../../assets/images/background/5.jpg" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">The Resistance</h6>
                                 <p className="mb-0">Mouse</p>
                                 <span className="text-muted fs-12"><i className="fa fa-play me-2"></i> 1.922.569</span>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={4} md={6} lg={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Search By Category</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Form.Group className="mb-3">
                           <Form.Control type="text" id="name14" placeholder="What are you looking for?" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <Form.Control type="text" id="name15" placeholder="Location" />
                        </Form.Group>
                        <Form.Group className=" mb-3">
                           <Select options={widget1} name="category" classNamePrefix="Select2" className="" />

                        </Form.Group>
                        <Form.Group className="mb-3">
                           <label className="form-label mb-2">More Filters</label>
                           <div className="custom-controls-stacked filter-checkbox4">
                              <div className="form-check">
                                 <Form.Check type="checkbox" className="" id="filter_1" />
                                 <label htmlFor="filter_1" className="form-check-label">Accepted Bank Cards</label>
                              </div>
                              <div className="form-check">
                                 <Form.Check type="checkbox" className="" id="filter_2" />
                                 <label htmlFor="filter_2" className="form-check-label">Car Parking</label>
                              </div>
                              <div className="form-check">
                                 <Form.Check type="checkbox" className="" id="filter_3" />
                                 <label htmlFor="filter_3" className="form-check-label">Credit Card</label>
                              </div>
                              <div className="form-check">
                                 <Form.Check type="checkbox" className="" id="filter_4" />
                                 <label htmlFor="filter_4" className="form-check-label">Elevator Building</label>
                              </div>
                              <div className="form-check">
                                 <Form.Check type="checkbox" className="" id="filter_5" />
                                 <label htmlFor="filter_5" className="form-check-label">Events</label>
                              </div>
                           </div>
                        </Form.Group>
                        <Link href="#!" className="btn btn-primary">Search Now</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={4} md={12} lg={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Latest Seller Ads</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="item3-medias">
                           <div className="media  mt-0 pb-0">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-3" src="../../../assets/images/media/42.png" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">2Bk Delux Rooms</h6>
                                 <ul className="mb-0 item3-lists d-flex">
                                    <li>
                                       <Link href="#!"><i className="si si-user"></i> Gavin</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-location-pin"></i> UK</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-calendar"></i> Nov 22</Link>
                                    </li>
                                 </ul>
                                 <h5 className="fw-500 mb-0 mt-2">$487.00</h5>
                              </div>
                           </div>
                           <div className="media  pb-0 mt-4">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-2 br-3" src="../../../assets/images/media/47.png" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">Finaces Consulting</h6>
                                 <ul className="mb-0 item3-lists d-flex">
                                    <li>
                                       <Link href="#!"><i className="si si-user"></i> Gavin</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-location-pin"></i> USA</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-calendar"></i> Nov 28</Link>
                                    </li>
                                 </ul>
                                 <h5 className="fw-500 mb-0 mt-2">$89.99</h5>
                              </div>
                           </div>
                           <div className="media  pb-0 mt-4">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-3 br-3" src="../../../assets/images/media/53.png" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">Royal Car</h6>
                                 <ul className="mb-0 item3-lists d-flex">
                                    <li>
                                       <Link href="#!"><i className="si si-user"></i> Gavin</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-location-pin"></i> UK</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-calendar"></i> Nov 19</Link>
                                    </li>
                                 </ul>
                                 <h5 className="fw-500 mb-0 mt-2">$256.00</h5>
                              </div>
                           </div>
                           <div className="media  pb-0 mt-4">
                              <div className="media-left">
                                 <Link href="#!">
                                    <img className="media-object me-3 br-3" src="../../../assets/images/media/35.png" alt="media1" />
                                 </Link>
                              </div>
                              <div className="media-body">
                                 <h6 className="media-heading  fw-500 text-uppercase">Kolic Resturant</h6>
                                 <ul className="mb-0 item3-lists d-flex">
                                    <li>
                                       <Link href="#!"><i className="si si-user"></i> Gavin</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-location-pin"></i> USA</Link>
                                    </li>
                                    <li>
                                       <Link href="#!"><i className="si si-calendar"></i> Nov 17</Link>
                                    </li>
                                 </ul>
                                 <h5 className="fw-500 mb-0 mt-2">$367.66</h5>
                              </div>
                           </div>

                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>

      </>

   );
};
Widgets.layout = "Contentlayout";
export default Widgets;

