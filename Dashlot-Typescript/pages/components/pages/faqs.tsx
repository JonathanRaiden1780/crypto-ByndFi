import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Faqs = () => {
    return (
        <>
            <Seo title={"FAQs"} />
            <PageheaderDB heading="Pages" active="FAQs" />
            <div className="main-container container-fluid">
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="fw-500">1. How To Insert All The Plugins?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </Card.Body>
                            <Card.Body>
                                <h4 className="fw-500">2. How Can I contact?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </Card.Body>
                            <Card.Body>
                                <h4 className="fw-500">3. Can I use this Plugins in Another Template?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </Card.Body>
                            <Card.Body>
                                <h4 className="fw-500">4. How Can I Add another page in Template?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </Card.Body>
                            <Card.Body>
                                <h4 className="fw-500">5. It is Easy to Customizable?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </Card.Body>
                            <div className="card-body ">
                                <h4 className="fw-500">6. How can I download This template?</h4>
                                <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
};
Faqs.layout = "Contentlayout";
export default Faqs;
