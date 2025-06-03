import { FC, Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from '../../../shared/data/maps/vectordata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Vectormaps = () => {
    const [content, setContent] = useState("");
    return (
        <Fragment>
            <Seo title={"Vector Maps"} />
            <PageheaderDB heading="Maps" active="Vector Maps" />
            <div className="main-container container-fluid">
                <div className="container-fluid">
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Basic Vector Map</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="vector-map" className='w-100 d-flex gap-sm-5 overflow-auto jvm-container'>
                                        <WorldMap setTooltipContent={setContent} />

                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Graticule Map</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="marker-map" className='w-100 d-flex gap-sm-5  jvm-container'>
                                        <Shapeworldmap />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Annotation Map</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="marker-image-map" className='w-100 d-flex gap-5 overflow-auto jvm-container'>
                                        <MapAnnotation />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>USA Map</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="lines-map" className='w-100 d-flex gap-sm-5 overflow-auto jvm-container'>
                                        <USState />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};
Vectormaps.layout = "Contentlayout";
export default Vectormaps;
