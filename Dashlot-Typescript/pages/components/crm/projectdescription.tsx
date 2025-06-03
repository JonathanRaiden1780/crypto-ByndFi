import { FC, useState, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, OverlayTrigger, ProgressBar, Row, Tab, Table, Tooltip } from 'react-bootstrap';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import SimpleBar from 'simplebar-react';
import DatePicker from 'react-datepicker';
// import { EventClickArg } from "@fullcalendar/common";
// Now you can use SomeComponent in your code

import { Chat, Images } from '../../../shared/data/crm/projectdescdata';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const ProjectDescription = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for search function
    const [allData, setAllData] = useState(Chat);

    const chatData: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Chat) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    chatData.push(Data);
                }
            }

        }
        setAllData(chatData);
    };

    let eventGuid = 0;
    const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: 'All-day event',
            start: todayStr
        },
        {
            id: createEventId(),
            title: 'Timed event',
            start: todayStr + 'T12:00:00'
        }
    ]

    function createEventId() {
        return String(eventGuid++);
    }
    const initialstate1 = {
        calendarEvents: [
            {
                title: "Atlanta Monster",
                start: new Date("2019-04-04 00:00"),
                id: "1001",
            },
            {
                title: "My Favorite Murder",
                start: new Date("2019-04-05 00:00"),
                id: "1002",
            },
        ],

        events: [
            {
                title: "Calendar Events",
                id: "1",
                bg: "bg-primary",
            },
            {
                title: "Birthday Events",
                id: "2",
                bg: " bg-secondary",
            },
            {
                title: "Holiday Calendar",
                id: "3",
                bg: "bg-success",
            },
            {
                title: "Office Events",
                id: "5",
                bg: "bg-info",
            },
            {
                title: "Other Events",
                id: "6",
                bg: "bg-warning",
            },
            {
                title: "Festival Events",
                id: "7",
                bg: "bg-danger",
            },
            {
                title: "Timeline Events",
                id: "8",
                bg: "bg-teal",
            },
        ],
        weekendsVisible: true
    };
    const [state] = useState(initialstate1);

    useEffect(() => {
        const draggableEl: any = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl: any) {
                const title = eventEl.getAttribute("title");
                const id = eventEl.getAttribute("data");
                const classValue = eventEl.getAttribute("class");
                return {
                    title: title,
                    id: id,
                    className: classValue,
                };
            },
        });
    }, []);

    function renderEventContent(eventInfo: any) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }
    const handleEventClick: (clickInfo: any) => void | undefined = (clickInfo: any) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    };
    const handleEvents = () => { };

    const handleDateSelect = (selectInfo: any) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,

            });
        }
    };

    return (
        <>
            <Seo title={"Projects-Description"} />
            <div className="page-header">
                <div className="flex-grow-1 py-2-5">
                    <h4 className="page-title mb-1">CRM Projects Description</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="/components/crm/crmdashboard/" className="text-primary">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Projects Description</li>
                        </ol>
                    </nav>
                </div>
                <div className="min-w-fit-content d-flex align-items-center">
                    <div className="flex-grow-1 py-2-5">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search any project..." />
                            <Link href="#!" className="btn btn-primary-transparent"><i className="ti ti-search"></i></Link>
                        </div>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1 py-2-5">
                        <Link href="#!" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProjectModal" onClick={handleShow}><i className="fe fe-briefcase me-1" ></i> Create New</Link>

                        <Modal size="lg" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <h5 className='modal-title'>Add Project</h5>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <label className="form-label">Project Name:</label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Project Name"
                                            autoFocus
                                        />
                                    </Form.Group >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Project Description:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="description"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Rank:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Rank your project"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Budget:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Budget amount"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Deadline:</Form.Label>

                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            timeInputLabel="Time:"
                                            placeholderText='Choose date with time'

                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Team:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>

            <div className="main-container container-fluid">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h6">Business Management</Card.Title>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className="wideget-user-desc d-flex">
                                            <div className="wideget-user-img">
                                                <img className="avatar avatar-xxl rounded-circle" src="../../../assets/images/users/13.jpg" alt="img" />
                                            </div>
                                            <div className="user-wrap mt-0">
                                                <h4 className="mb-2">Robert Stewart</h4>
                                                <h6 className="text-muted mb-3 fw-400">Member Since: November 2018</h6>
                                                <Link href="#!" className="btn btn-primary mt-1 mb-1 me-2"><i className="bi bi-briefcase me-1"></i> Projects</Link>
                                                <Link href="#!" className="btn btn-secondary mt-1 mb-1"><i className="bi bi-envelope me-1"></i>  Message</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className="row ms-3 ms-auto mt-lg-0 profile-data">
                                            <div className="col-xl-4 mt-3 mt-xl-0">
                                                <div className="border-end pe-4 mt-xl-3 mt-lg-0 d-xl-block">
                                                    <p className="text-muted mb-3 fw-400 h5">Budget</p>
                                                    <h4 className="fw-500 mb-0 ">$36,25,854</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 mt-3 mt-xl-0">
                                                <div className="border-end ps-xl-4 pe-4 ps-md-0 ps-sm-0 ps-lg-0 mt-2 d-xl-block">
                                                    <p className="text-muted mb-3 fw-400 h5">Team Lead</p>
                                                    <h4 className="fw-500 mb-0 ">John Wisely</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 mt-3 mt-xl-0">
                                                <p className="text-muted mb-3 mt-2 fw-400 h5">Team Members</p>
                                                <div className="mb-0 avatar-list-stacked ">
                                                    <img className="avatar rounded-circle" src="../../../assets/images/users/1.jpg" alt="image" />
                                                    <img className="avatar rounded-circle" src="../../../assets/images/users/5.jpg" alt="image" />
                                                    <img className="avatar rounded-circle" src="../../../assets/images/users/12.jpg" alt="image" />
                                                    <img className="avatar rounded-circle" src="../../../assets/images/users/8.jpg" alt="image" />
                                                    <Link href="#!" className="avatar rounded-circle text-bg-primary">+8</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Tab.Container defaultActiveKey="1">
                            <div className="wideget-user-tab wideget-user-tab3">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1">
                                        <Nav as='ul' variant="tabs" className='border-0' defaultActiveKey="1">
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="1" className="h5" >Details</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="2" className="h5">Team Members</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="3" className="h5" >Messages</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="4" className="h5" >Files</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="5" className="h5" >Task</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="6" className="h5" >Project-Records</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link eventKey="7" className="h5" >Payments</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <Col className="bg-white widget-user mb-4">
                                <Card.Body>
                                    <div className="border-0">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1" className=" p-0 border-0" id="tab-5">
                                                <div className="profile-log-switch">
                                                    <Row>

                                                        <Col xl={8} lg={12} md={12}>
                                                            <Card className="box-shadow-0">
                                                                <Card.Header>
                                                                    <Card.Title as="h3">Description</Card.Title>
                                                                </Card.Header>
                                                                <Card.Body>

                                                                    <div className="mb-0">
                                                                        <p>At vero eos the moment, so blinded by and equal blame belongs to those who fail in their duty through weakness  et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atcorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                                                        <p className="mb-0">On the other hand, we denounce with Lorem ipsum dolor sit amet, consectetur adipiscing elit righteous indignation and dislike men who are so beguiled and demoraliz the charms of pleasure of the moment, so blinded by and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                                                    </div>
                                                                    <ul className="project-description mt-3">
                                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                                                        <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                                                                        <li>The industry's standard dummy text ever since the 1500s</li>
                                                                        <li>Praesentium voluptatum deleniti atcorrupti quos dolores</li>
                                                                        <li>We denounce with righteous indignation and dislike men</li>
                                                                        <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                                                                        <li>Praesentium voluptatum deleniti atcorrupti quos dolores</li>
                                                                    </ul>
                                                                </Card.Body>
                                                            </Card>
                                                            <Row>
                                                                <Col sm={12} md={12} lg={4} xl={4}>
                                                                    <Card className="mb-xl-0 box-shadow-0">
                                                                        <Card.Body className="text-center">
                                                                            <p className=" mb-1 ">Income Budget</p>
                                                                            <h3 className="mb-1">4500,00</h3>
                                                                            <span className="mb-1 text-muted fs-13"><span className="text-danger me-1"><i className="fa fa-caret-down  me-1"></i> 43.2</span> than last month</span>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col sm={12} md={12} lg={4} xl={4}>
                                                                    <div className="card mb-xl-0 box-shadow-0 text-center">
                                                                        <Card.Body className="text-center">
                                                                            <p className=" mb-1 ">Expense Budget</p>
                                                                            <h3 className="mb-1">5678,20</h3>
                                                                            <span className="mb-1 text-muted fs-13"><span className="text-success me-1"><i className="fa fa-caret-down  me-1"></i> 19.8 </span> than last month</span>
                                                                        </Card.Body>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={12} md={12} lg={4} xl={4} >
                                                                    <div className="card mb-xl-0 box-shadow-0 text-center">
                                                                        <Card.Body className="text-center">
                                                                            <p className=" mb-1 ">Gross Profit Margin</p>
                                                                            <h3 className="mb-1">78%</h3>
                                                                            <span className="mb-1 text-muted fs-13"><span className="text-info me-1"><i className="fa fa-caret-down  me-1"></i> 0.8% </span> than last month</span>
                                                                        </Card.Body>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col xl={4} lg={12} md={12}>
                                                            <Card className=" overflow-hidden mb-0 box-shadow-0">
                                                                <Card.Header>
                                                                    <Card.Title as="h3">Project</Card.Title>
                                                                </Card.Header>
                                                                <div className="project text-fixed-white Project-status ">
                                                                    <Card.Body>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="">Project status</div>
                                                                                <div className="h3 mt-2 mb-2"><b>55%</b><span className="text-success fs-13 ms-2">(completed)</span></div>
                                                                            </Col>
                                                                            <div className="col-auto align-self-center ">
                                                                                <div className="feature mt-0 mb-0">
                                                                                    <i className="fe fe-briefcase box-shadow-0 project text-fixed-white"></i>
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                        <div className="">
                                                                            <p className="mb-1">Overview of Project Status</p>
                                                                            <div className="progress box-shadow-0 h-2 mt-1 mb-1">
                                                                                <ProgressBar className="progress-bar bg-secondary w-50 " now={60} />                                                              </div>
                                                                            <small className="mb-0 text-fixed-white-50">Ongoing</small>
                                                                        </div>
                                                                    </Card.Body>
                                                                </div>
                                                                <div className="p-0">
                                                                    <Row className=" py-3 px-4 mt-0">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Team Lead:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15"> John Wisely </div>
                                                                    </Row>
                                                                    <Row className="py-3 px-4 bg-body">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Client:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15"> Robert</div>
                                                                    </Row>
                                                                    <div className="row py-3 px-4">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Budget:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15">$36,25,854 </div>
                                                                    </div>
                                                                    <Row className=" py-3 px-4 bg-body">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Department:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15"> Sales </div>
                                                                    </Row>
                                                                    <div className="row py-3 px-4">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Duration:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15">5 months</div>
                                                                    </div>
                                                                    <Row className=" py-3 px-4 bg-body">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Status:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 text-success fs-15">
                                                                            Active
                                                                        </div>
                                                                    </Row>
                                                                    <div className="row py-3 px-4">
                                                                        <Col>
                                                                            <span className="mb-0 mt-1 fs-15">Deadline:</span>
                                                                        </Col>
                                                                        <div className="col col-auto fw-500 fs-15">13-06-2020</div>
                                                                    </div>
                                                                    <Row className=" py-3 px-4 bg-body">
                                                                        <div className="col mt-1">
                                                                            <span className="mb-0 mt-1 fs-15">Team:</span>
                                                                        </div>
                                                                        <div className="col-auto"><div className="avatar-list-stacked">
                                                                            <span><img src="../../../assets/images/users/1.jpg" alt="img" className="avatar rounded-circle" /></span>
                                                                            <span><img src="../../../assets/images/users/2.jpg" alt="img" className="avatar rounded-circle" /></span>
                                                                            <span><img src="../../../assets/images/users/3.jpg" alt="img" className="avatar rounded-circle" /></span>
                                                                            <span><img src="../../../assets/images/users/4.jpg" alt="img" className="avatar rounded-circle" /></span>
                                                                            <span><img src="../../../assets/images/users/5.jpg" alt="img" className="avatar rounded-circle" /></span>
                                                                        </div>
                                                                        </div>
                                                                    </Row>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="2" className="p-0 border-0" id="tab-6">
                                                <Row>
                                                    {Images.map((idx: any) => (
                                                        <Col sm={12} xl={4} lg={12} key={idx.src}>
                                                            <div className={`card box-shadow-0 ${idx.class}`}>
                                                                <Card.Body>
                                                                    <div className="media mt-0">
                                                                        <figure className="rounded-circle align-self-start mb-0">
                                                                            <img src={idx.src} alt="Generic placeholder image" className="avatar rounded-circle avatar-md me-3" />
                                                                        </figure>
                                                                        <div className="media-body">
                                                                            <h6 className="time-title p-0 mb-0 fw-500 leading-normal">{idx.name}</h6>
                                                                            {idx.country}
                                                                        </div>
                                                                        <Button variant='' className=" btn-primary-transparent d-none d-sm-block me-2 mt-1"><i className="fa fa-comments"></i> </Button>
                                                                        <Button variant='' className=" btn-secondary-transparent d-none d-sm-block mt-1"><i className="fa fa-phone"></i> </Button>
                                                                    </div>
                                                                </Card.Body>
                                                                <div className="card-footer  border-top">
                                                                    Email: <span className="text-primary">{idx.mailid}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3" className="border-0" id="tab-7">

                                                <h4 className="card-title mb-4 fs-14">PROJECT RELATED MESSAGES</h4>
                                                <div className="row chatbox">
                                                    <Col md={12} lg={5} xl={4} className=''>
                                                        <div className="card overflow-hidden">
                                                            <div className="main-chat-list">
                                                                <div className="p-4">
                                                                    <InputGroup>
                                                                        <Form.Control type="text" className="form-control" placeholder="Search" onChange={(ele) => { myfunction(ele.target.value); }} />
                                                                        <Button type="button" className="btn btn-primary">
                                                                            <i className="fa fa-search" aria-hidden="true" ></i>
                                                                        </Button>
                                                                    </InputGroup>
                                                                </div>

                                                                <div className="contacts_body p-0">
                                                                    <SimpleBar className="contacts">
                                                                        {allData.map((idx: any) => (
                                                                            <ul key={idx.name} className="contacts mb-0" id="crm-project-messages">
                                                                                <li className={idx.classlist}>
                                                                                    <div className="d-flex bd-highlight">
                                                                                        <div className="img_cont">
                                                                                            <img src={idx.src} className="rounded-circle user_img" alt="img" />
                                                                                        </div>
                                                                                        <div className="user_info">
                                                                                            <h6 className="mt-1 mb-0 ">{idx.name}</h6>
                                                                                            <span className={`dot-label bg-${idx.color}`}></span><span className="me-3">{idx.status}</span>
                                                                                        </div>
                                                                                        <div className="float-end text-end ms-auto mt-auto mb-auto">
                                                                                            <small>{idx.Date}</small>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        ))}

                                                                    </SimpleBar>
                                                                </div>
                                                                {/* </Scrollbar> */}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="col-md-12 col-lg-7 col-xl-8 chat">
                                                        <Card className=" overflow-hidden">
                                                            <div className="action-header clearfix border-bottom">
                                                                <div className="float-start hidden-xs d-flex ms-2">
                                                                    <div className="img_cont me-3">
                                                                        <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img" alt="img" />
                                                                    </div>
                                                                    <div className="align-items-center mt-2">
                                                                        <h4 className="mb-0 font-weight-semibold">Jacob Allan</h4>
                                                                        <span className="dot-label bg-success"></span><span className="me-3">online</span>
                                                                    </div>
                                                                </div>
                                                                <ul className="ah-actions actions float-end align-items-center">
                                                                    <li className="call-icon">
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>call </Tooltip>}>
                                                                            <Link href="#!" className="d-done d-md-flex"> <i className="fe fe-phone"></i></Link>
                                                                        </OverlayTrigger></li>
                                                                    <li className="video-icon">
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>video call </Tooltip>}><Link href="#!" className="d-done d-md-flex">
                                                                            <i className="fe fe-video"></i></Link>
                                                                        </OverlayTrigger>
                                                                    </li>
                                                                    <Dropdown as="li">
                                                                        <Dropdown.Toggle as='a' className='no-caret' variant=''>
                                                                            <i className="fe fe-more-vertical"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu as='ul' className="dropdown-menu dropdown-menu-end">
                                                                            <Dropdown.Item as='li'><i className="fe fe-user text"></i> View profile</Dropdown.Item>
                                                                            <Dropdown.Item as='li'><i className="fe fe-users text"></i> Add friends</Dropdown.Item>
                                                                            <Dropdown.Item as='li'><i className="fe fe-plus text"></i> Add to group</Dropdown.Item>
                                                                            <Dropdown.Item as='li' ><i className="fe fe-slash text"></i> Block</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </ul>
                                                            </div>
                                                            <SimpleBar className="main-chat-msgs">
                                                                <div className="card-body msg_card_body">
                                                                    <div className="chat-box-single-line">
                                                                        <Link href='#!' className="timestamp">February 1st, 2022</Link>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            Hi, how are you Jenna Side?
                                                                            <span className="msg_time">8:40 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <div className="msg_cotainer_send">
                                                                            Hi Connor Paige i am good tnx how about you?
                                                                            <span className="msg_time_send">8:55 AM, Today</span>
                                                                        </div>
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/5.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            I am good too, thank you for your chat template
                                                                            <span className="msg_time">9:00 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <div className="msg_cotainer_send">
                                                                            You welcome Connor Paige
                                                                            <span className="msg_time_send">9:05 AM, Today</span>
                                                                        </div>
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/5.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            Yo, Can you update Views?
                                                                            <span className="msg_time">9:07 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <div className="msg_cotainer_send">
                                                                            But I must explain to you how all this mistaken  born and I will give
                                                                            <span className="msg_time_send">9:10 AM, Today</span>
                                                                        </div>
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/5.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            Yo, Can you update Views?
                                                                            <span className="msg_time">9:07 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <div className="msg_cotainer_send">
                                                                            But I must explain to you how all this mistaken  born and I will give
                                                                            <span className="msg_time_send">9:10 AM, Today</span>
                                                                        </div>
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/5.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            Yo, Can you update Views?
                                                                            <span className="msg_time">9:07 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <div className="msg_cotainer_send">
                                                                            But I must explain to you how all this mistaken  born and I will give
                                                                            <span className="msg_time_send">9:10 AM, Today</span>
                                                                        </div>
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/5.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <div className="img_cont_msg">
                                                                            <img src="../../../assets/images/users/2.jpg" className="rounded-circle user_img_msg" alt="img" />
                                                                        </div>
                                                                        <div className="msg_cotainer">
                                                                            Okay Bye, text you later..
                                                                            <span className="msg_time">9:12 AM, Today</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SimpleBar>

                                                            <div className="card-footer msg-footer bg-white">
                                                                <div className="msb-reply d-flex">
                                                                    <span className="input-group-text attach_btn"><i className="fa fa-smile-o"></i></span>
                                                                    <textarea className='bg-light' placeholder="What's on your mind"></textarea>
                                                                    <Button><i className="fa fa-paper-plane-o"></i></Button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4" className=" userprof-tab p-0 border-0" id="tab-8">

                                                <Card.Body className="border">
                                                    <div>
                                                        <Form.Group >
                                                            <div className="form-label mb-2">Short Note</div>
                                                            <textarea className="form-control mb-3" name="example-textarea-input" rows={6} placeholder="Comment"></textarea>
                                                        </Form.Group>
                                                        <Form.Group >
                                                            <div className="form-label mb-2">Attachment</div>
                                                            <div className="form-file">
                                                                <Form.Control type="file" className="form-file-input" name="form-file-input" />
                                                            </div>&nbsp;
                                                        </Form.Group>
                                                        <Button variant='primary'>Upload</Button>
                                                    </div>
                                                </Card.Body>
                                                <div className="mt-5">
                                                    <h5 className="mb-3">Project Files</h5>
                                                    <div className="table-responsive">
                                                        <Table className="table table-bordered text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th className="border-bottom-0">#</th>
                                                                    <th className="border-bottom-0">Name</th>
                                                                    <th className="border-bottom-0">Uploaded By</th>
                                                                    <th className="border-bottom-0">Uploaded Date</th>
                                                                    <th className="border-bottom-0">File Size</th>
                                                                    <th className="border-bottom-0">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <div className="avatar bg-primary-transparent me-2 br-5">
                                                                            <i className="fe fe-file fs-18 text-primary"></i>
                                                                        </div>
                                                                        <span>Spruha - Bootstrap Admin</span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">Rhona Davidson</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">23/09/2022</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">32MB</p>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-list">
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-edit"></i>
                                                                            </Link>
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-x"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>
                                                                        <div className="avatar bg-secondary-transparent me-2 br-5">
                                                                            <i className="fe fe-file fs-18 text-secondary"></i>
                                                                        </div>
                                                                        <span>Valex - Django Admin</span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">John Wisely</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">13/09/2022</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">50MB</p>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-list">
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-edit"></i>
                                                                            </Link>
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-x"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>
                                                                        <div className="avatar bg-info-transparent me-2 br-5">
                                                                            <i className="fe fe-file fs-18 text-info"></i>
                                                                        </div>
                                                                        <span>Sash - Laravel Admin</span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">Robert Stewart</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">20/09/2022</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">23MB</p>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-list">
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-edit"></i>
                                                                            </Link>
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-x"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>
                                                                        <div className="avatar bg-warning-transparent me-2 br-5">
                                                                            <i className="fe fe-file fs-18 text-warning"></i>
                                                                        </div>
                                                                        <span>Noa - Bootstrap Admin</span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">Stewart Jonathan</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">18/10/2022</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="my-2">47MB</p>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-list">
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-edit"></i>
                                                                            </Link>
                                                                            <Link href="#!" className="btn btn-sm btn-light">
                                                                                <i className="fe fe-x"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="5" className=" userprof-tab p-0 border-0" id="tab-9">
                                                <Row>
                                                    <Col xl={3} className="col-xl-3">
                                                        <Card className='custom-card'>
                                                            <Card.Header className="d-grid">
                                                                <Button variant='primary-light' className="btn  btn-wave waves-effect waves-light"><i className="ri-add-line align-middle me-1 fw-semibold d-inline-block"></i>Create New Event</Button>
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <div id="external-events" className=''>
                                                                    {state.events.map((event: any) => (
                                                                        <div
                                                                            className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} border border-${event.bg}`}
                                                                            title={event.title}
                                                                            key={event.id}>
                                                                            <div className="fc-event-main">{event.title}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Card className="custom-card">
                                                            <Card.Header className="">
                                                                <Card.Title>Full Calendar</Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className="">
                                                                <div id='calendar2'>
                                                                    <FullCalendar
                                                                        plugins={[
                                                                            dayGridPlugin,
                                                                            timeGridPlugin,
                                                                            interactionPlugin,
                                                                            // listWeek,
                                                                        ]}
                                                                        headerToolbar={{
                                                                            left: "prev,next today",
                                                                            center: "title",
                                                                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                                                                        }}
                                                                        initialView="dayGridMonth"
                                                                        editable={true}
                                                                        selectable={true}
                                                                        selectMirror={true}
                                                                        dayMaxEvents={true}
                                                                        weekends={state.weekendsVisible}
                                                                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                                                                        select={handleDateSelect}
                                                                        eventContent={renderEventContent}
                                                                        // eventContent={renderEventContent} // custom render function
                                                                        eventClick={handleEventClick}
                                                                    />
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mt-4">
                                                            <div className="card">
                                                                <div className="card-header d-flex align-items-center">
                                                                    <span className="table-add float-end">
                                                                        <Link href="#!" className="btn btn-icon"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></Link>
                                                                    </span>
                                                                    <h4 className="mb-0 card-title ">Create New Task</h4>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="table-responsive  border-top-0">
                                                                        <Table className="table table-bordered text-nowrap border-bottom" id="editTable1">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="wd-20p">TITLE</th>
                                                                                    <th className="wd-25p">DESCRIPTION</th>
                                                                                    <th className="wd-20p">	ASSIGN STAFF</th>
                                                                                    <th className="wd-15p">START DATE</th>
                                                                                    <th className="wd-20p">END DATE</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Payments</td>
                                                                                    <td>Project</td>
                                                                                    <td>5 members</td>
                                                                                    <td>Thu,15-Jun-2022</td>
                                                                                    <td>Mon,23-Sept-2022</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Networking</td>
                                                                                    <td>Financial supports</td>
                                                                                    <td>12 members</td>
                                                                                    <td>Wed, 18-dec-2022</td>
                                                                                    <td>Thu, 23-Apr-2020</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Accounts</td>
                                                                                    <td>Financial</td>
                                                                                    <td>15 members</td>
                                                                                    <td>Tue, 27-Mar-2020</td>
                                                                                    <td>Sat, 12-Aug-2020</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Elisa Gallagher</td>
                                                                                    <td>Tech </td>
                                                                                    <td>31 members</td>
                                                                                    <td>Tue, 25-Mar-2020</td>
                                                                                    <td>Sat, 01-Aug-2020</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </Table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="6" className=" userprof-tab p-0 border-0" id="tab-10">
                                                <Row>
                                                    <Col xl={12}>
                                                        <div className="">
                                                            <Card className="box-shadow-0 mb-xl-0">
                                                                <Card.Header>
                                                                    <Card.Title as="h3">Projects</Card.Title>
                                                                </Card.Header>
                                                                <div className="project-records">
                                                                    <div className="d-flex table-responsive p-3">
                                                                        <div className="btn-list">
                                                                            <Button variant='primary'><i className="bi bi-plus-circle me-1"></i> Add</Button>
                                                                            <Button variant='light'><i className="bi bi-exclamation-circle"></i></Button>
                                                                            <Button variant='light'><i className="bi bi-trash-fill"></i></Button>
                                                                            <Button variant='light'><i className="bi bi-printer-fill"></i></Button>
                                                                        </div>
                                                                        <div className="btn-group ms-auto me-3 mt-1 border-0 d-none d-md-block">
                                                                            <Form.Control type="text" placeholder="Search Here" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="table-responsive border-top">
                                                                        <Table className="table card-table table-striped text-nowrap">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>ID</th>
                                                                                    <th>PROJECT NAME</th>
                                                                                    <th>TEAM</th>
                                                                                    <th>FEEDBACK</th>
                                                                                    <th>DATE</th>
                                                                                    <th>PREVIEW</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>2345</td>
                                                                                    <td>Megan Peters</td>
                                                                                    <td>
                                                                                        <div className="avatar-list-stacked">
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/4.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/6.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar  rounded-circle" src="../../../assets/images/users/8.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/10.jpg" alt="image" /></span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>please check pricing Info</td>
                                                                                    <td className="text-nowrap">July 13, 2020</td>
                                                                                    <td className="w-1"><Link href="#!" className="icon"><i className="fa fa-eye"></i></Link>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>4562</td>
                                                                                    <td>Phil Vance</td>
                                                                                    <td>
                                                                                        <div className="avatar-list-stacked">
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/3.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/5.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/7.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/9.jpg" alt="image" /></span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>New stock</td>
                                                                                    <td className="text-nowrap">June 15, 2020</td>
                                                                                    <td><Link href="#!" className="icon"><i className="fa fa-eye"></i></Link>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>8765</td>
                                                                                    <td>Adam Sharp</td>
                                                                                    <td>
                                                                                        <div className="avatar-list-stacked">
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/2.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/8.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/12.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/14.jpg" alt="image" /></span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>Daily updates</td>
                                                                                    <td className="text-nowrap">July 8, 2020</td>
                                                                                    <td><Link href="#!" className="icon"><i className="fa fa-eye"></i></Link>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>2665</td>
                                                                                    <td>Samantha Slater</td>
                                                                                    <td>
                                                                                        <div className="avatar-list-stacked">
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/12.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/6.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/8.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/1.jpg" alt="image" /></span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>available item list</td>
                                                                                    <td className="text-nowrap">June 28, 2020</td>
                                                                                    <td><Link href="#!" className="icon"><i className="fa fa-eye"></i></Link>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='border-bottom-0'>1245</td>
                                                                                    <td className='border-bottom-0'>Joanne Nash</td>
                                                                                    <td className='border-bottom-0'>
                                                                                        <div className="avatar-list-stacked">
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/11.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/12.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/5.jpg" alt="image" /></span>
                                                                                            <span><img className="avatar rounded-circle" src="../../../assets/images/users/14.jpg" alt="image" /></span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className='border-bottom-0'>Provide Best Services</td>
                                                                                    <td className="text-nowrap border-bottom-0">July 2, 2020</td>
                                                                                    <td className='border-bottom-0'><Link href="#!" className="icon"><i className="fa fa-eye"></i></Link>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </Table>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="7" className=" userprof-tab p-0 border-0" id="tab-11">
                                                <Row>
                                                    <div className="col-12">
                                                        <Card>
                                                            <Card.Header className="d-flex align-items-center">
                                                                <span className="table-add float-end">
                                                                    <Link href="#!" className="btn btn-icon"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></Link>
                                                                </span>
                                                                <h4 className="mb-0 card-title ">Create New Payment</h4>
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <div className="table-responsive">
                                                                    <Table className="table-bordered text-nowrap border-bottom" id="editTable2">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="wd-20p">TITLE</th>
                                                                                <th className="wd-25p">DATE</th>
                                                                                <th className="wd-20p">AMOUNT</th>
                                                                                <th className="wd-15p">STATUS</th>
                                                                                <th className="wd-20p">PAYMENTS</th>
                                                                                <th className="wd-20p">ACTIONS</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Project Management</td>
                                                                                <td>13-01-2022</td>
                                                                                <td>$3200</td>
                                                                                <td>
                                                                                    <span className="badge badge-success">paid</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="badge badge-info">invoice</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                            <i className="fe fe-edit"> </i>
                                                                                        </Button>
                                                                                        <Button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                                                                                            <i className="fe fe-trash-2"> </i>
                                                                                        </Button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Hospital Management</td>
                                                                                <td>15-02-2022</td>
                                                                                <td>$2500</td>
                                                                                <td>
                                                                                    <span className="badge badge-success">paid</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="badge badge-info">invoice</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                            <i className="fe fe-edit"> </i>
                                                                                        </Button>
                                                                                        <Button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                                                                                            <i className="fe fe-trash-2"> </i>
                                                                                        </Button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Program Management</td>
                                                                                <td>23-03-2022</td>
                                                                                <td>$2800</td>
                                                                                <td>
                                                                                    <span className="badge badge-danger">unpaid</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="badge badge-warning">pay</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                            <i className="fe fe-edit"> </i>
                                                                                        </Button>
                                                                                        <Button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                                                                                            <i className="fe fe-trash-2"> </i>
                                                                                        </Button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Records Management</td>
                                                                                <td>29-03-2022</td>
                                                                                <td>$3300</td>
                                                                                <td>
                                                                                    <span className="badge badge-success">paid</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="badge badge-info">invoice</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                            <i className="fe fe-edit"> </i>
                                                                                        </Button>
                                                                                        <Button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                                                                                            <i className="fe fe-trash-2"> </i>
                                                                                        </Button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Integrated management</td>
                                                                                <td>06-04-2022</td>
                                                                                <td>$3800</td>
                                                                                <td>
                                                                                    <span className="badge badge-success">paid</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="badge badge-info">invoice</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                            <i className="fe fe-edit"> </i>
                                                                                        </Button>
                                                                                        <Button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                                                                                            <i className="fe fe-trash-2"> </i>
                                                                                        </Button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Tab.Container>
                    </Col>
                </Row>

            </div>

        </>
    );
};
ProjectDescription.layout = "Contentlayout";

export default ProjectDescription;

