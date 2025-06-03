import { FC, useState } from 'react';
import { Button, Card, Col, Collapse, Form, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Email = () => {

    // card1
    const [fullExpanded1, setfullExpanded1] = useState(true);

    const fullHandleExpandClick1 = () => {
        setfullExpanded1(!fullExpanded1);
    };
    const [fullshow1, setfullshow1] = useState(true);
    const screendata1 = () => {
        document.querySelector(".card2")?.classList.toggle("card-fullscreen");
    };

    return (
        <>
            <Seo title={"Email"} />
            <PageheaderDB heading="Mail" active="Email" />

            <div className="main-container container-fluid">
                <Row>
                    <Col xl={3} lg={12} md={12} sm={12}>
                        <Card>
                            <div className="list-group list-group-transparent mb-0 mail-inbox">
                                <div className="m-4 text-center">
                                    <div className="d-grid">
                                        <Link href="/components/mail/emailservices/" className="btn btn-primary">View Inbox</Link>
                                    </div>
                                </div>
                                <Card.Body className="pt-0">
                                    <Link href="/components/mail/emailservices/"
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
                                            <p className="u-name">Brian Wilson</p>
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
                    <Col xl={9} lg={12} md={12} sm={12}>
                        {fullshow1 ?
                            <Card className='card2'>
                                <Card.Header>
                                    <Card.Title as="h3" className='me-1'>Compose new message</Card.Title>
                                    <div className="card-options ms-auto">
                                        <Link href="#!" onClick={() => fullHandleExpandClick1()} className="card-options-collapse me-2"
                                            data-bs-toggle="card-collapse"><i className={`fe ${fullExpanded1 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen me-2"
                                            data-bs-toggle="card-fullscreen"><i className="fe fe-maximize" onClick={() => screendata1()}></i></Link>
                                        <Link href="#!" onClick={() => setfullshow1(false)} className="card-options-remove"
                                            data-bs-toggle="card-remove"><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>
                                <Collapse in={fullExpanded1} timeout={3000}>
                                    <Card.Body>

                                        <Form >
                                            <Form.Group className="mb-3">
                                                <Row className="align-items-center">
                                                    <Form.Label className="col-sm-2">To</Form.Label>
                                                    <div className="col-sm-10">
                                                        <Form.Control type="text" className="form-control" />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                            <Form.Group className=" mb-3">
                                                <Row className="align-items-center">
                                                    <Form.Label className="col-sm-2">Subject</Form.Label>
                                                    <div className="col-sm-10">
                                                        <Form.Control type="text" className="form-control" />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                            <Form.Group className="">
                                                <Row>
                                                    <Form.Label className="col-sm-2">Message</Form.Label>
                                                    <div className="col-sm-10">
                                                        <textarea rows={10} className="form-control"></textarea>
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Form>

                                    </Card.Body>
                                </Collapse >

                                <Card.Footer className="d-sm-flex">
                                    <div className="mt-2 mb-2">

                                        <Link href="#!" className='me-3'>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Attach</Tooltip>}>
                                                <i className='fe fe-paperclip text-muted fs-20'></i>
                                            </OverlayTrigger>
                                        </Link>
                                        <Link href="#!" className='me-3'>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Link</Tooltip>}>
                                                <i className='fe fe-link-2 text-muted fs-20'></i>
                                            </OverlayTrigger>
                                        </Link>
                                        <Link href="#!" className='me-3'>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Photos</Tooltip>}>
                                                <i className='fe fe-image text-muted fs-20'></i>
                                            </OverlayTrigger>
                                        </Link>
                                        <Link href="#!" className=''>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <i className='fe fe-trash-2  text-muted fs-20'></i>
                                            </OverlayTrigger>
                                        </Link>
                                    </div>
                                    <div className="btn-list ms-auto">
                                        <Button className="btn-danger btn-space" variant=''>Cancel</Button>
                                        <Button className="btn-primary btn-space">Send message</Button>
                                    </div>
                                </Card.Footer>
                            </Card> : null}
                    </Col>
                </Row>

            </div>

        </>
    );
};
Email.layout = "Contentlayout";
export default Email;
