import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Col } from 'react-bootstrap';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

export const filefolders: any[] = [
    { id: 1, heading: 'document.pdf', src: "../../../../assets/images/files/1.png", main: '23kb', icon1: "share" },
    { id: 2, heading: 'Images', src: "../../../../assets/images/files/4.png", main: '1.23gb', icon1: "share" },
    { id: 3, heading: 'Music', src: "../../../../assets/images/files/4.png", main: '897mb', icon1: "share" },
    { id: 4, heading: 'Downloads', src: "../../../../assets/images/files/4.png", main: '453kb', icon1: "share" },
    { id: 5, heading: 'Videos', src: "../../../../assets/images/files/4.png", main: '1.5gb', icon1: "share" },
    { id: 6, heading: 'Documents', src: "../../../../assets/images/files/4.png", main: '234mb', icon1: "share" },
    { id: 8, heading: 'topmp4song.mp4', main: '4kb', icon1: "share" },
    { id: 9, heading: 'image.jpg', src: "../../../../assets/images/background/1.jpg", main: '65kb', icon1: "share", },
    { id: 10, heading: 'File documents', src: "../../../../assets/images/files/4.png", main: '1.23gb', icon1: "share" },
    { id: 11, heading: 'New Folder', src: "../../../../assets/images/files/4.png", main: '897mb', icon1: "share" },
    { id: 12, heading: 'Word document', src: "../../../../assets/images/files/6.png", main: '23kb', icon1: "share" },
    { id: 13, heading: 'document.pdf', src: "../../../../assets/images/files/1.png", main: '23kb', icon1: "share" },
    { id: 13, heading: 'Word document', src: "../../../../assets/images/files/6.png", main: '23kb', icon1: "share" },
    { id: 13, heading: 'document.pdf', src: "../../../../assets/images/files/1.png", main: '23kb', icon1: "share" },
];
export const Recentimages = () => {
    const [open, setOpen] = useState(false);

    return (

        <div>
            <div className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/1.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/2.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/3.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/4.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/5.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/6.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/7.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/8.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/9.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/10.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/11.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../../assets/images/background/12.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../../assets/images/background/1.jpg" }, { src: "../../../../assets/images/background/2.jpg" }, { src: "../../../../assets/images/background/3.jpg" }, { src: "../../../../assets/images/background/4.jpg" }, { src: "../../../../assets/images/background/5.jpg" },
                { src: "../../../../assets/images/background/6.jpg" }, { src: "../../../../assets/images/background/7.jpg" }, { src: "../../../../assets/images/background/8.jpg" }, { src: "../../../../assets/images/background/9.jpg" }, { src: "../../../../assets/images/background/10.jpg" }, { src: "../../../../assets/images/background/11.jpg" }, { src: "../../../../assets/images/background/11.jpg" }

                ]}
            />

        </div >
    );
};