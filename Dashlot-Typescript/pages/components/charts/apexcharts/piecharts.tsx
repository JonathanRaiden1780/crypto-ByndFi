import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicpiechart, Donutwithpattern, Gradientpie, Imagefilledpie, Monochrome, Simpledonut, Updatingdonut } from '../../../../shared/data/charts/apexcharts/piechartdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Piecharts = () => {
    return (
        <Fragment>
            <Seo title={"Piecharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Pie Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-basic">
                                    <Basicpiechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Simple Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="donut-simple">
                                    <Simpledonut />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Updating Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Updatingdonut />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Monochrome Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-monochrome">
                                    <Monochrome />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Gradient Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="donut-gradient">
                                    <Gradientpie />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Donut Chart With Patterns</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="donut-pattern">
                                    <Donutwithpattern />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Image Filled Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-image">
                                    <Imagefilledpie />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
};
Piecharts.layout = "Contentlayout";
export default Piecharts;
