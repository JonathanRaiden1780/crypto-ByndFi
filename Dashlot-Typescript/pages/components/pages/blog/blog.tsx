
import { Card, Col, Row } from 'react-bootstrap';
import { blogs, blogs2 } from '../../../../shared/data/pages/blogdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';



const Blog = () => {
    return (
        <>
            <Seo title={"Blog"} />
            <PageheaderDB heading="Pages" active="Blog" />

            <div className="main-container container-fluid">
                <Row className="row-cards row-deck">
                    {blogs.map((blog) => (
                        <Col md={6} lg={6} xl={3} key={blog.id}>
                            <Card className="overflow-hidden">
                                <Link href={"/components/pages/blog/blogdetails"}>
                                    <img className="card-img-topbr-tr-0 br-tl-0 w-100" src={blog.src} alt="Card image cap" />
                                </Link>
                                <Card.Header>
                                    <Card.Title as="h5">{blog.title} </Card.Title>
                                </Card.Header>
                                <Card.Body >
                                    <p className="card-text">{blog.content}</p>
                                    <Link href="#!" className={`float-end ${blog.className}`}>{blog.text} <i className="fa fa-angle-double-right"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {blogs2.map((blog2) => (
                        <Col md={6} lg={6} xl={3} key={blog2.id}>
                            <Card className="overflow-hidden">
                                <Link href={"/components/pages/blog/blogdetails"}>
                                    <img className="card-img-topbr-tr-0 br-tl-0 w-100" src={blog2.src} alt="Card image cap" />
                                </Link>
                                <Card.Header>
                                    <Card.Title as="h5">Blog title</Card.Title>
                                </Card.Header>
                                <Card.Body >
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#!" className={`btn btn-${blog2.button} btn-md`}>Read more</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    <Col sm={6} xl={3}>
                        <Card className="overflow-hidden">
                            <Link href={"/components/pages/blog/blogdetails"}><img className="card-img-top img1 br-tr-0 br-tl-0" src="../../../../assets/images/background/13.jpg" alt="And this isn&#39;t my nose. This is a false one." /></Link>
                            <Card.Body className="d-flex flex-column">
                                <h4><Link href={"/components/pages/blog/blogdetails"}>voluptatem quia.</Link></h4>
                                <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
                                <div className="d-flex align-items-center pt-3 mt-auto">
                                    <img className="avatar rounded-circle avatar-md me-3 cover-image" src="../../../../assets/images/users/8.jpg" />
                                    <div>
                                        <Link href={"/components/pages/profile/"} className="text-default">Meghana</Link>
                                        <small className="d-block text-muted">1 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} xl={3}>
                        <Card className="overflow-hidden">
                            <Link href={"/components/pages/blog/blogdetails"}><img className="card-img-top img1 br-tr-0 br-tl-0" src="../../../../assets/images/background/14.jpg" alt="Well, I didn&#39;t vote for you." /></Link>
                            <Card.Body className="d-flex flex-column">
                                <h4><Link href={"/components/pages/blog/blogdetails"}>voluptatem quia.</Link></h4>
                                <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
                                <div className="d-flex align-items-center pt-4 mt-2">
                                    <img className="avatar rounded-circle avatar-md me-3 cover-image" src="../../../../assets/images/users/6.jpg" />
                                    <div>
                                        <Link href={"/components/pages/profile/"} className="text-default">Anna Ogden</Link>
                                        <small className="d-block text-muted">2 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} xl={3}>
                        <Card className="overflow-hidden">
                            <Card.Body className="d-flex flex-column">
                                <h4><Link href={"/components/pages/blog/blogdetails"}>voluptatem quia</Link></h4>
                                <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
                                <div className="d-flex align-items-center pt-3 mt-auto">
                                    <img className="avatar  rounded-circle avatar-md me-3 cover-image" src="../../../../assets/images/users/2.jpg" />
                                    <div>
                                        <Link href={"/components/pages/profile/"} className="text-default">Carol Paige</Link>
                                        <small className="d-block text-muted">2 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                            <Link href={"/components/pages/blog/blogdetails"}><img className="card-img-bottom img1 br-br-0 br-bl-0" src="../../../../assets/images/background/15.jpg" alt="How do you know she is a witch?" /></Link>
                        </Card>
                    </Col>

                    <Col sm={6} xl={3}>
                        <Card className="overflow-hidden">
                            <Card.Body className="d-flex flex-column">
                                <h4><Link href={"/components/pages/blog/blogdetails"}>voluptatem quia..</Link></h4>
                                <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut ..</div>
                                <div className="d-flex align-items-center pt-3 mt-auto">
                                    <img className="avatar rounded-circle avatar-md me-3 cover-image" src="../../../../assets/images/users/7.jpg" />
                                    <div>
                                        <Link href={"/components/pages/profile/"} className="text-default">Mila Kunis</Link>
                                        <small className="d-block text-muted">5 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                            <Link href={"/components/pages/blog/blogdetails"}><img className="card-img-bottom img1  br-br-0 br-bl-0" src="../../../../assets/images/background/16.jpg" alt="Shut up!" /></Link>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <div className="card card-aside overflow-hidden">
                            <Link href="/components/pages/blog/blogdetails" className="card-aside-column br-tl-0 br-bl-0 cover-image background-cover background-no-repeat bg-background-17"></Link>
                            <div className="card-body">
                                <h4><Link href="/components/pages/blog/blogdetails">Generator on the Internet..</Link></h4>
                                <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium  sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                <div className="d-flex align-items-center pt-4 mt-auto">
                                    <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src="../../../../assets/images/users/8.jpg" />
                                    <div>
                                        <Link href="/components/pages/profile" className="text-default">Anna Ogden</Link>
                                        <small className="d-block text-muted">1 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <div className="col-lg-6">
                        <div className="card card-aside overflow-hidden">
                            <div className="card-body">
                                <h4><Link href="/components/pages/blog/blogdetails">Nihil molestiae consequatur.</Link></h4>
                                <div className="text-muted">Many desktop publishing packages and web page editors now use  default model text, and a search for will uncover...</div>
                                <div className="d-flex align-items-center pt-4 mt-auto">
                                    <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src="../../../../assets/images/users/6.jpg" />
                                    <div>
                                        <Link href="/components/pages/profile" className="text-default">Irene	Scott</Link>
                                        <small className="d-block text-muted">2 days ago</small>
                                    </div>
                                    <div className="ms-auto text-muted">
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fe fe-heart me-1"></i></Link>
                                        <Link href="#!" className="icon d-none d-md-inline-block ms-3"><i className="fa fa-thumbs-o-up"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <Link href="/components/pages/blog/blogdetails" className="card-aside-column br-br-0 br-tr-0 cover-image background-cover background-no-repeat bg-background-18"></Link>
                        </div>
                    </div>



                </Row>
            </div>

        </>
    );
};
Blog.layout = "Contentlayout";

export default Blog;
