import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicradialbar, Circlechart, Circlegauge, Circlewithimage, Gradientcircle, Multipleradial, Semicirclegauge } from '../../../../shared/data/charts/apexcharts/radialbardata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Radialbarcharts = () => {
    return (
        <Fragment>
            <Seo title={"Radialbarcharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Radialbar Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radialbar-basic">
                                    <Basicradialbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Radialbar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radialbar-multiple">
                                    <Multipleradial />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Circle Chart - Custom Angle</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circle-custom">
                                    <Circlechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Gradient Circle Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="gradient-circle">
                                    <Gradientcircle />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stroked Circular Gauge</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circular-stroked">
                                    <Circlegauge />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Circle Chart With Image</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circle-image">
                                    <Circlewithimage />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Semi Circular Gauge</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circular-semi">
                                    <Semicirclegauge />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Radialbarcharts.layout = "Contentlayout";
export default Radialbarcharts;
