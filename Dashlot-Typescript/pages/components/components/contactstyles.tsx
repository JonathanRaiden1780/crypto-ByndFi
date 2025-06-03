import { FC, useState } from 'react';
import { Card, Col, Form, FormGroup, InputGroup, Row, Collapse, Button, Modal } from 'react-bootstrap';
import { WorldMap } from '../../../shared/data/components/contactdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const ContactStyles = () => {
    //Collapse
    const [content, _setContent] = useState('');
    const [BasicExpanded, setBasicExpanded] = useState(true);
    const [BasicExpanded1, setBasicExpanded1] = useState(true);
    const [BasicExpanded2, setBasicExpanded2] = useState(true);
    const [BasicExpanded3, setBasicExpanded3] = useState(true);
    const [BasicExpanded4, setBasicExpanded4] = useState(true);
    const [BasicExpanded5, setBasicExpanded5] = useState(true);
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
    const BasicHandleExpandClick4 = () => {
        setBasicExpanded4(!BasicExpanded4);
    };
    const BasicHandleExpandClick5 = () => {
        setBasicExpanded5(!BasicExpanded5);
    };
    //Card With Close Button
    const [Basicshow, setBasicshow] = useState(true);
    const [Basicshow1, setBasicshow1] = useState(true);
    const [Basicshow2, setBasicshow2] = useState(true);
    const [Basicshow3, setBasicshow3] = useState(true);
    const [Basicshow4, setBasicshow4] = useState(true);
    const [Basicshow5, setBasicshow5] = useState(true);
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

    const [fullScreen4, setFullscreen4] = useState('true');
    const [fullscreenshow4, setfullscreenShow4] = useState(false);
    const fullscreenmodalClose4 = () => setfullscreenShow4(false);
    function handleShow4(breakpoint: any) {
        setFullscreen4(breakpoint);
        setfullscreenShow4(true);
    }

    const [fullScreen5, setFullscreen5] = useState('true');
    const [fullscreenshow5, setfullscreenShow5] = useState(false);
    const fullscreenmodalClose5 = () => setfullscreenShow5(false);
    function handleShow5(breakpoint: any) {
        setFullscreen5(breakpoint);
        setfullscreenShow5(true);
    }
    return (
        <>
            <Seo title={"Contact-Styles"} />
            <PageheaderDB heading="Components" active="Contact-Styles" />

            <div className="main-container container-fluid">

                <Row>
                    <Col xl={12}>
                        {Basicshow ?
                            <Card className="card1">
                                <Card.Header>
                                    <h3 className='card-title'>Default</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>

                                <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Default</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse in={BasicExpanded} timeout={3000}>
                                        <Modal.Body>
                                            <Row>
                                                <Col lg={6} xl={4} md={12} className="mx-auto d-block">
                                                    <Card className="box-shadow-0 mb-0">
                                                        <Card.Body>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="text" id="name1" placeholder="Your Name" />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="email" id="email" placeholder="Email Address" />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control as="textarea" className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></Form.Control>
                                                            </InputGroup>
                                                            <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>
                                <Collapse className="" in={BasicExpanded} timeout={3000}>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6} xl={4} md={12} className="mx-auto d-block">
                                                <Card className="box-shadow-0 mb-0">
                                                    <Card.Body>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control type="text" id="name1" placeholder="Your Name" />
                                                        </InputGroup>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control type="email" id="email" placeholder="Email Address" />
                                                        </InputGroup>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control as="textarea" className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></Form.Control>
                                                        </InputGroup>
                                                        <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                    </Card.Body>
                                                </Card>
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
                        {Basicshow1 ?
                            <Card className="card2">
                                <Card.Header>
                                    <h3 className='card-title'>Contact Styles</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow1(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>

                                <Modal show={fullscreenshow1} fullscreen={fullScreen1} onHide={() => setfullscreenShow1(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Contact Styles</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose1}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse className="border-top" in={BasicExpanded1} timeout={3000}>
                                        <Modal.Body>
                                            <Row>
                                                <Col lg={6} md={12} xl={6}>
                                                    <div className="contact-info mb-5 mb-xl-0">
                                                        <h3>Contact Info</h3>
                                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                        <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                        <Link href="#!" className="btn btn-primary">View More</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                    <Card className="box-shadow-0">
                                                        <Card.Body>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="text" id="name2" placeholder="Your Name" className='form-control' />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <input type="email" id="email2" placeholder="Email Address" className='form-control' />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                            </InputGroup>
                                                            <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>

                                <Collapse className="" in={BasicExpanded1} timeout={3000}>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6} md={12} xl={6}>
                                                <div className="contact-info mb-5 mb-xl-0">
                                                    <h3>Contact Info</h3>
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                    <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                    <Link href="#!" className="btn btn-primary">View More</Link>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                <Card className="box-shadow-0">
                                                    <Card.Body>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control type="text" id="name2" placeholder="Your Name" className='form-control' />
                                                        </InputGroup>
                                                        <InputGroup className="mb-3">
                                                            <input type="email" id="email2" placeholder="Email Address" className='form-control' />
                                                        </InputGroup>
                                                        <InputGroup className="mb-3">
                                                            <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                        </InputGroup>
                                                        <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                    </Card.Body>
                                                </Card>
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
                        {Basicshow2 ?
                            <Card className="card3">
                                <Card.Header>
                                    <h3 className='card-title'>Contact Styles 02</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow2(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>
                                <Modal show={fullscreenshow2} fullscreen={fullScreen2} onHide={() => setfullscreenShow2(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Contact Styles 02</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose2}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse className="" in={BasicExpanded2} timeout={3000}>
                                        <Modal.Body>
                                            <Row>
                                                <div className="col-lg-6 col-md-12 col-xl-6 mb-xl-0 mb-5">
                                                    <div className="contact-info">
                                                        <h3>Contact Info</h3>
                                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                        <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                        <Link href="#!" className="btn btn-primary">View More</Link>
                                                    </div>
                                                </div>
                                                <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                    <div className="">
                                                        <div className="">
                                                            <Row>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="text" placeholder="Your Name" />
                                                                </div>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="text" placeholder="Seondary Name" />
                                                                </div>
                                                            </Row>
                                                            <Row>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="number" placeholder="Phone Number" />
                                                                </div>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="email" placeholder="Email Address" />
                                                                </div>
                                                            </Row>
                                                            <InputGroup className="mb-3">
                                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                            </InputGroup>
                                                            <div className="d-grid">
                                                                <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>
                                <Collapse className="" in={BasicExpanded2} timeout={3000}>

                                    <Card.Body>
                                        <Row>
                                            <div className="col-lg-6 col-md-12 col-xl-6 mb-xl-0 mb-5">
                                                <div className="contact-info">
                                                    <h3>Contact Info</h3>
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                    <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                    <Link href="#!" className="btn btn-primary">View More</Link>
                                                </div>
                                            </div>
                                            <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                <div className="">
                                                    <div className="">
                                                        <Row>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="text" placeholder="Seondary Name" />
                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="number" placeholder="Phone Number" />
                                                            </div>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="email" placeholder="Email Address" />
                                                            </div>
                                                        </Row>
                                                        <InputGroup className="mb-3">
                                                            <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                        </InputGroup>
                                                        <div className="d-grid">
                                                            <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                        </div>
                                                    </div>
                                                </div>
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
                            <Card className="card4">
                                <Card.Header>
                                    <h3 className='card-title'>Contact Styles 03</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow3(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>
                                <Modal show={fullscreenshow3} fullscreen={fullScreen3} onHide={() => setfullscreenShow3(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Contact Styles 03</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose3}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse className="" in={BasicExpanded3} timeout={3000}>
                                        <Modal.Body>
                                            <Row>
                                                <Col lg={6} md={12} xl={6}>
                                                    <div id="world-map-gdp" className="w-90 d-flex gap-10 overflow-auto jvm-container">
                                                        <WorldMap />
                                                    </div>

                                                </Col>
                                                <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                    <div className="">
                                                        <div className="">
                                                            <Row>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="text" placeholder="Your Name" />
                                                                </div>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="text" placeholder="Seondary Name" />
                                                                </div>
                                                            </Row>
                                                            <Row>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="number" placeholder="Phone Number" />
                                                                </div>
                                                                <div className="col-md-6 form-group mb-3">
                                                                    <Form.Control type="email" placeholder="Email Address" />
                                                                </div>
                                                            </Row>
                                                            <InputGroup className="mb-3">
                                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                            </InputGroup>
                                                            <div className="d-grid">
                                                                <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>
                                <Collapse className="" in={BasicExpanded3} timeout={3000}>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6} md={12} xl={6}>
                                                <div id="world-map-gdp" className=" d-sm-flex gap-7 overflow-auto jvm-container">
                                                    <WorldMap />
                                                </div>
                                                {content}
                                            </Col>
                                            <Col lg={6} md={12} xl={6} className="mx-auto d-block">
                                                <div className="">
                                                    <div className="">
                                                        <Row>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="text" placeholder="Seondary Name" />
                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="number" placeholder="Phone Number" />
                                                            </div>
                                                            <div className="col-md-6 form-group mb-3">
                                                                <Form.Control type="email" placeholder="Email Address" />
                                                            </div>
                                                        </Row>
                                                        <InputGroup className="mb-3">
                                                            <textarea className="form-control" name="example-textarea-input" rows={8} placeholder="Message"></textarea>
                                                        </InputGroup>
                                                        <div className="d-grid">
                                                            <Link href="#!" className="btn btn-primary">Send Message</Link>
                                                        </div>
                                                    </div>
                                                </div>
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
                        {Basicshow4 ?
                            <Card className="card5">
                                <Card.Header>
                                    <h3 className='card-title'>Contact Styles 04</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick4}><i className={`fe ${BasicExpanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow4(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow4(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>
                                <Modal show={fullscreenshow4} fullscreen={fullScreen4} onHide={() => setfullscreenShow4(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Contact Styles 04</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick4}><i className={`fe ${BasicExpanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose4}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow4(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse className="" in={BasicExpanded4} timeout={3000}>
                                        <Modal.Body>
                                            <div className='border p-5'>
                                                <div className="container">
                                                    <Row>
                                                        <FormGroup className="col-md-4 mb-md-0 mb-3">
                                                            <Form.Control type="text" placeholder="Your Name" />
                                                        </FormGroup>
                                                        <FormGroup className="col-md-4 mb-md-0 mb-3">
                                                            <Form.Control type="email" placeholder="Email Address" />
                                                        </FormGroup>
                                                        <Col md={4}>
                                                            <Link href="#!" className="btn btn-primary btn-block">Send Message</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>
                                <Collapse className="" in={BasicExpanded4} timeout={3000}>

                                    <Card.Body>
                                        <div className='border p-5'>
                                            <div className="container">
                                                <Row>
                                                    <FormGroup className="col-md-4 mb-md-0 mb-3">
                                                        <Form.Control type="text" placeholder="Your Name" />
                                                    </FormGroup>
                                                    <FormGroup className="col-md-4 mb-md-0 mb-3">
                                                        <Form.Control type="email" placeholder="Email Address" />
                                                    </FormGroup>
                                                    <Col md={4}>
                                                        <Link href="#!" className="btn btn-primary btn-block">Send Message</Link>
                                                    </Col>
                                                </Row>
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
                        {Basicshow5 ?
                            <Card className="card6">
                                <Card.Header>
                                    <h3 className='card-title'>Contact Styles 05</h3>
                                    <div className="card-options ms-auto ">
                                        <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick5}><i className={`fe ${BasicExpanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                        <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow5(true)}><i className="fe fe-maximize"></i></Link>
                                        <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow5(false)}><i className="fe fe-x"></i></Link>
                                    </div>
                                </Card.Header>
                                <Modal show={fullscreenshow5} fullscreen={fullScreen5} onHide={() => setfullscreenShow5(false)}>
                                    <Modal.Header>
                                        <h3 className='card-title p-2'>Contact Styles 05</h3>
                                        <div className="card-options ms-auto ">
                                            <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick5}><i className={`fe ${BasicExpanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                            <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose5}><i className="fe fe-maximize"></i></Link>
                                            <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow5(false)}><i className="fe fe-x"></i></Link>
                                        </div>
                                    </Modal.Header>
                                    <Collapse className="" in={BasicExpanded5} timeout={3000}>
                                        <Modal.Body>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className="box-shadow-0 card mb-0 br-0 ">
                                                        <div className="">
                                                            <Card.Body>
                                                                <InputGroup className="mb-3">
                                                                    <Form.Control type="text" placeholder="Your Name" />
                                                                </InputGroup>
                                                                <InputGroup className="mb-3">
                                                                    <Form.Control type="number" placeholder="Enter Phone Number" />
                                                                </InputGroup>
                                                                <InputGroup className="mb-3">
                                                                    <Form.Control type="email" placeholder="Email Address" />
                                                                </InputGroup>
                                                                <InputGroup className="mb-3">
                                                                    <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                                </InputGroup>
                                                                <Link href="#!" className="btn btn-primary mt-4">Send Message</Link>
                                                            </Card.Body>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="contact-info mb-5 mb-xl-0 mt-4 mt-lg-0">
                                                        <h3>Contact Info</h3>
                                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                        <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                        <Link href="#!" className="btn btn-primary">View More</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Collapse>
                                </Modal>
                                <Collapse className="" in={BasicExpanded5} timeout={3000}>

                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="box-shadow-0 card mb-0 br-0 ">
                                                    <div className="">
                                                        <Card.Body>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="text" placeholder="Your Name" />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="number" placeholder="Enter Phone Number" />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control type="email" placeholder="Email Address" />
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Message"></textarea>
                                                            </InputGroup>
                                                            <Link href="#!" className="btn btn-primary mt-4">Send Message</Link>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="contact-info mb-5 mb-xl-0 mt-4 mt-lg-0">
                                                    <h3>Contact Info</h3>
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                    <p className="d-none d-lg-block">rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right </p>
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure </p>
                                                    <Link href="#!" className="btn btn-primary">View More</Link>
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
ContactStyles.layout = "Contentlayout";
export default ContactStyles;

