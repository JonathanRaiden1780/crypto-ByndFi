import { FC, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Modal, ProgressBar, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { project, project2 } from '../../../shared/data/crm/projectsdata';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const Projects = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (

      <>
         <Seo title={"Projects"} />
         <div className="page-header">
            <div className="flex-grow-1 py-2-5">
               <h4 className="page-title mb-1">CRM Projects</h4>
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                     <li className="breadcrumb-item"><Link href="/components/crm/crmdashboard/" className="text-primary">CRM</Link></li>
                     <li className="breadcrumb-item active" aria-current="page">Projects</li>
                  </ol>
               </nav>
            </div>
            <div className="min-w-fit-content d-flex align-items-center">
               <div className="flex-grow-1 py-2-5">
                  <InputGroup className="input-group">
                     <Form.Control type="search" className="form-control" placeholder="Search any project..." />
                     <Button variant='primary-transparent' href="#" className=""><i className="ti ti-search"></i></Button>
                  </InputGroup>
               </div>
               <div className="vr mx-3"></div>
               <div className="flex-grow-1 py-2-5">
                  <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProjectModal" onClick={handleShow}><i className="fe fe-briefcase me-1"></i> Create New</a>
                  <Modal show={show} onHide={handleClose} size="lg">
                     <Modal.Header closeButton>
                        <h5 className='modal-title'>Add Project</h5>
                     </Modal.Header>
                     <Modal.Body>
                        <Form>
                           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Project Name:</Form.Label>
                              <Form.Control
                                 type="text"
                                 placeholder="Enter Project Name"
                                 autoFocus
                              />
                           </Form.Group>
                           <Form.Label className='mt-3'>Project Description:</Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="name@example.com"

                           />
                           <Form.Label className='mt-3'>Rank:</Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Enter Project Name"

                           />
                           <Form.Label className='mt-3'>Budget:</Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Enter Project Name"

                           />
                           <Form.Label className='mt-3'>Deadline:</Form.Label>
                           <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                           <Form.Label className='mt-3'>Team:</Form.Label>
                           <Form.Control
                              type="text"


                           />
                        </Form>
                     </Modal.Body>
                     <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                           Close
                        </Button>
                        <Button variant="primary"
                        >
                           Save Changes
                        </Button>
                     </Modal.Footer>
                  </Modal>

               </div>
            </div>
         </div>

         <div className="main-container container-fluid">
            <Row>
               {project.map((idx: any) => (
                  <Col md={12} lg={6} xxl={3} key={idx.Name}>
                     <Card>
                        <Card.Header>
                           <Card.Title as="h6" >{idx.Name}</Card.Title>
                        </Card.Header>
                        <Card.Body>

                           <div className="ibox-content teams">
                              <h5 className="mb-2">Team</h5>
                              <div className="mb-4 avatar-list-stacked">
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/2.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/5.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/12.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/4.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/8.jpg" alt="img" />
                                 <Link href="#!" className="avatar avatar-sm rounded-circle text-bg-primary">+8</Link>
                              </div>
                              <h5 className="mb-2">Description:</h5>
                              <p className="text-muted fs-14 mb-4">{idx.data}</p>

                              <div className="d-sm-flex align-items-center justify-content-between fw-500 mb-4 gap-1">
                                 <div className='started-content'>
                                    <span className="me-1 text-gray-600 d-inline-flex">Started:</span>
                                    <span className="text-info">{idx.sdate}</span>
                                 </div>
                                 <div className='deadline-content'>
                                    <span className="me-1 text-gray-600 d-inline-flex">Deadline:</span>
                                    <span className="text-danger">{idx.edate}</span>
                                 </div>
                              </div>
                              <h5 className="mb-1 fw-500">{idx.Project}</h5>
                              <div className="d-flex align-items-center mb-3">
                                 <ProgressBar className="progress progress-xs flex-grow-1" variant={idx.progress} now={idx.noww} />
                                 <span className="min-w-fit-content ms-3 fw-500">{idx.noww}%</span>
                              </div>
                              <Row className='mb-4'>
                                 <Col xl={4} sm={12} md={4}>
                                    <p className="mb-1 fw-500 text-gray-600">Projects</p>
                                    <span className="fs-14 fw-500">{idx.Projects}</span>
                                 </Col>
                                 <Col xl={4} sm={12} md={4}>
                                    <p className="mb-1 fw-500 text-gray-600">Ranking</p>
                                    <span className="fs-14 fw-500">{idx.Ranking}</span>
                                 </Col>

                                 <Col xl={4} sm={12} md={4}>
                                    <p className="mb-1 fw-500 text-gray-600">Budget</p>
                                    <span className="fs-14 fw-500">{idx.Budget}</span>
                                 </Col>
                              </Row>
                              <Link href="/components/crm/projectdescription/" className="btn btn-primary">Learn More</Link>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}

               {project2.map((idx: any) => (
                  <Col lg={6} md={12} xxl={3} key={idx.Name}>
                     <Card className="overflow-hidden">
                        <div className="power-ribbon power-ribbon-top-left">
                           <span className={idx.icon1}><i className={idx.icon2}></i></span>
                        </div>
                        <img src={idx.img} alt="img" className="card-img-top img-fluid" />
                        <span className="badge bg-white-transparent absolute-top-end">Ongoing</span>
                        <Card.Body>
                           <h4 className="mb-2">{idx.Name}</h4>
                           <div className="mb-4">
                              <Link href="#!" className="me-2 text-gray-600">
                                 <i className="ti ti-list fs-14 me-1"></i>
                                 <span className='d-inline-flex'>{idx.task}</span>
                              </Link>
                              <Link href="#!" className="me-2 text-gray-600">
                                 <i className="ti ti-message-dots fs-14 me-1"></i>
                                 <span className='d-inline-flex'>{idx.messages}</span>
                              </Link>
                           </div>
                           <div className="d-flex mb-4 align-items-center">
                              <h5 className="mb-0 me-2">Team :</h5>
                              <div className="avatar-list-stacked">
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/1.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/5.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/12.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/4.jpg" alt="img" />
                                 <img className="avatar avatar-sm rounded-circle" src="../../../assets/images/users/8.jpg" alt="img" />
                                 <Link href="#!" className="avatar avatar-sm rounded-circle text-bg-primary">+8</Link>
                              </div>
                           </div>
                           <div className="d-flex align-items-center mb-4">
                              <h5 className="mb-0 me-2">Status :</h5>
                              <div className={`badge badge-${idx.sclr}`}>{idx.status}</div>
                           </div>
                           <h5 className="mb-1 fw-500">{idx.project}</h5>
                           <div className="d-flex align-items-center">
                              <ProgressBar className="progress progress-xs flex-grow-1 " now={idx.percent} variant={idx.progress} />
                              <span className="min-w-fit-content ms-3 fw-500">{idx.percent}%</span>
                           </div>
                        </Card.Body>
                        <div className="card-footer">
                           <Link href="/components/crm/projectdescription/" className="btn btn-primary">Learn More</Link>
                        </div>
                     </Card>
                  </Col>
               ))}
            </Row>
         </div>
      </>
   );
};
Projects.layout = "Contentlayout";
export default Projects;
