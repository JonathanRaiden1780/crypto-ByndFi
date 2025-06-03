import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { filefolders } from '../../../../shared/data/pages/filemanagerdata';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
const FileManagerList = () => {
    return (
        <>
            <Seo title={"File Manager List"} />
            <PageheaderDB heading="Pages" active="File Manager List" />
            <div className="main-container container-fluid">
                <Row>
                    {filefolders.map((folderlist) => (
                        <Col xl={3} md={4} sm={6} key={Math.random()}>
                            <Card>
                                <div className="d-flex align-items-center px-4 pt-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    <Dropdown className="float-end ms-auto">
                                        <Dropdown.Toggle as="a" className="option-dots no-caret"
                                            data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
                                            <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                            <Dropdown.Item><i className={`fe fe-${folderlist.icon1} me-2`}></i> Share</Dropdown.Item>
                                            <Dropdown.Item><i className="fe fe-download me-2"></i> Download</Dropdown.Item>
                                            <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Card.Body className="pt-0 text-center">
                                    <div className="file-manger-icon">
                                        {folderlist.src ? (
                                            <Link href={"/components/pages/filemanager/filedetails/"}>
                                                <img src={folderlist.src} alt="img" className="br-7" />
                                            </Link>
                                        ) : (
                                            <i className="fa fa-music text-pink"></i>
                                        )}
                                    </div>

                                    <h6 className="mb-1 font-weight-semibold mt-4">{folderlist.heading}</h6>
                                    <span className="text-muted">{folderlist.main}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    );
};
FileManagerList.layout = "Contentlayout";
export default FileManagerList;
