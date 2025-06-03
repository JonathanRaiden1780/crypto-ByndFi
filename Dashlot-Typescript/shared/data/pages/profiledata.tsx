import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Col } from 'react-bootstrap';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface Default {
    role: string
    name: string
    src: string
}
export const Friendsdata: Default[] = [
    { src: "../../../assets/images/users/5.jpg", name: 'James Thomas', role: 'Web designer' },
    { src: "../../../assets/images/users/9.jpg", name: 'Mike Edward', role: 'Web designer' },
    { src: "../../../assets/images/users/2.jpg", name: 'Mark Thmason', role: 'Web designer' },
    { src: "../../../assets/images/users/3.jpg", name: 'Jefferson', role: 'Web designer' },
    { src: "../../../assets/images/users/4.jpg", name: 'Helen Voizekh', role: 'Web designer' },
    { src: "../../../assets/images/users/6.jpg", name: 'Jak Scarlet', role: 'Web designer' },
    { src: "../../../assets/images/users/2.jpg", name: 'Ronald mef', role: 'Web designer' },
    { src: "../../../assets/images/users/1.jpg", name: 'Valmdir Raksh', role: 'Web designer' }
];
export const Gallery = () => {
    const [open, setOpen] = useState(false);

    return (

        <div>
            <div className="masonry row">
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/1.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/2.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/3.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/4.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/5.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/6.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/7.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/8.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/9.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/10.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/11.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick">
                        <img src="../../../assets/images/background/12.jpg" alt="img" className="img-fluid" onClick={() => setOpen(true)} />
                    </div>
                </Col>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/background/1.jpg" }, { src: "../../../assets/images/background/2.jpg" }, { src: "../../../assets/images/background/3.jpg" }, { src: "../../../assets/images/background/4.jpg" }, { src: "../../../assets/images/background/5.jpg" },
                { src: "../../../assets/images/background/6.jpg" }, { src: "../../../assets/images/background/7.jpg" }, { src: "../../../assets/images/background/8.jpg" }, { src: "../../../assets/images/background/9.jpg" }, { src: "../../../assets/images/background/10.jpg" }, { src: "../../../assets/images/background/11.jpg" }, { src: "../../../assets/images/background/11.jpg" }

                ]}
            />

        </div >
    );
};