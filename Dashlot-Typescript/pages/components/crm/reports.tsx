import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import { Button, Card, Col, Nav, Row, Tab, Table } from 'react-bootstrap';


const Reports = () => {
    return (
        <>
            <Seo title={"Reports"} />
            <div className="page-header">
                <div className="flex-grow-1 py-2-5">
                    <h4 className="page-title mb-1">Reports</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="/components/crm/crmdashboard/" className="text-primary">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Reports</li>
                        </ol>
                    </nav>
                </div>
                <div className="min-w-fit-content d-flex align-items-center">
                    <div className="flex-grow-1 py-2-5">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search..." />
                            <a href="#" className="btn btn-primary-transparent"><i className="ti ti-search"></i></a>
                        </div>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1 py-2-5">
                        <a href="#" className="btn btn-primary"><i className="fe fe-plus me-1"></i>New Invoice</a>
                    </div>
                </div>
            </div>

            <div className="main-container container-fluid">
                <Row mb={4}>
                    <Col lg={12}>
                        <Tab.Container defaultActiveKey="1">
                            <div className="wideget-user-tab wideget-user-tab3">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1">
                                        <Nav as='ul' variant="tabs" className='border-0' defaultActiveKey="1">
                                            <Nav.Item as='li'>
                                                <Nav.Link as='a' eventKey="1" className="h5" >Invoices</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link as='a' eventKey="2" className="h5">Payments</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link as='a' eventKey="3" className="h5" >Tax Rates</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link as='a' eventKey="4" className="h5" >Transaction List</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link as='a' eventKey="5" className="h5" >Transfer Report</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white widget-user mb-3">
                                <Card.Body>
                                    <div className="border-0">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1" className="p-0 border-0" >
                                                <div className="active" id="tab-5">
                                                    <Row>
                                                        <Col xl={12}>
                                                            <div className="">
                                                                <Card className="mb-0 box-shadow-0 border-bottom-0 project-records">
                                                                    <Card.Header>
                                                                        <Card.Title as="h3">Invoices</Card.Title>
                                                                    </Card.Header>
                                                                    <div className="">
                                                                        <div className="d-flex table-responsive p-3">
                                                                            <div className="btn-list">
                                                                                <Button variant='primary'><i className="mdi mdi-plus-circle-outline"></i> Add</Button>
                                                                                <Button variant='light'><i className="mdi mdi-alert-circle-outline"></i></Button>
                                                                                <Button variant='light'><i className="mdi mdi-delete-empty"></i></Button>
                                                                                <Button variant='light'><i className="mdi mdi-printer"></i></Button>
                                                                            </div>
                                                                            <div className="ms-auto me-2 mt-1 border-0 d-none d-md-block">
                                                                                <input type="text" className="form-control" placeholder="Search Here" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="table-responsive border-top">
                                                                            <Table className="table-responsive-md table-striped mb-0 text-nowrap">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Invoice Id</th>
                                                                                        <th>Client Name</th>
                                                                                        <th>Account Type</th>
                                                                                        <th>Date Created</th>
                                                                                        <th>Due Date</th>
                                                                                        <th>Amount</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>#inv001</td>
                                                                                        <td>Megan Peters</td>
                                                                                        <td><button type="button" className="btn btn-success btn-sm my-0">Paid</button></td>
                                                                                        <td>May 13, 2020</td>
                                                                                        <td className="text-nowrap">July 13, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1000</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#inv002</td>
                                                                                        <td>Phil Vance</td>
                                                                                        <td><button type="button" className="btn btn-danger btn-sm my-0">Unpaid</button></td>
                                                                                        <td>Aug 23, 2020</td>
                                                                                        <td className="text-nowrap">Oct 15, 2018</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1500</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#inv003</td>
                                                                                        <td>Adam Sharp</td>
                                                                                        <td><button type="button" className="btn btn-info btn-sm my-0">Partially</button></td>
                                                                                        <td>Nov 18, 2020</td>
                                                                                        <td className="text-nowrap">Jan 02, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1300</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#inv004</td>
                                                                                        <td>Samantha Slater</td>
                                                                                        <td><button type="button" className="btn btn-success btn-sm my-0">Paid</button></td>
                                                                                        <td>Feb 03, 2020</td>
                                                                                        <td className="text-nowrap">Apr 28, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1340</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#inv005</td>
                                                                                        <td>Joanne Nash</td>
                                                                                        <td><button type="button" className="btn btn-danger btn-sm my-0">Unpaid</button></td>
                                                                                        <td>May 03, 2020</td>
                                                                                        <td className="text-nowrap">Aug 02, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1540</a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2" id="tab-6" className='p-0 border-0'>
                                                <div className="tab-pane p-0 border-0" id="tab-6">
                                                    <Row>
                                                        <Col xl={12}>
                                                            <div className="">
                                                                <Card className="mb-0 box-shadow-0 border-bottom-0 project-records">
                                                                    <Card.Header>
                                                                        <Card.Title as="h3">Payments</Card.Title>
                                                                    </Card.Header>
                                                                    <div className="">
                                                                        <div className="d-flex table-responsive p-3">
                                                                            <div className="btn-list">
                                                                                <Button variant='primary'><i className="mdi mdi-plus-circle-outline"></i> Add</Button>
                                                                                <Button variant='light' className="btn btn-light"><i className="mdi mdi-alert-circle-outline"></i></Button>
                                                                                <Button variant='light' className="btn btn-light"><i className="mdi mdi-delete-empty"></i></Button>
                                                                                <Button variant='light' className="btn btn-light"><i className="mdi mdi-printer"></i></Button>
                                                                            </div>
                                                                            <div className="ms-auto me-2 mt-1 border-0 d-none d-md-block">
                                                                                <input type="text" className="form-control" placeholder="Search Here" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="table-responsive border-top">
                                                                            <Table className="table-responsive-md table-striped mb-0 text-nowrap">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Payment Id</th>
                                                                                        <th>Client Name</th>
                                                                                        <th>Payment Type</th>
                                                                                        <th>Paid Date</th>
                                                                                        <th>Amount</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>#pay001</td>
                                                                                        <td>Phil Watson</td>
                                                                                        <td><button type="button" className="btn btn-info btn-sm my-0">Paypal</button></td>
                                                                                        <td className="text-nowrap">July 13, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1200</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#pay002</td>
                                                                                        <td>Sonia Robertson</td>
                                                                                        <td><button type="button" className="btn btn-success btn-sm my-0">Paytm</button></td>
                                                                                        <td className="text-nowrap">Oct 15, 2018</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1300</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#pay003</td>
                                                                                        <td>Matt Arnold</td>
                                                                                        <td><button type="button" className="btn btn-primary btn-sm my-0">Debit card</button></td>
                                                                                        <td className="text-nowrap">Jan 02, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1500</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#pay004</td>
                                                                                        <td>Adam Hamilton</td>
                                                                                        <td><button type="button" className="btn btn-info btn-sm my-0">Credit card</button></td>
                                                                                        <td className="text-nowrap">Apr 28, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1630</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#pay005</td>
                                                                                        <td>Leah Morgan</td>
                                                                                        <td><button type="button" className="btn btn-success btn-sm my-0">Phonepay</button></td>
                                                                                        <td className="text-nowrap">Aug 02, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1260</a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>#pay006</td>
                                                                                        <td>Amelia McDonald</td>
                                                                                        <td><button type="button" className="btn btn-primary btn-sm my-0">Paytm</button></td>
                                                                                        <td className="text-nowrap">Aug 02, 2020</td>
                                                                                        <td className="w-1"><a href="#" className="icon">$1260</a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3" className="p-0 border-0" id="tab-7">
                                                <Row>
                                                    <div className="col-12">
                                                        <div className="">
                                                            <div className="border border-bottom-0 d-flex p-3">
                                                                <div className="text-start float-start">
                                                                    <h3 className="card-title mt-2 ml-3">Payments</h3>
                                                                </div>
                                                                <span className="text-end table-add float-end ms-auto">
                                                                    <Link href="#!" className="btn btn-icon"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></Link>
                                                                </span>
                                                            </div>
                                                            <div className="table-responsive">

                                                                <table className="table table-bordered text-nowrap border-bottom" id="editTable1">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Date</th>
                                                                            <th>Account</th>
                                                                            <th>Type</th>
                                                                            <th>Amount</th>
                                                                            <th>Credit</th>
                                                                            <th>Balance</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Aug 5, 2020</td>
                                                                            <td>Bank of Baroda</td>
                                                                            <td>Expense</td>
                                                                            <td>$4000.00</td>
                                                                            <td>$200.00</td>
                                                                            <td>$100.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sept 12, 2020</td>
                                                                            <td>HDFE</td>
                                                                            <td>Saving</td>
                                                                            <td>$2475.00</td>
                                                                            <td>$3245.00</td>
                                                                            <td>$1275.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Apr 23, 2020</td>
                                                                            <td>Axis</td>
                                                                            <td>Income</td>
                                                                            <td>$5364.00</td>
                                                                            <td>$243.00</td>
                                                                            <td>$745.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>May 09, 2020</td>
                                                                            <td>Bank of Baroda</td>
                                                                            <td>Income</td>
                                                                            <td>$3400.00</td>
                                                                            <td>$600.00</td>
                                                                            <td>$300.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4" className="p-0 border-0 userprof-tab" id="tab-8">
                                                <Row>
                                                    <div className="col-12">
                                                        <div className="">
                                                            <div className="border border-bottom-0 d-flex p-3">
                                                                <div className="text-start float-start">
                                                                    <h3 className="card-title mt-2 ml-3">Transaction List</h3>
                                                                </div>
                                                                <span className="text-end table-add float-end ms-auto">
                                                                    <Link href="#!" className="btn btn-icon"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></Link>
                                                                </span>
                                                            </div>
                                                            <div className="table-responsive">
                                                                <Table className="table-bordered text-nowrap border-bottom" id="editTable2">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Transaction Id</th>
                                                                            <th>Date</th>
                                                                            <th>Account</th>
                                                                            <th>Type</th>
                                                                            <th>Amount</th>
                                                                            <th>Debit</th>
                                                                            <th>Credit</th>
                                                                            <th>Balance</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>#trn001</td>
                                                                            <td>15-9-2018	</td>
                                                                            <td>Union Bank 0456</td>
                                                                            <td>Savings</td>
                                                                            <td>$200.00</td>
                                                                            <td>$100.00</td>
                                                                            <td>$150.00</td>
                                                                            <td>$120.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>#trn002</td>
                                                                            <td>05-9-2018</td>
                                                                            <td>US Bank 0XX1</td>
                                                                            <td>Expense</td>
                                                                            <td>$3245.00</td>
                                                                            <td>$1275.00</td>
                                                                            <td>$513.00</td>
                                                                            <td>$623.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>#trn003</td>
                                                                            <td>02-9-2018</td>
                                                                            <td>Bank Trust 0X87</td>
                                                                            <td>Income</td>
                                                                            <td>$243.00</td>
                                                                            <td>$745.00</td>
                                                                            <td>$826.00</td>
                                                                            <td>$273.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>#trn004</td>
                                                                            <td>30-8-2018</td>
                                                                            <td>Northern Trust XX21</td>
                                                                            <td>Savings</td>
                                                                            <td>$600.00</td>
                                                                            <td>$700.00</td>
                                                                            <td>$370.00</td>
                                                                            <td>$460.00</td>
                                                                            <td><div className="d-flex align-items-center">
                                                                                <button id="bEdit" type="button" className="btn btn-sm btn-success m-1">
                                                                                    <i className="fe fe-edit"> </i>
                                                                                </button>
                                                                                <button type="button" className="btn btn-sm btn-danger m-1">
                                                                                    <i className="fe fe-trash-2"> </i>
                                                                                </button>
                                                                                <button id="bAcep" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-check-circle"> </i>
                                                                                </button>
                                                                                <button id="bCanc" type="button" className="btn btn-sm btn-light m-1" style={{ display: "none" }}>
                                                                                    <i className="fe fe-x-circle"> </i>
                                                                                </button>
                                                                            </div></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="5" className="border-0 p-0 userprof-tab" id="tab-9">
                                                <Row>
                                                    <Col lg={12} xl={12} sm={12}>
                                                        <div className="">
                                                            <div className="border border-bottom-0 d-flex p-3">
                                                                <div className="text-start float-start">
                                                                    <h3 className="card-title mt-2 ml-3">Transfer</h3>
                                                                </div>
                                                                <span className="text-end table-add float-end ms-auto">
                                                                    <Link href="#!" className="btn btn-icon"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></Link>
                                                                </span>
                                                            </div>
                                                            <div className="p-0">
                                                                <div className="table-responsive">
                                                                    <div id="table3" className="table-responsive table-editable">
                                                                        <Table className="table-bordered table-responsive-md table-striped  mb-0 text-nowrap">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td className="border-top-0 border-bottom-0">Date</td>
                                                                                    <th className="">Transfer Bank</th>
                                                                                    <th className="">Payment through</th>
                                                                                    <th className="">User Name</th>
                                                                                    <th className="">Amount</th>
                                                                                    <th className="">Status</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>15-9-2018</td>
                                                                                    <td>Union Bank 0456</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Abigail	Fraser</td>
                                                                                    <td>$145</td>
                                                                                    <td><span className="btn btn-sm btn-success">Successfully Transfer</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>05-9-2018</td>
                                                                                    <td>US Bank 0XX1</td>
                                                                                    <td>Debit</td>
                                                                                    <td>Sally Blake</td>
                                                                                    <td>$122</td>
                                                                                    <td><span className="btn btn-sm btn-info">Transfer Proccessing..</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>02-9-2018</td>
                                                                                    <td>Bank Trust 0X87</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Diana King</td>
                                                                                    <td>$195</td>
                                                                                    <td><span className="btn btn-sm btn-danger">Transfer Failed</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>30-8-2018</td>
                                                                                    <td>Northern Trust 0XX21</td>
                                                                                    <td>Debit</td>
                                                                                    <td>Bella Blake</td>
                                                                                    <td>$132</td>
                                                                                    <td><span className="btn btn-sm btn-success">Successfully Transfer</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>28-8-2018</td>
                                                                                    <td>Union Bank 1234</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Eric Mackay</td>
                                                                                    <td>$145</td>
                                                                                    <td><span className="btn btn-sm btn-success">Successfully Transfer</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>25-8-2018</td>
                                                                                    <td>US Bank 7896</td>
                                                                                    <td>Debit</td>
                                                                                    <td>Ryan Bond</td>
                                                                                    <td>$123</td>
                                                                                    <td><span className="btn btn-sm btn-info">Transfer Processing</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>22-8-2018</td>
                                                                                    <td>Bank Trust 0234</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Alan Thomson</td>
                                                                                    <td>$121</td>
                                                                                    <td><span className="btn btn-sm btn-info">Transfer Processing</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>15-8-2018</td>
                                                                                    <td>Northern Trust XX21</td>
                                                                                    <td>Debit</td>
                                                                                    <td>Kevin Kelly</td>
                                                                                    <td>$156</td>
                                                                                    <td><span className="btn btn-sm btn-danger">Transfer Failed</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>13-8-2018</td>
                                                                                    <td>US Bank X654</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Nicola	Hunter</td>
                                                                                    <td>$134</td>
                                                                                    <td><span className="btn btn-sm btn-success">Successfully Transfer</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>11-8-2018</td>
                                                                                    <td>Union Bank X041</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Diana Burgess</td>
                                                                                    <td>$99</td>
                                                                                    <td><span className="btn btn-sm btn-success">Successfully Transfer</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>08-8-2018</td>
                                                                                    <td>Bank Trust X321</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Chloe Newman</td>
                                                                                    <td>$67</td>
                                                                                    <td><span className="btn btn-sm btn-info">Transfer Processing</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>06-8-2018</td>
                                                                                    <td>Northern Trust XX01</td>
                                                                                    <td>Debit</td>
                                                                                    <td>Ryan Nolan</td>
                                                                                    <td>$110</td>
                                                                                    <td><span className="btn btn-sm btn-danger">Transfer Failed</span></td>
                                                                                </tr>
                                                                                <tr className="hide">
                                                                                    <td>02-8-2018</td>
                                                                                    <td>US Bank X234</td>
                                                                                    <td>Credit</td>
                                                                                    <td>Una	Powell</td>
                                                                                    <td>$132</td>
                                                                                    <td><span className="btn btn-sm btn-info">Transfer Processing</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </Table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Card.Body>
                            </div>
                        </Tab.Container>
                    </Col>
                </Row>

            </div>

        </>
    );
};
Reports.layout = "Contentlayout";
export default Reports;
