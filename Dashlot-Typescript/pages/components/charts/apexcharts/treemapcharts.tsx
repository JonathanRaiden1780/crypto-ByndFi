import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basictreemap, Colorrangetree, Distributedtree, Multidimensional } from '../../../../shared/data/charts/apexcharts/treemapdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';



const Treemapcharts = () => {
    return (
        <Fragment>
            <Seo title={"Treemapcharts"} />
            <PageheaderDB title="Apex Treemap Charts" heading="Apex Charts" active="Apex Treemap Charts" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-basic">
                                    <Basictreemap />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multi Dimensional Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-multi">
                                    <Multidimensional />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Distributed Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-distributed">
                                    <Distributedtree />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Treemap with color ranges</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-colorranges">
                                    <Colorrangetree />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Treemapcharts.layout = "Contentlayout";
export default Treemapcharts;
