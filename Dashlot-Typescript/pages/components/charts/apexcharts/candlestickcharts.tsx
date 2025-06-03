import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basiccandlestick, Candlebrush, Candleline, Candlexaxis } from '../../../../shared/data/charts/apexcharts/candlestickdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Candlestickcharts = () => {
    return (
        <Fragment>
            <Seo title={"Candlestickcharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Candlestick Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-basic">
                                    <Basiccandlestick />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Candlebrush />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Cateory X-axis</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-categoryx">
                                    <Candlexaxis />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-line">
                                    <Candleline />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Candlestickcharts.layout = "Contentlayout";
export default Candlestickcharts;
