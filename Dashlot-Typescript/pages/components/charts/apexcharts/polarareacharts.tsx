import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicpolararea, Monochromepolar } from '../../../../shared/data/charts/apexcharts/polarareadata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Polarareacharts = () => {
    return (
        <Fragment>
            <Seo title={"Polarareacharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Polar Area Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Polar Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="polararea-basic">
                                    <Basicpolararea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Polar Area Monochrome Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="polararea-monochrome">
                                    <Monochromepolar />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Polarareacharts.layout = "Contentlayout";
export default Polarareacharts;
