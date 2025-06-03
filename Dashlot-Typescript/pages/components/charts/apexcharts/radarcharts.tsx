import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicradar, Multipleradar, Polygonradar } from '../../../../shared/data/charts/apexcharts/radardata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Radarcharts = () => {
    return (
        <Fragment>
            <Seo title={"Radarcharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Radar Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Radar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-basic">
                                    <Basicradar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Radar Chart-Multiple Series</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-multiple">
                                    <Multipleradar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Radar Chart Polygon Fill</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-polygon">
                                    <Polygonradar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Radarcharts.layout = "Contentlayout";
export default Radarcharts;
