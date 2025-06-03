import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicbar, Categorybar, Grouped, Imagebar, Markerbar, Negativebar, Patternbar, Reversedbar, Stacked100bar, Stackedbar } from '../../../../shared/data/charts/apexcharts/barchartdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Barcharts = () => {
    return (
        <Fragment>
            <Seo title={"Barcharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Bar Charts" />
            <div className="main-container container-fluid">

                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-basic">
                                    <Basicbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Grouped Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-group">
                                    <Grouped />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stacked Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-stacked">
                                    <Stackedbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>100% Stacked Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-full">
                                    <Stacked100bar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar Chart With Negative Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-negative">
                                    <Negativebar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar Chart With Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-markers">
                                    <Markerbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Reversed Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-reversed">
                                    <Reversedbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Categogry DataLabels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-categories">
                                    <Categorybar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Patterned Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-pattern">
                                    <Patternbar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Image Fill</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-image">
                                    <Imagebar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Barcharts.layout = "Contentlayout";

export default Barcharts;
