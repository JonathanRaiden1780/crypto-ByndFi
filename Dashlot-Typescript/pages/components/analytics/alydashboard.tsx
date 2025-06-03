import { Button, Card, Carousel, Col, Dropdown, Form, ProgressBar, Row, Table } from 'react-bootstrap';

import Seo from '@/shared/layout-components/seo/seo';

import { Audience, Bounce, Bouncerate, EXPENSESdashboard, Monthlystat, NewSession, PROFITdashboard, Sessions, Stats1, Stats2, Stats3, Stats4, Totalusers, TrafficSource, Users, WorldMap, } from '../../../shared/data/analytics/dashboarddata';
import { useState } from 'react';

const AlyDashboard = () => {
   const [_content, setContent] = useState('');
   return (
      <>
         <Seo title={"Dashboard"} />
         <div className="page-header">
            <div className="flex-grow-1 py-2-5">
               <h4 className="page-title mb-1">Analytics Dashboard</h4>
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                     <li className="breadcrumb-item"><a href="/components/analytics/dashboard/" className="text-primary">Analytics</a></li>
                     <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
                           <EXPENSESdashboard />
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
                           <PROFITdashboard />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="main-container container-fluid">
            <Row>
               <Col sm={6} xl={6} lg={6} md={6} xxl={3}>
                  <Card>
                     <Card.Body className='pt-1 pb-1'>
                        <div className="card-order">
                           <Row className='align-items-center'>
                              <Col className='pe-0'>
                                 <div className="d-flex">
                                    <span className="avatar avatar-lg rounded-1 bg-primary-transparent">
                                       <i className="bi bi-hdd-rack fs-20"></i>
                                    </span>
                                    <div className="flex-grow-1 ms-3">
                                       <div className="">Sessions</div>
                                       <h4 className="mb-0 mt-1"><span className="fw-500">467</span><span className="text-success fs-13 ms-2">(+35%)</span></h4>
                                    </div>
                                 </div>
                              </Col>
                              <div className="col-auto align-self-center ps-0 chart-custom-height">
                                 <div id="rounded-chart-circle1">
                                    <Sessions />
                                 </div>
                              </div>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={6} lg={6} md={6} xxl={3}>
                  <Card>
                     <Card.Body className='pt-1 pb-1'>
                        <div className="card-order">
                           <Row className='align-items-center'>
                              <Col className='pe-0'>
                                 <div className="d-flex">
                                    <span className="avatar avatar-lg rounded-1 bg-secondary-transparent">
                                       <i className="bi bi-people fs-20"></i>
                                    </span>
                                    <div className="flex-grow-1 ms-3">
                                       <div className="">Users</div>
                                       <h4 className="mt-1 mb-0"><span className="fw-500">893</span><span className="text-success fs-13 ms-2">(+27%)</span></h4>
                                    </div>
                                 </div>
                              </Col>
                              <div className="col-auto align-self-center ps-0 chart-custom-height">
                                 <div id="rounded-chart-circle2">
                                    <Users />
                                 </div>
                              </div>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={6} lg={6} md={6} xxl={3}>
                  <Card>
                     <Card.Body className='pt-1 pb-1'>
                        <div className="card-order">
                           <Row className='align-items-center'>
                              <Col className='pe-0'>
                                 <div className="d-flex">
                                    <span className="avatar avatar-lg rounded-1 bg-success-transparent">
                                       <i className="bi bi-calendar2-check fs-20"></i>
                                    </span>
                                    <div className="flex-grow-1 ms-3">
                                       <div className="">New Sessions</div>
                                       <h4 className="mt-1 mb-0"><span className="fw-500">84%</span><span className="text-success fs-13 ms-2">(-39%)</span></h4>
                                    </div>
                                 </div>
                              </Col>
                              <div className="col-auto align-self-center ps-0 chart-custom-height">
                                 <div id="rounded-chart-circle3">
                                    <NewSession />
                                 </div>
                              </div>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} xl={6} lg={6} md={6} xxl={3}>
                  <Card>
                     <Card.Body className='pt-1 pb-1'>
                        <div className="card-order">
                           <Row className='align-items-center'>
                              <Col className='pe-0'>
                                 <div className="d-flex">
                                    <span className="avatar avatar-lg rounded-1 bg-info-transparent">
                                       <i className="bi bi-bar-chart fs-20"></i>
                                    </span>
                                    <div className="flex-grow-1 ms-3">
                                       <div className="">Bounce Rate</div>
                                       <h4 className="mt-1 mb-0"><span className="fw-500">46%</span><span className="text-success fs-13 ms-2">(-09%)</span></h4>
                                    </div>
                                 </div>
                              </Col>
                              <div className="col-auto align-self-center ps-0 chart-custom-height">
                                 <div id="rounded-chart-circle1">
                                    <Bounce />
                                 </div>
                              </div>
                           </Row>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row className="row clearfix">
               <Col xl={8} lg={12} md={12}>
                  <Card>
                     <div className="card-header d-flex align-items-center justify-content-between">
                        <Card.Title as="h6">Audience Metric</Card.Title>
                        <div className="card-options ms-auto">
                           <div className="btn-group">
                              <Button variant='' className="btn btn-sm btn-primary">Day</Button>
                              <Button variant='' className="btn btn-sm btn-outline-primary">Week</Button>
                              <Button variant='' className="btn btn-sm btn-outline-primary">Month</Button>
                           </div>
                        </div>
                     </div>
                     <Card.Body>
                        <div className="card-text">
                           <Row>
                              <Col xl={3} sm={4}>
                                 <p className="mb-1">Bounce Rate</p>
                                 <h3 className="mb-0 fw-500 d-inline-flex">25.12% <span className="badge badge-success-light fs-11 ms-1 mb-1 mt-auto"><i className="bi bi-caret-up"></i>1.43%</span></h3>
                              </Col>
                              <div className="col-xl-3 col-sm-4  mt-3 mt-sm-0">
                                 <p className="mb-1">Page Views</p>
                                 <h3 className="mb-0 fw-500 d-inline-flex">32.15% <span className="badge badge-danger-light fs-11 ms-1 mb-1 mt-auto"><i className="bi bi-caret-down"></i>3.15%</span></h3>
                              </div>
                              <div className="col-xl-3 col-sm-4 mt-3 mt-sm-0">
                                 <p className="mb-1">Time On Site</p>
                                 <h3 className="mb-0 fw-500 d-inline-flex">15:35 <span className="badge badge-success-light fs-11 ms-1 mb-1 mt-auto"><i className="bi bi-caret-down"></i>2.12%</span></h3>
                              </div>
                           </Row>
                        </div>
                        <div id="audience-metric">
                           <Audience />
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12} lg={12} xl={4}>
                  <Card className="custom-card">
                     <Card.Header className="justify-content-between">
                        <Card.Title as="h6">
                           Traffic Sources
                        </Card.Title>
                        <Dropdown>
                           <Dropdown.Toggle variant="light" id="dropdown-basic">
                              View All
                           </Dropdown.Toggle>
                           <Dropdown.Menu align="end">
                              <Dropdown.Item href="#!">Download</Dropdown.Item>
                              <Dropdown.Item href="#!">Import </Dropdown.Item>
                              <Dropdown.Item href="#!">Export  </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </Card.Header>
                     <div className="card-body p-0">
                        <div className="table-responsive">
                           <table className="table table-hover text-nowrap mb-0">
                              <thead>
                                 <tr>
                                    <th scope="col" className="px-4">Browser</th>
                                    <th scope="col">Sessions</th>
                                    <th scope="col">Traffic</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-google-fill fs-18 text-primary"></i>
                                          </span>
                                          <div className="fw-500">Google</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                                    </td>
                                    <td>
                                       <div>
                                          <ProgressBar now={78} variant='primary' className="progress progress-xs" />
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-safari-line fs-18 text-secondary"></i>
                                          </span>
                                          <div className="fw-500">Safari</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                                    </td>
                                    <td>
                                       <ProgressBar now={32} variant='secondary' className="progress progress-xs" />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-opera-fill fs-18 text-success"></i>
                                          </span>
                                          <div className="fw-500">Opera</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>12,457</span>
                                    </td>
                                    <td>
                                       <ProgressBar now={21} variant='success' className="progress progress-xs" />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-edge-fill fs-18 text-info"></i>
                                          </span>
                                          <div className="fw-500">Edge</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                                    </td>
                                    <td>
                                       <ProgressBar now={25} variant='info' className="progress progress-xs" />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-firefox-fill fs-18 text-warning"></i>
                                          </span>
                                          <div className="fw-500">Firefox</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>6,135</span>
                                    </td>
                                    <td>
                                       <ProgressBar now={35} variant='warning' className="progress progress-xs" />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="px-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-chrome-line fs-18 text-primary"></i>
                                          </span>
                                          <div className="fw-500">Chrome</div>
                                       </div>
                                    </td>
                                    <td>
                                       <span><i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>6,135</span>
                                    </td>
                                    <td>
                                       <ProgressBar now={35} variant='primary' className="progress progress-xs" />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-bottom-0 ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded-circle avatar-sm p-3 bg-light me-2">
                                             <i className="ri-ubuntu-fill fs-18 text-danger"></i>
                                          </span>
                                          <div className="fw-500">Ubuntu</div>
                                       </div>
                                    </td>
                                    <td className="border-bottom-0">
                                       <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>4,789</span>
                                    </td>
                                    <td className="border-bottom-0">
                                       <ProgressBar now={12} variant='danger' className="progress progress-xs" />
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row>
               <div className="col-sm-12 col-md-6 col-xl-4">
                  <Card>
                     <Card.Header>
                        <Card.Title as="h6">Site Traffic Monitoring</Card.Title>
                        <div className="card-options ms-auto">
                           <span className="fs-15 text-end">Oct 2023</span>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="d-flex mb-4">
                           <div>
                              <h3 className="mb-0 pb-0 fs-15 fw-500">Browser Traffic</h3>
                              <small className="mb-3 pt-0 mt-0 fs-13 text-muted">Since last month</small>
                           </div>
                           <span className="badge badge-secondary-light ms-auto my-auto fs-20"><i className="bi bi-graph-up-arrow fs-16"></i> 86%</span>
                        </div>
                        <div className="row align-items-center">
                           <div className="col-5">
                              <p className="mb-0 fw-500 fs-14">Overall growth</p>
                           </div>
                           <div className="col-7">
                              <div >
                                 <ProgressBar striped now={60} variant='purple' className="progress box-shadow-0 progress-sm" />
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center mt-2">
                           <div className="col-5">
                              <p className="mb-0 fs-14 fw-500">Average Daily</p>
                           </div>
                           <div className="col-7">
                              <ProgressBar striped now={45} variant='pink' className="progress box-shadow-0 progress-sm" />
                           </div>
                        </div>
                        <div className="row align-items-center mt-2">
                           <div className="col-5">
                              <p className="mb-0 fs-14 fw-500">Average Run Time</p>
                           </div>
                           <div className="col-7">
                              <ProgressBar striped now={35} variant='success' className="progress box-shadow-0 progress-sm" />
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <div className="card bg-primary text-fixed">
                     <Carousel slide={true} indicators={false} id="carousel-indicator" className="carousel slide dashboard-carousel dashboard-slider" data-bs-ride="carousel">

                        <Carousel.Item className="">
                           <Card.Body>
                              <h4 className="card-title mb-4 text-fixed-white">Subscribers Gained</h4>
                              <small className="text-fixed-white"> Since last month</small>
                              <div className="d-flex  align-items-center">
                                 <h3 className=" mb-0 fw-500 text-fixed-white">95.32k<span className="font-weight-normal text-muted fs-13"> / per month</span></h3>
                                 <div className="text-success mt-0 mb-2  ms-auto">
                                    <i className="mdi mdi-chevron-down mdi-24px"></i> <span className=" ">23.8%</span>
                                 </div>
                              </div>
                           </Card.Body>
                        </Carousel.Item>
                        <Carousel.Item className="dashboard-carousel" data-bs-ride="carousel">
                           <Card.Body>
                              <h4 className="card-title mb-4 text-fixed-white">Orders Received</h4>
                              <small className="text-fixed-white"> Since last month</small>
                              <div className="d-flex  align-items-center">
                                 <h3 className=" mb-0 fw-500 text-fixed-white">52.3K<span className="font-weight-normal text-muted fs-13"> / per month</span></h3>
                                 <div className="text-secondary mt-0 mb-2  ms-auto">
                                    <i className="mdi mdi-chevron-down mdi-24px"></i> <span className=" ">12.8%</span>
                                 </div>
                              </div>
                           </Card.Body>
                        </Carousel.Item>
                     </Carousel>
                  </div>
               </div>
               <Col sm={12} md={6} xl={4}>
                  <Card>
                     <Card.Header>
                        {/* <Card.Title>Marketing Performance</Card.Title> */}
                        <h5 className="card-title">Marketing Performance</h5>
                     </Card.Header>
                     <div className="card-body p-0">
                        <div className="table-responsive">
                           <Table className="table text-nowrap border-0 mb-0">
                              <thead className="bg-body">
                                 <tr>
                                    <th scope="col" className="ps-4 bg-light">Metric</th>
                                    <th scope="col" className='bg-light'>Spendings</th>
                                    <th scope="col" className='bg-light'>Avg</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-primary-transparent me-2">
                                             1
                                          </span>
                                          <div className="fw-500">Session</div>
                                       </div>
                                    </td>
                                    <td>84,537</td>
                                    <td><span className="text-success fs-13"><i className="fa fa-caret-up  me-1"></i>12.75%</span></td>
                                 </tr>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-secondary-transparent me-2">
                                             2
                                          </span>
                                          <div className="fw-500">Contacts</div>
                                       </div>
                                    </td>
                                    <td>1,052</td>
                                    <td><span className="text-danger fs-13"><i className="fa fa-caret-down  me-1"></i>0.12%</span></td>
                                 </tr>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-info-transparent me-2">
                                             3
                                          </span>
                                          <div className="fw-500">Leads</div>
                                       </div>
                                    </td>
                                    <td>72.5</td>
                                    <td><span className="text-success fs-13"><i className="fa fa-caret-up me-1"></i>0.56%</span></td>
                                 </tr>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-success-transparent me-2">
                                             4
                                          </span>
                                          <div className="fw-500">Customers</div>
                                       </div>
                                    </td>
                                    <td>5,635</td>
                                    <td><span className="text-danger fs-13"><i className="fa fa-caret-down  me-1"></i>1.02%</span></td>
                                 </tr>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-danger-transparent me-2">
                                             5
                                          </span>
                                          <div className="fw-500">Bounce rate</div>
                                       </div>
                                    </td>
                                    <td>32.54%</td>
                                    <td><span className="text-success fs-13"><i className="fa fa-caret-up  me-1"></i>0.89%</span></td>
                                 </tr>
                                 <tr>
                                    <td className="ps-4">
                                       <div className="d-flex align-items-center">
                                          <span className="avatar rounded avatar-sm bg-purple-transparent me-2">
                                             6
                                          </span>
                                          <div className="fw-500">Page views</div>
                                       </div>
                                    </td>
                                    <td>43,546</td>
                                    <td><span className="text-danger fs-13"><i className="fa fa-caret-down  me-1"></i>0.89%</span></td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={12} xl={4}>
                  <Card className="overflow-hidden">
                     <div>
                        <Card.Header>
                           <Card.Title as="h6">Monthly Statistics</Card.Title>
                        </Card.Header>
                     </div>
                     <div className="card-body pb-0">
                        <Row>
                           <Col>
                              <p className="mb-1">Bounce Rate</p>
                              <h5 className="mb-0 fw-500 d-inline-flex align-items-center">25.38% <i className="bi bi-arrow-up-circle text-success fs-12 ms-1"></i></h5>
                           </Col>
                           <Col>
                              <p className="mb-1">Page Views</p>
                              <h5 className="mb-0 fw-500 d-inline-flex align-items-center">53.12% <i className="bi bi-arrow-down-circle text-danger fs-12 ms-1"></i></h5>
                           </Col>
                        </Row>
                        <div id="statistics">
                           <Monthlystat />
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col xl={4} lg={12} sm={12}>
                  <Card>
                     <div>
                        <Card.Header as="h4">Analytics Web Sessions by Region</Card.Header>
                     </div>
                     <Card.Body>
                        <Row>
                           <Col lg={12}>
                              <div id="world-map-markers" className="worldh" >
                                 <WorldMap />
                              </div>
                           </Col>
                           <Col lg={12}>
                              <div className="table-responsive border-top-0 br-3">
                                 <Table className="table border table-bordered text-nowrap border-0 mb-0 ">
                                    <thead>
                                       <tr>
                                          <th>Country</th>
                                          <th scope="col">Regions</th>
                                          <th scope="col">Sessions</th>
                                          <th scope="col">Goals</th>
                                          <th scope="col">Bounce Rate</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td><img src="../../../assets/images/flags/us.svg" className="w-5 h-5 d-block" alt="" /></td>
                                          <td>USA</td>
                                          <td>23,678</td>
                                          <td>250</td>
                                          <td>1.76%</td>
                                       </tr>
                                       <tr>
                                          <td><img src="../../../assets/images/flags/in.svg" className="w-5 h-5 d-block" alt="" /></td>
                                          <td>India</td>
                                          <td>45,289</td>
                                          <td>319</td>
                                          <td>0.12%</td>
                                       </tr>
                                       <tr>
                                          <td><img src="../../../assets/images/flags/ru.svg" className="w-5 h-5 d-block" alt="" /></td>
                                          <td>Russia</td>
                                          <td>34,0451</td>
                                          <td>628</td>
                                          <td>0.56%</td>
                                       </tr>
                                    </tbody>
                                 </Table>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={8} lg={12}>
                  <Row>
                     <Col xl={6} lg={6} md={6} sm={12}>
                        <Card className="card-float">
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <Card.Title>
                                    <strong className="d-block">Bounce Rate</strong><span className="d-block fs-13 text-muted">Lorem ipsum dolor sit</span></Card.Title>
                                 <Dropdown>
                                    <Dropdown.Toggle variant="light">
                                       <span className=" btn-sm  btn-hover-border-only" id="dropdownMenuDate" data-bs-toggle="dropdown">Today</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                       <Dropdown.Item href="#!">2015</Dropdown.Item>
                                       <Dropdown.Item href="#!">2016</Dropdown.Item>
                                       <Dropdown.Item href="#!">2017</Dropdown.Item>
                                       <Dropdown.Item href="#!" >2018</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                              <div className="">
                                 <h3 className="d-block fontweight-semi-bold">35.27% <span className="fs-20 text-success"><i className="fe fe-trending-up"></i></span></h3>
                              </div>
                              <div className="">
                                 <div id="flotChart" className="flotChart chart-dropshadow3">
                                    <Bouncerate />
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col xl={6} lg={6} md={6} sm={12}>
                        <Card className="card-float">
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <Card.Title> <strong className="d-block">Total users</strong><span className="d-block fs-13 text-muted">Lorem ipsum dolor sit</span></Card.Title>
                                 <Dropdown>
                                    <Dropdown.Toggle variant="light">
                                       <span className=" btn-sm  btn-hover-border-only" id="dropdownMenuDate" data-bs-toggle="dropdown">Today</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                       <Dropdown.Item href="#!">2015</Dropdown.Item>
                                       <Dropdown.Item href="#!">2016</Dropdown.Item>
                                       <Dropdown.Item href="#!">2017</Dropdown.Item>
                                       <Dropdown.Item href="#!" >2018</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                              <div className="">
                                 <h3 className="d-block fontweight-semi-bold">87.43k <span className="fs-20 text-danger"><i className="fe fe-trending-down"></i></span></h3>
                              </div>
                              <div className="">
                                 <div id="flotChart1" className="flotChart chart-dropshadow3">
                                    <Totalusers />
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col lg={12} sm={12} md={12} xl={12}>
                        <Card>
                           <div>
                              <Card.Header>
                                 <Card.Title>Statistics Ratio</Card.Title></Card.Header>
                           </div>
                           <Card.Body>
                              <Row>
                                 <Col xl={3} lg={3} md={6} sm={12} className="text-center">
                                    <span className="piechart" data-size="100" data-line-width="5" data-trackcolor="#4a77f0" data-percent="83" data-scale-color="#4a77f0" data-animate="1000">
                                       <Stats1 />
                                    </span>
                                    <h5 className="mb-2 mt-2 font-weight-normal">New Customers</h5>
                                    <h6 className="font-weight-normal text-muted mb-3">Jun 2022</h6>
                                 </Col>
                                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center mt-5 mt-md-0 mt-xl-0">
                                    <span className="piechart" data-size="100" data-line-width="5" data-trackcolor="#fdc530" data-percent="54" data-scale-color="#fdc530" data-animate="1000">
                                       <Stats2 />
                                    </span>
                                    <h5 className="mb-2 mt-2 font-weight-normal">Total Comments</h5>
                                    <h6 className="font-weight-normal text-muted mb-3">Jun 2022</h6>
                                 </div>
                                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center mt-5 mt-lg-0 mt-xl-0">
                                    <span className="piechart" data-size="100" data-line-width="5" data-trackcolor="#00D1A2" data-percent="62" data-scale-color="#00D1A2" data-animate="1000">
                                       <Stats3 />
                                    </span>
                                    <h5 className="mb-2 mt-2 font-weight-normal">Total Sales</h5>
                                    <h6 className="font-weight-normal text-muted mb-3">Jun 2022</h6>
                                 </div>
                                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center mt-5 mt-lg-0 mt-xl-0">
                                    <span className="piechart" data-size="100" data-line-width="5" data-trackcolor="#E63D59" data-percent="57" data-scale-color="#E63D59" data-animate="1000">
                                       <Stats4 />
                                    </span>
                                    <h5 className="mb-2 mt-2 font-weight-normal">Total Orders</h5>
                                    <h6 className="font-weight-normal text-muted mb-3">Jun 2022</h6>
                                 </div>
                              </Row>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row>
               <Col md={12} lg={12} xl={9}>
                  <Card className="custom-card visitors-report">
                     <Card.Header className="justify-content-between">
                        <Card.Title as="h6">
                           Visitors By Channel Report
                        </Card.Title>
                        <div className="d-flex flex-wrap gap-2">
                           <div className="me-3">
                              <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                           </div>
                           <Dropdown>
                              <Dropdown.Toggle className="btn btn-primary btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                                 Sort By
                              </Dropdown.Toggle>
                              <Dropdown.Menu align="end">
                                 <Dropdown.Item href="#!">New</Dropdown.Item>
                                 <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                 <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-responsive">
                           <Table className="table table-hover text-nowrap table-bordered">
                              <thead>
                                 <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Channel</th>
                                    <th scope="col">Sessions</th>
                                    <th scope="col">Bounce Rate</th>
                                    <th scope="col">Avg Session Duration</th>
                                    <th scope="col">Goal Completed</th>
                                    <th scope="col">Pages Per Session</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">
                                       1
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-primary-transparent rounded-circle">
                                             <i className="ri-search-2-line fs-15 fw-semibiold text-primary"></i>
                                          </span>
                                          <span className="ms-2">
                                             Organic Search
                                          </span>
                                       </div>
                                    </td>
                                    <td>782</td>
                                    <td>32.09%</td>
                                    <td>
                                       0 hrs : 0 mins : 32 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-primary-transparent">278</span>
                                    </td>
                                    <td>
                                       2.9
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">
                                       2
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-secondary-transparent rounded-circle">
                                             <i className="ri-globe-line fs-15 fw-semibiold text-secondary"></i>
                                          </span>
                                          <span className="ms-2">
                                             Direct
                                          </span>
                                       </div>
                                    </td>
                                    <td>882</td>
                                    <td>39.38%</td>
                                    <td>
                                       0 hrs : 2 mins : 45 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-secondary-transparent">782</span>
                                    </td>
                                    <td>
                                       1.5
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">
                                       3
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-success-transparent rounded-circle">
                                             <i className="ri-share-forward-line fs-15 fw-semibiold text-success"></i>
                                          </span>
                                          <span className="ms-2">
                                             Referral
                                          </span>
                                       </div>
                                    </td>
                                    <td>322</td>
                                    <td>22.67%</td>
                                    <td>
                                       0 hrs : 38 mins : 28 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-success-transparent">622</span>
                                    </td>
                                    <td>
                                       3.2
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">
                                       4
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-info-transparent rounded-circle">
                                             <i className="ri-reactjs-line fs-15 fw-semibiold text-info"></i>
                                          </span>
                                          <span className="ms-2">
                                             Social
                                          </span>
                                       </div>
                                    </td>
                                    <td>389</td>
                                    <td>25.11%</td>
                                    <td>
                                       0 hrs : 12 mins : 89 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-info-transparent">142</span>
                                    </td>
                                    <td>
                                       1.4
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">
                                       5
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-warning-transparent rounded-circle">
                                             <i className="ri-mail-line fs-15 fw-semibiold text-warning"></i>
                                          </span>
                                          <span className="ms-2">
                                             Email
                                          </span>
                                       </div>
                                    </td>
                                    <td>378</td>
                                    <td>23.79%</td>
                                    <td>
                                       0 hrs : 14 mins : 27 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-warning-transparent">178</span>
                                    </td>
                                    <td>
                                       1.6
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">
                                       6
                                    </th>
                                    <td>
                                       <div className="d-flex align-items-center">
                                          <span className="avatar avatar-sm bg-danger-transparent rounded-circle">
                                             <i className="ri-bank-card-line fs-15 fw-semibiold text-danger"></i>
                                          </span>
                                          <span className="ms-2">
                                             Paid Search
                                          </span>
                                       </div>
                                    </td>
                                    <td>488</td>
                                    <td>28.77%</td>
                                    <td>
                                       0 hrs : 16 mins : 28 secs
                                    </td>
                                    <td>
                                       <span className="badge bg-danger-transparent">578</span>
                                    </td>
                                    <td>
                                       2.5
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={12} lg={12} xl={3}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h4">
                           Organic traffic Source by Channel
                        </Card.Title>

                     </Card.Header>
                     <Card.Body className="card-body p-0">
                        <div className="chart-wrapper px-1">
                           <div id="traffic-soruce">
                              <TrafficSource />
                           </div>
                        </div>
                        <div className="row g-0 justify-content-center card-body">
                           <div className="col-4 col-xxl-4 col-xl-12 col-lg-4">
                              <div className="text-center">
                                 <i className="mdi mdi-desktop-mac text-primary fs-5"></i>
                                 <p className="pt-2 pb-2 mb-0 text-muted">Desktop</p>
                                 <h4 className="mb-0 fs-20">67.32%</h4>
                              </div>
                           </div>
                           <div className="col-4 col-xxl-4 col-xl-12 col-lg-4">
                              <div className="text-center ">
                                 <i className="mdi mdi-tablet-ipad text-pink fs-5"></i>
                                 <p className="pt-2 pb-2 mb-0 text-muted">Tablet</p>
                                 <h4 className="mb-0 fs-20">30.2%</h4>
                              </div>
                           </div>
                           <div className="col-4 col-xxl-4 col-xl-12 col-lg-4">
                              <div className="text-center">
                                 <i className="mdi mdi-cellphone-android text-success fs-5"></i>
                                 <p className="pt-2 pb-2 mb-0 text-muted">Mobile</p>
                                 <h4 className="mb-0 fs-20">15.3%</h4>
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
AlyDashboard.layout = "Contentlayout";

export default AlyDashboard;
