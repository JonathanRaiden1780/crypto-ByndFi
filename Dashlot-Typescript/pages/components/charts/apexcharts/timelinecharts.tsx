import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Advancedmultirange, Basictimeline, Multiplecolored, Timelinegrouped, Timelinegrouped1 } from '../../../../shared/data/charts/apexcharts/timelinedata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Timelinecharts = () => {
    return (
        <Fragment>
            <Seo title={"Timelinecharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Timeline Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic TImeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-basic">
                                    <Basictimeline />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Colored TImeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-colors">
                                    <Multiplecolored />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multi Series Timeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-multi">
                                    <Timelinegrouped1 />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Advanced Timeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-advanced">
                                    <Advancedmultirange />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Timeline-Grouped Rows</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-grouped">
                                    <Timelinegrouped />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Timelinecharts.layout = "Contentlayout";
export default Timelinecharts;
