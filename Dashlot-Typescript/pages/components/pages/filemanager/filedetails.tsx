
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Recentimages } from '../../../../shared/data/pages/filedetailsdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const FileDetails = () => {
    return (
        <>
            <Seo title={"File Details"} />
            <PageheaderDB heading="Pages" active="File Details" />


            <div className="main-container container-fluid">

                <Row>
                    <Col xxl={8} xl={12} lg={12} md={12}>
                        <Card className="overflow-hidden">
                            <Card.Body className=" px-4 pt-4">
                                <Link href={"/components/pages/blog/blogdetails"}><img src="../../../../assets/images/background/29.jpg" alt="img" className="cover-image rounded-1 w-100" /></Link>
                                <div className="mt-3">
                                    <h4>Highlighted</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci velit rerum ut nihil quisquam fugit perferendis error sequi, aut unde ea cum laudantium nostrum voluptatem nam vero inventore, repellat ratione.</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="py-3">
                                <div id="basicSlider">
                                    <div className="MS-content">
                                        <Swiper

                                            centeredSlides={false}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 30,
                                                },
                                                1400: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 30,
                                                },
                                            }}
                                            navigation={true}
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/1.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">221.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/2.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">222.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/3.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">223.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/4.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">224.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/5.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">225.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/6.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">226.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/7.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">227.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/8.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">228.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <div className="border rounded-1 overflow-hidden mb-0">
                                                        <Link href="#!">
                                                            <img className="w-100" src="../../../../assets/images/background/9.jpg" alt="img" />
                                                        </Link>
                                                        <div className="card-footer bd-t-0 py-3">
                                                            <div className="d-flex">
                                                                <div>
                                                                    <h6 className="mb-0">229.jpg</h6>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <h6 className="text-muted mb-0">120 KB</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={12} lg={12} md={12}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">File details :</h5>
                                <div className="">
                                    <Row>
                                        <Col xl={12}>
                                            <div className="table-responsive">
                                                <Table className="table mb-0 border-top table-bordered text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">File-name</th>
                                                            <td>image.jpg</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">File-size</th>
                                                            <td>12.45mb</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">uploaded-date</th>
                                                            <td>01-12-2020</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">uploaded-by</th>
                                                            <td>prityy abodh</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">image-width</th>
                                                            <td>1000</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">image-height</th>
                                                            <td>600</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">File-formate</th>
                                                            <td>jpg</td>
                                                        </tr>
                                                        <tr className="border-bottom">
                                                            <th scope="row">File-location</th>
                                                            <td>storage/photos/image.jpg</td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-4">Recent Files</h5>
                                <Recentimages />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>

        </>
    );
};
FileDetails.layout = "Contentlayout";
export default FileDetails;
