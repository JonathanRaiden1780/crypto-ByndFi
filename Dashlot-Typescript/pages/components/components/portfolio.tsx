
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import { Gallerylist1, Gallerylist2, Gallerylist3, Gallerylist4 } from '../../../shared/data/components/portfoliodata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Portfolio = () => {
	return (

		<>
			<Seo title={"Portfolio"} />
			<PageheaderDB heading="Components" active="Portfolio" />

			<div className="main-container container-fluid">
				<Row>
					<Col xl={12}>
						<Card>
							<Card.Header>
								<Card.Title as="h4">Portfolio Styles</Card.Title>
							</Card.Header>
							<Card.Body>
								<div className="items-gallery">
									<div className="items-blog-tab text-center">
										<Tab.Container defaultActiveKey="first">

											<div className="items-blog-tab-heading">
												<Nav as="ul" variant="" className="nav items-blog-tab-menu" >
													<Nav.Item as="li">
														<Nav.Link className='m-0' eventKey="first" >All</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link className='m-0' eventKey="second">Business</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link className='m-0' eventKey="third">Beauty</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link className='m-0' eventKey="four">Real Estate</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link className='m-0' eventKey="five">Resturant</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<Tab.Content >
												<Tab.Pane className='p-0 border-0' eventKey="first">
													<Row>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/35.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/38.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/45.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Office &amp; Marketing</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/17.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Beauty &amp; Products</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Beauty &amp; House</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">conference room </h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/39.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/34.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' eventKey="second" id="tab-2">
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/45.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Marketing &amp; Food Truck</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 ">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Medical &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/35.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/28.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">27 December 2022.</p>
																		<h4 className="fw-500">Educaton</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' eventKey="third" >
													<Row>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/17.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Beauty & Spa</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Beauty & Spa</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' eventKey="four" >
													<Row>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/40.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Interior Furniture</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/38.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Interior Furniture</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/39.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Interior Furniture</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/42.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Interior Furniture</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' eventKey="five" id="tab-5">
													<Row>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/36.png" alt="img" className="img-fluid" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/35.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/34.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/33.png" alt="img" className="img-fluid " />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted">16 November 2022.</p>
																		<h4 className="fw-500">Food &amp; Bar Resturant</h4>
																		<p className="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Tab.Pane>
											</Tab.Content>
											<div className="text-center">
												<Link className="btn btn-primary" href="#!">View More</Link>
											</div>
										</Tab.Container>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col xl={12}>
						<Card>
							<Card.Header>
								<Card.Title as="h4">Left-side Portfolio</Card.Title>
							</Card.Header>
							<Card.Body>
								<Tab.Container defaultActiveKey="first">
									<div className="Portfolio-left">
										<div className="tab-menu-heading border-0">
											<div className="tabs-menu">
												<Nav variant="underline" className="nav panel-tabs">
													<Nav.Item> <Nav.Link eventKey="first" >All</Nav.Link> </Nav.Item>
													<Nav.Item> <Nav.Link eventKey="second">Classes</Nav.Link> </Nav.Item>
													<Nav.Item> <Nav.Link eventKey="third">Graphics</Nav.Link> </Nav.Item>
													<Nav.Item> <Nav.Link eventKey="fourth">News</Nav.Link> </Nav.Item>
												</Nav>
											</div>
										</div>
										<div className="tabs-menu-body border-0">
											<Tab.Content >
												<Tab.Pane className='p-0 border-0' id="tab1" eventKey="first">
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/29.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/39.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img">
																	<img src="../../../assets/images/media/44.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/28.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/36.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/43.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/32.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' id="tab2" eventKey="second">
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/28.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/32.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/43.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' id="tab3" eventKey="third">
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/38.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/44.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/28.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/18.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
												</Tab.Pane>
												<Tab.Pane className='p-0 border-0' id="tab4" eventKey="fourth">
													<div className='row'>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/36.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														<Col xl={3} lg={6} sm={6}>
															<Card className="box-shadow-0 overflow-hidden">
																<div className="item-card8-img  br-tr-7 br-tl-7">
																	<img src="../../../assets/images/media/32.png" alt="img" className="img-fluid w-100" />
																</div>
																<Card.Body>
																	<div className="item-card8-desc">
																		<p className="text-muted mb-2">16 November 2022.</p>
																		<h4 className="fw-500 mb-0">New Portfolio</h4>
																	</div>
																</Card.Body>
															</Card>
														</Col>
													</div>
												</Tab.Pane>
											</Tab.Content>
											<div className="text-center">
												<Link className="btn btn-primary" href="#!">View More</Link>
											</div>
										</div>
									</div>
								</Tab.Container>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<div>
					<Col xl={12}>
						<Card>
							<Card.Header>
								<Card.Title as="h4">Portfolio with Lightbox</Card.Title>
							</Card.Header>
							<Card.Body>
								<Tab.Container defaultActiveKey="first">
									<div className="items-gallery portfolio">
										<div className="items-blog-tab text-center">
											<div className="items-blog-tab-heading">
												<Nav as="ul" variant="pills" id="myTab-4" role="tablist" className="nav nav-pills mb-3">
													<Nav.Item as="li">
														<Nav.Link as="a" id="home-tab-4" className="w-100" data-bs-toggle="tab" href="#home4" role="tab" eventKey="first" >All</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link as="a" eventKey="second" className="w-100">Business</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link as="a" eventKey="third" className="w-100">Nature</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li">
														<Nav.Link as="a" eventKey="fourth" className="w-100">Real Estate</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<Tab.Content className="gallery box-shadow-0">
												<Tab.Pane className="p-0 border-0" id="tab-01" eventKey="first">
													<Gallerylist1 />
												</Tab.Pane>
												<Tab.Pane className="p-0 border-0" id="tab-02" eventKey="second">
													<Gallerylist2 />
												</Tab.Pane>
												<Tab.Pane className="p-0 border-0" id="tab-03" eventKey="third">
													<Gallerylist3 />
												</Tab.Pane>
												<Tab.Pane className="p-0 border-0" id="tab-04" eventKey="fourth">
													<Gallerylist4 />
												</Tab.Pane>
												<div className="text-center">
													<Link className="btn btn-primary" href="#!">View More</Link>
												</div>
											</Tab.Content>
										</div>
									</div>
								</Tab.Container>
							</Card.Body>
						</Card>
					</Col>
				</div>
			</div>
		</ >
	);
};
Portfolio.layout = "Contentlayout";
export default Portfolio;
