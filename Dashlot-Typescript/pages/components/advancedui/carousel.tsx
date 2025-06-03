import { FC, Fragment, useState } from 'react';
import { Button, Card, Carousel, Col, Collapse, Row } from 'react-bootstrap';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from "../../../shared/data/prismdata/advanceuidata";

const Carousels = () => {

    return (
        <Fragment>
            <Seo title={"Carousel"} />
            <PageheaderDB heading="Advanced Ui" active="Carousel" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="Slides Only" customCardClass="custom-card" customCardHeaderClass="" code={carousel1}>
                            <Carousel id="carouselExampleSlidesOnly" className="carousel slide carousel-icons" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src="../../../assets/images/media/84.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/85.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/91.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="With controls" customCardClass="custom-card" customCardHeaderClass="" code={carousel2}>
                            <Carousel id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src="../../../assets/images/media/86.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src="../../../assets/images/media/89.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src="../../../assets/images/media/90.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="With indicators" customCardClass="custom-card" customCardHeaderClass="" code={carousel3}>
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={"../../../assets/images/media/86.jpg"}
                                        alt="First"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={"../../../assets/images/media/89.jpg"}
                                        alt="Second"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={"../../../assets/images/media/90.jpg"}
                                        alt="Third"
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="With captions" customCardClass="custom-card" customCardHeaderClass="" code={carousel4}>
                            <Carousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <Carousel.Item className="active">
                                    <img src="../../../assets/images/media/117.jpg" className="d-block w-100 br-5" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/118.jpg" className="d-block w-100 br-5" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/119.jpg" className="d-block w-100 br-5" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="Crossfade" customCardClass="custom-card" customCardHeaderClass="" code={carousel5}>
                            <Carousel fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src="../../../assets/images/media/101.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/102.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/103.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <ShowCode title="Individual .carousel-item interval" customCardClass="custom-card" customCardHeaderClass="" code={carousel6}>
                            <Carousel id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" indicators={false}>
                                <Carousel.Item interval={1000} className="active" >
                                    <img src="../../../assets/images/media/98.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src="../../../assets/images/media/99.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src="../../../assets/images/media/100.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} md={6}>
                        <ShowCode title="Disable touch swiping" customCardClass="custom-card" customCardHeaderClass="" code={carousel7}>
                            <Carousel touch={false} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" indicators={false}
                                data-bs-interval="false">
                                <Carousel.Item className="carousel-item active">
                                    <img src="../../../assets/images/media/70.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/71.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/76.jpg" className="d-block w-100 br-5" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                    <Col xl={4} md={6}>
                        <ShowCode title="Dark variant" customCardClass="custom-card" customCardHeaderClass="" code={carousel8}>
                            <Carousel id="carouselExampleDark" className="carousel slide" indicators={true}>
                                <Carousel.Item className="active" data-bs-interval="10000">
                                    <img src="../../../assets/images/media/121.jpg" className="d-block w-100 br-5"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>First slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item data-bs-interval="2000">
                                    <img src="../../../assets/images/media/122.jpg" className="d-block w-100 br-5"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Second slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the second slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="../../../assets/images/media/120.jpg" className="d-block w-100 br-5"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Third slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the third slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Carousels.layout = "Contentlayout";
export default Carousels;
