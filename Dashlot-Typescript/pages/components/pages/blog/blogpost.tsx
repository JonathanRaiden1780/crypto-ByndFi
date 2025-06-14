import { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import { Selectdata1, posts2 } from '../../../../shared/data/pages/blogpost';
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const BlogPost = () => {
    const [files, setFiles] = useState<any>([]);

    return (
        <>
            <Seo title={"Blog Post"} />
            <PageheaderDB heading="Pages" active="Blog Post" />
            <div className="main-container container-fluid">
                <Row>
                    <Col lg={12} md={12} className="col-md-12">
                        <Card className="blog-edit">
                            <Card.Body>
                                <div className="form-group">
                                    <Form.Label className="form-label text-default">Course Title</Form.Label >
                                    <Form.Control type="text" className="form-control" defaultValue="Advanced Web Develpment" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label text-default">Category :</label>
                                    <Select options={Selectdata1} classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label text-default" >Instructor :</label>
                                    <div>
                                        <Select options={posts2} classNamePrefix='Select2' placeholder="Pedro Cox" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <Form.Label className="form-label text-default">Type of mode</Form.Label >
                                    <div className="d-md-flex ad-post-details">
                                        <div className="form-check me-3">
                                            <Form.Check className="" name="modes" type="radio" id="online" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="online">Online</Form.Label >
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" name="modes" type="radio" id="offline" />
                                            <Form.Label className="form-check-label" htmlFor="offline">Offline</Form.Label >
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Form.Label className="form-label">Description</Form.Label >
                                    <SunEditor />
                                </div>
                                <div className="form-group">
                                    <Form.Label className="form-label text-default">Course Type</Form.Label >
                                    <div className="d-md-flex ad-post-details">
                                        <div className="form-check me-3">
                                            <Form.Check className="" name="type" type="radio" id="free" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="free">Free</Form.Label >
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" name="type" type="radio" id="paid" />
                                            <Form.Label className="form-check-label" htmlFor="paid">Paid</Form.Label >
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border mb-4 form-group rounded-3">
                                    <FilePond className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <div className="form-group">
                                    <Form.Label className="form-label">Upload Video URL</Form.Label >
                                    <Form.Control type="text" className="form-control" placeholder="https://videos.com" defaultValue="https://www.youtube.com/embed/tMWkeBIohBs" />
                                </div>
                                <div className="control-group form-group  mb-0">
                                    <Form.Label className="form-label text-default">Course Post Package</Form.Label >
                                    <div className=" border p-3 rounded-3">
                                        <div className="d-md-flex ad-post-details">
                                            <div className="form-check me-4">
                                                <Form.Check className="" name="pack" type="radio" id="30days" />
                                                <Form.Label className="form-check-label" htmlFor="30days">30 Days Free</Form.Label >
                                            </div>
                                            <div className="form-check me-4">
                                                <Form.Check className="" name="pack" type="radio" id="60days" defaultChecked />
                                                <Form.Label className="form-check-label" htmlFor="60days">60 days / $20</Form.Label >
                                            </div>
                                            <div className="form-check me-4">
                                                <Form.Check className="" name="pack" type="radio" id="6mon" />
                                                <Form.Label className="form-check-label" htmlFor="6mon">6Months / $50</Form.Label >
                                            </div>
                                            <div className="form-check">
                                                <Form.Check className="" name="pack" type="radio" id="1yr" />
                                                <Form.Label className="form-check-label" htmlFor="1yr">1year / $80</Form.Label >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="card-footer">
                                <Link href="#!" className="btn btn-secondary">Save to Draft</Link>
                                <Link href="#!" className="btn btn-primary float-end">Publish Now</Link>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </div>

        </>
    );
};
BlogPost.layout = "Contentlayout";
export default BlogPost;


