import { FC } from 'react';
import { Button, Card, Col, Dropdown, Form, Nav, Row, Tab, Table } from 'react-bootstrap';
import { Friendsdata, Gallery } from '../../../shared/data/pages/profiledata';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const Profile = () => {
   return (
      <>
         <Seo title={"Profile "} />
         <PageheaderDB heading="Pages" active="Profile" />

         <div className="main-container container-fluid">
            <Row id="user-profile">
               <Col lg={12}>
                  <Card>
                     <Card.Body>
                        <img className="profile-bg h-250 cover-image" src="../../../assets/images/media/57.jpg" />
                        <div className="py-4 position-relative">
                           <div className="profile-img">
                              <img src="../../../assets/images/users/2.jpg" className="avatar avatar-xxl rounded-circle" alt="person-image" />
                           </div>
                        </div>
                        <Row>
                           <Col xl={3}>
                              <div>
                                 <h3 className="fw-500 mb-1 d-inline-flex align-items-center">Name Is Here <i className="bi bi-patch-check-fill ms-1 text-primary fs-16"></i></h3>
                                 <p className="mb-0 fw-500">Jonathan Mills</p>
                                 <Link href="#!" className="mb-0 my-1 fs-13 text-muted">ionathanmills@gmail.com</Link>
                                 <p className="mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English....</p>
                              </div>
                              <Row className="mt-4">
                                 <Col className="mb-3">
                                    <div className="border br-5">
                                       <Card.Body>
                                          <div className="d-flex align-items-center mb-2">
                                             <span className="avatar avatar-md br-5 bg-primary-gradient"><i className="fe fe-briefcase"></i></span>
                                             <div className="ms-2">
                                                <p className="mb-0 fw-semibold">Reviews</p>
                                                <span className="text-muted">256</span>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </div>
                                 </Col>

                                 <Col className="mb-3">
                                    <div className="border br-5">
                                       <Card.Body>
                                          <div className="d-flex align-items-center mb-2">
                                             <span className="avatar avatar-md br-5 bg-success-gradient"><i className="fe fe-users"></i></span>
                                             <div className="ms-2">
                                                <p className="mb-0 fw-semibold">Followers</p>
                                                <span className="text-muted">3.2K</span>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </div>
                                 </Col>
                                 <Col className="mb-3">
                                    <div className="border br-5">
                                       <Card.Body>
                                          <div className="d-flex align-items-center mb-2">
                                             <span className="avatar avatar-md br-5 bg-danger-gradient"><i className="fe fe-thumbs-up"></i></span>
                                             <div className="ms-2">
                                                <p className="mb-0 fw-semibold">Followers</p>
                                                <span className="text-muted">3.2K</span>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </div>
                                 </Col>
                                 <Col>
                                    <div className="border br-5">
                                       <Card.Body>
                                          <div className="d-flex align-items-center me-5 mb-2">
                                             <span className="avatar avatar-md br-5 bg-warning-gradient"><i className="fe fe-cast"></i></span>
                                             <div className="ms-2">
                                                <p className="mb-0 fw-semibold">Photos</p>
                                                <span className="text-muted">204</span>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </div>
                                 </Col>
                              </Row>
                           </Col>
                           <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                              <Col xl={9}>
                                 <div className="my-3">
                                    <div className="wideget-user-tab">
                                       <div className="tab-menu-heading">
                                          <div className="tabs-menu1 d-md-flex justify-content-between align-items-center">

                                             <Nav className='nav-pills nav-style-3 mb-3 nav' role="tablist">
                                                <Nav.Item as="li" className='me-0 mb-3'> <Nav.Link eventKey="1">Profile</Nav.Link> </Nav.Item>
                                                <Nav.Item as="li" className='me-0 mb-3'> <Nav.Link eventKey="2">Edit</Nav.Link> </Nav.Item>
                                                <Nav.Item as="li" className='me-0 mb-3'> <Nav.Link eventKey="3">Friends <span className="badge badge-success-light">08</span></Nav.Link> </Nav.Item>
                                                <Nav.Item as="li" className='me-0 mb-3'> <Nav.Link eventKey="4">Gallery <span className="badge bg-light text-dark">12</span> </Nav.Link> </Nav.Item>
                                                <Nav.Item as="li" className='me-0 mb-3'> <Nav.Link eventKey="5">Followers  <span className="badge badge-success-light">06</span> </Nav.Link> </Nav.Item>
                                             </Nav>

                                             <div className="btn-list mt-sm-0 mt-3">
                                                <Button className="btn-outline-default" variant=''>Message</Button>
                                                <Button className="btn-primary"><i className="fa fa-share me-1"></i>Share profile</Button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <Card className=" box-shadow-0 border-0">
                                    <Card.Body className=" h-100 p-0">
                                       <div className="border-0">
                                          <Tab.Content className="tab-content">
                                             <Tab.Pane eventKey="1" className="border-0 p-0" id="tab-51">
                                                <div id="profile-log-switch">
                                                   <div className="table-responsive mb-4">
                                                      <Table className=" row table-borderless w-100 m-0 border">

                                                         <tbody className="col-lg-6 p-0">
                                                            <tr>
                                                               <td><strong>Full Name :</strong> Alison</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>Location :</strong> Uk</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>Languages :</strong> English, German, Spanish.</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>DOB :</strong> 21/05/1991</td>
                                                            </tr>
                                                         </tbody>
                                                         <tbody className="col-lg-6 p-0">
                                                            <tr>
                                                               <td><strong>Occupation :</strong> Web Designer</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>Website :</strong> camal.com</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>Email :</strong> lunaklippel@camal.com</td>
                                                            </tr>
                                                            <tr>
                                                               <td><strong>Phone :</strong> +222-6652-6325</td>
                                                            </tr>
                                                         </tbody>

                                                      </Table>
                                                   </div>
                                                   <div className="p-4 border br-5">
                                                      <div className="media-heading"> <h4><strong>About me</strong></h4> </div>
                                                      <p className="description mb-4">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                                                      <div className="media-heading mt-3"> <h4><strong>Biography</strong></h4> </div>
                                                      <p className="mb-0">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                                                   </div>
                                                </div>

                                             </Tab.Pane>
                                             <Tab.Pane eventKey="2" className="tab-pane border-0 p-0" id="tab-63">
                                                <Card className=" overflow-hidden box-shadow-0">
                                                   <Card.Body>
                                                      <div className="d-flex">
                                                         <div className="ms-auto btn-list">
                                                            <Link href="#!" className="btn btn-sm btn-success mx-1">Update</Link>
                                                            <Link href="#!" className="btn btn-sm btn-danger">Discard</Link>
                                                         </div>
                                                      </div>
                                                      <form className="form-horizontal">
                                                         <h6 className="text-uppercase fw-500 mb-3">User Name</h6>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">First Name</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="First Name" defaultValue="Alison" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <div className="mt-3">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">last Name</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="Last Name" defaultValue="Robert" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <div className="form-group mt-3">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Nick Name</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="Nick Name" defaultValue="Rob" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <h6 className="text-uppercase fw-500 mb-0">Your Photo</h6>
                                                                  <span className="text-muted">This will be displayed on Your Profile</span>
                                                               </Col>
                                                               <Col md={9} className="d-flex justify-content-between">
                                                                  <img src="../../../assets/images/users/2.jpg" className="avatar avatar-xl br-5" alt="person-image" />
                                                                  <div className="d-flex">
                                                                     <Link href="#!" className="mb-0 fw-500 mx-2">Change</Link>
                                                                     <Link href="#!" className="mb-0 fw-500">Delete</Link>
                                                                  </div>
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <h6 className="text-uppercase fw-500 mb-3">About Yourself</h6>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">About</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control as="textarea" className="form-control" name="example-textarea-input" defaultValue="Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore,et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem.Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, etduo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem." rows={4} />

                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <h6 className="text-uppercase fw-500 mb-3">Work</h6>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Designation</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="Designation" defaultValue="UI/UX Designer" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <h6 className="text-uppercase fw-500 mb-3">Contact</h6>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Email<i>(required)</i></Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control" placeholder="Email"
                                                                     defaultValue="info@Rob.in" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <div className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Website</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="Website" defaultValue="@spruko.w" />
                                                               </Col>
                                                            </Row>
                                                         </div>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Phone</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="phone number" defaultValue="+125 3545654" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Address</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control as="textarea" className="form-control" name="example-textarea-input"
                                                                     rows={2} defaultValue="San Francisco, CA"
                                                                     placeholder="Address" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <h6 className="text-uppercase fw-500 mb-3">Social Info</h6>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Twitter</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="twitter" defaultValue="twitter.com/spruko.me" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Facebook</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="facebook"
                                                                     defaultValue="https://www.facebook.com/Spruha" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Google+</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control" placeholder="google"
                                                                     defaultValue="Robert.com" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Linked in</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control"
                                                                     placeholder="linkedin" defaultValue="linkedin.com/in/spruko" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <Form.Group className="form-group">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Github</Form.Label>
                                                               </Col>
                                                               <Col md={9}>
                                                                  <Form.Control type="text" className="form-control" placeholder="github"
                                                                     defaultValue="github.com/sprukos" />
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                         <h6 className="text-uppercase fw-500 mb-3">Email Preferences</h6>
                                                         <Form.Group className="mb-0">
                                                            <Row className="row-sm">
                                                               <Col md={3}>
                                                                  <Form.Label className="form-label fw-400 text-muted fs-13">Verified User</Form.Label>
                                                               </Col>
                                                               <Col md={9} className="col-md-9 profile-editing">
                                                                  <Form.Label className="d-flex align-items-center">
                                                                     <Form.Check className='fw-normal' type="checkbox" defaultChecked label=" Accept to receive post or page notification emails" />

                                                                  </Form.Label>
                                                                  <Form.Label className="d-flex align-items-center">
                                                                     <Form.Check className='fw-normal' type="checkbox" defaultChecked label="Accept to receive email sent to multiple recipients" />
                                                                  </Form.Label>
                                                               </Col>
                                                            </Row>
                                                         </Form.Group>
                                                      </form>
                                                   </Card.Body>
                                                </Card>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="3" className="p-0 border-0" id="tab-61">
                                                <ul className="widget-users row">
                                                   {Friendsdata.map((idx, f1) => (
                                                      <Col sm={12} md={6} lg={6} xl={3} className="col-lg-4 col-xl-3 col-md-6 col-sm-12 col-12" key={f1}>
                                                         <Card className="card">
                                                            <Card.Body className="text-center">
                                                               <Link href="#!">
                                                                  <img alt="avatar" className="avatar avatar-xxl rounded-circle cover-image" src={idx.src} />
                                                                  <h4 className="h4 mb-0 mt-3">{idx.name}</h4>
                                                               </Link>
                                                               <div>
                                                                  <p className="card-text">{idx.role}</p>
                                                               </div>
                                                            </Card.Body>
                                                         </Card>
                                                      </Col>
                                                   ))}
                                                </ul>
                                             </Tab.Pane>

                                             <Tab.Pane eventKey="4" className="tab-pane border-0 p-0" id="tab-71">
                                                <Gallery />
                                             </Tab.Pane>

                                             <Tab.Pane eventKey="5" className="p-0 border-0" id="tab-81">
                                                <div className="wideget-user-followers row">
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt="" className="avatar avatar-md rounded-circle" src="../../../assets/images/users/8.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">John Paige</b>
                                                               <p className="text-muted mb-0">johnpaig@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt=""
                                                               className="avatar avatar-md rounded-circle" src="../../../assets/images/users/2.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">Lillian Quinn</b>
                                                               <p className="text-muted mb-0">lillianquinn@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt=""
                                                               className="avatar avatar-md rounded-circle" src="../../../assets/images/users/3.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">Irene Harris</b>
                                                               <p className="text-muted mb-0">ireneharris@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt=""
                                                               className="avatar avatar-md rounded-circle" src="../../../assets/images/users/11.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">Harry Fisher</b>
                                                               <p className="text-muted mb-0">harryfisher@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt=""
                                                               className="avatar avatar-md rounded-circle" src="../../../assets/images/users/9.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">Eloy Tunen</b>
                                                               <p className="text-muted mb-0">eloytunen@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                   <Col lg={6} md={6}>
                                                      <div className="mb-4 border py-3 px-4 br-3">
                                                         <div className="d-sm-flex overflow-visible">
                                                            <Link className="media-left" href="#!"><img alt=""
                                                               className="avatar avatar-md rounded-circle" src="../../../assets/images/users/6.jpg" /></Link>
                                                            <div className="media-body valign-middle">
                                                               <b className="text-inverse fs-15">Charlott Ashern</b>
                                                               <p className="text-muted mb-0">charlottashern@gmail.com</p>
                                                            </div>
                                                            <div className="media-body valign-middle text-sm-end overflow-visible mt-2">
                                                               <Dropdown >
                                                                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className='btn-sm' >
                                                                     View
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu align="end" className='dropdown-menu-end'>
                                                                     <Dropdown.Item href="#!">View profile</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Follow</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Message</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Suggestion</Dropdown.Item>
                                                                     <Dropdown.Item href="#!">Un friend</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Col>
                                                </div>
                                             </Tab.Pane>
                                          </Tab.Content>
                                       </div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Tab.Container>
                        </Row>
                     </Card.Body>
                  </Card>

               </Col>
            </Row>
         </div>

      </>
   );
};
Profile.layout = "Contentlayout";
export default Profile;

