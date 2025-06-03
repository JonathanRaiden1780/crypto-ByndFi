import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
const Services = () => {

    return (
        <>
            <Seo title={"Services"} />
            <PageheaderDB heading="Pages" active="Services" />
            <div className="main-container container-fluid">
                <Row>
                    <Col sm={12} md={12} lg={6} xl={3}>
                        <Card className="service">
                            <Card.Body>
                                <div className="item-box text-center">
                                    <div className=" text-center  mb-4 text-primary"><i className="icon icon-people fa-2x text-primary-shadow"></i></div>
                                    <div className="item-box-wrap">
                                        <h5 className="mb-2 font-weight-normal">Creative solutions</h5>
                                        <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={3}>
                        <Card className="service">
                            <Card.Body>
                                <div className="item-box text-center">
                                    <div className=" text-center text-danger mb-4"><i className="icon icon-clock fa-2x text-danger-shadow"></i></div>
                                    <div className="item-box-wrap">
                                        <h5 className="mb-2 font-weight-normal">Trace your time</h5>
                                        <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={3}>
                        <Card className="service">
                            <Card.Body>
                                <div className="item-box text-center">
                                    <div className=" text-center text-success mb-4"><i className="fa fa-building-o fa-2x text-success-shadow"></i></div>
                                    <div className="item-box-wrap">
                                        <h5 className="mb-2 font-weight-normal">Business FrameWork</h5>
                                        <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={3}>
                        <Card className="service">
                            <Card.Body>
                                <div className="item-box text-center">
                                    <div className="text-center text-info mb-4"><i className="icon icon-action-redo fa-2x text-info-shadow"></i></div>
                                    <div className="item-box-wrap">
                                        <h5 className="mb-2 font-weight-normal">Shares</h5>
                                        <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x  mb-3">
                                            <i className="fa fa-globe fa-stack-1x bg-primary primary-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">Web design</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x mb-3">
                                            <i className="fa fa-building-o fa-stack-1x bg-secondary secondary-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">Web Development</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x  mb-3">
                                            <i className="fa fa-file-word-o fa-stack-1x bg-success success-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">Wordpress</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x mb-3">
                                            <i className="fa fa-camera fa-stack-1x bg-info info-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">photography</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x mb-3">
                                            <i className="fa fa-pencil-square-o fa-stack-1x  bg-danger danger-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">Development</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={2} lg={3} className="features">
                                        <div className="fa-stack fa-lg fa-1x mb-3">
                                            <i className="fa fa-eercast fa-stack-1x bg-warning warning-dropshadow text-fixed-white"></i>
                                        </div>
                                    </Col>
                                    <Col xl={10} lg={9}>
                                        <div className="mt-1">
                                            <h4 className="font-weight-normal">Android</h4>
                                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                making it look like readable English.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Our services</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="text-wrap">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <Row className="mt-3">
                                        <div className="col-md-6">
                                            <label>Web Design</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='secondary' now={50} label="50%" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Web Development</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='danger' now={70} label="70%" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Wordpress</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='warning' now={80} label="80%" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Photography</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='primary' now={75} label="75%" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Development</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='pink' now={65} label="65%" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Android</label>
                                            <div className=" progress-md mb-3">
                                                <ProgressBar variant='success' now={69} label="69%" />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
};
Services.layout = "Contentlayout";
export default Services;
