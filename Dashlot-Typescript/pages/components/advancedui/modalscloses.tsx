import { FC, Fragment, useState } from 'react';
import { Button, Card, CloseButton, Col, Collapse, Container, Form, Modal, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap';
import Rodal from "rodal";
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { modal1, modal10, modal11, modal12, modal13, modal14, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal15 } from "../../../shared/data/prismdata/advanceuidata";


const Modalscloses = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // static
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //scrolling
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //popover
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    //@mdo
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    //@fat
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    //@getbootstrap

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    //vertically centered modal
    const [modalShow, setModalShow] = useState(false);

    //vertically centered scrollable
    const [modalShow1, setModalShow1] = useState(false);

    //grid
    const [modalShow2, setModalShow2] = useState(false);

    // small modal
    const [smShow, setSmShow] = useState(false);

    //large modal
    const [lgShow, setLgShow] = useState(false);

    //large modal
    const [xlShow, setXlShow] = useState(false);

    //  Twomodals
    const [showt1, setShowt1] = useState(false);
    const [showt2, setShowt2] = useState(false);
    const handleCloset1 = () => setShowt1(false);
    const handleShowt1 = () => setShowt1(true);
    const handleCloset2 = () => setShowt2(false);

    const Handleclose1 = () => {
        setShowt1(false);
        setShowt2(true);
    };
    const Handleclose2 = () => {
        setShowt2(false);
        setShowt1(true);
    };
    //fullscreen modals
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
    const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [showf, setShowf] = useState(false);

    function handleShowf(breakpoint: any, _color: any) {
        setFullscreen(breakpoint);
        setShowf(true);
    }

    // //Animated Modal
    const [, setVisible] = useState(false);

    const [animation1, setanimation1] = useState(false);
    const [animation2, setanimation2] = useState(false);
    const [animation3, setanimation3] = useState(false);
    const [animation4, setanimation4] = useState(false);
    const [animation5, setanimation5] = useState(false);
    const [animation6, setanimation6] = useState(false);
    const [animation7, setanimation7] = useState(false);
    const [animation8, setanimation8] = useState(false);
    const [animation9, setanimation9] = useState(false);

    const hide = () => {
        setVisible(false);
    };

    const viewDemoShow1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(true);
                break;
            case "show2":
                setanimation2(true);
                break;
            case "show3":
                setanimation3(true);
                break;
            case "show4":
                setanimation4(true);
                break;
            case "show5":
                setanimation5(true);
                break;
            case "show6":
                setanimation6(true);
                break;
            case "show7":
                setanimation7(true);
                break;
            case "show8":
                setanimation8(true);
                break;
            case "show9":
                setanimation9(true);
                break;
        }
    };

    const viewDemoClose1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(false);
                break;
            case "show2":
                setanimation2(false);
                break;
            case "show3":
                setanimation3(false);
                break;
            case "show4":
                setanimation4(false);
                break;
            case "show5":
                setanimation5(false);
                break;
            case "show6":
                setanimation6(false);
                break;
            case "show7":
                setanimation7(false);
                break;
            case "show8":
                setanimation8(false);
                break;
            case "show9":
                setanimation9(false);
                break;
        }
    };

    return (
        <Fragment>
            <Seo title={"Modal & Closes"} />
            <PageheaderDB heading="Advanced Ui" active="Modal & Closes" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Basic Modal" customCardclassName="" code={modal1}>
                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Static backdrop" customCardclassName="" code={modal2}>
                            <Button variant="primary" onClick={handleShow1}>
                                Launch static backdrop modal
                            </Button>

                            <Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. Don not even try to press
                                    escape key.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose1}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>

                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Scrolling long content" customCardclassName="" code={modal3}>

                            <Button variant='primary' type="button" className="btn btn-primary" onClick={handleShow2}>
                                Scrolling long content
                            </Button>
                            <Modal show={show2} onHide={handleClose2} keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Libero
                                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                        nisi
                                        ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                        ex
                                        tempore fuga similique ipsa blanditiis et accusamus
                                        temporibus
                                        commodi voluptas! Nobis veniam illo architecto expedita quam
                                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                                        deleniti
                                        quis ad nemo ipsam officia temporibus, doloribus fuga
                                        asperiores
                                        ratione distinctio velit alias hic modi praesentium aperiam
                                        officiis eaque, accusamus aut. Accusantium assumenda,
                                        commodi
                                        nulla provident asperiores fugit inventore iste amet aut
                                        placeat
                                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                                        aperiam dolores magni iusto distinctio voluptatibus minus a
                                        unde
                                        at! Consequatur voluptatum in eaque obcaecati, impedit
                                        accusantium ea soluta, excepturi, quasi quia commodi
                                        blanditiis?
                                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                                        accusamus recusandae est consequuntur iure.</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>

                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Vertically centered modal" customCardclassName="" code={modal4}>
                            <Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => setModalShow(true)}
                                data-bs-target="#!exampleModalScrollable2">
                                Vertically centered modal
                            </Button>
                            <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                        nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Vertical Centered Scrollable" customCardclassName="" code={modal5}>

                            <Button variant='primary' type="button" className="btn" onClick={() => setModalShow1(true)}>
                                Vertically centered scrollable modal
                            </Button>

                            <Modal centered show={modalShow1} onHide={() => setModalShow1(false)}
                                keyboard={false} className="modal fade">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                    ex
                                    tempore fuga similique ipsa blanditiis et accusamus
                                    temporibus
                                    commodi voluptas! Nobis veniam illo architecto expedita quam
                                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                                    deleniti
                                    quis ad nemo ipsam officia temporibus, doloribus fuga
                                    asperiores
                                    ratione distinctio velit alias hic modi praesentium aperiam
                                    officiis eaque, accusamus aut. Accusantium assumenda,
                                    commodi
                                    nulla provident asperiores fugit inventore iste amet aut
                                    placeat
                                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                                    aperiam dolores magni iusto distinctio voluptatibus minus a
                                    unde
                                    at! Consequatur voluptatum in eaque obcaecati, impedit
                                    accusantium ea soluta, excepturi, quasi quia commodi
                                    blanditiis?
                                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                                    accusamus recusandae est consequuntur iure.</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow1(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title=" Tooltips and popovers " customCardclassName="" code={modal6}>
                            <Button variant='primary' type="button" className="" onClick={handleShow3}>
                                Launch demo modal
                            </Button>
                            <Modal show={show3} onHide={handleClose3} centered className='popover-modal'>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6"> Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Popover in a modal</h5>
                                    <p> This
                                        <OverlayTrigger trigger="click"
                                            placement='right'
                                            // autoclose='true'
                                            overlay={
                                                <Popover placement='bottom'>
                                                    <Popover.Header> Popover bottom</Popover.Header>
                                                    <Popover.Body>
                                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                                    </Popover.Body>
                                                </Popover>
                                            }>
                                            <Button variant="secondary" className="me-2 ms-2">button</Button>
                                        </OverlayTrigger>
                                        triggers a popover on click.
                                    </p>
                                    <hr />
                                    <h5>Tooltips in a modal</h5>
                                    <p className="mb-0">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>tooltip</Tooltip>}>
                                            <Link href="#!" className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link</Link>
                                        </OverlayTrigger> and <OverlayTrigger placement="top" overlay={<Tooltip>tooltip</Tooltip>}>
                                            <Link href="#!" className="text-primary" data-bs-toggle="tooltip" title="Tooltip">that link</Link>
                                        </OverlayTrigger> have tooltips on hover.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Using the grid" customCardclassName="" code={modal7}>
                            <Button variant='' type="button" className="btn btn-primary" onClick={() => setModalShow2(true)}>
                                Launch demo modal
                            </Button>
                            <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6"> Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container fluid>
                                        <Row>
                                            <Col md={4} className=" bg-light border">.col-md-4</Col>
                                            <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                                .ms-auto</Col>
                                            <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col sm={9} className=" bg-light border">
                                                Level 1: .col-sm-9
                                                <Row>
                                                    <Col sm={6} className="col-8 bg-light border">
                                                        Level 2: .col-8 .col-sm-6
                                                    </Col>
                                                    <Col sm={6} className="col-4 bg-light border">
                                                        Level 2: .col-4 .col-sm-6
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow2(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Toggle between modals" customCardclassName="" code={modal8}>
                            <Button variant='primary' className="btn" onClick={handleShowt1}>Open first modal
                            </Button>
                            <Modal id="m1" className="fade" aria-hidden="true"
                                aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1} >
                                <Modal.Header closeButton>
                                    <Modal.Title className="mb-0 h6" id="exampleModalToggleLabel">Modal 1</Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    Show a second modal and hide this one with the button below. </Modal.Body>
                                <Modal.Footer>
                                    <Button className="btn btn-primary" id="btn1" onClick={Handleclose1}>Open second modal</Button>
                                </Modal.Footer>

                            </Modal>
                            <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                                centered show={showt2} onHide={handleCloset2}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="mb-0 h6">Modal 2</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Hide this modal and show the first with the button below.</Modal.Body>
                                <Modal.Footer>
                                    <Button className="btn btn-primary"
                                        onClick={Handleclose2}>Back to first</Button>
                                </Modal.Footer>

                            </Modal>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Optional sizes" customCardclassName="" code={modal9}>
                            <Button variant='primary' type="button" className="btn m-1" onClick={() => setXlShow(true)}
                                data-bs-target="#!exampleModalXl">Extra large modal</Button>
                            <Button variant='secondary' type="button" className="btn  m-1" onClick={() => setLgShow(true)}
                                data-bs-target="#!exampleModalLg">Large modal</Button>
                            <Button variant='warning ' type="button" className="btn  m-1" onClick={() => setSmShow(true)}
                                data-bs-target="#!exampleModalSm">Small modal</Button>

                            <Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                        Extra large Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-lg">
                                        Large Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                        Small Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Fullscreen modal" customCardclassName="" code={modal10}>
                            {values.map((v, idx) => (
                                <Button
                                    key={idx}
                                    className={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
                                    onClick={() => handleShowf(v, colors[idx % colors.length])}
                                >
                                    Full screen {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                </Button>
                            ))}
                            <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                                <Modal.Header closeButton>
                                    <h6 className='modal-title'>Fullscreen Modal</h6>
                                </Modal.Header>
                                <Modal.Body>Modal body content</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowf(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Varying modal content" customCardclassName="" code={modal11}>
                            <Button variant='primary' type="button" className="btn  mb-1 me-2" onClick={handleShow4}>Open modal for
                                @mdo</Button>
                            <Modal show={show4} onHide={handleClose4}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal heading
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control type="email" defaultValue="@mdo" />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose4}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant='secondary' type="button" className="btn mb-1 me-2" onClick={handleShow5}>Open modal for
                                @fat</Button>
                            <Modal show={show5} onHide={handleClose5}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal heading
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control type="email" defaultValue="@fat" />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose5}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant='light' type="button" className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
                                @getbootstrap</Button>
                            <Modal show={show6} onHide={handleClose6}>
                                <Modal.Header closeButton >
                                    <Modal.Title as="h6">Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                defaultValue=" @getbootstrap"

                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose6}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <ShowCode title=" Modal Animation Effects" customCardclassName=" " code={modal15}>

                            <Row className="row-sm">
                                <Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
                                    <Rodal onClose={() => viewDemoClose1("Basic")} visible={animation1} animation='Scale' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic"); }}>
                                                <i className='fe fe-x ms-auto'></i>
                                            </span>
                                            </Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button className='' variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
                                    <Rodal onClose={() => viewDemoClose1("show2")} visible={animation2} animation='fade' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
                                    <Rodal onClose={() => viewDemoClose1("show3")} visible={animation3} animation='flip' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
                                    <Rodal onClose={() => viewDemoClose1("show4")} visible={animation4} animation='door' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
                                    <Rodal onClose={() => viewDemoClose1("show5")} visible={animation5} animation='rotate' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
                                    <Rodal onClose={() => viewDemoClose1("show6")} visible={animation6} animation='slideUp' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
                                    <Rodal onClose={() => viewDemoClose1("show7")} visible={animation7} animation='slideDown' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
                                    <Rodal onClose={() => viewDemoClose1("show8")} visible={animation8} animation='slideLeft' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link href="#!" className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
                                    <Rodal onClose={() => viewDemoClose1("show9")} visible={animation9} animation='slideRight' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                            </Row>
                        </ShowCode>


                    </Col>
                </Row>
                <h6 className="mb-3">Close Buttons:</h6>
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Basic Close" customCardclassName="" code={modal12}>
                            <Button variant='' type="button" className="btn-close border-0" aria-label="Close"></Button>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Disable state" customCardclassName="" code={modal13}>
                            <Button variant='' type="button" className="btn-close border-0" disabled aria-label="Close"></Button>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="White variant" customCardclassName=" overflow-hidden" customCardHeaderclassName="" customCardBodyClass="bg-black" code={modal14}>
                            <CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
                            <CloseButton type="button" className="btn-close btn-close-white" disabled
                                aria-label="Close"></CloseButton>
                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Modalscloses.layout = "Contentlayout";
export default Modalscloses;
