
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Walletdata } from '../../../shared/data/cryptocurrency/walletdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';

const Wallet = () => {
   return (
      <>

         <Seo title={"Wallet"} />
         <Pageheader title='Crypto Currency - Wallet' heading="Crypto Currency" active="Wallet" />
         <div className="main-container container-fluid">

            <Row>
               <Col sm={6} md={12} lg={6} xl={3}>
                  <Card>
                     <Card.Body>
                        <div className="d-flex no-block align-items-center">
                           <div>
                              <h6 className="">Bitcoin BTC</h6>
                              <h3 className="m-0">1.343434</h3>
                           </div>
                           <div className="ms-auto">
                              <img className="w-7 h-7" src="../../../assets/images/crypto-currencies/round-outline/Bitcoin.svg" alt="image" />
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} md={12} lg={6} xl={3}>
                  <Card>
                     <Card.Body>
                        <div className="d-flex no-block align-items-center">
                           <div>
                              <h6 className="">Ethereum ETH</h6>
                              <h3 className="m-0">3.763674</h3>
                           </div>
                           <div className="ms-auto">
                              <img className="w-7 h-7" src="../../../assets/images/crypto-currencies/round-outline/Ethereum.svg" alt="image" />
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} md={12} lg={6} xl={3}>
                  <Card>
                     <Card.Body>
                        <div className="d-flex no-block align-items-center">
                           <div>
                              <h6 className="">Ripple  XRP</h6>
                              <h3 className="m-0">12.53647</h3>
                           </div>
                           <div className="ms-auto">
                              <img className="w-7 h-7" src="../../../assets/images/crypto-currencies/round-outline/Ripple.svg" alt="image" />
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm={6} md={12} lg={6} xl={3}>
                  <Card>
                     <Card.Body>
                        <div className="d-flex no-block align-items-center">
                           <div>
                              <h6 className="">litecoin  LTC</h6>
                              <h3 className="m-0">3,635387</h3>
                           </div>
                           <div className="ms-auto">
                              <img className="w-7 h-7" src="../../../assets/images/crypto-currencies/round-outline/Litecoin.svg" alt="image" />
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row className="row">         
                    <Col xl={6} lg={12} md={12} >
                        <Card className=" wallet">
                            <Card.Body className="">
                                <Card.Title className=" mb-4">Bitcoin Wallet</Card.Title>
                                <Form.Label className="">Wallet Address</Form.Label>
                                <InputGroup className="input-group mb-3">
                                    <InputGroup.Text className="input-group-text bg-light"><i className="cc BTC-alt"></i></InputGroup.Text>
                                    <Form.Control type="text" className="form-control" placeholder="ac34290d04cc54f02d22" />
                                    <InputGroup.Text className="input-group-text bg-light"><i className="fa fa-clipboard"></i></InputGroup.Text>
                                </InputGroup>
                                <p className="fs-16 mb-1 text-primary"><strong>1 BTC = 9,526.37 USD</strong></p>
                                <Row className="">
                                    <Col xl={8} md={8} lg={8} sm={12} className="mt-2">
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-money text-muted me-2 mt-1 fs-16"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Received Amount </span> : <span className="ms-auto h5">+ 1,50,500</span>
                                        </p>
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-credit-card me-2 mt-1 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Sent Amount </span> : <span className="ms-auto h5">- 25,500</span>
                                        </p>
                                        <p className="mb-0 d-flex">
                                            <span className=""><i className="fa fa-university me-2 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Total Amount </span> : <span className="ms-auto fw-500 h4 text-success">$ 1,00,500</span>
                                        </p>
                                    </Col>
                                    <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <img className="qr-code" src="../../../assets/images/png/06.png" alt="image" />
                                    </div>
                                </Row>
                                <div className="flex mt-4">
                                    <Button variant='' className="btn btn-primary me-2">Withdraw</Button>
                                    <Button variant='' className="btn btn-secondary">Deposit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={6} lg={12} md={12}>
                        <Card className=" wallet">
                            <Card.Body className="">
                                <Card.Title className="card-title mb-4">Ethereum Wallet</Card.Title>
                                <Form.Label className="form-label">Wallet Address</Form.Label>
                                <InputGroup className="input-group mb-3">
                                    <InputGroup.Text className="input-group-text bg-light"><i className="cc ETH-alt"></i></InputGroup.Text>
                                    <Form.Control type="text" className="form-control" placeholder="1N4LsCG8ko4aia4vJYR" />
                                    <InputGroup.Text className="input-group-text bg-light"><i className="fa fa-clipboard fs-21"></i></InputGroup.Text>
                                </InputGroup>
                                <p className="fs-16 mb-1 text-primary"><strong>1 ETH = 169.75 USD</strong></p>
                                <Row className="">
                                    <div className="col-xl-8 col-md-8 col-lg-8 col-sm-12 mt-2">
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-money text-muted me-2 mt-1 fs-16"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Received Amount </span> : <span className="ms-auto h5">+ 1,25,500</span>
                                        </p>
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-credit-card me-2 mt-1 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Sent Amount </span> : <span className="ms-auto h5">- 59000</span>
                                        </p>
                                        <p className="mb-0 d-flex">
                                            <span className=""><i className="fa fa-university me-2 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Total Amount </span> : <span className="ms-auto fw-500 h4 text-success">$ 66500</span>
                                        </p>
                                    </div>
                                    <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <img className="qr-code" src="../../../assets/images/png/06.png" alt="image" />
                                    </div>
                                </Row>
                                <div className="flex mt-4">
                                    <Button variant='' className="btn btn-primary me-2">Withdraw</Button>
                                    <Button variant='' className="btn btn-secondary">Deposit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                        <Card className=" wallet">
                            <Card.Body className="">
                                <Card.Title className=" mb-4">Ripple Wallet</Card.Title>
                                <Form.Label className="form-label">Wallet Address</Form.Label>
                                <InputGroup className="input-group mb-3">
                                    <InputGroup.Text className="input-group-text bg-light"><i className="cc XRP-alt"></i></InputGroup.Text>
                                    <Form.Control type="text" className="form-control" placeholder="1LgejHMvhRoWxRqNM" />
                                    <InputGroup.Text className="input-group-text bg-light"><i className="fa fa-clipboard fs-21"></i></InputGroup.Text>
                                </InputGroup>
                                <p className="fs-16 mb-1 text-primary"><strong>1 XRP = 0.257134 USD</strong></p>
                                <Row className="row">
                                    <Col xl={8} md={8} lg={8} sm={12} className="mt-2">
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-money text-muted me-2 mt-1 fs-16"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Received Amount </span> : <span className="ms-auto h5">+ 3,25,765</span>
                                        </p>
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-credit-card me-2 mt-1 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Sent Amount </span> : <span className="ms-auto h5"> - 1,12,490</span>
                                        </p>
                                        <p className="mb-0 d-flex">
                                            <span className=""><i className="fa fa-university me-2 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Total Amount </span> : <span className="ms-auto fw-500 h4 text-success">$ 2,13,275</span>
                                        </p>
                                    </Col>
                                    <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <img className="qr-code" src="../../../assets/images/png/06.png" alt="image" />
                                    </div>
                                </Row>
                                <div className="flex mt-4">
                                    <Button variant='' className="btn btn-primary me-2">Withdraw</Button>
                                    <Button variant='' className="btn btn-secondary">Deposit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                        <Card className=" wallet">
                            <Card.Body className="">
                                <Card.Title className="card-title mb-4">Litecoin Wallet</Card.Title>
                                <Form.Label className="form-label">Wallet Address</Form.Label>
                                <InputGroup className="input-group mb-3">
                                    <InputGroup.Text className="input-group-text bg-light"><i className="cc LTC-alt"></i></InputGroup.Text>
                                    <Form.Control type="text" className="form-control" placeholder="1EeWrxcDDjyhWwcKu" />
                                    <InputGroup.Text className="input-group-text bg-light"><i className="fa fa-clipboard fs-21"></i></InputGroup.Text>
                                </InputGroup>
                                <p className="fs-16 mb-1 text-primary"><strong>1 LTC = 64.04 USD</strong></p>
                                <Row className="">
                                    <Col xl={8} md={8} lg={8} sm={12} className="mt-2">
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-money text-muted me-2 mt-1 fs-16"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted me-2">Received Amount </span> : <span className="ms-auto h5">+ 2,32,598</span>
                                        </p>
                                        <p className="mb-2 d-flex">
                                            <span className=""><i className="fa fa-credit-card me-2 mt-1 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Sent Amount </span> : <span className="ms-auto h5">- 1,34,568</span>
                                        </p>
                                        <p className="mb-0 d-flex">
                                            <span className=""><i className="fa fa-university me-2 fs-16 text-muted"></i></span>
                                            <span className="fs-15 font-weight-normal text-muted  me-2">Total Amount </span> : <span className="ms-auto fw-500 h4 text-success">$ 98030</span>
                                        </p>
                                    </Col>
                                    <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <img className="qr-code" src="../../../assets/images/png/06.png" alt="image" />
                                    </div>
                                </Row>
                                <div className="flex mt-4">
                                    <Button variant='' className="btn btn-primary me-2">Withdraw</Button>
                                    <Button variant='' className="btn btn-secondary">Deposit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
         </div>
      </>
   );
};
Wallet.layout = "Contentlayout";
export default Wallet;
