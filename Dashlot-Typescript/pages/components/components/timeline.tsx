
import { Card, Col, Row } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const Timeline = () => {
    return (

        <>
            <Seo title={"Timeline"} />
            <PageheaderDB heading="Components" active="Timeline" />
            <div className="main-container container-fluid">

                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h3 className="card-title">Timeline-1</h3>
                            </Card.Header>
                            <Card.Body>
                                <ul className="cbp_tmtimeline">
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-11-04T18:30"><span className="hidden">25/11/2018</span><span className="large">Now</span></time>
                                        <div className="cbp_tmicon bg-warning"><i className="zmdi zmdi-account"></i></div>
                                        <div className="cbp_tmlabel empty"> <span>No Activity</span> </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-11-04T03:45"><span>03:45 AM</span> <span>Today</span></time>
                                        <div className="cbp_tmicon bg-primary"><i className="zmdi zmdi-label"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Art Ramadani</Link> <span>posted a status update</span></h2>
                                            <p className="text-sm text-muted">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-11-03T13:22"><span>01:22 PM</span> <span>Yesterday</span></time>
                                        <div className="cbp_tmicon bg-success"> <i className="zmdi zmdi-case"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Job Meeting</Link></h2>
                                            <p className="text-sm text-muted">You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                        <div className="cbp_tmicon bg-danger"><i className="zmdi zmdi-pin"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Arlind Nushi</Link> <span>checked in at</span> <Link href="#!">New York</Link></h2>
                                            <blockquote>
                                                <p className=" text-sm text-muted">
                                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                                    <br />
                                                    <small>
                                                        - Isabella
                                                    </small>
                                                </p>
                                            </blockquote>
                                            <div className="row clearfix">
                                                <div className="col-lg-12">
                                                    <div className="map m-t-10">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" className="border-0 w-100"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                        <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-camera"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Eroll Maxhuni</Link> <span>uploaded</span> 4 <span>new photos to album</span> <Link href="#!">Summer Trip</Link></h2>
                                            <blockquote className="text-sm text-muted">Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                                            <Row>
                                                <div className="col-lg-3 col-md-6 col-6"><Link href="#!"><img src="../../../assets/images/background/16.jpg" alt="" className="img-fluid img-thumbnail mt-2" /></Link> </div>
                                                <div className="col-lg-3 col-md-6 col-6"><Link href="#!"> <img src="../../../assets/images/background/17.jpg" alt="" className="img-fluid img-thumbnail mt-2" /></Link> </div>
                                                <div className="col-lg-3 col-md-6 col-6"><Link href="#!"> <img src="../../../assets/images/background/18.jpg" alt="" className="img-fluid img-thumbnail mt-2" /> </Link> </div>
                                                <div className="col-lg-3 col-md-6 col-6"><Link href="#!"> <img src="../../../assets/images/background/19.jpg" alt="" className="img-fluid img-thumbnail mt-2" /> </Link> </div>
                                            </Row>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-11-03T13:22"><span>01:22 PM</span> <span>Two weeks ago</span></time>
                                        <div className="cbp_tmicon bg-success"> <i className="zmdi zmdi-case"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Job Meeting</Link></h2>
                                            <p className="text-sm text-muted">You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Month ago</span></time>
                                        <div className="cbp_tmicon bg-purple"><i className="zmdi zmdi-pin"></i></div>
                                        <div className="cbp_tmlabel">
                                            <h2><Link href="#!">Arlind Nushi</Link> <span>checked in at</span> <Link href="#!">Laborator</Link></h2>
                                            <blockquote className="mb-0 text-sm text-muted">Great place, feeling like in home.</blockquote>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h3 className="card-title">Timeline-2</h3>
                            </Card.Header>
                            <Card.Body>
                                <ul className="timelineleft pb-5">
                                    <li className="timeleft-label"><span className="bg-danger">01 Mar. 2022</span></li>
                                    <li>
                                        <i className="fa fa-envelope bg-primary"></i>
                                        <div className="timelineleft-item pt-3">
                                            <span className="time"><i className="fa fa-clock-o text-danger"></i> 12:05</span>
                                            <h3 className="timelineleft-header"><Link href="#!">Support Team</Link> <span className="text-muted">sent you an email</span></h3>
                                            <div className="timelineleft-body">
                                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                quora plaxo ideeli hulu weebly balihoo...
                                            </div>
                                            <div className="timelineleft-footer btn-list">
                                                <Link href="#!" className="btn btn-primary text-white btn-sm">Read more</Link>
                                                <Link href="#!" className="btn btn-secondary text-white btn-sm ">Delete</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-user bg-secondary"></i>
                                        <div className="timelineleft-item pt-3">
                                            <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 mins ago</span>
                                            <h3 className="timelineleft-header no-border"><Link href="#!">Sarah Young</Link> <span className="text-muted">accepted your friend request</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-comments bg-warning"></i>
                                        <div className="timelineleft-item pt-3">
                                            <span className="time"><i className="fa fa-clock-o text-danger"></i> 27 mins ago</span>
                                            <h3 className="timelineleft-header"><Link href="#!">Jay White</Link> <span className="text-muted">commented on your post</span></h3>
                                            <div className="timelineleft-body">
                                                Take me to your leader!
                                                Switzerland is small and neutral!
                                                We are more like Germany, ambitious and misunderstood!
                                            </div>
                                            <div className="timelineleft-footer">
                                                <Link href="#!" className="btn btn-info text-white btn-flat btn-sm">View comment</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeleft-label">
                                        <span className="bg-success"> 25 Feb. 2022</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-camera bg-orange"></i>
                                        <div className="timelineleft-item pt-3">
                                            <span className="time"><i className="fa fa-clock-o text-danger"></i> 2 days ago</span>
                                            <h3 className="timelineleft-header"><Link href="#!" className="mx-1">Mina Lee</Link><span className="text-muted">uploaded new photos</span></h3>
                                            <div className="timelineleft-body">
                                                <img src="../../../assets/images/background/6.jpg" alt="..." className="m-1" />
                                                <img src="../../../assets/images/background/10.jpg" alt="..." className="m-1" />
                                                <img src="../../../assets/images/background/3.jpg" alt="..." className="m-1" />
                                                <img src="../../../assets/images/background/4.jpg" alt="..." className="m-1" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera bg-pink"></i>
                                        <div className="timelineleft-item pt-3">
                                            <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 days ago</span>
                                            <h3 className="timelineleft-header"><Link href="#!">Mr. Doe</Link><span className="text-muted"> shared a video</span></h3>
                                            <div className="timelineleft-body">
                                                <div className="embed-responsive embed-responsive-16by9 w-75">
                                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                            <div className="timelineleft-footer">
                                                <Link href="#!" className="btn btn-sm bg-warning text-white">See comments</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o bg-success pb-3"></i>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h3 className="card-title">Timeline-3</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className="timeline timeline-vertical timeline-vertical-demo">
                                    <div className="timeline__wrap">
                                        <div className="timeline__items">
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <h3 className="fs-21">reiciendis voluptatibus maiores</h3>
                                                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</p>
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>Boltz Thoma
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 01-Mar-2022</span>
                                                            <span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item timeline__item--right">
                                                <div className="timeline__content ">
                                                    <div className="p-4 border-bottom">
                                                        <h3 className="fs-21">we denounce with righteous</h3>
                                                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure .</p>
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>Lilly Thoma
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 18-Feb-2022</span>
                                                            <span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <img src="../../../assets/images/background/2.jpg" alt="img" className="img-fluid rounded-2" />
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>Mozelle Belt
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 23-Jan-2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item timeline__item--right">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <img src="../../../assets/images/background/2.jpg" alt="img" className="w-150 br-4 img-fluid m-2" />
                                                        <img src="../../../assets/images/background/3.jpg" alt="img" className="w-150 br-4 img-fluid m-2" />
                                                        <img src="../../../assets/images/background/4.jpg" alt="img" className="w-150 br-4 img-fluid m-2" />
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                            </span>Boltz Thoma
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 23-Jan-2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h3 className="card-title">Timeline-4</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className="timeline timeline-vertical timeline-horizontal">
                                    <div className="timeline__wrap">
                                        <div className="timeline__items mt-0 pt-0">
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <h3 className="fs-21">reiciendis voluptatibus maiores</h3>
                                                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</p>
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                            </span>Mayor Kelly
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 01 Mar 2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content ">
                                                    <div className="p-4 border-bottom">
                                                        <h3 className="fs-21">we denounce with righteous</h3>
                                                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure .</p>
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>Lilly Thomas
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 18 Feb 2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <img src="../../../assets/images/background/8.jpg" alt="img" className="w-150 br-4 m-2" />
                                                        <img src="../../../assets/images/background/7.jpg" alt="img" className="w-150 br-4 m-2" />
                                                        <img src="../../../assets/images/background/9.jpg" alt="img" className="w-150 br-4 m-2" />
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>Mozelle Belt
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 23 Jan 2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <div className="p-4 border-bottom">
                                                        <img src="../../../assets/images/background/2.jpg" alt="img" className="w-150 br-4 m-2" />
                                                        <img src="../../../assets/images/background/3.jpg" alt="img" className="w-150 br-4 m-2" />
                                                        <img src="../../../assets/images/background/4.jpg" alt="img" className="w-150 br-4 m-2" />
                                                    </div>
                                                    <div className="list-group-item d-xl-flex bg-transparent align-items-center border-0">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>Mozelle Belt
                                                        </div>
                                                        <div className="ms-auto d-flex justify-content-between">
                                                            <span><i className="fa fa-calendar"></i> 23 Jan 2022</span><span className="ms-4"><i className="fa fa-clock-o"></i> 04.00pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
Timeline.layout = "Contentlayout";
export default Timeline;
