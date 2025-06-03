import { FC, useState } from 'react';
import { Button, Card, Col, Dropdown, DropdownButton, Form, InputGroup, ListGroup, Pagination, Row, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Inboxdata } from '../../../shared/data/mail/servicedata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const EmailServices = () => {

   const [allData, setAllData] = useState(Inboxdata);

   const inboxdata: any = [];

   const myfunction = (idx: any) => {
      let Data;
      for (Data of Inboxdata) {
         if (Data.title[0] == " ") {
            Data.title = Data.title.trim();
         }
         if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
            if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
               inboxdata.push(Data);
            }
         }

      }
      setAllData(inboxdata);
   };
   return (
      <>
         <Seo title={"Email-services"} />
         <PageheaderDB heading="Mail" active="Email-services" />

         <div className="main-container container-fluid">


            <Row>
               <Col xl={3} lg={12} md={12} sm={12}>
                  <Card>
                     <div className="list-group list-group-transparent mb-0 mail-inbox">
                        <div className="m-4 text-center">
                           <div className="d-grid">
                              <Link href="/components/mail/email/" className="btn btn-primary">Compose</Link>
                           </div>
                        </div>
                        <Card.Body className="pt-0">
                           <Link href="#!"
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
                        <div className="status offline status-online"> <h6 className="status-online text-end">online</h6></div>
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
                     <Card.Header className="d-block d-sm-flex justify-content-between">
                        <Card.Title as="h3">Inbox</Card.Title>
                        <div className="card-options mt-2 mt-sm-0">
                           <Form>
                              <InputGroup>
                                 <Form.Control type="search" placeholder="Search" onChange={(ele) => { myfunction(ele.target.value); }}
                                    aria-label="Search" />
                                 <Button type="button" className="btn btn-primary">
                                    <i className="fa fa-search" aria-hidden="true" ></i>
                                 </Button>
                              </InputGroup>
                           </Form>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="inbox-body">
                           <div className="mail-option">
                              <div className="d-flex align-items-center">
                                 <DropdownButton variant="light" className='me-2' title="More">
                                    <Dropdown.Item className="fas fa-pencil-alt" >  Mark as Read</Dropdown.Item>
                                    <Dropdown.Item as="button"><i className="fa fa-ban me-2"></i>Spam</Dropdown.Item>
                                    <Dropdown.Item as="button"><i className="fa fa-trash me-2"></i>Delete</Dropdown.Item>
                                 </DropdownButton>&nbsp;

                                 <Link href="#!" className="btn btn-light tooltips">
                                    <OverlayTrigger
                                       placement="top"
                                       overlay={<Tooltip>Refresh</Tooltip>}
                                    >
                                       <i

                                          className="fa fa-refresh"
                                       ></i>
                                    </OverlayTrigger>
                                 </Link>
                              </div>
                              <ListGroup className="unstyled inbox-pagination mt-3">
                                 <ListGroup.Item className='border-0 px-0'><span>1-50 of 234</span></ListGroup.Item>
                              </ListGroup>
                           </div>

                           <div className="table-responsive">

                              <Table className="table-inbox table-hover table-vcenter mail-body text-nowrap border">
                                 <tbody>
                                    {allData.map((idx) => (
                                       <tr className="unread" key={Math.random()}>
                                          <td className="inbox-small-cells">
                                             <input className="form-check-input" type="checkbox" />
                                          </td>
                                          <td className="inbox-small-cells"><i className={`fa fa-star text-${idx.star}`}></i></td>
                                          <td className="view-message  dont-show">{idx.title}
                                             <span className={`badge badge-${idx.class} badge-pill pull-right`}>{idx.badgetext}</span></td>
                                          <td className="view-message ">{idx.text} </td>
                                          <td className="view-message  inbox-small-cells"><i className={idx.icon}></i></td>
                                          <td className="view-message  text-end">{idx.time}</td>
                                       </tr>
                                    ))}
                                 </tbody>
                              </Table>

                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <Pagination className="pagination mb-5">
                     <Pagination.Item className="page-prev disabled" href="#" tabIndex={-1}>Prev
                     </Pagination.Item>
                     <Pagination.Item className=" active" href="#">1</Pagination.Item>
                     <Pagination.Item className="" href="#">2</Pagination.Item>
                     <Pagination.Item className="" href="#">3</Pagination.Item>
                     <Pagination.Item className="" href="#">4</Pagination.Item>
                     <Pagination.Item className="" href="#">5</Pagination.Item>
                     <Pagination.Item className=" page-next" href="#">Next
                     </Pagination.Item>
                  </Pagination>
               </Col>
            </Row>
         </div>

      </>
   );
};
EmailServices.layout = "Contentlayout";
export default EmailServices;

