
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const BlogDetails = () => {
    return (
        <>
            <Seo title={"Blog Details"} />
            <PageheaderDB heading="Pages" active="Blog Details" />


            <div className="main-container container-fluid">


                <Row>
                    <Col xl={9} lg={12} md={12}>
                        <Card className="overflow-hidden">
                            <div className="item7-card-img px-4 pt-4">
                                <Link href="#!"></Link>
                                <img src="../../../../assets/images/background/29.jpg" alt="img" className="cover-image rounded-2 w-100" />
                            </div>
                            <Card.Body>
                                <Link href="#!" className="mt-4"><h5 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5></Link>
                                <p className="">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
                                <p className="mb-0">but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example</p>
                            </Card.Body>
                            <Card.Footer className="pb-2 pt-2">
                                <div className="item7-card-desc d-md-flex">
                                    <div className="d-flex align-items-center mt-0">
                                        <img src="../../../../assets/images/users/2.jpg" className="avatar rounded-circle avatar-md me-3" alt="avatar-img" />
                                        <div>
                                            <Link href={"/components/pages/profile/"} className="font-weight-bold">Lilly Potter</Link>
                                            <small className="d-block text-muted">1 day ago</small>
                                        </div>
                                    </div>
                                    <div className="ms-auto mb-2 d-flex mt-3">
                                        <Link href="#!" className="me-3 mb-2 d-flex"><span className="fe fe-calendar text-muted me-2 fs-17"></span><div className="mt-0 mt-0">Jan-18-2020</div></Link>
                                        <Link className="me-0 d-flex" href="#!"><span className="fe fe-message-square text-muted me-2 fs-17"></span><div className="mt-0 mt-0">12 Comments</div></Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <div className="">
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h3">Comments</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-sm-flex mt-0 p-3 sub-review-section border">
                                        <div className="d-flex me-3">
                                            <Link href="#!"><img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../../assets/images/users/1.jpg" /> </Link>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1 d-inline-flex align-items-center">Joanne Scott &nbsp;
                                                <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="verified"><i className="fe fe-check-circle text-success fs-12"></i></span>
                                                <span className="fs-14 ms-2"> 4.5 <i className="fa fa-star text-warning"></i></span>
                                            </h5>
                                            <p className="font-13  mb-2 mt-2">
                                                Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris   commodo consequat.
                                            </p>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-primary"><span className="me-1 fe fe-thumbs-up fs-11"></span>Helpful</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-success "><span className="me-1 fe fe-edit-2 fs-11"></span>Comment</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-warning"><span className="me-1 fe fe-alert-triangle fs-11"></span>Report</span></Link>
                                            <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                <Button className="btn-light" variant=''><span className="fe fe-thumbs-up fs-16"></span></Button>
                                                <Button className="btn-light" variant='' ><span className="fe fe-thumbs-down fs-16"></span></Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex p-3 mt-4 sub-review-section border subsection-color">
                                        <div className="d-flex me-3">
                                            <Link href="#!">
                                                <img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../../assets/images/users/2.jpg" />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">Rose Slater <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="verified"><i className="fe fe-check-circle text-success fs-12"></i></span></h5>
                                            <p className="font-13  mb-2 mt-2">
                                                Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris   commodo consequat.
                                            </p>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-primary"><span className="me-1 fe fe-thumbs-up fs-11"></span>Helpful</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-success "><span className="me-1 fe fe-edit-2 fs-11"></span>Comment</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-warning"><span className="me-1 fe fe-alert-triangle fs-11"></span>Report</span></Link>
                                            <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                <Button className="btn btn-light" variant='' ><span className="fe fe-thumbs-up fs-16"></span></Button>
                                                <Button className="btn btn-light" variant='' ><span className="fe fe-thumbs-down fs-16"></span></Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex p-3  mt-4 sub-review-section border subsection-color">
                                        <div className="d-flex me-3">
                                            <Link href="#!"><img className="media-object rounded-circle avatar avatar-md" alt="64x64" src="../../../../assets/images/users/6.jpg" /> </Link>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">Camila cabello <span className="fs-14 ms-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="verified"><i className="fe fe-check-circle text-success fs-12"></i></span></h5>
                                            <p className="font-13  mb-2 mt-2">
                                                Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris   commodo consequat.
                                            </p>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-primary"><span className="me-1 fe fe-thumbs-up fs-11"></span>Helpful</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-success "><span className="me-1 fe fe-edit-2 fs-11"></span>Comment</span></Link>
                                            <Link href="#!" className="me-2 mt-1"><span className="badge bg-warning"><span className="me-1 fe fe-alert-triangle fs-11"></span>Report</span></Link>
                                            <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                <Button className="btn btn-light" variant='' ><span className="fe fe-thumbs-up fs-16"></span></Button>
                                                <Button className="btn btn-light" variant='' ><span className="fe fe-thumbs-down fs-16"></span></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xl={3} lg={12} md={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title as="h3">Search</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <InputGroup >
                                    <Form.Control placeholder="Enter email..." type="email" />
                                    <Button className="btn btn-primary" type="button">Sign in</Button>
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title as="h3">About Author</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="text-center">
                                    <Link href={"/components/pages/blog/blogdetails/"}><img className="card-img-top w-100 w-100 rounded-1" src="../../../../assets/images/background/11.jpg" alt="" /></Link>
                                    <div className="rounded-3 pt-3 px-0 text-justify">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deleniti voluptas officia accusamus  magnam ullam inventore Lorem ipsum dolor, sit amet consectetur dolorem quibusdam?.
                                        </p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title as="h3" className="mb-1">Popular posts</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group mb-0">
                                    <ListGroup.Item className="list-group-item d-flex border-0 pt-3 px-0">
                                        <img src="../../../../assets/images/background/1.jpg" className="avatar rounded-1 avatar-lg me-3 my-auto" alt="avatar-img" />
                                        <div className="">
                                            <span className="d-block fw-500">Tourism</span>
                                            <Link href="#!" className="text-default fs-12 white-space-nowrap">Explore tourism by visitinig places.</Link>
                                            <small className="d-block text-muted">February 2,2021</small>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="list-group-item d-flex border-0 px-0">
                                        <img src="../../../../assets/images/background/2.jpg" className="avatar rounded-1 avatar-lg me-3 my-auto" alt="avatar-img" />
                                        <div className="">
                                            <span className="d-block fw-500">Beautician</span>
                                            <Link href="#!" className="text-default  fs-12 white-space-nowrap">Beautification courses are available.</Link>
                                            <small className="d-block text-muted">August 14,2021</small>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="list-group-item d-flex pb-3 border-0 px-0">
                                        <img src="../../../../assets/images/background/5.jpg" className="avatar rounded-1 avatar-lg me-3 my-auto" alt="avatar-img" />
                                        <div className="">
                                            <span className="d-block fw-500">Music</span>
                                            <Link href="#!" className="text-default fs-12 white-space-nowrap">Music in a peaceful way </Link>
                                            <small className="d-block text-muted">November 30,2021</small>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title as="h3" className="mb-1">Categories</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="tags">
                                    <Link href="#!" className="tag-1">Life style</Link>
                                    <Link href="#!" className="tag-1">Health</Link>
                                    <Link href="#!" className="tag-1">Tourism</Link>
                                    <Link href="#!" className="tag-1">Web designing</Link>
                                    <Link href="#!" className="tag-1">Medical</Link>
                                    <Link href="#!" className="tag-1">Hotels</Link>
                                    <Link href="#!" className="tag-1">Real estate</Link>
                                    <Link href="#!" className="tag-1">Business</Link>
                                    <Link href="#!" className="tag-1">Shopping</Link>
                                    <Link href="#!" className="tag-1">Marketing</Link>
                                    <Link href="#!" className="tag-1">Housing</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add a Comment</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="mt-2">
                                    <div className="form-group">
                                        <Form.Control type="text" id="name1" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Control type="email" id="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Write Review"></textarea>
                                    </div>
                                    <Link href="#!" className="btn btn-primary">Send Reply</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>

        </>

    );
};
BlogDetails.layout = "Contentlayout";
export default BlogDetails;
