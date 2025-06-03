import { FC, Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {
    Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
    EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode
} from 'swiper/modules';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
const Swiperjs = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
        },
    };
    return (
        <Fragment>
            <Seo title={"Swiper"} />
            <PageheaderDB heading="Advanced Ui" active="Swiper" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Swiper
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                                    <SwiperSlide><img src="../../../assets/images/media/85.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/84.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/83.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Swiper With Navigation
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/87.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/86.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/88.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Swiper with Pagination
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/90.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/89.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/91.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Dynamic Pagination
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/79.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/75.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/73.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Pagination With Progress
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper pagination={{ type: 'progressbar', }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/69.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/65.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/62.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Pagination Fraction
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper pagination={{ type: 'fraction', }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
                                    <SwiperSlide><img src="../../../assets/images/media/73.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/88.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/89.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Custom Pagination
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper pagination={pagination} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
                                    <SwiperSlide><img src="../../../assets/images/media/83.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/62.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/91.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Scrollbar Swiper
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
                                    <SwiperSlide><img src="../../../assets/images/media/88.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/86.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/87.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Vertical Swiper
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper direction={'vertical'} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper swiper vertical swiper-vertical">
                                    <SwiperSlide><img src="../../../assets/images/media/8.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/32.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/17.png" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Mouse Wheel Control
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper swiper vertical vertical-mouse-control">
                                    <SwiperSlide><img src="../../../assets/images/media/86.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/88.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/90.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Keyboard Control
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/89.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/69.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/65.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Nested Swiper</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                                    <SwiperSlide><img src="../../../assets/images/media/88.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide>
                                        <Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true, }}
                                            modules={[Pagination]}>
                                            <SwiperSlide><img src="../../../assets/images/media/83.jpg" alt="" /></SwiperSlide>
                                            <SwiperSlide><img src="../../../assets/images/media/89.jpg" alt="" /></SwiperSlide>
                                            <SwiperSlide><img src="../../../assets/images/media/90.jpg" alt="" /></SwiperSlide>
                                        </Swiper>
                                    </SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/86.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/87.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Effect Cube
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    pagination={{ clickable: true, }} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
                                    <SwiperSlide><img src="../../../assets/images/media/120.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/121.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/122.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Effect Fade
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade">
                                    <SwiperSlide><img src="../../../assets/images/media/76.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/77.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/78.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Effect Flip
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper effect={'flip'} grabCursor={true} pagination={{ clickable: true, }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/78.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/120.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/121.jpg" alt="" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Effect Coverflow
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={false}
                                    slidesPerView={4}
                                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination, Autoplay]}

                                    className="mySwiper swiper swiper-overflow">
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/98.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/99.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/100.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/101.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/102.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/117.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/104.jpg" alt="img" /></SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/119.jpg" alt="img" /></SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Thumbs Gallery
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper
                                    spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/68.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/58.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/59.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/60.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/63.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/64.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/67.jpg" alt="img" />
                                    </SwiperSlide>

                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view mt-2">
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/68.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/58.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/59.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/60.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/63.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/64.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../../assets/images/media/67.jpg" alt="img" />
                                    </SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Swiperjs.layout = "Contentlayout";
export default Swiperjs;
