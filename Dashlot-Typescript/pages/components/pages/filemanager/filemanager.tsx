import { useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import { Profit, filefolders } from '../../../../shared/data/pages/managerdata';

import Link from 'next/link';
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';



const FileManager = () => {
   //search
   const [allData, setAllData] = useState(filefolders);

   const filemanagerdata: any = [];

   const myfunction = (idx: any) => {
      let Data;
      for (Data of filefolders) {
         if (Data.heading[0] == " ") {
            Data.heading = Data.heading.trim();
         }
         if (Data.heading.toLowerCase().includes(idx.toLowerCase())) {
            if (Data.heading.toLowerCase().startsWith(idx.toLowerCase())) {
               filemanagerdata.push(Data);
            }
         }

      }
      setAllData(filemanagerdata);
   };

   return (

      <>
         <Seo title={"File Manager"} />
         <PageheaderDB heading="Pages" active="File Manager" />

         <div className="main-container container-fluid">

            <Row>
               <Col lg={4} xl={3}>
                  <Card>
                     <Card.Body className="d-flex storage-section">
                        <div className="chart-circle chart-circle-sm chart-circle-primary ms-0 me-4" data-value="0.85" data-thickness="5" data-color="#4454c3">
                           <Profit />
                        </div>
                        <div className="mt-1">
                           <h5 className="mb-1 font-weight-bold">Storage</h5>
                           <p className="mb-0"><span className="text-muted">13.65GB</span> / <span className="text-muted">16GB</span></p>
                        </div>
                     </Card.Body>

                     <Card.Body>
                        <div className="list-group list-group-transparent mb-0 file-manger">
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-image me-2 fs-16 text-muted"></i>Images
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-video me-2 fs-16 text-muted"></i>Videos
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-file me-2 fs-16 text-muted"></i>Docs
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-music me-2 fs-16 text-muted"></i>Music
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-zap me-2 fs-16 text-muted"></i>APK's
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-download me-2 fs-16 text-muted"></i>Downloads
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-layers me-2 fs-16 text-muted"></i>More
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0">
                              <i className="fe fe-lock me-2 fs-16 text-muted"></i>Hidden Files
                           </Link>
                        </div>
                     </Card.Body>
                     <Card.Body>
                        <div className="list-group list-group-transparent mb-0 mail-inbox">
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-primary me-2"></span>Remote Control
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-secondary me-2"></span>Google Drive
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-success me-2"></span>FTP Files
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-info me-2"></span>Transfer files
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-warning me-2"></span>Deep Clean
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-danger me-2"></span>Favourities
                           </Link>
                           <Link href="#!" className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2">
                              <span className="w-3 h-3 rounded-circle bg-primary me-2"></span>Settings
                           </Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={8} xl={9}>
                  <Row>
                     <Col className="mb-3">
                        <div className="btn-list">
                           <Link href="#!" className="btn btn-primary"><i className="fe fe-plus"></i> Upload New Files</Link>
                           <Link href="#!" className="btn btn-outline-primary"><i className="fe fe-folder"></i> New folder</Link>
                        </div>
                     </Col>
                     <Col className="col-auto mb-3">
                        <div className="mb-3 w-100">
                           <InputGroup >
                              <Form.Control type="text" className="form-control br-7"
                                 placeholder="Search in file manager....." onChange={(ele) => { myfunction(ele.target.value); }} />
                              <Button className="btn btn-primary h-25" ><i className="fe fe-search"></i></Button>
                           </InputGroup>
                        </div>
                     </Col>
                  </Row>

                  <Row>
                     {allData.map((folder) => (
                        <Col xl={3} md={4} sm={6} key={Math.random()}>
                           <Card>
                              <div className="d-flex align-items-center px-4 pt-4">
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                 </div>
                                 <Dropdown className="float-end ms-auto">
                                    <Dropdown.Toggle as="a" className="option-dots no-caret"
                                       data-bs-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                    <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
                                       <Dropdown.Item><i
                                          className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                       <Dropdown.Item><i
                                          className={`fe fe-${folder.icon1} me-2`}></i> Share</Dropdown.Item>
                                       <Dropdown.Item><i
                                          className="fe fe-download me-2"></i> Download</Dropdown.Item>
                                       <Dropdown.Item><i
                                          className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                              <Card.Body className="pt-0 text-center">
                                 <div className="file-manger-icon">
                                    {folder.src ? (
                                       <Link href={"/components/pages/filemanager/filedetails/"}>
                                          <img src={folder.src} alt="img" className="br-7" />
                                       </Link>
                                    ) : (
                                       <i className="fa fa-music text-pink"></i>
                                    )}
                                 </div>
                                 <h6 className="mb-1 font-weight-semibold mt-4">{folder.heading}</h6>
                                 <span className="text-muted">{folder.main}</span>
                              </Card.Body>
                           </Card>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </div>

      </ >
   );
};
FileManager.layout = "Contentlayout";

export default FileManager;
