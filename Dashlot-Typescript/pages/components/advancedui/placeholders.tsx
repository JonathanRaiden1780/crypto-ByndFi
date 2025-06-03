import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

import { placeholder1, placeholder2, placeholder3, placeholder4 } from "../../../shared/data/prismdata/advanceuidata";
import ShowCode from '@/shared/showcode/showcode';
const Placeholders = () => {

    return (
        <Fragment>
            <Seo title={"Placeholders"} />
            <PageheaderDB heading="Advanced Ui" active="Placeholders" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12}>
                                <Card className="custom-card">
                                    <img className="card-img-top" src="../../../assets/images/media/118.jpg" alt="" />
                                    <Card.Body>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12}>
                                <Card aria-hidden="true">
                                    <img className="card-img-top" src="../../../assets/images/media/119.jpg" alt="" />
                                    <Card.Body>
                                        <div className="h5 card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </div>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7 me-1"></span>
                                            <span className="placeholder col-4 "></span>
                                            <span className="placeholder col-4 me-1"></span>
                                            <span className="placeholder col-6"></span>
                                        </p>
                                        <Link href="#!" tabIndex={-1} className="btn btn-primary disabled placeholder col-6"></Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xl={12}>
                                <ShowCode title="Animation" customCardClass="custom-card" customCardBodyClass="" code={placeholder1}>
                                    <p className="placeholder-glow mb-0">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                    <p className="placeholder-wave mb-0">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                </ShowCode>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <Row>
                                    <Col xl={12}>
                                        <ShowCode title="Sizing" customCardClass="custom-card" customCardBodyClass="" code={placeholder2}>
                                            <span className="placeholder col-12 placeholder-xl mb-1"></span>
                                            <span className="placeholder col-12 placeholder-lg"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12 placeholder-sm"></span>
                                            <span className="placeholder col-12 placeholder-xs"></span>
                                        </ShowCode>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="Colors" customCardClass="custom-card" customCardBodyClass="" code={placeholder3}>
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-12 bg-primary"></span>
                                    <span className="placeholder col-12 bg-secondary"></span>
                                    <span className="placeholder col-12 bg-success"></span>
                                    <span className="placeholder col-12 bg-danger"></span>
                                    <span className="placeholder col-12 bg-warning"></span>
                                    <span className="placeholder col-12 bg-info"></span>
                                    <span className="placeholder col-12 bg-light"></span>
                                    <span className="placeholder col-12 bg-dark"></span>
                                </ShowCode>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Width" customCardClass="custom-card" customCardBodyClass="" code={placeholder4}>
                            <span className="placeholder bg-primary col-6"></span>
                            <span className="placeholder bg-primary w-75"></span><br/>
                            <span className="placeholder bg-primary" style={{width: '25%'}}></span>

                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Placeholders.layout = "Contentlayout";
export default Placeholders;
