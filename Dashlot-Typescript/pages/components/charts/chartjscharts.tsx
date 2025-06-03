import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Chartjsbar, Chartjsbubble, Chartjsdonut, Chartjsline, Chartjsmixed, Chartjspie, Chartjspolar, Chartjsradial, Chartjsscatter } from '../../../shared/data/charts/chartjsdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Chartjscharts = () => {
    return (
        <Fragment>
            <Seo title={"Chartjs-Charts"} />
            <PageheaderDB heading="Charts" active="Chartjs" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsline />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsbar />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjspie />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Doughnut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsdonut />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Mixed Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsmixed />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Polar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjspolar />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Radial Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsradial />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsscatter />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Chartjs Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chartjsbubble />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Chartjscharts.layout = "Contentlayout";
export default Chartjscharts;
