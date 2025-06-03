import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from "../../../shared/data/prismdata/uielementsprim";

const Imagesfigures = () => {

    return (
        <Fragment>
            <Seo title={"Imagesfigures"} />
            <PageheaderDB heading="Ui Elements" active="Images & Figures" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Responsive image" customCardClass="custom-card" customCardBodyClass="" code={image1}>
                            <p className="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
                            <div className="text-center">
                                <img src="../../../assets/images/media/106.jpg" className="img-fluid" alt="..." />
                            </div>
                        </ShowCode>

                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Image With Radius" customCardClass="custom-card" customCardBodyClass="" code={image2}>
                            <p className="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.</p>
                            <div className="text-center">
                                <img src="../../../assets/images/media/107.jpg" className="img-fluid rounded" alt="..." />
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Rounded Image" customCardClass="custom-card" customCardBodyClass="" code={image3}>
                            <p className="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.</p>
                            <div className="text-center">
                                <img src="../../../assets/images/media/108.jpg" className="img-fluid rounded-pill" alt="..." />
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Image Left Align" customCardClass="custom-card" customCardBodyClass="" code={image4}>
                            <img className="rounded float-start" src="../../../assets/images/media/111.jpg" alt="..." />
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Image Center Align" customCardClass="custom-card" customCardBodyClass="" code={image5}>
                            <img className="rounded mx-auto d-block" src="../../../assets/images/media/113.jpg" alt="..." />
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Image Right Align" customCardClass="custom-card" customCardBodyClass="" code={image6}>
                            <img className="rounded float-end" src="../../../assets/images/media/112.jpg" alt="..." />
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Figures" customCardClass="custom-card" customCardBodyClass="d-flex justify-content-between gap-2" code={image7}>

                            <figure className="figure">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/114.jpg" alt="..." />
                                <figcaption className="figure-caption mt-2">A caption for the above image.
                                </figcaption>
                            </figure>
                            <figure className="figure float-end">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/115.jpg" alt="..." />
                                <figcaption className="figure-caption mt-2 text-end">A caption for the above image.
                                </figcaption>
                            </figure>
                        </ShowCode>
                    </Col>
                    <Col xl={3}>
                        <ShowCode title="Image Thumbnail" customCardClass="custom-card" customCardBodyClass="" code={image8}>
                            <p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
                            <div className="text-center">
                                <img src="../../../assets/images/media/109.jpg" className="img-thumbnail" alt="..." />
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={3}>
                        <ShowCode title="Rounded Thumbnail" customCardClass="custom-card" customCardBodyClass="" code={image9}>
                            <p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
                            <div className="text-center">
                                <img src="../../../assets/images/media/110.jpg" className="img-thumbnail rounded-pill" alt="..." />
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Imagesfigures.layout = "Contentlayout";
export default Imagesfigures;
