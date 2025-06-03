import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { borderRadius, sizes, utilities, utilities1, utilities2, utilities3, utilities4, utilities5 } from "../../../shared/data/prismdata/utilitiesdata";

const Borders = () => {
    return (
        <Fragment>
            <Seo title={"Borders"} />
            <PageheaderDB heading="Utilities" active="Borders" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Borders " code={utilities} customCardHeaderClass="" customCardBodyClass="">
                            <span className="border border-container"></span>
                            <span className="border-top border-container"></span>
                            <span className="border-end border-container"></span>
                            <span className="border-bottom border-container"></span>
                            <span className="border-start border-container"></span>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title=" Remove borders " code={utilities1} customCardHeaderClass="">
                            <span className="border-0 border-container"></span>
                            <span className="border border-top-0 border-container"></span>
                            <span className="border border-end-0 border-container"></span>
                            <span className="border border-bottom-0 border-container"></span>
                            <span className="border border-start-0 border-container"></span>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={5}>
                        <ShowCode title=" Border Widths " code={utilities2} customCardHeaderClass="">
                            <span className="border border-container border-1"></span>
                            <span className="border border-container border-2"></span>
                            <span className="border border-container border-3"></span>
                            <span className="border border-container border-4"></span>
                            <span className="border border-container border-5"></span>
                        </ShowCode>
                    </Col>
                    <Col xl={7}>
                        <ShowCode title="  Border colors" code={utilities3} customCardHeaderClass="">
                            <span className="border border-container border-primary"></span>
                            <span className="border border-container border-secondary"></span>
                            <span className="border border-container border-success"></span>
                            <span className="border border-container border-danger"></span>
                            <span className="border border-container border-warning"></span>
                            <span className="border border-container border-info"></span>
                            <span className="border border-container border-light"></span>
                            <span className="border border-container border-dark"></span>
                            <span className="border border-container border-white"></span>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <ShowCode title=" Border color Styling" code={utilities4} customCardHeaderClass="">
                            <div className="mb-4">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</Form.Label>
                                <Form.Control type="email" className="form-control border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                                Customizing borders with background colors
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title=" Border with opacity " code={utilities5} customCardHeaderClass="">
                            <div className="border border-success p-2 mb-2">This is default success border</div>
                            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                                success
                                border
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <ShowCode title=" Border Radius Placements " code={borderRadius} customCardHeaderClass="">
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded-top" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded-end" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded-bottom" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded-start" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img rounded-circle" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img  rounded-pill" alt="..." />
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title=" Sizes" code={sizes} customCardHeaderClass="">
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                            <img src="../../../assets/images/media/116.jpg" className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Borders.layout = "Contentlayout";
export default Borders;
