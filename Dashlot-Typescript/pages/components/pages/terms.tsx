import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';


const Terms = () => {
   return (
      <>
         <Seo title={"Terms"} />
         <PageheaderDB heading="Pages" active="Terms" />
         <div className="main-container container-fluid">
            <Row>
               <div>
                  <p className="fw-500 text-uppercase text-muted-dark mb-1 fs-13">Agreement</p>
                  <h2 className="fw-500">Terms of services</h2>
               </div>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <h5 className="fw-500">Welcome to Sparic</h5>
                        <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                           praising pain was born and I will give you a complete account of the system,
                           and
                           expound the actual teachings of the great explorer of the truth, the
                           master-builder of human happiness. No one rejects, dislikes, or avoids
                           pleasure
                           itself, because it is pleasure, but because those who do not know how to
                           pursue
                           pleasure rationally encounter consequences</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <h5 className="fw-500">Using Our Services</h5>
                        <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                           praising pain was born and I will give you a complete account of the system,
                           and
                           expound the actual teachings of the great explorer of the truth, the
                           master-builder of human happiness. No one rejects, dislikes, or avoids
                           pleasure
                           itself, because it is pleasure, but because those who do not know how to
                           pursue
                           pleasure rationally encounter consequences</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <h5 className="fw-500">Privacy policy</h5>
                        <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                           praising pain was born and I will give you a complete account of the system,
                           and
                           expound the actual teachings of the great explorer of the truth, the
                           master-builder of human happiness. No one rejects, dislikes, or avoids
                           pleasure
                           itself, because it is pleasure, but because those who do not know how to
                           pursue
                           pleasure rationally encounter consequences</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <h5 className="fw-500">Copyright</h5>
                        <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                           praising pain was born and I will give you a complete account of the system,
                           and
                           expound the actual teachings of the great explorer of the truth, the
                           master-builder of human happiness. No one rejects, dislikes, or avoids
                           pleasure
                           itself, because it is pleasure, but because those who do not know how to
                           pursue
                           pleasure rationally encounter consequences</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <h5 className="fw-500">Terms and Conditions</h5>
                        <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                           praising pain was born and I will give you a complete account of the system,
                           and
                           expound the actual teachings of the great explorer of the truth, the
                           master-builder of human happiness. No one rejects, dislikes, or avoids
                           pleasure
                           itself, because it is pleasure, but because those who do not know how to
                           pursue
                           pleasure rationally encounter consequences</p>
                        <ul className="text-muted-dark">
                           <li><i className="fa fa-angle-double-right me-1"></i> ducimus qui blanditiis
                              praesentium
                              voluptatum deleniti atque corrupti quos dolores </li>
                           <li><i className="fa fa-angle-double-right me-1"></i> quas molestias excepturi sint
                              occaecati cupiditate non provident</li>
                           <li><i className="fa fa-angle-double-right me-1"></i> Nam libero tempore, cum soluta
                              nobis est eligendi optio cumque</li>
                           <li><i className="fa fa-angle-double-right me-1"></i> Temporibus autem quibusdam et
                              aut
                              officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                           </li>
                           <li><i className="fa fa-angle-double-right me-1"></i> repudiandae sint et molestiae
                              non
                              recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
                           <li><i className="fa fa-angle-double-right me-1"></i> ut aut reiciendis voluptatibus
                              maiores alias consequatur aut perferendis doloribus asperiores repellat
                           </li>
                        </ul>
                        <div className="d-flex align-items-center mt-5">
                           <Link href="#!" className="fs-15 fw-500">
                              <i className="bi bi-file-earmark-pdf fs-5"></i>
                              Download
                           </Link>
                           <div className="btn-list ms-auto text-end">
                              <Link className="btn btn-outline-default fw-500" href="#!">Not right now...</Link>
                              <Link className="btn btn-primary fw-500" href="#!">I agree with terms</Link>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>

      </>
   );
};
Terms.layout = "Contentlayout";
export default Terms;

