import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicboxplot, Boxplothorizontal, Boxplotscatter } from '../../../../shared/data/charts/apexcharts/boxplotdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Boxplotcharts = () => {
    return (
        <Fragment>
            <Seo title={"Boxplotcharts"} />
            <PageheaderDB title="Apex Boxplot Charts" heading="Apex Charts" active="Apex Boxplot Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Boxplot Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-basic">
                                    <Basicboxplot />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Boxplot With Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-scatter">
                                    <Boxplotscatter />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Horizontal Boxplot Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-horizontal">
                                    <Boxplothorizontal />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Fragment>
    );
};
Boxplotcharts.layout = "Contentlayout";
export default Boxplotcharts;
