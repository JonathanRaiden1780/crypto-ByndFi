import { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import { Avataricons, Avatarindicators, Avatarinitials, Avataroffline, Avatarsizes, Avatarstacked } from '../../../shared/data/elements/avatarsdata';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { avatar, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8 } from "../../../shared/data/prismdata/utilitiesdata";
import ShowCode from '@/shared/showcode/showcode';


const Avatars = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    return (
        <Fragment>
            <Seo title={"Avatars"} />
            <PageheaderDB heading="Utilities" active="Avatars" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title=" Avatars" code={avatar} customCardBodyClass="py-4"  >

                            <span className="avatar me-2 avatar-radius-0">
                                <img src="../../../assets/images/faces/1.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2">
                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2 avatar-rounded">
                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                            </span>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar Sizes <p class='subtitle text-muted fs-12 fw-normal'> Avatars of different sizes </p>" code={avatar1} customCardBodyClass=" "  >
                            {Avatarsizes.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar With Icons <p class='subtitle text-muted fs-12 fw-normal'> Avatar contains icons to perform respective action. </p>" code={avatar2} customCardBodyClass=""  >
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill avatar-badge"><i className={idx.icon}></i></Badge>
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar With Online Status Indicators <p class='subtitle text-muted fs-12 fw-normal'> avatars having online status indicator. </p>" code={avatar3} customCardBodyClass=""  >
                            {Avatarindicators.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 online avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar With Ofline Status Indicators <p class='subtitle text-muted fs-12 fw-normal'> avatars having a offline status indicator. </p>" code={avatar4} customCardBodyClass=""  >

                            {Avataroffline.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 offline avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatars With Number Badges <p class='subtitle text-muted fs-12 fw-normal'>
                    Avatar numbers indicates the no. of unread notififactions/messages.
                    </p>" code={avatar5} customCardBodyClass=""  >
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill  avatar-badge">{idx.text}</Badge>
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar With Initials <p class='subtitle text-muted fs-12 fw-normal'> Avatar contains intials when user profile doesn't exist. </p>" code={avatar6} customCardBodyClass=""  >
                            {Avatarinitials.map((idx) => (
                                <span className={`avatar avatar-${idx.class} m-2 bg-${idx.color} text-fixed-white`} key={Math.random()}>{idx.text}
                                </span>
                            ))}
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title=" Stacked Avatars <p class='subtitle text-muted fs-12 fw-normal'>
                    Group of avatars stacked together.
                    </p>" code={avatar7} customCardBodyClass="py-4"  >
                            <div className="avatar-list-stacked">
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary text-fixed-white" href="#!">
                                    +8
                                </Link>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title=" Rounded Stacked Avatars <p class='subtitle text-muted fs-12 fw-normal'>
                    Group of avatars stacked together.
                    </p>" code={avatar8} customCardBodyClass="py-4"  >
                            <div className="avatar-list-stacked">
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar avatar-rounded" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
                                    +8
                                </Link>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Avatars.layout = "Contentlayout";
export default Avatars;
