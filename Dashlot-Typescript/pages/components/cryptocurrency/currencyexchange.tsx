
import { Card, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Cedata, Ceoptions, Ceoptions2 } from '../../../shared/data/cryptocurrency/cedata';
import Slider from "react-slick";
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const CurrencyExchange = () => {
   const settings = {
      // className: "slider variable-width",
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (

      <>
         <Seo title={"Currency-Exchangee"} />
         <Pageheader title='Crypto Currency- Currency Exchange' heading="Crypto Currency" active="Currency Exchangee" />
         <div className="main-container container-fluid">

            <Row>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <Slider {...settings} className='currencyexchange'>
                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Bitcoin.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Bitcoin</h5>
                                          <small className="ms-auto fs-15 mb-0">$8456.87</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$267.87</span>
                                          <small className="text-danger ms-auto">- 9.05%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>

                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Ethereum.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Ethereum</h5>
                                          <small className="ms-auto fs-15 mb-0">$10,2450</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$145.23</span>
                                          <small className="text-danger ms-auto">+ 2.04%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Ripple.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Ripple</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,1670</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$138.25</span>
                                          <small className="text-danger ms-auto">+ 1.05%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Monero.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Monero</h5>
                                          <small className="ms-auto fs-15 mb-0">$15,8370</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$136.12</span>
                                          <small className="text-danger ms-auto">+ 3.25%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Dash.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Dash</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,3650</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$146.23</span>
                                          <small className="text-danger ms-auto">+ 1.12%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </div>

                           <div className="item">
                              <Card className="mb-0">
                                 <Card.Body className="p-3 d-flex">
                                    <img className="w-6 h-6 mt-1 me-3" src="../../../assets/images/crypto-currencies/round-outline/Litecoin.svg" alt="image" />
                                    <div className="wrapper w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Litecoin</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,5817</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="bi bi-caret-up-fill me-1"></i>$247.92</span>
                                          <small className="text-danger ms-auto">+ 2.05%<i className="bi bi-caret-down-fill ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </div>
                        </Slider>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="cover-image pt-7 bg-background-51 card pb-7 border-0" data-image-src="../assets/images/banners/banner5.jpg">
                     <div className="header-text mb-0">
                        <div className="container">
                           <div className="text-center text-fixed-white background-text">
                              <h2 className="mb-2 display6">Buy and sell Coins at the Dashlot without additional fees</h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                           </div>
                           <Row>
                              <Col xl={11} lg={12} md={12} className="d-block mx-auto">
                                 <div className="item-search-tabs mb-4 background-text">
                                    <div className="buy-sell">
                                       <div className="form row mx-auto justify-content-center d-flex">
                                          <Form.Group className="col-xl-3 col-lg-3 col-md-12 mb-lg-0 mb-2">
                                             <Form.Control type="text" className="form-control" id="text7" placeholder="13.2458" autoComplete="off" />
                                          </Form.Group>
                                          <Form.Group className="col-xl-2 col-lg-2  col-md-12 mb-0">
                                             <Select options={Ceoptions} id="" placeholder="BTC" classNamePrefix='Select2' />
                                          </Form.Group>
                                          <Col xl={2} lg={2} md={12} className="text-center">
                                             <i className="ti ti-arrows-right-left fs-16 inline-block mt-0 mt-lg-3 mb-md-2 mt-md-1 text-fixed-white"></i>
                                          </Col>
                                          <Form.Group className="col-xl-3 col-lg-3 col-md-12 mb-2 mb-lg-0">
                                             <input type="text" className="form-control" id="text6" placeholder="02.24" autoComplete="off" />
                                          </Form.Group>
                                          <Form.Group className="col-xl-2 col-lg-2 col-md-12 mb-0">
                                             <Select options={Ceoptions2} name="country" classNamePrefix='Select2' placeholder="BTC" />
                                          </Form.Group>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="text-center background-text">
                                    <Link href="#!" className="btn btn-secondary btn-lg">Exchange Now</Link>
                                 </div>
                              </Col>
                           </Row>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>

            <Row>
               {Cedata.map((idx) => (
                  <Col xl={3} md={12} lg={6} key={idx.id}>
                     <Card>
                        <Card.Body className="p-4">
                           <div className="d-flex">
                              <div>
                                 <p className=" mb-2 "><img src={idx.src} className="w-5 h-5 me-2" alt="img" />{idx.name}</p>
                              </div>
                              <div className="ms-auto">
                                 <p className={`mb-1 fs-15 text-${idx.sclr}`}><i className="ion-arrow-up-c me-1"></i>{idx.stock}</p>
                              </div>
                           </div>
                           <div className="d-flex mt-1 mb-1">
                              <div>
                                 <p className=" mb-0">{idx.name2}</p>
                                 <h3 className="mb-1">{idx.dollar}</h3>
                              </div>
                              <div className="ms-auto text-end">
                                 <p className=" mb-0">{idx.dollar2}</p>
                                 <p className=" mb-0 text-muted"><span className="text-muted">Vol:</span>{idx.vol}</p>
                              </div>
                           </div>
                           <div className=" h-1 mt-3 mb-2">
                              <ProgressBar className=" h-1 mt-3 mb-2" now={idx.progress} variant={idx.pcolor} />
                           </div>
                           <small className="mb-0 text-muted">Weekly<span className="float-end text-muted">{idx.percentage}</span></small>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </div>
      </>
   );
};
CurrencyExchange.layout = "Contentlayout";

export default CurrencyExchange;
