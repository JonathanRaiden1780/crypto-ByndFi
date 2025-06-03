
import { Button, Card, Col, Dropdown, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';


const ReadMessages = () => {
   return (
      <>
         <Seo title={"Read"} />
         <PageheaderDB heading="Mail" active="Read Messages" />

         <div className="main-container container-fluid">


            <Row>
               <Col lg={12} xl={3} md={12} sm={12}>
                  <Card>
                     <div className="list-group list-group-transparent mb-0 mail-inbox">
                        <div className="m-4 text-center">
                           <div className="d-grid">
                              <Link href={"/components/mail/email"} className="btn btn-primary">Compose</Link>
                           </div>
                        </div>
                        <Card.Body className="pt-0">
                           <Link href={"/components/mail/emailservices/"}
                              className="list-group-item list-group-item-action d-flex align-items-center px-0 active">
                              <span className=" fw-semibold me-3"><i className="fe fe-inbox"></i></span>Inbox <span
                                 className="ms-auto badge bg-success">05</span>
                           </Link>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i className="fe fe-send"></i></span>Sent Mail
                           </ListGroup.Item>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i
                                 className="fe fe-alert-circle"></i></span>Important
                              <span className="ms-auto badge-pill badge badge-danger">01</span>
                           </ListGroup.Item>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i className="fe fe-star"></i></span>Starred
                           </ListGroup.Item>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i className="fe fe-file"></i></span>Drafts
                           </ListGroup.Item>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i className="fe fe-tag"></i></span>Tags
                           </ListGroup.Item>
                           <ListGroup.Item
                              className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <span className="icon me-3"><i className="fe fe-trash-2"></i></span>Trash
                           </ListGroup.Item>
                        </Card.Body>
                     </div>
                  </Card>
                  <Card>
                     <Card.Header className="online-status d-flex justify-content-between align-items-center">
                        <Card.Title as="h3">Chats</Card.Title>
                        <div className="status offline status-online">
                           <h6 className="status-online text-end">online</h6>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <ul className="mail-chats m-0">
                           <li className="chat-persons d-flex align-items-center">
                              <Link href="#!"></Link>
                              <div className="pro-pic"><img src="../../../assets/images/users/5.jpg" alt="" className='avatar avatar-rounded avatar-md' /></div>
                              <div className="user ms-3">
                                 <p className="u-name">Brian	Wilson</p>
                                 <p className="u-designation">App Developer</p>
                              </div>
                           </li>
                           <li className="chat-persons d-flex align-items-center">
                              <Link href="#!"></Link>
                              <div className="pro-pic"><img src="../../../assets/images/users/1.jpg" alt="" className='avatar avatar-rounded avatar-md' /></div>
                              <div className="user ms-3">
                                 <p className="u-name">Kylie	Morgan</p>
                                 <p className="u-designation">Project manager</p>
                              </div>
                           </li>
                           <li className="chat-persons d-flex align-items-center">
                              <Link href="#!"></Link>
                              <span className="pro-pic"><img src="../../../assets/images/users/12.jpg" alt="" className='avatar avatar-rounded avatar-md' /></span>
                              <div className="user ms-3">
                                 <p className="u-name">Andrew Piper</p>
                                 <p className="u-designation">Web designer</p>
                              </div>
                           </li>
                           <li className="chat-persons d-flex align-items-center">
                              <Link href="#!"></Link>
                              <span className="pro-pic"><img src="../../../assets/images/users/2.jpg" alt="" className='avatar avatar-rounded avatar-md' /></span>
                              <div className="user ms-3">
                                 <p className="u-name">Peter	Roberts</p>
                                 <p className="u-designation">UI/UX Designer</p>
                              </div>
                           </li>
                           <li className="chat-persons d-flex align-items-center">
                              <Link href="#!"></Link>
                              <span className="pro-pic"><img src="../../../assets/images/users/14.jpg" alt="" className='avatar avatar-rounded avatar-md' /></span>
                              <div className="user ms-3">
                                 <p className="u-name">John	Hamilton</p>
                                 <p className="u-designation">Project leader</p>
                              </div>
                           </li>
                           <li className="chat-persons d-flex align-items-center pb-0">
                              <Link href="#!"></Link>
                              <span className="pro-pic"><img src="../../../assets/images/users/15.jpg" alt="" className='avatar avatar-rounded avatar-md' /></span>
                              <div className="user ms-3">
                                 <p className="u-name">Elizabeth	Fraser</p>
                                 <p className="u-designation">Web Developer</p>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={12} xl={9} md={12} sm={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h4">Velit a labore <span className="badge badge-primary">inbox</span></Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="email-media">
                           <div className="mt-0 d-md-flex">
                              <img className="me-2 mb-2 rounded-circle avatar avatar-xl" src="../../../assets/images/users/2.jpg" alt="avatar" />
                              <div className="media-body my-auto">
                                 <div className="media-title text-default font-weight-semiblod">Alica Nestle <span className="text-muted">(alicnestle@gmail.com)</span></div>
                                 <p className="mb-0">to Adam Cotter (adamcotter@gmail.com)</p>
                              </div>
                              <div className="float-md-end my-auto  d-flex">
                                 <small className="me-2">Sep 13 , 2022 12:45 pm</small>
                                 <OverlayTrigger placement="top" overlay={<Tooltip>Rated</Tooltip>}>
                                    <i data-bs-toggle="tooltip" className='fe fe-star text-default'></i>
                                 </OverlayTrigger>&nbsp;
                                 <OverlayTrigger placement="top" overlay={<Tooltip>Reply</Tooltip>}>
                                    <i data-bs-toggle="tooltip" className='fa fa-reply text-default'></i>
                                 </OverlayTrigger>&nbsp;&nbsp;
                                 <div className="">
                                    <Dropdown>
                                       <OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
                                          <Dropdown.Toggle as='a'
                                             className=" no-caret email-icon "
                                             data-bs-toggle="dropdown" role="button"
                                             aria-haspopup="true" aria-expanded="false">
                                             <i className="fe fe-more-horizontal"></i></Dropdown.Toggle>
                                       </OverlayTrigger>&nbsp;&nbsp;
                                       <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
                                          <Dropdown.Item ><i
                                          ></i> Reply</Dropdown.Item>
                                          <Dropdown.Item ><i
                                             className=""></i>Report
                                             Spam</Dropdown.Item>
                                          <Dropdown.Item ><i
                                          ></i>Delete</Dropdown.Item>
                                          <Dropdown.Item ><i
                                          ></i>Show Original</Dropdown.Item>
                                          <Dropdown.Item ><i
                                          ></i>Print</Dropdown.Item>
                                          <Dropdown.Item ><i
                                          ></i>Filter</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>

                              </div>
                           </div>
                        </div>
                        <div className="eamil-body mt-5">
                           <h6>Hi Sir/Madam</h6>
                           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                           <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                           <p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
                           <p className="mb-0">Thanking you Sir/Madam</p>
                           <hr />
                           <div className="email-attch">
                              <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                 <Button variant='light' data-bs-toggle="tooltip" className='text-default float-end avatar border rounded-circle'>
                                    <i className='fa fa-download'></i></Button>
                              </OverlayTrigger>
                              <p className="d-inline-flex">3 Attachments <Link href="#!" className="text-decoration-underline ms-2"> View All Images</Link></p>
                              <div className="emai-img">
                                 <div className="d-sm-flex">
                                    <div className=" m-2">
                                       <Link href={"/components/apps/gallery/"}><img className="w-9 mb-2 br-3" src="../../../assets/images/background/1.jpg" alt="placeholder image" /></Link>
                                       <h6 className="mb-3 mb-lg-0">1.jpg <small className="text-muted">12kb</small></h6>
                                    </div>
                                    <div className="m-2">
                                       <Link href={"/components/apps/gallery/"}><img className="w-9 mb-2 br-3" src="../../../assets/images/background/2.jpg" alt="placeholder image" /></Link>
                                       <h6 className="mb-3 mb-lg-0">2.jpg <small className="text-muted">18kb</small></h6>
                                    </div>
                                    <div className="m-2">
                                       <Link href={"/components/apps/gallery/"}><img className="w-9 mb-2 br-3" src="../../../assets/images/background/3.jpg" alt="placeholder image" /></Link>
                                       <h6>3.jpg <small className="text-muted">21kb</small></h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                     <div className="card-footer">
                        <Link className="btn btn-primary mt-1 mb-1" href="#!"><i className="fa fa-reply"></i> Reply</Link>&nbsp;
                        <Link className="btn btn-info mt-1 mb-1" href="#!"><i className="fa fa-share"></i> Forward</Link>
                     </div>
                  </Card>
               </Col>
            </Row>
         </div>

      </>
   );
};
ReadMessages.layout = "Contentlayout";
export default ReadMessages;
