import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from 'next/link';

export const Gallerylist1 = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Row className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-01"
                            data-id="lion">
                            <img src="../../../assets/images/background/1.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-02"
                            data-id="camel">
                            <img src="../../../assets/images/background/2.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-03"
                            data-id="hippo">
                            <img src="../../../assets/images/background/3.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-04"
                            data-id="koala">
                            <img src="../../../assets/images/background/4.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-05"
                            data-id=" bear">
                            <img src="../../../assets/images/background/5.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-06"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/6.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-07"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/7.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-08"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/8.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-05"
                            data-id=" bear">
                            <img src="../../../assets/images/background/9.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-06"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/10.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-07"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/11.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className=" js-img-viewer" data-caption="IMAGE-08"
                            data-id=" rhino">
                            <img src="../../../assets/images/background/12.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/background/1.jpg" }, { src: "../../../assets/images/background/2.jpg" },
                { src: "../../../assets/images/background/3.jpg" }, { src: "../../../assets/images/background/4.jpg" },
                { src: "../../../assets/images/background/5.jpg" }, { src: "../../../assets/images/background/6.jpg" },
                { src: "../../../assets/images/background/7.jpg" }, { src: "../../../assets/images/background/8.jpg" },
                { src: "../../../assets/images/background/9.jpg" }, { src: "../../../assets/images/background/10.jpg" },
                { src: "../../../assets/images/background/11.jpg" }, { src: "../../../assets/images/background/12.jpg" }

                ]}
            />

        </ >
    );
};

export const Gallerylist2 = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Row className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-01"
                            data-id="lion">
                            <img src="../../../assets/images/background/17.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-02"
                            data-id="camel">
                            <img src="../../../assets/images/background/18.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-03"
                            data-id="hippo">
                            <img src="../../../assets/images/background/5.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-04"
                            data-id="koala">
                            <img src="../../../assets/images/background/7.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/background/17.jpg" }, { src: "../../../assets/images/background/18.jpg" },
                { src: "../../../assets/images/background/5.jpg" }, { src: "../../../assets/images/background/7.jpg" }

                ]}
            />

        </ >
    );
};
export const Gallerylist3 = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Row className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-01"
                            data-id="lion">
                            <img src="../../../assets/images/background/4.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-02"
                            data-id="camel">
                            <img src="../../../assets/images/background/7.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-03"
                            data-id="hippo">
                            <img src="../../../assets/images/background/6.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-04"
                            data-id="koala">
                            <img src="../../../assets/images/background/2.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/background/4.jpg" }, { src: "../../../assets/images/background/7.jpg" },
                { src: "../../../assets/images/background/6.jpg" }, { src: "../../../assets/images/background/2.jpg" }

                ]}
            />

        </ >
    );
};
export const Gallerylist4 = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Row className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-01"
                            data-id="lion">
                            <img src="../../../assets/images/background/5.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-02"
                            data-id="camel">
                            <img src="../../../assets/images/background/8.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-03"
                            data-id="hippo">
                            <img src="../../../assets/images/background/9.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <Link href="#!" className="js-img-viewer" data-caption="IMAGE-04"
                            data-id="koala">
                            <img src="../../../assets/images/background/23.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/background/5.jpg" }, { src: "../../../assets/images/background/8.jpg" },
                { src: "../../../assets/images/background/9.jpg" }, { src: "../../../assets/images/background/23.jpg" }

                ]}
            />

        </ >
    );
};
