import { FC, useState } from 'react';
import { Button, Card, Col, Collapse, Dropdown, Form, InputGroup, Modal, Nav, Row, Tab } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import("react-select"), { ssr: false });import { Chartjspolar, Dash1, Dash2, Min2, Minichart3, Minichart4, StackedColumn, Trending, dashoptions, dashoptions2 } from '../../../shared/data/cryptocurrency/dashboarddata';
import SimpleBar from 'simplebar-react';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Link from 'next/link';
import Slider from 'react-slick';
import Seo from '@/shared/layout-components/seo/seo';


const Dashboard = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 800,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 410,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [fullExpanded1, setfullExpanded1] = useState(true);

	const fullHandleExpandClick1 = () => {
		setfullExpanded1(!fullExpanded1);
	};
	const [fullshow1, setfullshow1] = useState(true);
	const screendata1 = () => {
		document.querySelector(".card1")?.classList.toggle("card-fullscreen");
	};


	return (
		<>
			<Seo title={"Dashboard"} />
			<Pageheader title='Crypto Currency Dashboard' heading=" Crypto Currency" active="Dashboard" />

			<div className="main-container container-fluid">
				<Row>
					<Col xl={12} md={12} lg={12}>

						<Card>
							<Card.Body className='p-3'>
								<div className="js-conveyor-example">
									<ul className="news-crypto">
										<Slider {...settings}>
											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-warning-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">BTC / INR</p>
																<div className="m-0 fs-14 text-warning">$0.0215<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Waves.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">ADA / INR</p>
																<div className="m-0 fs-14 text-warning">$425.25<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>+12.85%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-info-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Dash.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">USD / INR</p>
																<div className="m-0 fs-14 text-warning">$2.786<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-02.25%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/EOS.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">EOS / INR</p>
																<div className="m-0 fs-14 text-warning">$15.425<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-purple-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">ETH / INR</p>
																<div className="m-0 fs-14 text-warning">$5.125<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-11.85%%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-info-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Euro.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">EUR / INR</p>
																<div className="m-0 fs-14 text-warning">$135.425<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-primary-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Decred.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">ETH / USDT</p>
																<div className="m-0 fs-14 text-warning">$34.625<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-0.32%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-success-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/IOTA.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">IOTA / USD</p>
																<div className="m-0 fs-14 text-warning">$67.325<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">LTC / USD</p>
																<div className="m-0 fs-14 text-warning">$7.525<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-1.42%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-orange-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">XMR / EUR</p>
																<div className="m-0 fs-14 text-warning">$4.325<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-success-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/NEM.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">ETH / USDT</p>
																<div className="m-0 fs-14 text-warning">$5.525<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-1.32%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Neo.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">NEO / USD</p>
																<div className="m-0 fs-14 text-warning">$6.025<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-pink-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Augur.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">REP / USD</p>
																<div className="m-0 fs-14 text-warning">0.0215<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-0.45%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/raiblocks.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">XRB / INR</p>
																<div className="m-0 fs-14 text-warning">$0.125<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-info-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/Ripple.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">XRB / USDT</p>
																<div className="m-0 fs-14 text-warning">$131.89<span className="text-danger ms-2"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-danger-transparent rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/stellar.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">XLM / INR</p>
																<div className="m-0 fs-14 text-warning">0.0215<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-0.78%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>

											<li>
												<div>
													<Row>
														<div className="d-flex align-items-center">
															<div className="avatar avatar-m bg-light rounded-circle">
																<img src="../../../assets/images/crypto-currencies/regular/tron.svg" className="w-4 h-4" alt="" />
															</div>
															<div className="ms-3">
																<p className="mb-1 fs-12 lh-1">TRX / USD</p>
																<div className="m-0 fs-14 text-warning">$1.125<span className="text-success ms-2"><i className="ion-arrow-up-c me-1"></i>-0.65%</span></div>
															</div>
														</div>
													</Row>
												</div>
											</li>
										</Slider>
									</ul>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col sm={6} xxl={3}>
						<Card className="overflow-hidden">
							<Card.Header className="d-flex">
								<div>
									<h6 className="fs-13 mb-2 text-primary"><img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" className="w-5 h-5 me-2 border p-1 rounded-circle" alt="img" />BTC / USD</h6>
									<h3 className="mb-0">$8,459</h3>
								</div>
								<div className="ms-auto text-end">
									<h6 className=" mb-3 badge badge-success-light"><i className="bi bi-caret-up-fill me-1"></i>$0.04</h6>
									<p className=" mb-0 text-success fs-12"><span className="text-muted">Vol:</span>(-1.33%)</p>
								</div>
							</Card.Header>
							<Card.Body className="px-0 border-top-0 mt-5">
								<div className="chart-wrapper crypto-chart">
									<Chartjspolar />
								</div>
							</Card.Body>
							<div className="chart-data">
								<div className=" d-flex  mt-15">
									<div className="text-start ps-3">
										<p className="no-margin">Bitcoin<span className="text-gray mx-2">BTC</span> <span className="text-info">$0.04</span></p>
									</div>
									<div className="text-end ms-auto pe-3">
										<p className="no-margin"><span className="text-danger">-1.33%</span></p>
									</div>
								</div>
							</div>
						</Card>
					</Col>
					<Col sm={6} xxl={3}>
						<Card className="overflow-hidden">
							<Card.Header className="d-flex">
								<div>
									<h6 className="fs-13 mb-2 text-primary"><img src="../../../assets/images/crypto-currencies/regular/Ripple.svg" className="w-5 h-5 me-2 border p-1 rounded-circle" alt="img" />XRP / USD</h6>
									<h3 className="mb-0">$7,349</h3>
								</div>
								<div className="ms-auto text-end">
									<h6 className=" mb-3 badge bg-danger-transparent"><i className="bi bi-caret-down-fill me-1"></i>$0.14</h6>
									<p className=" mb-0 text-success fs-12"><span className="text-muted">Vol:</span>(-1.42%)</p>
								</div>
							</Card.Header>
							<Card.Body className="px-0 border-top-0 mt-5">
								<div className="chart-wrapper crypto-chart">
									<Min2 />
								</div>
							</Card.Body>
							<div className="chart-data">
								<div className=" d-flex  mt-15">
									<div className="text-start ps-3">
										<p className="no-margin">Ripple<span className="text-gray mx-2">XRP</span> <span className="text-info">$1.32</span></p>
									</div>
									<div className="text-end ms-auto pe-3">
										<p className="no-margin"><span className="text-danger">+2.39%</span></p>
									</div>
								</div>
							</div>
						</Card>
					</Col>
					<Col sm={6} xxl={3}>
						<Card className="overflow-hidden">
							<Card.Header className="d-flex">
								<div>
									<h6 className="fs-13 mb-2 text-primary"><img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" className="w-5 h-5 me-2 border p-1 rounded-circle" alt="img" />ETH / USD</h6>
									<h3 className="mb-0">$5,563</h3>
								</div>
								<div className="ms-auto text-end">
									<h6 className=" mb-3 badge bg-success-transparent"><i className="bi bi-caret-up-fill me-1"></i>$0.12</h6>
									<p className=" mb-0 text-success fs-12"><span className="text-muted">Vol:</span>(-1.33%)</p>
								</div>
							</Card.Header>
							<Card.Body className="px-0 border-top-0 mt-5">
								<div className="chart-wrapper crypto-chart">
									<Minichart3 />
								</div>
							</Card.Body>
							<div className="chart-data">
								<div className=" d-flex  mt-15">
									<div className="text-start ps-3">
										<p className="no-margin">Ethereum<span className="text-gray mx-2">ETH</span> <span className="text-info">$0.12%</span></p>
									</div>
									<div className="text-end ms-auto pe-3">
										<p className="mb-0"><span className="text-danger">+5.35%</span></p>
									</div>
								</div>
							</div>
						</Card>
					</Col>
					<Col sm={6} xxl={3}>
						<Card className="overflow-hidden">
							<Card.Header className="d-flex">
								<div>
									<h6 className="fs-13 mb-2 text-primary"><img src="../../../assets/images/crypto-currencies/regular/Dash.svg" className="w-5 h-5 me-2 border p-1 rounded-circle" alt="img" />DASH / USD</h6>
									<h3 className="mb-0">$2,546</h3>
								</div>
								<div className="ms-auto text-end">
									<h6 className=" mb-3 badge bg-danger-transparent"><i className="bi bi-caret-down-fill me-1"></i>$0.32</h6>
									<p className=" mb-0 text-success fs-12"><span className="text-muted">Vol:</span>(-2.14%)</p>
								</div>
							</Card.Header>
							<Card.Body className="px-0 border-top-0 mt-5">
								<div className="chart-wrapper crypto-chart">
									<Minichart4 />
								</div>
							</Card.Body>
							<div className="chart-data">
								<div className=" d-flex  mt-15">
									<div className="text-start ps-3">
										<p className="no-margin">DASH<span className="text-gray mx-2">ETH</span> <span className="text-info">$0.34</span></p>
									</div>
									<div className="text-end ms-auto pe-3">
										<p className="no-margin"><span className="text-danger">-2.57%</span></p>
									</div>
								</div>
							</div>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col md={12} lg={12} xl={4}>
						<Card className="custom-card">
							<Card.Header>
								<div>
									<div className="mb-1">Wallet Value<span className="fs-10 badge bg-success-transparent text-success p-1 ms-2"><i className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
									<div className="fs-20 fw-500">$132,12933.000</div>
									<small className="text-muted fw-500">12 BTC</small>
								</div>
								<div className="ms-auto">
									<span className="avatar avatar-xxl">
										<img className="buy-sell-image" src="../../../assets/images/media/124.png" alt="" />
									</span>
								</div>
							</Card.Header>
							<Card.Body>
								<Tab.Container id="left-tabs-example" defaultActiveKey="first">
									<Nav className="nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
										<Nav.Item>
											<Nav.Link eventKey="first">Buy</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second">Sell</Nav.Link>
										</Nav.Item>
									</Nav>
									<Tab.Content className="tab-content">
										<Tab.Pane className="tab-pane border-0  p-0" id="buy-crypto" role="tabpanel" aria-labelledby="buy-crypto" eventKey="first">
											<InputGroup className=" mb-3 flex-nowrap">
												<Form.Control type="text" className=" crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
												<Select
													options={Dash1}
													placeholder='BTC'
													className="crypto-buy-sell-input" classNamePrefix='Select2'
												/>
											</InputGroup>
											<InputGroup className=" mb-3 flex-nowrap">
												<Form.Control type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
												<Select
													options={Dash2}
													placeholder='USD'
													className="crypto-buy-sell-input" classNamePrefix='Select2'
												/>
											</InputGroup>
											<div>
												<div className="fs-14 py-2"><span className="fw-500">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="fw-500 float-end">BTC</span></div>
												<div className="fs-14 py-2"><span className="fw-500">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="fw-500 float-end">LTC</span></div>
												<div className="fw-500 fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
												<div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
												<label className="fw-500 fs-12 my-2">SELECT PAYMENT METHOD :</label>
												<div className="row g-2">
													<Col xl={6}>
														<div className="p-2 border rounded">
															<div className="form-check mb-0">
																<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
																<label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
																	Credit / Debit Cards
																</label>
															</div>
														</div>
													</Col>
													<Col xl={6}>
														<div className="p-2 border rounded">
															<div className="form-check mb-0">
																<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
																<label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
																	Paypal
																</label>
															</div>
														</div>
													</Col>
												</div>
											</div>
											<div className="d-grid mt-2 pt-2">
												<button className="btn btn-primary">BUY</button>
											</div>
										</Tab.Pane>
										<Tab.Pane className="" id="sell-crypto" role="tabpanel" aria-labelledby="sell-crypto" eventKey="second">
											<InputGroup className=" mb-3 flex-nowrap">
												<Form.Control type="text" className="crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
												<Select
													options={Dash1}
													placeholder='ETH'
													className="crypto-buy-sell-input"
													classNamePrefix="Select2"
												/>
											</InputGroup>
											<InputGroup className=" mb-3 flex-nowrap">
												<Form.Control type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
												<Select
													options={Dash2}
													placeholder='USD'
													className="crypto-buy-sell-input"
													classNamePrefix="Select2"
												/>
											</InputGroup>
											<div>
												<div className="fs-14 py-2"><span className="fw-500">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span><span className="text-dark fw-500 float-end">BTC</span></div>
												<div className="fs-14 py-2"><span className="fw-500">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span><span className="text-dark fw-500 float-end">LTC</span></div>
												<div className="fw-500 fs-14 py-2">Total: <span className="fs-14">22.00 BTC</span></div>
												<div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
												<label className="fw-500 fs-12 my-2">SELECT PAYMENT METHOD :</label>
												<div className="row g-2">
													<Col xl={6}>
														<div className="p-2 border rounded">
															<div className="form-check mb-0">
																<Form.Check className="" type="radio" name="sellcrypto" id="sellcrypto1" />
																<label className="form-check-label fs-12" htmlFor="sellcrypto1">
																	Credit / Debit Cards
																</label>
															</div>
														</div>
													</Col>
													<Col xl={6}>
														<div className="p-2 border rounded">
															<div className="form-check mb-0">
																<Form.Check className="" type="radio" name="sellcrypto" id="sellcrypto2" defaultChecked />
																<label className="form-check-label fs-12" htmlFor="sellcrypto2">
																	Paypal
																</label>
															</div>
														</div>
													</Col>
												</div>
											</div>
											<div className="d-grid mt-2 pt-2">
												<Button variant='danger'>SELL</Button>
											</div>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</Card.Body>
						</Card>
					</Col>
					<Col md={12} lg={6} xl={4}>
						<Card className="custom-card">
							<Card.Header className="justify-content-between">
								<Card.Title as="h3">Recent Transactions</Card.Title>
								<div className="dropdown ms-auto d-inline-flex">
									<Button onClick={handleShow} variant='' className="btn btn-outline-default me-1 text-default btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className="bi bi-search"></i></Button>

									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title className='mb-0 h6'>Crypto Currencies</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Name</Form.Label>
													<Form.Control
														type="email"
														autoFocus
													/>
												</Form.Group>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
													<Form.Label>Value</Form.Label>
													<Form.Control
														type="number"
													/>

												</Form.Group>
											</Form>
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
											<Button variant="primary">
												Add
											</Button>
										</Modal.Footer>
									</Modal>

									<Dropdown>
										<Dropdown.Toggle variant="light" className="btn btn-outline-default btn-sm fw-500 text-primary d-flex align-items-center dropdown-toggle"
											id="dropdownMenuButton1" data-bs-toggle="dropdown"
											aria-expanded="false" >
											<i className="bi bi-calendar-date fw-500 mx-1"></i>
											Last 5 Days
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Last Week</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</Card.Header>
							<Card.Body className="px-0 recent-transactions">
								<ul className="list-unstyled mb-0 px-3 overflow-scroll" id='recent-transaction'>
									<SimpleBar>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Bitcoin</p>
															<p className="mb-0 fs-11 text-success fw-500">Sell</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															+$19,123.02
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															BTC 0.0823.45
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Etherium</p>
															<p className="mb-0 fs-11 text-primary fw-500">Buy</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															-$1,430.92
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															ETH 10,783.23
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Dash</p>
															<p className="mb-0 fs-11 text-success fw-500">Sell</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															+$5,236.53
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															DASH 12,456.98
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Bytecoin</p>
															<p className="mb-0 fs-11 text-primary fw-500">Buy</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															-$1,810.93
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															BYTE 8,154.00
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Golem</p>
															<p className="mb-0 fs-11 text-success fw-500">Sell</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															+$5,046.34
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															GOLEM 9,384.73
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Siacoin.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">SiaCoin</p>
															<p className="mb-0 fs-11 text-success fw-500">Sell</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															+$2,625.50
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															SIA 3,151.09
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-sm">
																<img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
															</span>
														</div>
														<div>
															<p className="mb-0 fw-500">Monero</p>
															<p className="mb-0 fs-11 text-success fw-500">Sell</p>
														</div>
													</div>
													<div className="text-end">
														<p className="mb-0 fw-500">
															+$1,256.24
														</p>
														<p className="mb-0 op-7 text-muted fs-11">
															XMR 2,799.06
														</p>
													</div>
												</div>
											</Link>
										</li>
									</SimpleBar>
								</ul>
							</Card.Body>
						</Card>
						<Card>
							<div className="card-header d-flex justify-content-between">
								<Card.Title as="h6">Exchange Rate</Card.Title>
								<Dropdown className='no-carat'>
									<Dropdown.Toggle variant="light" id="dropdown-basic" className='no-carat'>
										Market
										<i className=" align-middle"></i>
									</Dropdown.Toggle>

									<Dropdown.Menu align="end" as='ul' className="dropdown-menu dropdown-menu-end">
										<Dropdown.Item href="#/action-1">Today</Dropdown.Item>
										<Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Last Week</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<Card.Body>
								<Form.Group className="mb-2">
									<Form.Label className="form-label fs-14">Choose Currency</Form.Label>
									<Select options={dashoptions} classNamePrefix='Select2' placeholder="Bitcoin" />

								</Form.Group>
								<div className="text-center">
									<Link href="#!" className="btn btn-success-transparent mt-1 mb-1"><i className="fa fa-exchange"></i></Link>
								</div>
								<Form.Group>
									<Form.Label className="form-label fs-14">Choose Currency</Form.Label>
									<Select options={dashoptions2} classNamePrefix='Select2' placeholder="Bitcoin" />

								</Form.Group>
								<button className="btn btn-success btn-block mt-4" type="submit">Transfer Now</button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={12} lg={6} xl={4}>
						<Card>
							<Card.Header>
								<Card.Title as="h6">BTC Trending</Card.Title>
							</Card.Header>
							<Card.Body>
								<div id="btc-trading">
									<Trending />
								</div>
								<Row>
									<div className="col-xl-4 col-sm-12 col-md-4 col-lg-4">
										<div><span>BTC Sell</span></div><span className="h6 mb-0"><span className="dot-label bg-primary h-2 w-2 rounded-circle me-2"></span>0.435000</span>
									</div>
									<div className="col-xl-4 col-sm-12 col-md-4 col-lg-4 mt-4 mt-xl-0">
										<div><span>BTC Buy</span></div><span className="h6 mb-0"><span className="dot-label bg-secondary h-2 w-2 rounded-circle me-2"></span>3.028400</span>
									</div>
									<div className="col-xl-4 col-sm-12 col-md-4 col-lg-4 mt-4 mt-xl-0">
										<div><span>Exchanges</span></div><span className="h6 mb-0"><span className="dot-label bg-success h-2 w-2"></span>+35%</span>
									</div>
								</Row>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Row>
									<div className="col-8">
										<h6 className="card-title mb-5">Your Current Balance</h6>
										<h2 className="mt-3 mb-2 text-primary">$32745.00</h2>
										<p className="text-muted"><span> Yearly profit</span></p>
										<div className="btn-list">
											<Link href="#!" className="btn btn-primary"><i className="bi bi-currency-dollar me-2"></i>Quick Invest</Link>
											<Link href="#!" className="btn btn-light"><i className="bi bi-eye me-2"></i>Show Report</Link>
										</div>
									</div>
									<div className="col-4 my-auto mt-auto">
										<img src="../../../assets/images/svg/wallet.svg" alt="image" className="w-100" />
									</div>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col md={12} lg={12} xl={8}>
						{fullshow1 ?
							<Card className='card1'>
								<Card.Header>
									<Card.Title as="h6">Bitcoin / USD Rate</Card.Title>
									<div className="card-options ms-auto">
										<Link href="#!" onClick={() => fullHandleExpandClick1()} className="card-options-collapse me-2"
											data-bs-toggle="card-collapse"><i className={`fe ${fullExpanded1 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
										<Link href="#!" className="card-options-fullscreen me-2"
											data-bs-toggle="card-fullscreen"><i className="fe fe-maximize" onClick={() => screendata1()}></i></Link>
										<Link href="#!" onClick={() => setfullshow1(false)} className="card-options-remove"
											data-bs-toggle="card-remove"><i className="fe fe-x"></i></Link>
									</div>
								</Card.Header>
								<Collapse in={fullExpanded1} timeout={3000}>

									<Card.Body className=" p-0">
										<div className="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
											<div className="me-3">
												<span className="avatar avatar-md br-4 p-2 bg-light">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#f89f36" d="M109.8 75.7c-.8-5.7-3.6-10.1-8.6-13-2.3-1.3-4.8-2.2-7.4-3.3.3-.2.5-.4.7-.5 12.5-6.4 11.4-25.7 2.3-32.3-3.7-2.7-7.8-4.4-12.1-5.4-3.1-.7-6.2-1.2-9.4-1.7 0-5.6.1-13.3.1-19.5H63.7c-.1 6.1-.1 13.6-.2 19.1h-9.4c0-5.5.1-13 .1-19.1H42.6c-.1 6.2-.1 13.9-.2 19.4-8-.1-15.7-.1-23.7-.2 0 4.3-.1 8.3-.1 12.5 1.7 0 3.2 0 4.6.1 1.5 0 3 0 4.4.1 4.1.3 6.2 2.6 6.2 6.6-.2 16.7-.4 33.5-.5 50.2 0 3.7-1.6 5.1-5.2 5.1h-7.8c-.8 4.7-1.6 9.2-2.4 13.9 7.9.1 15.7.2 23.7.3 0 6-.1 13.6-.1 19.9h11.7c.1-6.3.1-13.7.2-19.6 3.3.1 6.3.2 9.4.3 0 6-.1 13.3-.1 19.4h11.7c.1-6.3.1-13.7.2-19.5.4-.1.7-.1 1-.2 5.6-.9 11.3-1.4 16.7-2.7 7.1-1.8 12.7-5.9 15.7-12.9 2.1-5.4 2.6-11.1 1.8-17zM54.3 32.9c7.3 0 14.4-.6 21 2.4 4.4 1.9 6.6 5.5 6.3 9.8-.3 4.6-2.9 7.9-7.6 9.4-6.4 2.1-13.1 2-20 1.7.1-7.6.2-15.2.3-23.3zm25.5 58.4c-6.5 2.9-13.3 2.9-20.2 3-1.9 0-3.8-.1-5.9-.1l.3-25.9c8.9 0 17.7-.7 26 3 4.3 1.9 6.8 5.2 6.8 10.1-.1 4.9-2.7 8-7 9.9z" /></svg>
												</span>
											</div>
											<div className="d-flex flex-wrap justify-content-sm-evenly flex-fill">
												<div className="m-sm-0 m-2">
													<span>Symbol</span>
													<p className="fw-500 mb-0">BTC</p>
												</div>
												<div className="m-sm-0 m-2">
													<span>Price Benchmark</span>
													<p className="fw-500 mb-0">128.00%</p>
												</div>
												<div className="m-sm-0 m-2">
													<span>Price (USD)</span>
													<p className="text-success fe-semibold mb-0">$4,253.49</p>
												</div>
												<div className="m-sm-0 m-2">
													<span>Change (24H)</span>
													<p className="text-danger fw-500 mb-0">-0.24%</p>
												</div>
												<div className="m-sm-0 m-2">
													<span>Market Cap</span>
													<p className="fw-500 mb-0">$179.12B</p>
												</div>
											</div>
										</div>

										<div className="px-3 pb-0">
											<div id="crypto">
												<StackedColumn />
											</div>
										</div>

									</Card.Body>
								</Collapse>
							</Card> : null}
					</Col>
					<Col lg={12} sm={12} xl={4} md={12}>
						<Card className="custom-card">
							<Card.Header className="justify-content-between">
								<Card.Title as="h6">
									Top Traders
								</Card.Title>
								<Dropdown>
									<Dropdown.Toggle variant="" id="dropdown-basic" className='no-caret  border-0 '>
										<Link href="#!" className="p-2 fs-12 text-muted  border-0 " data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="bi bi-caret-down align-middle ms-1 d-inline-block"></i>
										</Link>
									</Dropdown.Toggle>

									<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
										<Dropdown.Item href="#/action-1">Today</Dropdown.Item>
										<Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Card.Header>
							<Card.Body>
								<ul className="list-unstyled top-traders">
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/11.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Json Taylor</p>
													<p className="mb-0 text-muted fs-12">Bought 0.008213 Bitcoin using ****9808</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													0.09251821409 <span className="text-default">- BTC</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$1,203.92
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/4.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Alicia Smith</p>
													<p className="mb-0 text-muted fs-12">Sold - 0.7902400 Litecoin</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													0.2362333001 <span className="text-default">- LTC</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$19,092.56
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/15.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Branco Eliga</p>
													<p className="mb-0 text-muted fs-12">Bought +12.9092 Euro coin</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													0.009823487 <span className="text-default">- EUROC</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$8,977.46
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/12.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Alec Carey</p>
													<p className="mb-0 text-muted fs-12">Bought 32.09472944 Dash using wallet</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													8.88234590 <span className="text-default">- DASH</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$9,772.46
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/5.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Sia Linda</p>
													<p className="mb-0 text-muted fs-12">Sent 0.00662 Bitcoin to Ravos Chan</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													58.6225600 <span className="text-default">- BTC</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$9,772.46
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span>
														<img src="../../../assets/images/users/10.jpg" alt="" className="avatar avatar-md rounded-circle p-2 bg-light" />
													</span>
												</div>
												<div>
													<p className="mb-0 fw-500">Ryan Ranolds</p>
													<p className="mb-0 text-muted fs-12">Bought 2.098123 Etherium</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 fw-500 text-success">
													190.0092773 <span className="text-default">- ETH</span>
												</p>
												<p className="mb-0 op-7 text-muted fs-11">
													$18,283982.00
												</p>
											</div>
										</div>
									</li>
								</ul>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md={12} lg={12} xl={12}>
						<Card>
							<Card.Header className="d-block d-sm-flex justify-content-between">
								<Card.Title as="h6">Market Value</Card.Title>
								<div className="btn-group mt-1 mt-sm-0" role="group" aria-label="Basic example">
									<Button variant='' className="btn-primary btn-sm">1D</Button>
									<Button variant='' className="btn-primary-light btn-sm">1W</Button>
									<Button variant='' className="btn-primary-light btn-sm">1M</Button>
									<Button variant='' className="btn-primary-light btn-sm">3M</Button>
									<Button variant='' className="btn-primary-light btn-sm">6M</Button>
									<Button variant='' className="btn-primary-light btn-sm">1Y</Button>
								</div>
							</Card.Header>
							<Card.Body>
								<div className="table-responsive">
									<table className="table table-hover text-nowrap table-bordered market-value">
										<thead>
											<tr>
												<th scope="col">S.No</th>
												<th scope="col">Name</th>
												<th scope="col">Symbol</th>
												<th scope="col">Price</th>
												<th scope="col">Market Cap</th>
												<th scope="col">Status</th>
												<th scope="col">Volume</th>
												<th scope="col">Price Change</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Bitcoin</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - BTC
													</div>
												</td>
												<td>
													$16,839.10
												</td>
												<td>
													324.01B
												</td>
												<td>
													<span className="badge badge-danger-light">Cancel</span>
												</td>
												<td>
													14,674,311,168
												</td>
												<td>
													<span className="text-success">0.36%<i className="ti ti-arrow-big-up-lines ms-1"></i></span>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Etherium</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - ETH
													</div>
												</td>
												<td>
													1,217.96
												</td>
												<td>
													$149,316,232,699
												</td>
												<td>
													<span className="badge badge-success-light">Delivery</span>
												</td>
												<td>
													$4,758,554,801
												</td>
												<td>
													<span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
												</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Dash</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - DASH
													</div>
												</td>
												<td>
													$43.49
												</td>
												<td>
													$480,799,847
												</td>
												<td>
													<span className="badge badge-success-light">Delivery</span>
												</td>
												<td>
													$52,626,563
												</td>
												<td>
													<span className="text-success">0.45% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
												</td>
											</tr>
											<tr>
												<td>4</td>
												<td>Ripple</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/Ripple.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - XRP
													</div>
												</td>
												<td>
													$0.3531
												</td>
												<td>
													$17,791,969,465
												</td>
												<td>
													<span className="badge badge-warning-light">Hold</span>
												</td>
												<td>
													$511,598,941
												</td>
												<td>
													<span className="text-success">0.97% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
												</td>
											</tr>
											<tr>
												<td>5</td>
												<td>Iota</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/IOTA.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - IOTA
													</div>
												</td>
												<td>
													$0.169741
												</td>
												<td>
													$471,800,600
												</td>
												<td>
													<span className="badge badge-danger-light">Cancel</span>
												</td>
												<td>
													$5,524,385
												</td>
												<td>
													<span className="text-success">0.93% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
												</td>
											</tr>
											<tr>
												<td>6</td>
												<td>Neo</td>
												<td>
													<div className="lh-1 d-flex align-items-center">
														<span>
															<img src="../../../assets/images/crypto-currencies/regular/Euro.svg" alt="" className="w-5 h-5 me-2 border p-1 rounded-circle" />
														</span> - NEO
													</div>
												</td>
												<td>
													$6.43
												</td>
												<td>
													$453,601,667
												</td>
												<td>
													<span className="badge badge-success-light">Delivery</span>
												</td>
												<td>
													$12,904,320
												</td>
												<td>
													<span className="text-danger">0.49% <i className="ti ti-arrow-big-down-lines ms-1"></i></span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};
Dashboard.layout = "Contentlayout";
export default Dashboard;
