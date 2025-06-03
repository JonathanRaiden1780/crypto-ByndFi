
import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Select from 'react-select';
import { Maindata, Options1, Options2, Options3, Options4, Options5 } from '../../../shared/data/ecommerce/productdata';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { AddToCart } from "../../../shared/redux/action";
import { connect } from "react-redux";
import { useState } from 'react';

const Products = ({ local_varaiable, AddToCart}:any) => {
   const [allData, setAllData] = useState(Maindata);
	const userdata :any= [];
   const myfunction = (idx:any) => {
		let Data;
		for (Data of local_varaiable.ecommercedata) {
			if (Data.title[0] == " ") {
				Data.title = Data.title.trim();
			}
			if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
				if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
					userdata.push(Data);
				}
			}

		}
		setAllData(userdata);
	};
   return (
      <>
         <Seo title={"Products"} />
         <Pageheaderecommerce title="Products" heading='Ecommerce' active='Products' />
         <div className="main-container container-fluid">
            <div>
               <div className="search-product overflow-hidden br-5">
                  <div className="input-group mb-3">
                     <Form.Control type="text" className=" bg-white border-0 border-0 input-xl br-tr-md-0 br-br-md-0" id="text3" placeholder="Search Products" onChange={(ele) => { myfunction(ele.target.value); }}/>
                     <button className="br-tl-md-0 br-bl-md-0 btn btn-sm btn-primary">Search</button>
                  </div>
               </div>
            </div>

            <Row>
               <Col lg={12} xl={9}>
                  <Row className="ecommerce-prod">
                  {allData.map((idx:any) => (
                     <Col sm={6} xxl={4} key={Math.random()}>
                        <Card className="overflow-hidden">
                           <div className="pro-img-box">
                              <Link href="/components/ecommerce/productdetails/" target=""><img src={idx.preview} alt="img" className="img-fluid w-100" /></Link>
                              <ul className="social">
                                 <li><Link href="/components/ecommerce/productinfo/" data-tip="Quick View"><i className="fe fe-heart"></i></Link></li>
                                 <li><Link href="#!" data-tip="Like"><i className="fe fe-thumbs-up"></i></Link></li>
                                 <li><Link href="/components/ecommerce/cart/" data-tip="Add to Cart" onClick={() => { AddToCart(idx.id); }} ><i className="fe fe-shopping-cart"></i></Link></li>
                              </ul>
                           </div>
                           <div className="product_details">
                              <Link href="#!" className="mb-3 fw-500 h4">{idx.title}</Link>
                              <div className="product-card7-price text-center d-flex justify-content-center mt-2">
                                 <h4 className="mb-1 fw-500 fs-20">${idx.price}</h4>
                                 {idx.oldPrice && <del className="text-muted fs-15 ms-2">${idx.oldPrice}</del>}
                              </div>
                              <div className="text-center text-warning">
                        {Array.from({ length: 5 }, (_, index) => (
                            <i key={index} className={`me-1 fa fa-star${index < idx.rating ? '' : '-o'}`}></i>
                        ))}
                    </div>
                           </div>
                        </Card>
                     </Col>
                     ))}
                     
                  </Row>
                  <Card>
                     <div>
                        <Card.Header>
                           <Card.Title>
                              Deals Of The Day
                           </Card.Title>
                        </Card.Header>
                     </div>
                     <Card.Body>
                        <div>
                           <Swiper
                              centeredSlides={false}
                              autoplay={{
                                 delay: 2500,
                                 disableOnInteraction: true,
                              }}
                              // pagination={{
                              //   clickable: true,
                              // }}
                              breakpoints={{
                                 640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                 },
                                 768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                 },
                                 1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                 },
                                 1400: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                 },
                              }}
                              navigation={true}
                              modules={[Autoplay, Navigation]}
                              className="mySwiper"
                           >
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/7.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Arm chair</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$43</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$56</del>
                                                <span className="text-danger text-end ms-auto float-end">30% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning">
                                          <span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/6.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Handbag</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$53</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$67</del>
                                                <span className="text-danger text-end ms-auto float-end">50% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0">
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/4.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Watch</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$32</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$45</del>
                                                <span className="text-danger text-end ms-auto float-end">40% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/10.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Mens Shirt</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$87</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$125</del>
                                                <span className="text-danger text-end ms-auto float-end">20% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/6.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Kids Frock</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$36</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$49</del>
                                                <span className="text-danger text-end ms-auto float-end">60% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/48.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Laptop</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$99</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$145</del>
                                                <span className="text-danger text-end ms-auto float-end">40% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0">
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/12.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Headphones</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$89</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$59</del>
                                                <span className="text-danger text-end ms-auto float-end">50% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="item">
                                    <Card className="box-shadow-0 mb-0 overflow-hidden">
                                       <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                       <div className="product-hover p-4 bg-body">
                                          <Link href="#!"><img className="card-img-top br-tr-7 br-tl-7 br-5" src="../../../assets/images/media/1.jpg" alt="" /></Link>
                                          <div className="product-info-buttons">
                                             <Link href="/components/ecommerce/productdetails/" className="btn btn-primary me-1"><i className="fa fa-eye"></i></Link>
                                             <Link href="/components/ecommerce/cart/" className="btn btn-info"><i className="fa fa-shopping-cart"></i></Link>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="product-hover-data">
                                             <h5 className="font-weight-normal"><Link href="#!">Foot wear</Link></h5>
                                             <div className="product-card7-price d-flex">
                                                <h3 className="mb-1 fw-500 text-primary">$24</h3>
                                                <del className="text-muted fs-15 ms-2 mt-1 d-inline-flex">$12</del>
                                                <span className="text-danger text-end ms-auto float-end">70% off</span>
                                             </div>
                                             <div className="product-hover-footer-l">
                                                <div className="mb-0 text-warning">
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star"></i>
                                                   <i className="me-1 fa fa-star-half-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                   <i className="me-1 fa fa-star-o"></i>
                                                </div>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </div>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </Card.Body>
                  </Card>
                  <div className="center-block text-center">
                     <ul className="pagination">
                        <li className="page-item page-prev disabled">
                           <Link className="page-link" href="#!" tabIndex={-1}>Prev</Link>
                        </li>
                        <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                        <li className="page-item page-next">
                           <Link className="page-link" href="#!">Next</Link>
                        </li>
                     </ul>
                  </div>
               </Col>
               <Col xl={3} lg={12}>
                  <Row>
                     <Col md={12} lg={12}>
                        <form className="shop__filter card">
                           <div>
                              <Card.Header>
                                 <h3 className='card-title'>Colors</h3>
                              </Card.Header>
                           </div>
                           <Card.Body>
                              <div className="row gutters-xs">
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="primary" className="colorinput-input" defaultChecked />
                                       <span className="colorinput-color bg-primary"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="secondary" className="colorinput-input" />
                                       <span className="colorinput-color bg-secondary"></span>
                                    </label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="info" className="colorinput-input" />
                                       <span className="colorinput-color bg-info"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="success" className="colorinput-input" />
                                       <span className="colorinput-color bg-success"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="warning" className="colorinput-input" />
                                       <span className="colorinput-color bg-warning"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="danger" className="colorinput-input" />
                                       <span className="colorinput-color bg-danger"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="purple" className="colorinput-input" />
                                       <span className="colorinput-color bg-purple"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="indigo" className="colorinput-input" />
                                       <span className="colorinput-color bg-indigo"></span>
                                    </Form.Label>
                                 </div>
                                 <div className="col-auto">
                                    <Form.Label className="colorinput">
                                       <Form.Control name="color" type="radio" defaultValue="cyan" className="colorinput-input" />
                                       <span className="colorinput-color bg-cyan"></span>
                                    </Form.Label>
                                 </div>
                              </div>
                           </Card.Body>
                        </form>
                        <Card>
                           <div>
                              <Card.Header>
                                 <h3 className='card-title'>Categories</h3>
                              </Card.Header>
                           </div>
                           <Card.Body>
                              <Form.Group className="form-group mb-3">
                                 <Form.Label className="form-label">Mens</Form.Label>
                                 <Select name="beast" options={Options1} id="select-beast" classNamePrefix='Select2'
                                    defaultValue={[Options1[0]]} />

                              </Form.Group>
                              <div className="form-group mb-3">
                                 <Form.Label className="form-label">Women</Form.Label>
                                 <Select name="beast" options={Options2} id="select-beast" classNamePrefix='Select2' defaultValue={[Options1[0]]} />

                              </div>
                              <div className="form-group mb-3">
                                 <Form.Label className="form-label">Baby & Kids</Form.Label>
                                 <Select name="beast" id="select-beast2" options={Options3} classNamePrefix='Select2' defaultValue={[Options1[0]]} />

                              </div>
                              <div className="form-group mb-3">
                                 <Form.Label className="form-label">Electronics</Form.Label>
                                 <Select name="beast" id="select-beast3" options={Options4} classNamePrefix='Select2' defaultValue={[Options1[0]]} />

                              </div>
                              <div className="form-group">
                                 <Form.Label className="form-label">Sport,Books & More </Form.Label>
                                 <Select name='beast' id="select-beast4" classNamePrefix='Select2' defaultValue={[Options1[0]]} options={Options5} />
                              </div>
                           </Card.Body>
                        </Card>

                        <form className="shop__filter card">
                           <div>
                              <Card.Header>
                                 <h3 className='card-title'>Price</h3>
                              </Card.Header>
                           </div>
                           <Card.Body>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="p1" />
                                 <label className="form-check-label d-block" htmlFor="p1">Under $25</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="p2" />
                                 <label className="form-check-label d-block" htmlFor="p2">$25 to $50</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="p3" defaultChecked />
                                 <label className="form-check-label d-block" htmlFor="p3">$50 to $100</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="p4" />
                                 <label className="form-check-label d-block" htmlFor="p4">Other (specify)</label>
                              </div>
                           </Card.Body>
                        </form>

                        <form className="shop__filter card">
                           <div>

                              <Card.Header>
                                 <h3 className='card-title'>Brand</h3>
                              </Card.Header>
                           </div>
                           <Card.Body>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="b1" defaultChecked />
                                 <label className="form-check-label d-block" htmlFor="b1">Adidas</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="b2" />
                                 <label className="form-check-label d-block" htmlFor="b2">Calvin Klein</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="b3" />
                                 <label className="form-check-label d-block" htmlFor="b3">Tommy Hilfiger</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="b4" />
                                 <label className="form-check-label d-block" htmlFor="b4">Not specified</label>
                              </div>
                           </Card.Body>
                        </form>
                        <form className="shop__filter card">
                           <div>
                              <Card.Header>
                                 <h3 className='card-title'>Material</h3>
                              </Card.Header>
                           </div>
                           <Card.Body>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="m1" defaultChecked />
                                 <label className="form-check-label d-block" htmlFor="m1">100% Cotton</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="m2" />
                                 <label className="form-check-label d-block" htmlFor="m2">Bamboo</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="m3" />
                                 <label className="form-check-label d-block" htmlFor="m3">Leather</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="m4" />
                                 <label className="form-check-label d-block" htmlFor="m4">Polyester</label>
                              </div>
                              <div className="form-check mb-2 flex-grow-1">
                                 <Form.Check className="" type="checkbox" id="m5" />
                                 <label className="form-check-label d-block" htmlFor="m5">Not specified</label>
                              </div>
                           </Card.Body>
                        </form>
                     </Col>
                  </Row>
               </Col>
            </Row>

         </div>

      </>
   );
};
Products.layout = "Contentlayout";
const mapStateToProps = (state:any) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Products);
// export default Products

