import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Link from "next/link";
import { Col, Row } from "react-bootstrap";

export const LightboxGallery1 = () => {

	const [open, setOpen] = useState(false);
	return (
		<>
			<Row>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/1.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/2.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/3.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/4.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/5.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/6.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/7.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/8.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/9.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/10.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/11.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link href="#!" className="glightbox card border-0" data-gallery="gallery1">
						<img src="../../../assets/images/background/12.jpg" alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
			</Row>

			<Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
				maxZoomPixelRatio: 10,
				scrollToZoom: true
			}}
				slides={[{ src: "../../../assets/images/background/1.jpg" }, { src: "../../../assets/images/background/2.jpg" },
				{ src: "../../../assets/images/background/3.jpg" }, { src: "../../../assets/images/background/4.jpg" },
				{ src: "../../../assets/images/background/5.jpg" }, { src: "../../../assets/images/background/6.jpg" },
				{ src: "../../../assets/images/background/7.jpg" }, { src: "../../../assets/images/background/8.jpg" },
				{ src: "../../../assets/images/background/9.jpg" }, { src: "../../../assets/images/background/10.jpg" },
				{ src: "../../../assets/images/background/11.jpg" }, { src: "../../../assets/images/background/12.jpg" },]} />

		</>
	);
};
