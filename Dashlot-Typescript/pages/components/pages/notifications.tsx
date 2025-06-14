import React, { Fragment } from 'react'
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';
import { Card, Col, Row } from 'react-bootstrap';
function notifications() {
    return (
        <Fragment>
            <Seo title={"Notifications "} />
            <PageheaderDB heading="Pages" active="Notifications" />
            <div className="container-lg">

                <Row className=" justify-content-center">

                    <Col xxl={8} xl={12} lg={12} md={12} sm={12}>
                        <ul className="list-unstyled mb-0 notification-container">
                            <li>
                                <Card className=" custom-card un-read">
                                    <Card.Body className=" p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md online me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Emperio</p>
                                                            <p className="mb-0 text-muted">Project assigned by the manager all<span className="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span className="badge bg-primary-transparent fw-semibold mx-1">folders</span>were included</p>
                                                            <span className="mb-0 d-block text-muted fs-12">12 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                24,Oct 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <Card.Body className=" p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md offline me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/15.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
                                                            <p className="mb-0 text-muted">Admin and other team accepted your work request</p>
                                                            <span className="mb-0 d-block text-muted fs-12">17 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                30,Sep 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className="card custom-card un-read">
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md offline me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/11.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Alister Chuk</p>
                                                            <p className="mb-0 text-muted">Temporary data will be <span className="badge bg-danger-transparent fw-semibold mx-1">deleted</span> once dedicated time complated</p>
                                                            <span className="mb-0 d-block text-muted fs-12">4 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                11,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <Card.Body className=" p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md online me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/5.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Melissa Blue</p>
                                                            <p className="mb-0 text-muted">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
                                                            <span className="mb-0 d-block text-muted fs-12">5 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                18,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="avatar avatar-md bg-primary text-fixed-white online me-3 avatar-rounded">
                                                    ZS
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Zack Slayer</p>
                                                            <p className="mb-0 text-muted">Social network accounts are at risk check your <span className="badge bg-success-transparent fw-semibold mx-1">login</span> details</p>
                                                            <span className="mb-0 d-block text-muted fs-12">9 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                15,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <Card.Body className=" p-3">
                                        <Link href="#!">
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="avatar avatar-md online me-3 avatar-rounded">
                                                    <img alt="avatar" src="../../../assets/images/faces/2.jpg" />
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Monika Karen</p>
                                                            <p className="mb-0 text-muted">Changed the password of gmail 4 hrs ago. <span className="badge bg-secondary">Update</span></p>
                                                            <span className="mb-0 d-block text-muted fs-12">12 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="float-end badge bg-light text-muted">
                                                                12,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                        </ul>
                        <div className="text-center">
                            <button className="btn btn-info-transparent btn-loader my-3 mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                        </div>
                    </Col>

                </Row>

            </div>
        </Fragment>
    )
}
notifications.layout = "Contentlayout";
export default notifications
