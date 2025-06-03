
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import { Productsdata } from '../../../shared/data/ecommerce/productlistdata';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const ProductsList = () => {
    return (
        <>
            <Seo title={"Products-List"} />
            <Pageheaderecommerce title="Ecommerce Products List" heading='Ecommerce' active='Products List' />

            <div className="main-container container-fluid">
                <Row>
                    <Col md={12} lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h6">Product list</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive product-datatable">
                                    <table id="productListTable" className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="w-15p">Product name</th>
                                                <th className="wd-15p">Category</th>
                                                <th className="wd-20p">Price</th>
                                                <th className="wd-15p">Status</th>
                                                <th className="wd-10p">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Productsdata.map((idx) => (
                                                <tr key={Math.random()}>
                                                    <td>
                                                        <img src={idx.src} alt="img" className="h-7 w-7 br-3" />
                                                        <p className="d-inline-block align-middle mb-0 ms-2">
                                                            <Link href="#!" className="d-inline-block align-middle mb-0 product-name fw-500">{idx.name}</Link>
                                                            <br />
                                                            <span className="text-muted fs-13">{idx.name2}</span>
                                                        </p>
                                                    </td>
                                                    <td>{idx.cate}</td>
                                                    <td>{idx.price}</td>
                                                    <td><span className={`badge badge-${idx.classname}-light px-2`}>{idx.status}</span></td>
                                                    <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete </Tooltip>}>
                                                            <Button variant="danger" data-bs-toggle="tooltip" className="btn-sm" data-bs-placement="top" title="Tooltip on right"><i className='fa fa-trash-o'></i></Button>
                                                        </OverlayTrigger>&nbsp;
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Save to Wishlist </Tooltip>}>
                                                            <Button variant="info" data-bs-toggle="tooltip" className='btn-sm' data-bs-placement="top" title="Tooltip on right"><i className='fa fa-heart-o'></i></Button>
                                                        </OverlayTrigger>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="mt-2">
                                        <div className="d-flex align-items-center">
                                            <div> Showing 1 to 4 of 4 entries </div>
                                            <div className="ms-auto">
                                                <nav aria-label="Page navigation" className="pagination-style-4">
                                                    <ul className="pagination mb-0">
                                                        <li className="page-item disabled"> <a className="page-link" href="#!"> Prev </a> </li>
                                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                                        <li className="page-item"> <a className="page-link text-primary" href="#!"> next </a> </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
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
ProductsList.layout = "Contentlayout";
export default ProductsList;
