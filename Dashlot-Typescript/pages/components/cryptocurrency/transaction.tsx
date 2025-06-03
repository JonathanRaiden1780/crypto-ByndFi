import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const Transaction = () => {
    return (
        <>

            <Seo title={"Transaction"} />
            <Pageheader title='Crypto Currency - Transaction' heading="Crypto Currency" active="Transaction" />
            <div className="main-container container-fluid">

                <Row>
                    <div className="col-xl-6 col-xl-12">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Latest Transactions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table card-table text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th>TRANSACTION HASH</th>
                                                <th>BTC</th>
                                                <th>Time</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb01</Link>
                                                </td>
                                                <td>3.25346353 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 1 min ago</td>
                                                <td><span className="badge badge-success-light">Completed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb02</Link>
                                                </td>
                                                <td>3.52356357 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 1 min ago</td>
                                                <td><span className="badge badge-success-light">Completed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb03</Link>
                                                </td>
                                                <td>3.62353466 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 1 min ago</td>
                                                <td><span className="badge badge-warning-light">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb04</Link>
                                                </td>
                                                <td>3.63567436 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 2 min ago</td>
                                                <td><span className="badge badge-danger-light">Cancel</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb05</Link>
                                                </td>
                                                <td>3.83773645 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 2 min ago</td>
                                                <td><span className="badge badge-danger-light">Cancel</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb06</Link>
                                                </td>
                                                <td>3.72763783 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 3 min ago</td>
                                                <td><span className="badge badge-warning-light">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb07</Link>
                                                </td>
                                                <td>3.82737627 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 5 min ago</td>
                                                <td><span className="badge badge-danger-light">Cancel</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb08</Link>
                                                </td>
                                                <td>3.28783738 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 9 min ago</td>
                                                <td><span className="badge badge-warning-light">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb09</Link>
                                                </td>
                                                <td>3.56235679 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 12 min ago</td>
                                                <td><span className="badge badge-success-light">Completed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb10</Link>
                                                </td>
                                                <td>3.67366357 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 20 min ago</td>
                                                <td><span className="badge badge-success-light">Completed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxc01</Link>
                                                </td>
                                                <td>3.73276364 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 22 min ago</td>
                                                <td><span className="badge badge-warning-light">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxc02</Link>
                                                </td>
                                                <td>3.28736774 <span className="ms-2 text-primary">BTC</span>
                                                </td>
                                                <td><span><i className="fa fa-clock-o me-1" aria-hidden="true"></i></span> 30 min ago</td>
                                                <td><span className="badge badge-danger-light">Cancel</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <Col md={12} lg={12} xl={12}>
                        <Card>
                            <Card.Header>
                                <h6 className='card-title'>Transaction History</h6>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table border table-bordered mb-0 text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>TRANSACTION HASH</th>
                                                <th>Crypto Trade</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb3</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" className="w-5 h-5 me-3" alt="" />Bitcoin</td>
                                                <td>23/05/2022</td>
                                                <td>05:12:16</td>
                                                <td className="text-success">+0,041 BTC</td>
                                                <td><span className="badge badge-success-light fs-12">completed</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb4</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" className="w-5 h-5 me-3" alt="" />Ethereum</td>
                                                <td>27/05/2022</td>
                                                <td>12:19:25</td>
                                                <td className="text-danger">-0.00215 ETH</td>
                                                <td><span className="badge badge-secondary-light fs-12">pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb5</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/Ripple.svg" className="w-5 h-5 me-3" alt="" />Ripple</td>
                                                <td>30/05/2022</td>
                                                <td>10:23:42</td>
                                                <td className="text-danger">+12.856 XRP</td>
                                                <td><span className="badge badge-danger-light fs-12">cancelled</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb6</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/Dash.svg" className="w-5 h-5 me-3" alt="" />Dash</td>
                                                <td>03/06/2022</td>
                                                <td>02:01:15</td>
                                                <td className="text-success">+0,1535 DAH</td>
                                                <td><span className="badge badge-secondary-light fs-12">pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb7</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" className="w-5 h-5 me-3" alt="" />litecoin</td>
                                                <td>12/06/2022</td>
                                                <td>07:16:25</td>
                                                <td className="text-info">11,85 LTC</td>
                                                <td><span className="badge badge-info-light fs-12">exchanged</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb8</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/monero.svg" className="w-5 h-5 me-3" alt="" />Monero</td>
                                                <td>19/06/2022</td>
                                                <td>01:34:17</td>
                                                <td className="text-danger">-0,0445 BTC</td>
                                                <td><span className="badge badge-success-light fs-12">completed</span></td>
                                            </tr>
                                            <tr>
                                                <td><Link href="#!">3e25daeywzxb9</Link></td>
                                                <td><img src="../../../assets/images/crypto-currencies/regular/NEM.svg" className="w-5 h-5 me-3" alt="" />NEM</td>
                                                <td>25/07/2022</td>
                                                <td>08:45:32</td>
                                                <td className="text-success">+0,352 NEM</td>
                                                <td><span className="badge badge-success-light fs-12">completed</span></td>
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
Transaction.layout = "Contentlayout";
export default Transaction;
