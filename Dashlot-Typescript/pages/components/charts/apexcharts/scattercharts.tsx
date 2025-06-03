import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicscatter, Datetimescatter, Imagefillescatter } from '../../../../shared/data/charts/apexcharts/scatterdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Scattercharts = () => {
    return (
        <Fragment>
            <Seo title={"Scattercharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Scatter Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-basic">
                                    <Basicscatter />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Datetime Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-datetime">
                                    <Datetimescatter />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Image Fill Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-image">
                                    <Imagefillescatter />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Scattercharts.layout = "Contentlayout";
export default Scattercharts;
