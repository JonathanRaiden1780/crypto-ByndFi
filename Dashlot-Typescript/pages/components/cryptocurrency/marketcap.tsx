
import { Card, Col, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import { Bitcoinchart, mkdata1, mkdata2, mkdata3, mkdata4 } from '../../../shared/data/cryptocurrency/marketdata';
import Slider from "react-slick";
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';

const Marketcap = () => {

   const settings = {
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
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (

      <>
         <Seo title={"Market-Cap"} />
         <Pageheader title='Crypto Currency - Market Cap' heading="Crypto Currency" active="Market Cap" />

         <div className="main-container container-fluid">

            <Row>
               <Col md={12}>
                  <Card>
                     <Card.Body className='marketcap-slide'>
                        <Slider {...settings}>
                           <div className="item me-2">
                              <Card className="mb-0">
                                 <h3 className="mb-0" >
                                    <Card.Body className="p-3 d-flex">
                                       <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Bitcoin.svg" alt="image" />
                                       <div className="wrapper flex-grow-1">
                                          <div className="d-flex justify-content-between align-items-center">
                                             <h5 className="mt-1 mb-1 fw-500">Bitcoin</h5>
                                             <small className="ms-auto fs-15 mb-0">$8456.87</small>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                             <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$267.87</span>
                                             <small className="text-danger ms-auto fs-13">- 9.05%<i className="fa fa-caret-down ms-1"></i></small>
                                          </div>
                                       </div>
                                    </Card.Body>
                                 </h3>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <h3 className="mb-0" >
                                    <Card.Body className="p-3 d-flex">
                                       <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Ethereum.svg" alt="image" />
                                       <div className="wrapper flex-grow-1">
                                          <div className="d-flex justify-content-between align-items-center">
                                             <h5 className="mt-1 mb-1 fw-500">Ethereum</h5>
                                             <small className="ms-auto fs-15 mb-0">$10,2450</small>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                             <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$145.23</span>
                                             <small className="text-danger ms-auto fs-13">+ 2.04%<i className="fa fa-caret-down ms-1"></i></small>
                                          </div>
                                       </div>
                                    </Card.Body></h3>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <h3 className="mb-0" >   <Card.Body className="p-3 d-flex">
                                    <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Ripple.svg" alt="image" />
                                    <div className="wrapper flex-grow-1">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Ripple</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,1670</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$138.25</span>
                                          <small className="text-danger ms-auto fs-13">+ 1.05%<i className="fa fa-caret-down ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body></h3>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <h3 className="mb-0" >  <Card.Body className="p-3 d-flex">
                                    <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Monero.svg" alt="image" />
                                    <div className="wrapper flex-grow-1">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Monero</h5>
                                          <small className="ms-auto fs-15 mb-0">$15,8370</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$136.12</span>
                                          <small className="text-danger ms-auto fs-13">+ 3.25%<i className="fa fa-caret-down ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body>
                                 </h3>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <h3 className="mb-0" > <Card.Body className="p-3 d-flex">
                                    <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Dash.svg" alt="image" />
                                    <div className="wrapper flex-grow-1">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Dash</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,3650</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$146.23</span>
                                          <small className="text-danger ms-auto fs-13">+ 1.12%<i className="fa fa-caret-down ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body></h3>
                              </Card>
                           </div>
                           <div className="item">
                              <Card className="mb-0">
                                 <h3 className="mb-0" >  <Card.Body className="p-3 d-flex">
                                    <img className="me-3 crypto-market-swiper" src="../../../assets/images/crypto-currencies/round-outline/Litecoin.svg" alt="image" />
                                    <div className="wrapper flex-grow-1">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <h5 className="mt-1 mb-1 fw-500">Litecoin</h5>
                                          <small className="ms-auto fs-15 mb-0">$12,5817</small>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="text-success fs-14"><i className="fa fa-caret-up me-1"></i>$247.92</span>
                                          <small className="text-danger ms-auto fs-13">+ 2.05%<i className="fa fa-caret-down ms-1"></i></small>
                                       </div>
                                    </div>
                                 </Card.Body></h3>
                              </Card>
                           </div>
                        </Slider>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               {mkdata1.map((idx) => (
                  <Col xl={3} lg={6} md={6} key={idx.id}>
                     <Card>
                        <Card.Body className="text-start">
                           <h6 className="mb-3">{idx.name}</h6>
                           <h3 className="mb-1 fw-500">{idx.dollar}<span className="text-success fs-13 ms-2">{idx.percent}</span></h3>
                           <p className="mb-2 mt-3 text-muted">Overview of Last month</p>
                           <ProgressBar className=" h-1 mt-3 mb-2" now={40} variant={idx.clr} />

                           <small className="mb-0">Weekly<span className="float-end text-muted">40%</span></small>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>

            <Tab.Container id="left-tabs-example" defaultActiveKey="1">

               <Row>
                  <Col xl={4} lg={12}>
                     <Card className="res-tabs responsible-tabs">
                        <Card.Header>
                           <Card.Title as="h3">Market Info</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                           <div className="tab-menu-heading border-top-0 border-start-0 border-end-0 pt-0 mt-3 ms-sm-4 ms-0 pb-2">
                              <div className="tabs-menu1">
                                 <Nav as="ul" variant="pills" id="myTab-4" role="tablist">
                                    <Nav.Item bsPrefix="sub-tab" as="li">
                                       <Nav.Link as="a" id="home-tab-4" className="w-100" data-bs-toggle="tab" href="#home4" role="tab" eventKey="1" >BTC</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" bsPrefix="sub-tab">
                                       <Nav.Link as="a" eventKey="2" className="w-100">ETH</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" bsPrefix="sub-tab">
                                       <Nav.Link as="a" eventKey="3" className="w-100">LTC</Nav.Link>
                                    </Nav.Item>
                                 </Nav>
                              </div>
                           </div>

                           <Tab.Content className="tab-content">
                              <Tab.Pane className="p-0 border-0" eventKey="1" id="tab-1">
                                 {mkdata2.map((idx) => (
                                    <div className="list d-flex align-items-center border-bottom px-4 py-2 mt-2" key={Math.random()}>
                                       <img className="w-6 h-6" src={idx.src} alt="image" />
                                       <div className="wrapper w-100 ms-3">
                                          <div className="d-flex justify-content-between align-items-center">
                                             <p className="mt-1 mb-0 fw-500">{idx.usd}</p>
                                             <small className="ms-auto fs-15 mb-0 fw-500">{idx.dollar}</small>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                             <span className={idx.classname}><i className={idx.classname2}></i>{idx.perc}</span>
                                             <small className="text-muted ms-auto">{idx.usd2}</small>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </Tab.Pane>
                              <Tab.Pane eventKey="2" className="p-0 border-0" id="tab-2">
                                 {mkdata3.map((idx) => (
                                    <div className="list d-flex align-items-center border-bottom px-4 py-2 mt-2" key={Math.random()}>
                                       <img className="w-6 h-6" src={idx.src} alt="image" />
                                       <div className="wrapper w-100 ms-3">
                                          <div className="d-flex justify-content-between align-items-center">
                                             <p className="mt-1 mb-0 fw-500">{idx.usd}</p>
                                             <small className="ms-auto fs-15 mb-0 fw-500">{idx.dollar}</small>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                             <span className={idx.classname}><i className="fa fa-caret-up me-1"></i>{idx.perc}</span>
                                             <small className="text-muted ms-auto">{idx.usd2}</small>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </Tab.Pane>
                              <Tab.Pane className="p-0 border-0 userprof-tab" eventKey="3" id="tab-3">
                                 {mkdata4.map((idx) => (
                                    <div className="list d-flex align-items-center border-bottom px-4 py-2 mt-2" key={Math.random()}>
                                       <img className="w-6 h-6" src={idx.src} alt="image" />
                                       <div className="wrapper w-100 ms-3">
                                          <div className="d-flex justify-content-between align-items-center">
                                             <p className="mt-1 mb-0 fw-500">{idx.usd}</p>
                                             <small className="ms-auto fs-15 mb-0 fw-500">{idx.dollar}</small>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                             <span className={idx.classname}><i className={idx.classname2}></i>{idx.perc}</span>
                                             <small className="text-muted ms-auto">{idx.usd2}</small>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </Tab.Pane>
                           </Tab.Content>

                        </Card.Body>
                     </Card>
                  </Col>
                  <Col xl={8} lg={12} md={12}>
                     <Card>
                        <Card.Header>
                           <Card.Title as="h3">Bitcoin Price</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                           <div id="timeline-chart">
                              <Bitcoinchart />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Tab.Container>
            <Row>
               <Col xl={12} lg={12} md={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Crypto Marketing Values</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="">
                           <div className="table-responsive">
                              <table className="table card-table text-nowrap table-bordered">
                                 <thead className="border-top">
                                    <tr>
                                       <th>No</th>
                                       <th>Icon</th>
                                       <th>Currency</th>
                                       <th>Price</th>
                                       <th>Market Cap</th>
                                       <th>Volume 1D</th>
                                       <th>Change % (1D)</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>1</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Bitcoin</td>
                                       <td>$ 10513.00</td>
                                       <td>$ 51,191,183,730</td>
                                       <td>$ 10,133,400,000</td>
                                       <td><span className="badge badge-primary"> 0.66%</span></td>

                                    </tr>
                                    <tr>
                                       <td>2</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Ethereum</td>
                                       <td>$ 425.25</td>
                                       <td>$ 4,48,308,110</td>
                                       <td>$ 193,430,000</td>
                                       <td><span className="badge  badge-success"> 0.64%</span></td>
                                    </tr>
                                    <tr>
                                       <td>3</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Ripple</td>
                                       <td>$ 1.2029</td>
                                       <td>$ 7,63,80,043</td>
                                       <td>$ 42,677,430,000</td>
                                       <td><span className="badge  badge-warning"> 0.79%</span></td>
                                    </tr>
                                    <tr>
                                       <td>3</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" className="w-5 h-5" alt="" /></td>
                                       <td>litecoin</td>
                                       <td>$ 1547.67</td>
                                       <td>$ 6,14,18,730</td>
                                       <td>$ 40,13,40,000</td>
                                       <td><span className="badge  badge-secondary"> 0.32%</span></td>
                                    </tr>
                                    <tr>
                                       <td>4</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/NEM.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Nem</td>
                                       <td>$ 723.48</td>
                                       <td>$ 19,07,67,295</td>
                                       <td>$ 17,99,90,000</td>
                                       <td><span className="badge  badge-success"> 6.26%</span></td>
                                    </tr>
                                    <tr>
                                       <td>5</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Monero</td>
                                       <td>$ 305.16</td>
                                       <td>$ 4,778,157,533</td>
                                       <td>$ 100,788,000</td>
                                       <td><span className="badge badge-info"> 0.24%</span></td>
                                    </tr>
                                    <tr>
                                       <td>6</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/EOS.svg" className="w-5 h-5" alt="" /></td>
                                       <td>EOS</td>
                                       <td>$ 149.18</td>
                                       <td>$ 8,44,49,000</td>
                                       <td>$ 7,10,10,000</td>
                                       <td><span className="badge badge-danger"> 0.00%</span></td>
                                    </tr>
                                    <tr>
                                       <td>7</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Steem.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Steem</td>
                                       <td>$ 0.467813</td>
                                       <td>$ 8,358,735,080</td>
                                       <td>$ 370,297,000</td>
                                       <td><span className="badge badge-warning"> 0.78%</span></td>
                                    </tr>
                                    <tr>
                                       <td>8</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/IOTA.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Iota</td>
                                       <td>$ 2.34</td>
                                       <td>$ 6,504,100,862</td>
                                       <td>$ 103,132,000</td>
                                       <td><span className="badge badge-success"> 0.34%</span></td>
                                    </tr>
                                    <tr>
                                       <td>9</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Dash</td>
                                       <td>$ 747.222</td>
                                       <td>$ 5,881,413,815</td>
                                       <td>$ 96,147,900</td>
                                       <td><span className="badge badge-secondary"> 0.80%</span></td>
                                    </tr>
                                    <tr>
                                       <td>10</td>
                                       <td><img src="../../../assets/images/crypto-currencies/square-color/Waves.svg" className="w-5 h-5" alt="" /></td>
                                       <td>Waves</td>
                                       <td>$ 181.39</td>
                                       <td>$ 3,084,108,676</td>
                                       <td>$ 199,652,000</td>
                                       <td><span className="badge badge-primary"> 0.81%</span></td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   );
};
Marketcap.layout = "Contentlayout";
export default Marketcap;

