
import { Card, Col, Row } from 'react-bootstrap';
import { Data1 } from '../../../shared/data/cryptocurrency/newsdata';
import Slider from 'react-slick';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Link from 'next/link.js';
import Seo from '@/shared/layout-components/seo/seo';


const News = () => {

   const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
   };

   return (
      <>

         <Seo title={"News"} />
         <Pageheader title='Crypto News' heading="Crypto Currency" active="News" />
         <div className="main-container container-fluid">

            <Row>
               <Col xl={12} md={12} lg={12}>
                  <Card>
                     <Card.Body className="news">
                        <div className="best-ticker" id="newsticker10">
                           <div className="bn-label bg-primary text-fixed-white">24 Hours News</div>

                           <ul>
                              <Slider {...settings}>
                                 <li><span><i className="cc BTC text-warning fs-21 mx-2"></i></span>Bitcoin<span className="text-success">$10513.00</span></li>

                                 <li><span><i className="cc ETH text-purple fs-21 mx-2"></i></span>Ethereum <span className="text-danger">$966.61</span></li>
                                 <li><span><i className="cc XRP text-info fs-21 mx-2"></i></span>Ripple <span className="text-danger">$1.2029</span></li>
                                 <li><span><i className="cc NMC text-danger fs-21 mx-2"></i></span>Namecoin <span className="text-success">$1547.00</span></li>
                                 <li><span><i className="cc DOGE text-warning fs-21 mx-2"></i></span>Dogecoin <span className="text-danger">$0.550768</span></li>
                                 <li><span><i className="cc LTC text-default fs-21 mx-2"></i></span>Litecoin <span className="text-danger">$173.86</span></li>
                                 <li><span><i className="cc EOS text-purple fs-21 mx-2"></i></span>EOS <span className="text-success">$13.394</span></li>
                                 <li><span><i className="cc GAME text-warning fs-21 mx-2"></i></span>Game <span className="text-danger">$0.467813</span></li>
                                 <li><span><i className="cc NEO text-green fs-21 mx-2"></i></span>NEO <span className="text-danger">$118.61</span></li>
                                 <li><span><i className="cc IOTA text-purple fs-21 mx-2"></i></span>IOTA <span className="text-success">$2.34</span></li>
                                 <li><span><i className="cc DASH text-info fs-21 mx-2"></i></span>Dash <span className="text-danger">$747.222</span></li>
                                 <li><span><i className="cc POT text-success fs-21 mx-2"></i></span>PotCoin <span className="text-success">$0.935049</span></li>
                                 <li><span><i className="cc XMR text-blue fs-21 mx-2"></i></span>Monero <span className="text-danger">$305.16</span></li>
                                 <li><span><i className="cc NOTE text-dark fs-21 mx-2"></i></span>DNotes <span className="text-success">$0.067691</span></li>
                                 <li><span><i className="cc BTC text-warning fs-21 mx-2"></i></span>Bitcoin Gold <span className="text-success">$181.39</span></li>
                              </Slider>
                           </ul>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

            <Row>
               {Data1.map((idx) => (
                  <Col key={idx.id} xl={3} lg={6} md={6} sm={12}>
                     <Card>
                        <Link href="#!"></Link>
                        <img src={idx.src} alt="img" className="card-img-top cover-image" />
                        <span className={idx.classname1}>Crypto</span>
                        <Card.Body>
                           <div className="d-flex fs-14 mb-3">
                              <div className="float-start d-sm-flex">
                                 <div className="me-3">
                                    <i className="fe fe-calendar text-muted me-1"></i>
                                    <span>MAY 31,2022</span>
                                 </div>
                                 <div>
                                    <i className="fe fe-user text-muted me-1"></i>
                                    <span>ADMIN</span>
                                 </div>
                              </div>
                              <div className="float-end ms-auto">
                                 <span className="text-muted me-3"><i className="fa fa-comment-o"></i></span>
                                 <span className="text-muted"><i className="fa fa-heart-o"></i></span>
                              </div>
                           </div>
                           <Link href="#!"><h4 className="fw-500">Sed ut perspiciatis unde omnis</h4></Link>
                           <p>Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem </p>
                           <Link href="#!" className="btn btn-primary btn-sm">Read More</Link>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>

         </div>

      </>
   );
};
News.layout = "Contentlayout";
export default News;
