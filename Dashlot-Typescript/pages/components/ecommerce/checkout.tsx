
import { Card, Col, Form, InputGroup, Nav, Row, Tab, Table } from 'react-bootstrap';
import Select from 'react-select';
import { Check1 } from '../../../shared/data/ecommerce/checckoutdata';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

interface CheckoutProps { }

const Checkout = () => {
   return (
      <>
         <Seo title={"Checkout"} />
         <Pageheaderecommerce title="Checkout" heading='Ecommerce' active='Checkout' />
         <div className="main-container container-fluid">

            <Row>
               <Col lg={12}>
                  <Card className="m-b-20">
                     <Card.Header>
                        <Card.Title as="h6">Shopping Cart</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-responsive">
                           <Table className="table-bordered">
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td><img src="../../../assets/images/media/4.jpg" alt="img" className="h-8 w-8 br-5" /><span className="ms-3">Digital Watch</span></td>

                                    <td style={{ "width": "7%" }}>
                                       <Form.Control type="text" className="text-center" defaultValue={1} />
                                    </td>
                                    <td>
                                       $34.00
                                    </td>
                                 </tr>
                                 <tr>
                                    <td><img src="../../../assets/images/media/6.jpg" alt="img" className="h-8 w-8 br-5" /><span className="ms-3">Women Bag</span></td>
                                    <td style={{ "width": "7%" }}>
                                       <Form.Control type="text" className="text-center" defaultValue={2} />
                                    </td>
                                    <td>
                                       $31.00
                                    </td>
                                 </tr>
                                 <tr>
                                    <td><img src="../../../assets/images/media/10.jpg" alt="img" className="h-8 w-8 br-5" /><span className="ms-3">Shirt</span></td>
                                    <td style={{ "width": "7%" }}>
                                       <Form.Control type="text" className="text-center" defaultValue={3} />
                                    </td>
                                    <td>
                                       $35.00
                                    </td>
                                 </tr>
                                 <tr>
                                    <td colSpan={2}><h5 className="mb-0 mt-2">Total :</h5></td>
                                    <td className="fs-20"><strong>$201</strong></td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col xl={6} lg={12} md={12}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Billing Information</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Row>
                           <Col sm={6} md={6}>
                              <Form.Group className="mb-3">
                                 <Form.Label >First Name <span className="text-red">*</span></Form.Label>
                                 <input type="text" className="form-control" placeholder="First name" />
                              </Form.Group>
                           </Col>
                           <Col sm={6} md={6}>
                              <Form.Group className="mb-3">
                                 <label className="form-label">Last Name <span className="text-red">*</span></label>
                                 <input type="text" className="form-control" placeholder="Last name" />
                              </Form.Group>
                           </Col>
                           <Col md={12}>
                              <Form.Group className="mb-3">
                                 <label className="form-label">Company Name <span className="text-red">*</span></label>
                                 <input type="text" className="form-control" placeholder="Company name" />
                              </Form.Group>
                           </Col>
                           <Col md={12}>
                              <Form.Group className="mb-3">
                                 <label className="form-label">Email address <span className="text-red">*</span></label>
                                 <input type="email" className="form-control" placeholder="Email" />
                              </Form.Group>
                           </Col>
                           <Col md={12}>
                              <Form.Group className="mb-3">
                                 <Form.Label >Country <span className="text-red">*</span></Form.Label>
                                 <Select name="colors" options={Check1} className=""
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Check1[0]]} />
                              </Form.Group>
                           </Col>
                           <Col md={12}>
                              <Form.Group className="mb-3">
                                 <label className="form-label">Address <span className="text-red">*</span></label>
                                 <input type="text" className="form-control" placeholder="Home Address" />
                              </Form.Group>
                           </Col>
                           <Col sm={6} md={6}>
                              <Form.Group className="mb-3">
                                 <label className="form-label">City <span className="text-red">*</span></label>
                                 <input type="text" className="form-control" placeholder="City" />
                              </Form.Group>
                           </Col>
                           <Col sm={6} md={6}>
                              <div className="form-group">
                                 <label className="form-label">Postal Code <span className="text-red">*</span></label>
                                 <input type="number" className="form-control" placeholder="ZIP Code" />
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl={6} lg={12} md={12}>
                  <Card>
                     <Card.Body>
                        <div className="card-pay">
                           <Tab.Container defaultActiveKey="1" >
                              <Nav as="ul" variant="pills" className="tabs-menu nav mb-4 "  >
                                 <Nav.Item as="li" className="flex-grow-1 me-0">
                                    <Nav.Link eventKey="1" className="me-0"><i className="fa fa-credit-card me-1"></i>Credit Card</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li" className="flex-grow-1 me-0">
                                    <Nav.Link eventKey="2" className="me-0"><i className="fa fa-paypal me-1"></i>Paypal</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li" className="flex-grow-1 me-0">
                                    <Nav.Link eventKey="3"><i className="fa fa-university me-1"></i>Bank Transfer</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                              <Tab.Content>
                                 <Tab.Pane className=" " eventKey="1">
                                    <Form.Group className="mb-3">
                                       <label className="form-label" htmlFor="exampleInputEmail1">CardHolder Name</label>
                                       <Form.Control type="text" id="exampleInputEmail1" placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                       <Form.Label >Card number</Form.Label>
                                       <InputGroup>
                                          <Form.Control type="text" className="form-control" placeholder="Search for..." />
                                          <span className="input-group-text bg-primary text-fixed-white"><i className="fa fa-cc-visa"></i> &nbsp; <i className="fa fa-cc-amex"></i> &nbsp;
                                             <i className="fa fa-cc-mastercard"></i>
                                          </span>
                                       </InputGroup>
                                    </Form.Group>
                                    <Row>
                                       <Col sm={8}>
                                          <Form.Group className="mb-3">
                                             <Form.Label className="form-label">Expiration</Form.Label>
                                             <InputGroup>
                                                <Form.Control type="number" placeholder="MM" name="exp" />
                                                <Form.Control type="number" placeholder="YY" name="exp" />
                                             </InputGroup>
                                          </Form.Group>
                                       </Col>
                                       <Col sm={4}>
                                          <Form.Group className="mb-3">
                                             <Form.Label className="form-label">CVV <i className="fa fa-question-circle"></i></Form.Label>
                                             <Form.Control type="number" className="form-control" required />
                                          </Form.Group>
                                       </Col>
                                    </Row>
                                    <Link href="#!" className="btn btn-secondary btn-block">Confirm</Link>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="2" >
                                    <p>Paypal is easiest way to pay online</p>
                                    <p><Link href="#!" className="btn btn-primary"><i className="fa fa-paypal"></i> Log in my Paypal</Link></p>
                                    <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                 </Tab.Pane>
                                 <Tab.Pane className="" eventKey="3" >
                                    <p>Bank account details</p>
                                    <dl>
                                       <dt>BANK: </dt>
                                       <dd> THE UNION BANK 0456</dd>
                                    </dl>
                                    <dl>
                                       <dt>Account number: </dt>
                                       <dd> 67542897653214</dd>
                                    </dl>
                                    <dl>
                                       <dt>IBAN: </dt>
                                       <dd>543218769</dd>
                                    </dl>
                                    <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>

      </>
   );
};
Checkout.layout = "Contentlayout";
export default Checkout;
