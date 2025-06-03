import { useState } from 'react';
import { Card, Col, Modal, Row } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Videos = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);
	return (

		<>
			<Seo title={"Videos"} />
			<PageheaderDB heading="Components" active="Videos" />
			<div className="main-container container-fluid">
				<Row>
					<Col xxl={6}>
						<Card>
							<Card.Header>
								<Card.Title as="h4">Popup Youtube & Vimeo Videos</Card.Title>
							</Card.Header>
							<Card.Body>
								<Row>
									<Col lg={6} md={12}>
										<div className="video-image">
											<Link href="/components/components/videos/" data-bs-toggle="modal" onClick={handleShow}
												data-bs-target="#youtubeVideo"><i className="mdi mdi-arrow-right-drop-circle-outline" aria-hidden="true"></i></Link>
											<img src="../../../assets/images/background/12.jpg" alt="img" className="img-fluid w-100" />
										</div>
									</Col>
									<Col lg={6} md={12}>
										<div className="video-image mt-5 mt-lg-0">
											<Link href="/components/components/videos/" data-bs-toggle="modal" onClick={handleShow1}
												data-bs-target="#vimeoVideo"><i className="mdi mdi-arrow-right-drop-circle-outline" aria-hidden="true"></i></Link>
											<img src="../../../assets/images/background/17.jpg" alt="img" className="img-fluid w-100" />
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col xxl={6}>
						<Card>
							<Card.Header>
								<Card.Title as="h4">Inline Youtube & Vimeo Videos</Card.Title>
							</Card.Header>
							<Card.Body>
								<Row>
									<Col lg={6} md={12}>
										<div className="embed-responsive embed-responsive-item embed-responsive-16by9">
											<iframe className="img-thumbnail w-100 h-320" src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"></iframe>
										</div>
									</Col>
									<div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
										<div className="embed-responsive embed-responsive-item embed-responsive-16by9">
											<iframe className="img-thumbnail w-100 h-320" src="https://player.vimeo.com/video/161246158?color=ff9933&title=0&autoplay"></iframe>
										</div>
									</div>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<Modal className="modal fade" id="youtubeVideo" tabIndex={-1} role="dialog" aria-label="myModalLabel" show={show} onHide={handleClose}>
				<div className="card mb-0 border-0">
					<Modal.Header closeButton className="modal-header card-header justify-content-end">
					</Modal.Header>
					<div className="modal-content border-0">
						<div className="embed-responsive embed-responsive-16by9">
							<video id="gossVideo" className="embed-responsive-item" preload="auto" autoPlay loop muted>
								<source src="../../../assets/video/youtube.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</Modal>

			<Modal backdrop={true} className="" id="vimeoVideo" tabIndex={-1} role="dialog" aria-label="myModalLabel" show={show1} onHide={handleClose1}>
				<div className="modal-content border-0">
					<div className="embed-responsive embed-responsive-16by9">
						<video className="embed-responsive-item" controls>
							<source src="../../../assets//video/vimeo.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</Modal>
		</>
	);
};
Videos.layout = "Contentlayout";
export default Videos;
