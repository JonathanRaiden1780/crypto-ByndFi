import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicrangearea, Comborangearea } from '../../../../shared/data/charts/apexcharts/rangeareadata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Rangeareacharts = () => {
    return (
        <Fragment>
            <Seo title={"Rangeareacharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Range Area Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Range Area Chart
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="rangearea-basic">
                                    <Basicrangearea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Combo Range Area Chart
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="rangearea-combo">
                                    <Comborangearea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Rangeareacharts.layout = "Contentlayout";
export default Rangeareacharts;
