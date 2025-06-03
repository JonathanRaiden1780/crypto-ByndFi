
import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Bar1, Bar2, Bar3, Bar4, Customer, EXPENSES, Growth, PROFIT, } from "../../../shared/data/analytics/customerdata";
import Seo from "@/shared/layout-components/seo/seo";

const AlyCustomer = () => {
  return (
    <>
      <Seo title={"Customers"} />
      <div className="page-header">
        <div className="flex-grow-1 py-2-5">
          <h4 className="page-title mb-1">Customers Analytics</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/components/analytics/alydashboard/" className="text-primary">
                  Analytics
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Customer
              </li>
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
                  <EXPENSES />
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
                  <PROFIT />
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
              <Row>
                <Col sm={6} lg={3} pe={3} xl={0} className="border-end">
                  <Card.Body className="mt-0">
                    <div className="text-center">
                      <h6 className="mb-3 font-weight-normal">
                        Total Revenue
                      </h6>
                      <h3 className="mb-3">$35,248</h3>
                      <span className="sp-1 chart-dropshadow2 chart-fourcards">
                        <Bar1 />
                      </span>
                      <p className="mb-0 mt-2 text-muted">
                        <span className="mb-0 text-success fs-13 ms-1 fw-500">
                          <i className="fe fe-arrow-up"></i> 0.27%
                        </span>{" "}
                        for Last month
                      </p>
                    </div>
                  </Card.Body>
                </Col>
                <div className="col-sm-6 col-lg-3 border-end">
                  <Card.Body className="mt-0">
                    <div className="text-center">
                      <h6 className="mb-3 font-weight-normal">Customers</h6>
                      <h2 className="mb-3">4,513</h2>
                      <span className="sp-2 chart-dropshadow2 chart-fourcards">
                        <Bar2 />
                      </span>
                      <p className="mb-0 mt-2 text-muted">
                        <span className="mb-0 text-danger fs-13 ms-1 fw-500">
                          <i className="fe fe-arrow-down"></i> 0.12%
                        </span>{" "}
                        for Last month
                      </p>
                    </div>
                  </Card.Body>
                </div>
                <div className="col-sm-6 col-lg-3  border-end">
                  <Card.Body className="mt-0">
                    <div className="text-center">
                      <h6 className="mb-3 font-weight-normal">Sessions</h6>
                      <h2 className="mb-3">145</h2>
                      <span className="sp-3 chart-dropshadow2 chart-fourcards">
                        <Bar3 />
                      </span>
                      <p className="mb-0 mt-2 text-muted">
                        <span className="mb-0 text-success fs-13 ms-1 fw-500">
                          <i className="fe fe-arrow-up"></i> 0.32%
                        </span>{" "}
                        for Last month
                      </p>
                    </div>
                  </Card.Body>
                </div>
                <Col sm={6} lg={3}>
                  <Card.Body className="mt-0">
                    <div className="text-center">
                      <h6 className="mb-3 font-weight-normal">
                        Conversation rate
                      </h6>
                      <h2 className="mb-3">$12.5%</h2>
                      <span className="sp-4 chart-dropshadow2 chart-fourcards">
                        <Bar4 />
                      </span>
                      <p className="mb-0 mt-2 text-muted">
                        <span className="mb-0 text-danger fs-13 ms-1 fw-500">
                          <i className="fe fe-arrow-down"></i> 0.25%
                        </span>{" "}
                        for Last month
                      </p>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={7} xl={8}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Customer Growth</h4>
              </Card.Header>
              <Card.Body>
                <div id="Customer-Growth" className="flot-chart h-290 chart-dropshadow2">
                  <Growth />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5} xl={4} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title>Customer Satisfaction</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="chartwrapper mb-4">

                  <Customer />
                </div>
                <Row className="text-center">
                  <div className="col-6">
                    <span className="mb-1 text-muted d-block text-start fs-14">
                      Very Satisfied
                    </span>
                    <ProgressBar
                      now={70}
                      variant="primary"
                      className="progress mb-3 h-1 w-90"
                    />
                  </div>
                  <div className="col-6">
                    <span className="mb-1 text-muted d-block text-start fs-14">
                      Satisfied
                    </span>
                    <ProgressBar
                      now={60}
                      variant="orange"
                      className="progress mb-3 h-1 w-90"
                    />
                  </div>
                </Row>
                <Row className="text-center">
                  <div className="col-6">
                    <span className="mb-1 text-muted d-block text-start fs-14">
                      Neutral
                    </span>
                    <ProgressBar
                      now={40}
                      variant="info"
                      className="progress mb-3 h-1 w-90"
                    />
                  </div>
                  <div className="col-6">
                    <span className="mb-1 text-muted d-block text-start fs-14">
                      Unsatisfied
                    </span>
                    <ProgressBar
                      now={30}
                      variant="success"
                      className="progress mb-3 h-1 w-90"
                    />
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="col-12">
            <Card>
              <Card.Header className="d-flex">
                <h3 className="card-title">Customer Details</h3>
                <span className="text-end table-add float-end ms-auto">
                  <Button id="addRowButton" variant="primary">
                    {" "}
                    <i className="fa fa-plus fa-1x" aria-hidden="true"></i>
                  </Button>
                </span>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <table className="table table-bordered text-nowrap border-bottom" id="editTable1">
                    <thead>
                      <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone no</th>
                        <th>Country</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>George Clooney</td>
                        <td>George_Clooney23@gmail.com</td>
                        <td>0-235-657-24587</td>
                        <td>Savings</td>
                        <td>
                          <button type="button" className="btn btn-sm btn-success m-1">
                            <i className="fe fe-edit"> </i>
                          </button>
                          <button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                            <i className="fe fe-trash-2"> </i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Petey Cruiser</td>
                        <td>Petey_Cruiser@gmail.com</td>
                        <td>0-202-555-0168</td>
                        <td>Expense</td>
                        <td>
                          <button type="button" className="btn btn-sm btn-success m-1">
                            <i className="fe fe-edit"> </i>
                          </button>
                          <button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                            <i className="fe fe-trash-2"> </i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Paul Molive</td>
                        <td>Paul_Molive65@gmail.com</td>
                        <td>0-202-555-0138</td>
                        <td>Income</td>
                        <td>
                          <button type="button" className="btn btn-sm btn-success m-1">
                            <i className="fe fe-edit"> </i>
                          </button>
                          <button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                            <i className="fe fe-trash-2"> </i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Warren Peace</td>
                        <td>Warren_Peace@gmail.com</td>
                        <td>0-202-555-0181</td>
                        <td>Income</td>
                        <td>
                          <button type="button" className="btn btn-sm btn-success m-1">
                            <i className="fe fe-edit"> </i>
                          </button>
                          <button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
                            <i className="fe fe-trash-2"> </i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Manuel Labor</td>
                        <td>Manuel_Labor@gmail.com</td>
                        <td>0-202-555-0147</td>
                        <td>Savings</td>
                        <td>
                          <button type="button" className="btn btn-sm btn-success m-1">
                            <i className="fe fe-edit"> </i>
                          </button>
                          <button id="bDel" type="button" className="btn btn-sm btn-danger m-1">
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
AlyCustomer.layout = "Contentlayout";
export default AlyCustomer;
