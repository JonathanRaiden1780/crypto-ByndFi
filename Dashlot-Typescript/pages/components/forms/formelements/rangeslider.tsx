import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import RangeSlider from 'react-range-slider-input';
import LabeledTwoThumbs, { Marks } from '../../../../shared/data/forms/rangesliderdata';
import { connect } from 'react-redux';
import PageheaderDB from '../../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import { rangeslider1, rangeslider2, rangeslider3, rangeslider4 } from "../../../../shared/data/prismdata/formsdata";
import ShowCode from "../../../../shared/showcode/showcode";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
        height: 27,
        width: 27,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
        },
        "& .airbnb-bar": {
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    "& .MuiSlider-track": {
        height: 3,
    },
    "& .MuiSlider-rail": {
        color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
        opacity: theme.palette.mode === "dark" ? undefined : 1,
        height: 3,
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }
function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}
const Rangeslider = ({ local_varaiable }: any) => {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <Fragment>
            <Seo title={"Rangeslider"} />
            <PageheaderDB heading="Form Elements" active="Range Slider" />
            <div className="main-container container-fluid">
                <Row>
                    <Col xl={3}>
                        <ShowCode title="Default Range" customCardClass="custom-card" customCardBodyClass="" code={rangeslider1}>
                            <Form.Range className="" id="customRange1" />
                        </ShowCode>
                    </Col>
                    <Col xl={3}>
                        <ShowCode title="Disabled Range" customCardClass="custom-card" customCardBodyClass="" code={rangeslider2}>
                            <Form.Range className="" id="disabledRange" disabled />
                        </ShowCode>
                    </Col>
                    <Col xl={3}>
                        <ShowCode title="Range With Min and Max Values" customCardClass="custom-card" customCardBodyClass="" code={rangeslider3}>
                            <Form.Range className="" min="0" max="5" id="customRange2" />
                        </ShowCode>
                    </Col>
                    <Col xl={3}>
                        <ShowCode title="Range With Steps" customCardClass="custom-card" customCardBodyClass="" code={rangeslider4}>
                            <Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
                        </ShowCode>
                    </Col>
                </Row>
                <h6 className="mb-3">noUiSlider:</h6>
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Default-Styling
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="pt-0">
                                <div id="slider">
                                    <Box sx={{ m: 3 }} />
                                    <AirbnbSlider
                                        slots={{ thumb: AirbnbThumbComponent }}
                                        getAriaLabel={(index: any) => (index === 0 ? "Minimum price" : "Maximum price")}
                                        defaultValue={[10, 90]}
                                    />
                                </div>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Fit Handles
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="slider-fit">
                                    <AirbnbSlider
                                        slots={{ thumb: AirbnbThumbComponent }}
                                        getAriaLabel={(index: any) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                        defaultValue={[10, 90]}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Rounded Styling
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="slider-round" className="my-2">
                                    <RangeSlider
                                        className="single-thumb"
                                        defaultValue={[0, 50]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Square Styling
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="slider-square" className="my-2">
                                    <RangeSlider
                                        className="square-thumb"
                                        defaultValue={[0, 50]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Toggle Movement By Clicking Pips</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body pb-5 mt-2">
                                <div id="slider-pips">
                                    <LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Soft Limits</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body pb-5">
                                <div id="soft">
                                    <Marks rtl={local_varaiable.dir == 'rtl'} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h6 className="mb-3">noUiSlider Colors:</h6>
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Primary
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="primary-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="primary"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Secondary
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="secondary-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="secondary"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Warning
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="warning-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                    // color="warning"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Info
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="info-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                    // color="info"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Success
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="success-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                    // color="success"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Danger
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="danger-colored-slider">
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                    // color="danger"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
Rangeslider.layout = "Contentlayout";
export default connect(mapStateToProps, {})(Rangeslider);

