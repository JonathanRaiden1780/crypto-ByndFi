import { FC, useState } from 'react';
import { Card, Col, Collapse, Modal, Row } from 'react-bootstrap';
import { Third, first, second } from '../../../shared/data/components/ribbondata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';


const Ribbons = () => {
   // Collapse
   const [BasicExpanded, setBasicExpanded] = useState(true);
   const [BasicExpanded1, setBasicExpanded1] = useState(true);
   const [BasicExpanded2, setBasicExpanded2] = useState(true);
   const [BasicExpanded3, setBasicExpanded3] = useState(true);
   const BasicHandleExpandClick = () => {
      setBasicExpanded(!BasicExpanded);
   };
   const BasicHandleExpandClick1 = () => {
      setBasicExpanded1(!BasicExpanded1);
   };
   const BasicHandleExpandClick2 = () => {
      setBasicExpanded2(!BasicExpanded2);
   };
   const BasicHandleExpandClick3 = () => {
      setBasicExpanded3(!BasicExpanded3);
   };
   // Close Button
   const [Basicshow, setBasicshow] = useState(true);
   const [Basicshow1, setBasicshow1] = useState(true);
   const [Basicshow2, setBasicshow2] = useState(true);
   const [Basicshow3, setBasicshow3] = useState(true);
   //fullscreen
   const [fullScreen, setFullscreen] = useState('true');
   const [fullscreenshow, setfullscreenShow] = useState(false);
   const fullscreenmodalClose = () => setfullscreenShow(false);
   function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setfullscreenShow(true);
   }

   const [fullScreen1, setFullscreen1] = useState('true');
   const [fullscreenshow1, setfullscreenShow1] = useState(false);
   const fullscreenmodalClose1 = () => setfullscreenShow1(false);
   function handleShow1(breakpoint: any) {
      setFullscreen1(breakpoint);
      setfullscreenShow1(true);
   }

   const [fullScreen2, setFullscreen2] = useState('true');
   const [fullscreenshow2, setfullscreenShow2] = useState(false);
   const fullscreenmodalClose2 = () => setfullscreenShow2(false);
   function handleShow2(breakpoint: any) {
      setFullscreen2(breakpoint);
      setfullscreenShow2(true);
   }

   const [fullScreen3, setFullscreen3] = useState('true');
   const [fullscreenshow3, setfullscreenShow3] = useState(false);
   const fullscreenmodalClose3 = () => setfullscreenShow3(false);
   function handleShow3(breakpoint: any) {
      setFullscreen3(breakpoint);
      setfullscreenShow3(true);
   }

   return (

      <>
         <Seo title={"Ribbons"} />
         <PageheaderDB heading="Components" active="Ribbons" />
         <div className="main-container container-fluid">
            <Row>
               <Col xl={12}>
                  {Basicshow ?
                     <Card className="card1">
                        <Card.Header>
                           <Card.Title>Ribbon Styles</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Ribbon Styles</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded} timeout={3000}>
                              <Modal.Body>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon bg-${idx.clr}`} >{idx.name}</div>
                                             <Card.Body>
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon top-right bg-${idx.clr}`}>{idx.name}</div>
                                             <Card.Body>
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon bottom-left bg-${idx.clr}`}>{idx.name}</div>
                                             <Card.Body>
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon bottom-right bg-${idx.clr}`}>{idx.name}</div>
                                             <Card.Body>
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0">
                                             <div className={`arrow-ribbon ribbon-center2 bg-${idx.clr}`}>{idx.name}</div>
                                             <div className="card-body">
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </div>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon ribbon-center3 bg-${idx.clr}`}>{idx.name}</div>
                                             <Card.Body>
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {first.map((idx) => (
                                       <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className="box-shadow-0">
                                             <div className={`arrow-ribbon ribbon-center bg-${idx.clr}`}>{idx.name}</div>
                                             <div className="card-body ms-auto ms-sm-0">
                                                <h4 className="mb-0">{idx.clr}</h4>
                                             </div>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded} timeout={3000}>
                           <Card.Body>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon bg-${idx.clr}`} >{idx.name}</div>
                                          <Card.Body>
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon top-right bg-${idx.clr}`}>{idx.name}</div>
                                          <Card.Body>
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon bottom-left bg-${idx.clr}`}>{idx.name}</div>
                                          <Card.Body>
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon bottom-right bg-${idx.clr}`}>{idx.name}</div>
                                          <Card.Body>
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0">
                                          <div className={`arrow-ribbon ribbon-center2 bg-${idx.clr}`}>{idx.name}</div>
                                          <div className="card-body">
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </div>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon ribbon-center3 bg-${idx.clr}`}>{idx.name}</div>
                                          <Card.Body>
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {first.map((idx) => (
                                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className="box-shadow-0">
                                          <div className={`arrow-ribbon ribbon-center bg-${idx.clr}`}>{idx.name}</div>
                                          <div className="card-body ms-auto ms-sm-0">
                                             <h4 className="mb-0">{idx.clr}</h4>
                                          </div>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>

                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  {Basicshow1 ?
                     <Card className="card2">
                        <Card.Header>
                           <Card.Title>Ribbon Styles</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow1(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow1} fullscreen={fullScreen1} onHide={() => setfullscreenShow1(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Ribbon Styles</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick1}><i className={`fe ${BasicExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose1}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow1(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded1} timeout={3000}>
                              <Modal.Body>
                                 <Row>
                                    {second.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="ribbon ribbon-top-left text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {second.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="ribbon ribbon-top-right text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {second.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="ribbon ribbon-bottom-left text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {second.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="ribbon ribbon-bottom-right text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded1} timeout={3000}>
                           <Card.Body>
                              <Row>
                                 {second.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="ribbon ribbon-top-left text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {second.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="ribbon ribbon-top-right text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {second.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="ribbon ribbon-bottom-left text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {second.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="ribbon ribbon-bottom-right text-primary"><span className={`bg-${idx.clr}`}>{idx.name}</span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  {Basicshow2 ?
                     <Card className="card3">
                        <Card.Header>
                           <Card.Title as="h4">Power Ribbons</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow2(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow2} fullscreen={fullScreen2} onHide={() => setfullscreenShow2(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Power Ribbons</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick2}><i className={`fe ${BasicExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose2}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow2(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded2} timeout={3000}>
                              <Modal.Body>
                                 <Row>
                                    {Third.map((idx) => (
                                       <Col md={6} lg={6} xl={3} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="power-ribbon power-ribbon-top-left text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {Third.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="power-ribbon power-ribbon-top-right text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                                 <Row>
                                    {Third.map((idx) => (
                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="power-ribbon power-ribbon-bottom-left text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}

                                 </Row>
                                 <Row>
                                    {Third.map((idx) => (

                                       <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                          <Card className=" box-shadow-0 overflow-hidden">
                                             <div className="power-ribbon power-ribbon-bottom-right text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                             <Card.Body>
                                                <h3>{idx.clrname}</h3>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                             </Card.Body>
                                          </Card>
                                       </Col>
                                    ))}
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded2} timeout={3000}>
                           <Card.Body>
                              <Row>
                                 {Third.map((idx) => (
                                    <Col md={6} lg={6} xl={3} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="power-ribbon power-ribbon-top-left text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {Third.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="power-ribbon power-ribbon-top-right text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                              <Row>
                                 {Third.map((idx) => (
                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="power-ribbon power-ribbon-bottom-left text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}

                              </Row>
                              <Row>
                                 {Third.map((idx) => (

                                    <Col xl={3} lg={6} md={6} sm={12} className="text-center" key={idx.id}>
                                       <Card className=" box-shadow-0 overflow-hidden">
                                          <div className="power-ribbon power-ribbon-bottom-right text-primary"><span className={`bg-${idx.clr}`}><i className="fa fa-bolt"></i></span></div>
                                          <Card.Body>
                                             <h3>{idx.clrname}</h3>
                                             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text for their infancy</p>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>

            <Row>
               <Col xl={12}>
                  {Basicshow3 ?
                     <Card className='card4'>
                        <Card.Header>
                           <Card.Title as="h4">Image with Ribbons</Card.Title>
                           <div className="card-options ms-auto ">
                              <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                              <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={() => handleShow3(true)}><i className="fe fe-maximize"></i></Link>
                              <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                           </div>
                        </Card.Header>
                        <Modal show={fullscreenshow3} fullscreen={fullScreen3} onHide={() => setfullscreenShow3(false)}>
                           <Modal.Header>
                              <h3 className='card-title p-2'>Image with Ribbons</h3>
                              <div className="card-options ms-auto ">
                                 <Link href="#!" className="card-options-collapse" data-bs-toggle="collapse" data-bs-target="#collapseExample-13" onClick={BasicHandleExpandClick3}><i className={`fe ${BasicExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                                 <Link href="#!" className="card-options-fullscreen" data-bs-toggle="card-fullscreen" onClick={fullscreenmodalClose3}><i className="fe fe-maximize"></i></Link>
                                 <Link href="#!" className="card-options-remove" data-bs-toggle="card-remove" onClick={() => setBasicshow3(false)}><i className="fe fe-x"></i></Link>
                              </div>
                           </Modal.Header>
                           <Collapse className="" in={BasicExpanded3} timeout={3000}>
                              <Modal.Body>
                                 <Row>
                                    <Col md={12} lg={6} xl={4}>
                                       <div className="ribbon-model rounded-3">
                                          <span className="ribbon2">R<br />I<br />B<br />B<br />O<br />N</span>
                                       </div>
                                    </Col>
                                    <Col md={12} lg={6} xl={4}>
                                       <div className="ribbon-model rounded-3">
                                          <span className="ribbon3">Ribbon</span>
                                       </div>
                                    </Col>
                                    <Col md={12} lg={6} xl={4}>
                                       <div className="ribbon-model rounded-3">
                                          <span className="ribbon4">Ribbon</span>
                                       </div>
                                    </Col>
                                    <Col md={12} lg={6} xl={4}>
                                       <div className="ribbon-model rounded-3">
                                          <span className="ribbon5">Ribbon</span>
                                       </div>
                                    </Col>
                                    <Col md={12} lg={6} xl={4}>
                                       <div className="ribbon-model rounded-3">
                                          <div className="wrap">
                                             <span className="ribbon6">Ribbon</span>
                                          </div>
                                       </div>
                                    </Col>
                                 </Row>
                              </Modal.Body>
                           </Collapse>
                        </Modal>
                        <Collapse className="" in={BasicExpanded3} timeout={3000}>
                           <Card.Body id="collapseExample-13">
                              <Row>
                                 <Col md={12} lg={6} xl={4}>
                                    <div className="ribbon-model rounded-3">
                                       <span className="ribbon2">R<br />I<br />B<br />B<br />O<br />N</span>
                                    </div>
                                 </Col>
                                 <Col md={12} lg={6} xl={4}>
                                    <div className="ribbon-model rounded-3">
                                       <span className="ribbon3">Ribbon</span>
                                    </div>
                                 </Col>
                                 <Col md={12} lg={6} xl={4}>
                                    <div className="ribbon-model rounded-3">
                                       <span className="ribbon4">Ribbon</span>
                                    </div>
                                 </Col>
                                 <Col md={12} lg={6} xl={4}>
                                    <div className="ribbon-model rounded-3">
                                       <span className="ribbon5">Ribbon</span>
                                    </div>
                                 </Col>
                                 <Col md={12} lg={6} xl={4}>
                                    <div className="ribbon-model rounded-3">
                                       <div className="wrap">
                                          <span className="ribbon6">Ribbon</span>
                                       </div>
                                    </div>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Collapse>
                     </Card>
                     : null}
               </Col>
            </Row>
         </div>
      </>
   );
};
Ribbons.layout = "Contentlayout";
export default Ribbons;
