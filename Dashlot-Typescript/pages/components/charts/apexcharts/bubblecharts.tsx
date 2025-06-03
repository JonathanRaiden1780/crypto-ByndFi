import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Bubble3D, Simplebubble } from '../../../../shared/data/charts/apexcharts/bubbledata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Bubblecharts = () => {
    return (
        <Fragment>
            <Seo title={"Bubblecharts"} />
            <PageheaderDB title="Apex Bubble Charts" heading="Apex Charts" active="Apex Bubble Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Simple Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bubble-simple">
                                    <Simplebubble />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>3D Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bubble-3d">
                                    <Bubble3D />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Bubblecharts.layout = "Contentlayout";
export default Bubblecharts;
