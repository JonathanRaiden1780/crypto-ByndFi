import { FC } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import { bdoptions, bdoptions2, bdoptions3, bdoptions4 } from '../../../shared/data/cryptocurrency/bsdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';


const BuySell = () => {
   return (

      <>
         <Seo title={"Buy/Sell"} />
         <Pageheader title='Crypto Currency- Buy/Sell' heading="Crypto Currency" active="Buy/Sell" />
         <div className="main-container container-fluid">
            <Row>
               <Col xl={6}>
                  <Card className="">
                     <Card.Header>
                        <Card.Title as="h3">Buy Currency</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <form action="#">
                           <Form.Group className='mb-3'>
                              <Form.Label>Choose Currency</Form.Label>
                              <Select options={bdoptions} classNamePrefix='Select2' placeholder="Bitcoin" />
                           </Form.Group>
                           <Form.Group className='mb-3'>
                              <Form.Label>Payments Method</Form.Label>
                              <Select options={bdoptions2} classNamePrefix='Select2' placeholder="Choose " />
                           </Form.Group>
                           <Form.Group className="mb-3 fs-14">
                              <Form.Label >Amount</Form.Label>
                              <Form.Control type="text" className="form-control" name="input"
                                 placeholder="200" />
                           </Form.Group>
                           <Form.Group className="mb-3 fs-14">
                              <Form.Label >Wallet Address</Form.Label>
                              <Form.Control type="text" name="input"
                                 placeholder="498fd7c42932070ff3ec30" />
                           </Form.Group>
                           <Form.Label className="form-label  fs-14">Exchange</Form.Label >
                           <Form.Group>
                              <Select options={bdoptions3} classNamePrefix='Select2' placeholder="Bitcoin" />
                           </Form.Group>
                           <div className="text-center my-3">
                              <div className="exchange"><i className="fa fa-exchange inline-block"></i></div>
                           </div>
                           <Form.Group className="mb-5">
                              <Select options={bdoptions4} classNamePrefix='Select2' placeholder="EOS" />
                           </Form.Group>
                           <div className="d-grid">
                              <Button className="btn btn-primary" href='#' type="submit">Buy Coin</Button>
                           </div>
                        </form>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={6}>
                  <Card className="">
                     <Card.Header>
                        <Card.Title as="h3">Sell Currency</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <form action="#">
                           <Form.Group className='mb-3'>
                              <Form.Label className="form-label  fs-14">Choose Currency</Form.Label>
                              <Select options={bdoptions} classNamePrefix='Select2' placeholder="Ethereum" />
                           </Form.Group>

                           <Form.Group className='mb-3'>
                              <Form.Label className="form-label  fs-14">Payments Method</Form.Label>
                              <Select options={bdoptions2} classNamePrefix='Select2' placeholder="Pay Pal" />

                           </Form.Group>
                           <Form.Group className=" mb-3 fs-14">
                              <label className="form-label">Amount</label>
                              <Form.Control type="text" name="input"
                                 placeholder="200" />
                           </Form.Group>
                           <div className="form-group mb-3 fs-14">
                              <Form.Label className="form-label">Wallet Address</Form.Label>
                              <Form.Control type="text" placeholder="498fd7c42932070ff3ec30" />
                           </div>
                           <label className="form-label  fs-14">Exchange</label>
                           <Form.Group className='3'>
                              <Select options={bdoptions3} placeholder="Bitcoin" classNamePrefix='Select2' />
                           </Form.Group>
                           <div className="text-center my-3">
                              <div className="exchange"><i className="fa fa-exchange inline-block"></i></div>
                           </div>
                           <Form.Group className=' mb-5'>
                              <Select options={bdoptions4} placeholder="Bitcoin" classNamePrefix='Select2' />
                           </Form.Group>
                           <div className="d-grid">
                              <Button variant='secondary' href='#' className="" type="submit">Sell Coin</Button>
                           </div>
                        </form>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Header>
                        <h6 className='card-title'>Recent Buying & selling Orders </h6>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-responsive">
                           <table className="table card-table text-nowrap table-bordered">
                              <thead>
                                 <tr>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Remaining</th>
                                    <th>Price</th>
                                    <th>USD</th>
                                    <th>Fee (%)</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>#12450</td>
                                    <td className="text-success">Buy</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.37218</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.42173</td>
                                    <td>52681.13</td>
                                    <td>$ 5273.15</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-success-light badge-pill">Completed</span></td>
                                    <td>31-05-2022 02:12:34</td>
                                 </tr>
                                 <tr>
                                    <td>#12451</td>
                                    <td className="text-danger">Sell</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 1.47364</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.36472</td>
                                    <td>73647.15</td>
                                    <td>$ 2637.37</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-warning-light badge-pill">Pending</span></td>
                                    <td>02-06-2022 07:14:32</td>
                                 </tr>
                                 <tr>
                                    <td>#12452</td>
                                    <td className="text-danger">Sell</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.63736</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.73748</td>
                                    <td>72637.02</td>
                                    <td>$ 6345.16</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-danger-light badge-pill">Cancelled</span></td>
                                    <td>05-06-2022 12:57:12</td>
                                 </tr>
                                 <tr>
                                    <td>#12453</td>
                                    <td className="text-success">Buy</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.63647</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.83643</td>
                                    <td>83748.19</td>
                                    <td>$ 23836.09</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-success-light badge-pill">Completed</span></td>
                                    <td>15-07-2022 10:43:17</td>
                                 </tr>
                                 <tr>
                                    <td>#12454</td>
                                    <td className="text-success">Buy</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.76263</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.72563</td>
                                    <td>32635.32</td>
                                    <td>$ 7235.25</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-success-light badge-pill">Completed</span></td>
                                    <td>22-07-2022 11:44:45</td>
                                 </tr>
                                 <tr>
                                    <td>#12455</td>
                                    <td className="text-danger">Sell</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.46263</td>
                                    <td><i className="cc BTC-alt text-warning"></i> 0.27363</td>
                                    <td>28937.22</td>
                                    <td>$ 4853.15</td>
                                    <td>0.1</td>
                                    <td><span className="badge badge-info-light badge-pill">In Process</span></td>
                                    <td>30-07-2022 08:23:15</td>
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

BuySell.layout = "Contentlayout";
export default BuySell;
