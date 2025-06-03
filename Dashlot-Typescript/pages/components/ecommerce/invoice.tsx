
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Seo from '@/shared/layout-components/seo/seo';

const Invoice = () => {
   const print = () => {
      window.print();
   };
   return (
      <>

         <Seo title={"Invoice"} />
         <Pageheaderecommerce title="Invoice Details" heading='Ecommerce' active='Invoice' />

         <div className="main-container container-fluid">

            <Row>
               <Col xl={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">#INV-287</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Row>
                           <Col lg={6}>
                              <p className="h3">Client Inc</p>
                              <address className="fs-15">
                                 Street Address<br />
                                 State, City<br />
                                 Region, Postal Code<br />
                                 ltd@example.com
                              </address>
                           </Col>
                           <Col lg={6} className="text-end">
                              <p className="h3">Invoice To</p>
                              <address className="fs-15">
                                 Street Address<br />
                                 State, City<br />
                                 Region, Postal Code<br />
                                 ctr@example.com
                              </address>
                           </Col>
                        </Row>

                        <div className="">
                           <p className="mb-1 mt-5"><span className="fw-500">Order Date : </span> Jun 23, 2022</p>
                           <p className="mb-1"><span className="fw-500">Order Status : </span>Pending</p>
                           <p><span className="fw-500">Order ID  : </span>#123456</p>
                        </div>
                        <div className="table-responsive push">
                           <Table className=" table-bordered table-hover">
                              <tbody>
                                 <tr>
                                    <th className="text-center "></th>
                                    <th>Product</th>
                                    <th className="text-center" >Qnt</th>
                                    <th className="text-end" >Unit</th>
                                    <th className="text-end">Amount</th>
                                 </tr>
                                 <tr>
                                    <td className="text-center">1</td>
                                    <td>
                                       <p className="font-w600 mb-1">Digital Watch</p>
                                       <div className="text-muted d-none d-sm-block">Mens Black digital watch</div>
                                    </td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$34.00</td>
                                    <td className="text-end">$34.00</td>
                                 </tr>
                                 <tr>
                                    <td className="text-center">2</td>
                                    <td>
                                       <p className="font-w600 mb-1">Women bag</p>
                                       <div className="text-muted d-none d-sm-block">Red Cotton bag for women</div>
                                    </td>
                                    <td className="text-center">2</td>
                                    <td className="text-end">31.00</td>
                                    <td className="text-end">$62.000</td>
                                 </tr>
                                 <tr>
                                    <td className="text-center">3</td>
                                    <td>
                                       <p className="font-w600 mb-1">Mens shirt</p>
                                       <div className="text-muted d-none d-sm-block">Casual shirt for men</div>
                                    </td>
                                    <td className="text-center">3</td>
                                    <td className="text-end">$35.00</td>
                                    <td className="text-end">$105.00</td>
                                 </tr>
                                 <tr>
                                    <td colSpan={4} className="font-w600 text-end">Subtotal</td>
                                    <td className="text-end">$205.00</td>
                                 </tr>
                                 <tr>
                                    <td colSpan={5} className="text-end btn-list">
                                       <Button className='btn btn-primary' variant=''><i className="si si-wallet d-inline-flex"></i> Pay Invoice</Button>
                                       <Button variant='success'><i className="si si-paper-plane d-inline-flex"></i> Send Invoice</Button>
                                       <Button variant="info" onClick={() => print()}><i className="si si-printer d-inline-flex" ></i> Print Invoice</Button>
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                        <p className="text-muted mb-0 text-center mt-3">Thank you very much for doing business with us. We look forward to working with you again!</p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   );
};
Invoice.layout = "Contentlayout";
export default Invoice;
