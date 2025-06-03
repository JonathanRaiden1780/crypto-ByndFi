import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { client } from '../../../shared/data/crm/clientsdata';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import DatePicker from 'react-datepicker';
interface ClientsProps { }

const Clients = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date: Date | null) => {
    // Ensure date is defined before setting it
    if (date) {
      setStartDate(date);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Seo title={"Clients"} />
      <div className="page-header">
        <div className="flex-grow-1 py-2-5">
          <h4 className="page-title mb-1">Clients</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link href="/components/crm/crmdashboard/" className="text-primary">CRM</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Clients</li>
            </ol>
          </nav>
        </div>
        <div className="min-w-fit-content d-flex align-items-center">
          <div className="flex-grow-1 py-2-5">
            <div className="input-group">
              <input type="search" className="form-control" placeholder="Search..." />
              <a href="#" className="btn btn-primary-transparent"><i className="ti ti-search"></i></a>
            </div>
          </div>
          <div className="vr mx-3"></div>
          <div className="flex-grow-1 py-2-5">
            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newClientModal" onClick={handleShow}><i className="fe fe-user-plus me-1"></i>Create New</a>

            <Modal size="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <h5 className='modal-title'>Add Project</h5>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <label className="form-label">Project Name:</label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Project Name"
                      autoFocus
                    />
                  </Form.Group >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Description:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="description"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rank:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Rank your project"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Budget:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Budget amount"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Deadline:</Form.Label>

                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      timeInputLabel="Time:"
                      placeholderText='Choose date with time'

                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Team:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>
      </div>

      <div className="main-container container-fluid">
        <Row>
          {client.map((idx: any) => (
            <Col xl={3} key={idx.no}>
              <Card>
                <Card.Body className="text-center">
                  <img src={idx.img} className="avatar avatar-xxl rounded-circle" alt="img" />
                  <h4 className="h4 mb-1 mt-3 ">{idx.name}</h4>
                  <p className="mb-4 mt-1 ">{idx.role}</p>
                  <p className="mb-0 text-primary ">{idx.mail}</p>
                  <div className="d-flex mx-auto align-items-center justify-content-center text-center">
                    <h6 className="text-muted d-flex mb-0 fw-400 me-3"><i className="fa fa-map-marker me-2"></i>{idx.country}</h6>
                    <h6 className="text-muted fw-400 mt-2"><i className="fa fa-phone me-2"></i>{idx.no}</h6>
                  </div>
                  <p className="text-muted text-center mt-1">{idx.text}</p>
                  <div className="justify-content-center text-center mt-3 btn-list">
                    <Link href="#!" className="btn btn-sm btn-primary-transparent"><i className="fa fa-comments"></i></Link>
                    <Link href="#!" className="btn btn-sm btn-secondary-transparent"><i className="fa fa-pencil "></i></Link>
                    <Link href="#!" className="btn btn-sm btn-info-transparent"><i className="fa fa-eye"></i></Link>
                    <Link href="#!" className="btn btn-sm btn-success-transparent"><i className="fa fa-trash"></i> </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>

  );
};
Clients.layout = "Contentlayout";
export default Clients;
