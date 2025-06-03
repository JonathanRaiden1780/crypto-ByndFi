
import { Card, Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { AreaChart, EXPENSESreports, PROFITreports, Trafficsource, WorldMap1 } from '../../../shared/data/analytics/reportdata';
import Seo from '@/shared/layout-components/seo/seo';


const AlyReports = () => {

    return (

        <>
            <Seo title={"Report"} />
            <div className="page-header">
                <div className="flex-grow-1 py-2-5">
                    <h4 className="page-title mb-1">Analytics Report</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/components/analytics/alydashboard/" className="text-primary">Analytics</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Reports</li>
                        </ol>
                    </nav>
                </div>
                <div className="min-w-fit-content d-sm-flex align-items-center">
                    <div className="flex-grow-1 py-2-5">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <p className="mb-1 fs-13 text-muted">EXPENSES</p>
                                <h4 className="mb-0">$53,000</h4>
                            </div>
                            <div className="min-w-fit-content ms-3">
                                <span className="sparkline_bar">
                                    <EXPENSESreports />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1 py-2-5">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <p className="mb-1 fs-13 text-muted">PROFIT</p>
                                <h4 className="mb-0">$34,000</h4>
                            </div>
                            <div className="min-w-fit-conent ms-3">
                                <span className="sparkline_bar1">
                                    <PROFITreports />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container container-fluid">
                <Row>
                    <Col md={12}>
                        <Card>
                            <Row me={0} ms={0}>
                                <Col xl={2} lg={6} sm={6} pe={0} ps={0} className="border-end">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Visits</p>
                                        <h2 className="mb-1">3,56,667</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.7%</span> Last month</span>
                                    </Card.Body>
                                </Col>
                                <Col xl={2} lg={6} sm={6} pe={0} ps={0} className="border-end">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Avg visit Duration</p>
                                        <h2 className="mb-1">39Sec</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.26%</span> Last month</span>
                                    </Card.Body>
                                </Col>
                                <Col xl={2} lg={6} sm={6} pe={0} ps={0} className="border-end">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Page Views</p>
                                        <h2 className="mb-1">5,987</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 12%</span> Last month</span>
                                    </Card.Body>
                                </Col>
                                <Col xl={2} lg={6} sm={6} pe={0} ps={0} className="border-end">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Bounce Rate</p>
                                        <h2 className="mb-1">35.8%</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.2%</span> Last month</span>
                                    </Card.Body>
                                </Col>
                                <Col xl={2} lg={6} sm={6} pe={0} ps={0} className="border-end">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Pages per Visit</p>
                                        <h2 className="mb-1">2.89</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 1.2%</span> Last month</span>
                                    </Card.Body>
                                </Col>
                                <div className="col-xl-2 col-lg-6 col-sm-6 pe-0 ps-0">
                                    <Card.Body className="text-center">
                                        <p className="mb-1">Goal Conversion</p>
                                        <h2 className="mb-1">12.7%</h2>
                                        <span className="mb-0 text-muted fs-14"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 0.6%</span> Last month</span>
                                    </Card.Body>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Header>
                                <h4 className='card-title'>Traffic Source</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row className="text-center mb-4">
                                    <Col dash={1}>
                                        <p className="mb-0">Organic</p>
                                        <h2 className="mb-0 ">50%</h2>
                                    </Col>
                                    <Col dash={1}>
                                        <p className="mb-0">Direct</p>
                                        <h2 className="mb-0 ">30%</h2>
                                    </Col>
                                    <Col>
                                        <p className="mb-0">Campagion</p>
                                        <h2 className="mb-0 ">20%</h2>
                                    </Col>
                                </Row>
                                <div className="chart-wrapper mb-3 ">
                                    <Trafficsource />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} xl={8} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Live Visits Logs</Card.Title>

                            </Card.Header>
                            <Card.Body className='p-3'>
                                <div className="chat-wrapper">


                                    <AreaChart />

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={8}>
                        <Card className="overflow-hidden">
                            <Card.Header>
                                <h3 className="card-title">Visitors by country</h3>
                            </Card.Header>
                            <Card.Body className=" overflow-hidden p-1">
                                <Row>
                                    <Col sm={12} md={12} lg={12} xl={4} className="border-end">
                                        <Row p={4} className="d-flex justify-content-between border-bottom p-3">
                                            <div className="col-9">
                                                <p className="mb-2">United States</p>
                                                <ProgressBar now={30} variant='warning' className="progress h-1" />
                                            </div>
                                            <div className=" col-3 d-flex flex-column align-items-center">
                                                <small className="text-muted mb-1">2022</small>
                                                <div className="badge badge-pill badge-warning">30%</div>
                                            </div>
                                        </Row>
                                        <Row p={4} className="d-flex justify-content-between border-bottom p-3">
                                            <div className="col-9">
                                                <p className="mb-2">Russia</p>
                                                <div className="progress h-1">
                                                    <div className="progress-bar w-50 bg-primary" role="progressbar">
                                                        <span className="visually-hidden">60% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" col-3 d-flex flex-column align-items-center">
                                                <small className="text-muted mb-1">2022</small>
                                                <div className="badge badge-pill badge-primary">50%</div>
                                            </div>
                                        </Row>
                                        <Row p={4} className="d-flex justify-content-between border-bottom p-3">
                                            <div className="col-9">
                                                <p className="mb-2">United kingdom</p>
                                                <ProgressBar now={80} variant='secondary' className="progress h-1" />
                                            </div>
                                            <div className="col-3 d-flex flex-column align-items-center">
                                                <small className="text-muted mb-1">2022</small>
                                                <div className="badge badge-pill badge-secondary">80%</div>
                                            </div>
                                        </Row>
                                        <Row p={4} className="d-flex justify-content-between border-bottom p-3">
                                            <div className="col-9">
                                                <p className="mb-2">Spain</p>
                                                <ProgressBar now={40} variant='success' className="progress h-1" />
                                            </div>
                                            <div className=" col-3 d-flex flex-column align-items-center">
                                                <small className="text-muted mb-1">2022</small>
                                                <div className="badge badge-pill badge-success">40%</div>
                                            </div>
                                        </Row>
                                        <Row className="row d-flex justify-content-between p-3">
                                            <div className="col-9">
                                                <p className="mb-2">Brazil</p>
                                                <ProgressBar now={75} variant='danger' className="progress h-1" />

                                            </div>
                                            <div className=" col-3 d-flex flex-column align-items-center">
                                                <small className="text-muted mb-1">2022</small>
                                                <div className="badge badge-pill badge-danger">75%</div>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col sm={12} md={12} lg={12} xl={8} className="">
                                        <div id="world-map-markers" className="worldh world-report h-290" >
                                            <WorldMap1 />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Recent transactions</div>
                            </div>
                            <div className="card-body p-0 pb-1">
                                <Table className="table m-b-0 transcations">
                                    <tbody>
                                        <tr>
                                            <td className="">
                                                <div className="main-img-user avatar-md">
                                                    <div className="d-flex align-middle ms-3">
                                                        <img alt="avatar" className="avatar avatar-md rounded-circle me-3"
                                                            src="../../../assets/images/faces/5.jpg" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-1">Flicker</h6>
                                                            <p className="mb-0 fs-13 text-muted">App improvement</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-2 fs-15 fw-semibold">$45.234<i
                                                        className="fe fe-corner-right-up ms-2 text-success m-l-10"></i>
                                                    </h6>
                                                    <p className="mb-0 tx-11 text-muted">12 Jan 2020</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <div className="main-img-user avatar-md">
                                                    <div className="d-flex align-middle ms-3">
                                                        <img alt="avatar" className="avatar avatar-md rounded-circle me-3"
                                                            src="../../../assets/images/faces/7.jpg" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-1">Intoxica</h6>
                                                            <p className="mb-0 fs-13 text-muted">Milestone</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-2 fs-15 fw-semibold">$23.452<i
                                                        className="fe fe-corner-right-down ms-2 text-danger m-l-10"></i>
                                                    </h6>
                                                    <p className="mb-0 tx-11 text-muted">23 Jan 2020</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <div className="main-img-user avatar-md">
                                                    <div className="d-flex align-middle ms-3">
                                                        <img alt="avatar" className="avatar avatar-md rounded-circle me-3"
                                                            src="../../../assets/images/faces/9.jpg" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-1">Digiwatt</h6>
                                                            <p className="mb-0 fs-13 text-muted">Sales executive</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-2 fs-15 fw-semibold">$78.001<i
                                                        className="fe fe-corner-right-down ms-2 text-danger m-l-10"></i>
                                                    </h6>
                                                    <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <div className="main-img-user avatar-md">
                                                    <div className="d-flex align-middle ms-3">
                                                        <img alt="avatar" className="avatar avatar-md rounded-circle me-3"
                                                            src="../../../assets/images/faces/10.jpg" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-1">Flicker</h6>
                                                            <p className="mb-0 fs-13 text-muted">Milestone2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-2 fs-15 fw-semibold">$37.285<i
                                                        className="fe fe-corner-right-up ms-2 text-success m-l-10"></i>
                                                    </h6>
                                                    <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="br-7 border-bottom-0">
                                                <div className="main-img-user avatar-md">
                                                    <div className="d-flex align-middle ms-3">
                                                        <img alt="avatar" className="avatar avatar-md rounded-circle me-3"
                                                            src="../../../assets/images/faces/1.jpg" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-1">Flicker</h6>
                                                            <p className="mb-0 fs-13 text-muted">App improvement</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="br-7 text-end border-bottom-0">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-2 fs-15 fw-semibold">$25.341<i
                                                        className="fe fe-corner-right-down ms-2 text-danger m-l-10"></i>
                                                    </h6>
                                                    <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="col-12">
                        <Card className="social-reports">
                            <div className="card-header d-flex align-items-center">
                                <h3 className='card-title'>Social Report</h3>
                                <span className="text-end table-add float-end ms-auto">
                                    <button id="addRowButton" className="btn btn-primary"> <i className="fa fa-plus fa-1x" aria-hidden="true"></i></button>
                                </span>
                            </div>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-bordered text-nowrap border-bottom" id="editTable1">
                                        <thead>
                                            <tr>
                                                <th>Network</th>
                                                <th>Session</th>
                                                <th>Avg time</th>
                                                <th>Bounce Rate</th>
                                                <th>Goal Conversion</th>
                                                <th>%Change</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-google me-2 mt-2 bg-danger-transparent text-danger social-media"></i>Google</td>
                                                <td>1267</td>
                                                <td>03:05</td>
                                                <td>63.4%</td>
                                                <td>34.5%</td>
                                                <td className="pt-3-half text-danger"><i className="fa fa-caret-down mt-2  mr-1"></i>-34.5%</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-success m-1">
                                                        <i className="fe fe-edit"> </i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-danger m-1">
                                                        <i className="fe fe-trash-2"> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-yahoo me-2 mt-2 fs-13 bg-primary-transparent text-primary social-media"></i>Yahoo</td>
                                                <td>2534</td>
                                                <td>12:54</td>
                                                <td>23.5%</td>
                                                <td>48.2%</td>
                                                <td className="pt-3-half text-danger" ><i className="fa fa-caret-down mt-2  mr-1"></i>-23.4%</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-success m-1">
                                                        <i className="fe fe-edit"> </i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-danger m-1">
                                                        <i className="fe fe-trash-2"> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className='me-2  mt-2 fs-13 bg-info-transparent text-info social-media avatar avatar-sm'><i className="ri-twitter-x-line "></i></span>Twitter</td>
                                                <td>6354</td>
                                                <td>05:24</td>
                                                <td>15.7%</td>
                                                <td>34.6%</td>
                                                <td className="pt-3-half text-danger"><i className="fa fa-caret-down mt-2  mr-1"></i>-23.5%</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-success m-1">
                                                        <i className="fe fe-edit"> </i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-danger m-1">
                                                        <i className="fe fe-trash-2"> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-pinterest me-2 mt-2 text-danger bg-danger-transparent  social-media"></i>pinterest</td>
                                                <td>7364</td>
                                                <td>06:17</td>
                                                <td>15.7%</td>
                                                <td>39.8%</td>
                                                <td className="pt-3-half text-success"><i className="fa fa-caret-up mt-2 mr-1"></i>+34.5%</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-success m-1">
                                                        <i className="fe fe-edit"> </i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-danger m-1">
                                                        <i className="fe fe-trash-2"> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-linkedin me-2 mt-2 bg-secondary-transparent text-secondary social-media"></i>Linkedin</td>
                                                <td>4367</td>
                                                <td>04:13</td>
                                                <td>57.3%</td>
                                                <td>27.8%</td>
                                                <td className="pt-3-half text-success" ><i className="fa fa-caret-up mt-2 mr-1"></i>+45.7%</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-success m-1">
                                                        <i className="fe fe-edit"> </i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-danger m-1">
                                                        <i className="fe fe-trash-2"> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        </>
    );
};
AlyReports.layout = "Contentlayout";
export default AlyReports;
