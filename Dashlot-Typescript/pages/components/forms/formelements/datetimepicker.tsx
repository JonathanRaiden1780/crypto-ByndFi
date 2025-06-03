import { FC, Fragment, useState } from 'react';
import { Card, Col, InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import PageheaderDB from '../../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';



const Datetimepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    const [startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate2(date);
        }
    };
    const [startDate3, setStartDate3] = useState(new Date());
    const handleDateChange3 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate3(date);
        }
    };
    const [startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate4(date);
        }
    };
    const [startDate5, setStartDate5] = useState(new Date());
    const handleDateChange5 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate5(date);
        }
    };
    const [startDate6, setStartDate6] = useState(new Date());
    const handleDateChange6 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate6(date);
        }
    };
    const [startDate7, setStartDate7] = useState(new Date());
    const handleDateChange7 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate7(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Datetimepicker"} />
            <PageheaderDB heading="Form Elements" active="Date & Time Pickers" />
            <div className="main-container container-fluid">

                <Row>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Date picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                        </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date picker With Time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate1}
                                            onChange={handleDateChange1}
                                            timeInputLabel="Time:"
                                            dateFormat="yy/MM/dd h:mm aa"
                                            placeholderText='Choose date with time'
                                            showTimeInput
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Human Friendly dates
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker selected={startDate2} onChange={handleDateChange2} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date range picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                        </InputGroup.Text>
                                        <DatePicker selected={startDate3} onChange={handleDateChange3} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Time picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate4}
                                            onChange={handleDateChange4}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Locale with time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate5}
                                            onChange={handleDateChange5}
                                            locale="pt-BR"
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={15}
                                            dateFormat="Pp"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Time Picker with Limits
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate6}
                                            onChange={handleDateChange6}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Month Picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate7}
                                            onChange={handleDateChange7}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Datetimepicker.layout = "Contentlayout";
export default Datetimepicker;
