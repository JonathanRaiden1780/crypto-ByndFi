import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { InputMask } from "@react-input/mask";
import { NumericFormat } from "react-number-format";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageheaderDB from "@/shared/layout-components/pageheader/pageheaderDB";

const Inputmasks = () => {
    const [licensePlate, setLicensePlate] = useState("");

    // Handle changes in the license plate input
    const handleLicensePlateChange = (e: any) => {
        let inputText = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove non-alphanumeric characters
        inputText = inputText.slice(0, 14); // Limit input to a maximum of 14 characters
        const formattedText = formatLicensePlate(inputText);
        setLicensePlate(formattedText);
    };

    // Format the input text into blocks of 4 characters with spaces
    const formatLicensePlate = (inputText: any) => {
        const formattedText = inputText
            .split("")
            .map((char: any, index: any) => (index % 4 === 0 && index !== 0 ? ` ${char}` : char))
            .join("");
        return formattedText;
    };

    const [value1, setValue1] = useState("");

    function onChange1(event: any) {
        setValue1(event.target.value);
    }

    const [value2, setValue2] = useState("");

    function onChange2(event: any) {
        setValue2(event.target.value);
    }

    const [value3, setValue3] = useState("");

    function onChange3(event: any) {
        setValue3(event.target.value);
    }

    const [value4, setValue4] = useState("");

    function onChange4(event: any) {
        setValue4(event.target.value);
    }

    const [value5, setValue5] = useState("");

    function onChange5(event: any) {
        setValue5(event.target.value);
    }
    return (
        <Fragment>
            <Seo title={"Inputmasks"} />
            
            <PageheaderDB heading="Form Elements" active="Input Masks" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Date Format-1
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <InputMask
                                    className="form-control date-format"
                                    mask="dd-mm-yyyy"
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    placeholder="DD-MM-YYYY"
                                    showMask
                                    separate
                                    value={value1} onChange={onChange1}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Date Format-2
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <InputMask className="form-control date-format" mask="dd-mm" replacement={{ d: /\d/, m: /\d/ }} placeholder="MM-DD-YYYY" showMask separate value={value2} onChange={onChange2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Date Format-3
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <InputMask className="form-control date-format" mask="dd-yy" replacement={{ d: /\d/, y: /\d/ }} placeholder="MM-YY" showMask separate value={value3} onChange={onChange3} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Number Formatting
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Time Format-1
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <InputMask className="form-control date-format" mask="99:99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm:ss" showMask separate value={value4} onChange={onChange4} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Time Format-2
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <InputMask className="form-control date-format" mask="99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm" showMask separate value={value5} onChange={onChange5} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Formatting Into Blocks
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form.Control
                                    className="form-control formatting-blocks"
                                    id="licensePlate"
                                    value={licensePlate}
                                    onChange={handleLicensePlateChange}
                                    placeholder="ABCD EFG HIJ KLMN"
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </Fragment>
    );
};
Inputmasks.layout = "Contentlayout";

export default Inputmasks;
