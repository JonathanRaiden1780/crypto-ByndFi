
import { Button, Card, Col, Dropdown, Form, ListGroup, Row, Collapse, Modal } from 'react-bootstrap';
import { Userdata } from '../../../shared/data/components/userdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { useState } from 'react';
import SimpleBar from 'simplebar-react';

const UserList = () => {
   //Collapse
   const [BasicExpanded, setBasicExpanded] = useState(true);
   const BasicHandleExpandClick = () => {
      setBasicExpanded(!BasicExpanded);
   };
   //Card With Close Button
   const [Basicshow, setBasicshow] = useState(true);
   //fullscreen
   const [fullScreen, setFullscreen] = useState('true');
   const [fullscreenshow, setfullscreenShow] = useState(false);
   const fullscreenmodalClose = () => setfullscreenShow(false);
   function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setfullscreenShow(true);
   }
   return (

      <>
         <Seo title={"UserList"} />
         <PageheaderDB heading="Components" active="UserList" />
         <div className="main-container container-fluid">

            <Row className="row-cards">
               <Col lg={12} xxl={5} xl={5}>

                  <Card>
                     <div className="panel-heading p-3 text-center border-bottom br-tl-4 br-tr-4">
                        <h3 className="text-primary mb-2">Team Leader</h3>
                        <p className="mb-0">Web Developer</p>
                     </div>
                     <div className="userlist">
                        <Card.Body className="text-center">
                           <div className="userprofile mt-0">
                              <div className="userpic"> <img src="../../../assets/images/users/4.jpg" alt="" className=" rounded-circle userpicimg mb-4" /> </div>
                              <h4 className="username mt-1 mb-1 fs-20">Jacob Allan</h4>
                              <p className="">New York, USA</p>
                           </div>
                           <strong className="fs-16">Information</strong><br />
                           <p className=" mb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare lacus adipiscing, posuere.</p><br />
                           <p className="mb-0 text-muted"><span className="">Email : </span><Link href="#!" className="text-muted">info@pearle.in</Link></p>
                           <p className="mb-0 text-muted"><span className="">Phone no :</span><span className=""> +9100000000</span></p>
                        </Card.Body>
                     </div>
                     <div className="panel-footer border-top bg-transparent br-br-0 br-bl-0">
                        <div className="text-center ">
                           <div className="flex-c-m ">
                              <Link href="#!" className="login100-social-item facebook-like1">
                                 <i className="fa fa-facebook"></i>
                              </Link>
                              <Link href="#!" className="login100-social-item bg2 twitter1">
                                 <i className="ri-twitter-x-line" ></i>
                              </Link>

                              <Link href="#!" className="login100-social-item bg3 google-plus1">
                                 <i className="fa fa-google"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </Card>
                  {Basicshow ?
                     <Card className="">
                        <Card.Header>
                           <h3 className='card-title'>Team</h3>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Team</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded} timeout={3000}>
                              <Modal.Body>

                                 <SimpleBar className="list-unstyled list-separated p-2" id="team">
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle avatar-md d-block cover-image " alt="img" src="../../../assets/images/users/4.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit fs-15">Anna White</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">annawh@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/1.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit">Karen	Miller</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">karen@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/9.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit">Nicola Powell</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">lapowell@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle  avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/2.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit">Nathan Payne</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">nathan@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/4.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit">Jacob	Slater</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">jacob567@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="list-separated-item p-3">
                                       <div className="row align-items-center">
                                          <div className="col-auto">
                                             <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/1.jpg" />
                                          </div>
                                          <div className="col">
                                             <div>
                                                <Link href="#!" className="text-inherit">Victor Blake</Link>
                                             </div>
                                             <small className="d-block item-except text-sm text-muted h-1x">victor_1@info.com</small>
                                          </div>
                                          <div className="col-auto">
                                             <div className="item-action dropdown">
                                                <Dropdown >
                                                   <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                      <i className="fe fe-more-vertical"></i>
                                                   </Dropdown.Toggle>
                                                   <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                      <Dropdown.Divider />
                                                      <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                             </div>
                                          </div>
                                       </div>
                                    </ListGroup.Item>
                                 </SimpleBar >

                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded} timeout={3000}>
                           <Card.Body className=" p-0 o-auto team" id="collapseExample-9">
                              {/* <SimpleBar > */}
                              <SimpleBar className="list-unstyled list-separated p-2" id="team">
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle avatar-md d-block cover-image " alt="img" src="../../../assets/images/users/4.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit fs-15">Anna White</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">annawh@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/1.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit">Karen	Miller</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">karen@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/9.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit">Nicola Powell</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">lapowell@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle  avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/2.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit">Nathan Payne</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">nathan@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/4.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit">Jacob	Slater</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">jacob567@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                                 <ListGroup.Item as="li" className="list-separated-item p-3">
                                    <div className="row align-items-center">
                                       <div className="col-auto">
                                          <img className="avatar rounded-circle avatar-md d-block cover-image" alt="img" src="../../../assets/images/users/1.jpg" />
                                       </div>
                                       <div className="col">
                                          <div>
                                             <Link href="#!" className="text-inherit">Victor Blake</Link>
                                          </div>
                                          <small className="d-block item-except text-sm text-muted h-1x">victor_1@info.com</small>
                                       </div>
                                       <div className="col-auto">
                                          <div className="item-action dropdown">
                                             <Dropdown >
                                                <Dropdown.Toggle as="a" variant="" className='no-caret'>
                                                   <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                   <Dropdown.Item href="#/action-1"><i className="dropdown-icon fe fe-tag me-1 d-inline-flex"></i>Action  </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-2"><i className="dropdown-icon fe fe-edit-2 me-1 d-inline-flex"></i>Another action </Dropdown.Item>
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-message-square me-1 d-inline-flex"></i>Something else </Dropdown.Item>
                                                   <Dropdown.Divider />
                                                   <Dropdown.Item href="#/action-3"><i className="dropdown-icon fe fe-link me-1 d-inline-flex"></i>Separated link </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </ListGroup.Item>
                              </SimpleBar >
                              {/* </SimpleBar> */}
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}

               </Col>

               <Col lg={12} xxl={7} xl={7}>
                  <div className="input-group mb-3">
                     <Form.Control type="text" placeholder="" />
                     <Button className="btn btn-primary">
                        <i className="fa fa-search" aria-hidden="true"></i>
                     </Button>
                  </div>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h2">1 - 30 of 546 users</Card.Title>
                        <div className="page-options d-flex float-end ms-auto">
                           <Form.Select className="form-control select2 custom-select w-auto">
                              <option defaultValue="asc">Latest</option>
                              <option defaultValue="desc">Oldest</option>
                           </Form.Select>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="e-table">
                           <div className="table-responsive table-lg">
                              <table className="table table-bordered mb-0 border-top">
                                 <thead>
                                    <tr>
                                       <th className="text-center">

                                       </th>
                                       <th className="text-center">Photo</th>
                                       <th>Name</th>
                                       <th>Date</th>
                                       <th className="text-center">Actions</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {Userdata.map((idx) => (
                                       <tr key={Math.random()}>
                                          <td className="align-middle text-center">
                                             <Form.Check type="checkbox" className="" />
                                          </td>
                                          <td className="align-middle text-center"><img alt="image" className="avatar avatar-md rounded-circle" src={idx.src} /></td>
                                          <td className="text-nowrap align-middle">{idx.name}</td>
                                          <td className="text-nowrap align-middle"><span>{idx.date}</span></td>

                                          <td className="text-center align-middle">
                                             <div className="btn-group align-top">
                                                <Button className="btn btn-sm btn-primary" type="button">Edit</Button> <button className="btn btn-sm btn-primary" type="button"><i className="fa fa-trash"></i></button>
                                             </div>
                                          </td>
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <div className="mb-5">
                     <ul className="pagination float-end">
                        <li className="page-item page-prev disabled">
                           <Link className="page-link" href="#!" tabIndex={-1}>Prev</Link>
                        </li>
                        <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">4</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">5</Link></li>
                        <li className="page-item page-next">
                           <Link className="page-link" href="#!">Next</Link>
                        </li>
                     </ul>
                  </div>
               </Col>

            </Row>
         </div>
      </>
   );
};
UserList.layout = "Contentlayout";
export default UserList;
