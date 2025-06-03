import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
const PgsInvoice = () => {
    const print = () => {
        window.print();
    };
    return (
        <>
            <Seo title={"Invoice"} />
            <PageheaderDB heading="Pages" active="Invoice" />

            <div className="main-container container-fluid">

                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Body>
                                <div className="clearfix">
                                    <div className="float-start">
                                        <Card.Title className="mb-0" as="h3">#INV-526</Card.Title>
                                    </div>
                                    <div className="float-end">
                                        <Card.Title>Date: 22-05-2022</Card.Title>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <Row>
                                    <Col lg={6}>
                                        <p className="h3">Invoice Form:</p>
                                        <address>
                                            Street Address<br />
                                            State, City<br />
                                            Region, Postal Code<br />
                                            yourdomain@example.com
                                        </address>
                                    </Col>
                                    <Col lg={6} className="text-end">
                                        <p className="h3">Invoice To:</p>
                                        <address>
                                            Street Address<br />
                                            State, City<br />
                                            Region, Postal Code<br />
                                            ypurdomain@example.com
                                        </address>
                                    </Col>
                                </Row>
                                <div className="table-responsive push">
                                    <Table className="table-bordered table-hover text-nowrap mb-0">
                                        <tbody><tr className=" ">
                                            <th className="text-center"></th>
                                            <th>Item</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-end">Unit Price</th>
                                            <th className="text-end">Sub Total</th>
                                        </tr>
                                            <tr>
                                                <td className="text-center number-font1">1</td>
                                                <td>
                                                    <p className="font-w600 mb-1">Logo Design</p>
                                                    <div className="text-muted"><div className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div></div>
                                                </td>
                                                <td className="text-center number-font1">2</td>
                                                <td className="text-end number-font1">$674</td>
                                                <td className="text-end number-font1">$1,308</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center number-font1">2</td>
                                                <td>
                                                    <p className="font-w600 mb-1">Website wireframe for 2 pages</p>
                                                    <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</div>
                                                </td>
                                                <td className="text-center number-font1">4</td>
                                                <td className="text-end number-font1">$1,500</td>
                                                <td className="text-end number-font1">$6,000</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center number-font1">3</td>
                                                <td>
                                                    <p className="font-w600 mb-1">PSD to HTML coding</p>
                                                    <div className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                                                </td>
                                                <td className="text-center number-font1">3</td>
                                                <td className="text-end number-font1">$530</td>
                                                <td className="text-end number-font1">$1,690</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center number-font1">4</td>
                                                <td>
                                                    <p className="font-w600 mb-1">E-commerce Development</p>
                                                    <div className="text-muted">When our power of choice is untrammelled and when nothing prevents our being able</div>
                                                </td>
                                                <td className="text-center number-font1">2</td>
                                                <td className="text-end number-font1">$800</td>
                                                <td className="text-end number-font1">$1,600</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center number-font1">5</td>
                                                <td>
                                                    <p className="font-w600 mb-1">Design and layout of 2 pages in Photoshop</p>
                                                    <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                                                </td>
                                                <td className="text-center number-font1">2</td>
                                                <td className="text-end number-font1">$720</td>
                                                <td className="text-end number-font1">$1,440</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} className="fw-500 text-uppercase text-end">Total</td>
                                                <td className="fw-500 text-end h4 number-font1">$12,038</td>
                                            </tr>
                                        </tbody></Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Button variant='primary' className="btn btn-primary mb-1 me-1" ><i className="si si-wallet"></i> Pay Invoice</Button>
                                <Button variant='success' className="btn btn-success mb-1 me-1" ><i className="si si-paper-plane"></i> Send Invoice</Button>
                                <Button variant='info' className="btn me-2 mb-2" onClick={() => print()}>
                                    <i className="bi bi-printer me-1"></i> Print
                                    Invoice
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
};
PgsInvoice.layout = "Contentlayout";
export default PgsInvoice;
