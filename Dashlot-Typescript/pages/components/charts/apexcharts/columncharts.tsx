import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicolumn, Columnwithlabels, Distributed, Loaded, Markers, Negativecolumn, Rangecolumn, Rotated, Stacked100column, Stackedcolumn } from '../../../../shared/data/charts/apexcharts/columndata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Columncharts = () => {
    return (
        <Fragment>
            <Seo title={"Columncharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Column Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-basic">
                                    <Basicolumn />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Datalabels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-datalabels">
                                    <Columnwithlabels />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stacked Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-stacked">
                                    <Stackedcolumn />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>100% Stacked Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-stacked-full">
                                    <Stacked100column />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-markers">
                                    <Markers />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Rotated Labels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-rotated-labels">
                                    <Rotated />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Negative Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-negative">
                                    <Negativecolumn />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Range Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-range">
                                    <Rangecolumn />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Dynamic Loaded Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Loaded />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Distributed Columns Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="columns-distributed">
                                    <Distributed />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Columncharts.layout = "Contentlayout";
export default Columncharts;
