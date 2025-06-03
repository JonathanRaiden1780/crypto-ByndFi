import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Linearea, Linecolumnarea, Mixedlinecolumn, MultipleYaxis } from '../../../../shared/data/charts/apexcharts/mixeddata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';


const Mixedcharts = () => {
    return (
        <Fragment>
            <Seo title={"Mixedcharts"} />
            <PageheaderDB heading="Apex Charts" active="Apex Mixed Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line & Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-linecolumn">
                                    <Mixedlinecolumn />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Y-Axis Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-multiple-y">
                                    <MultipleYaxis />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line & Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-linearea">
                                    <Linearea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line,Column & Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-all">
                                    <Linecolumnarea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Mixedcharts.layout = "Contentlayout";
export default Mixedcharts;
