import PageheaderDB from '../../../../shared/layout-components/pageheader/pageheaderDB'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Row, Col, Card, Button, Form, Collapse } from 'react-bootstrap'
import { ColorPicker, useColor } from "react-color-palette";
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { colorpicker1 } from "../../../../shared/data/prismdata/formsdata";

const Colorpicker = () => {
  //color picker
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  //color picker
  const [color, setColor] = useColor("#561ecb");
  return (
    <Fragment>
      <Seo title={"Colorpicker"} />
      <PageheaderDB heading="Form Elements" active="Color Pickers" />
      <div className="main-container container-fluid">

        <Row>
          <Col xl={3}>
            <ShowCode title="Bootstrap Color Picker" customCardClass="custom-card" customCardBodyClass="" code={colorpicker1}>

              <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#136ad0"
                title="Choose your color"
              />
            </ShowCode>
          </Col>
          <Col xl={9}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>
                  Classic
                </Card.Title>
              </Card.Header>
              <Card.Body className="d-sm-flex justify-content-between">
                            <div>
                                <div className="theme-container1"></div>
                                <div className="pickr-container1 example-picker"><Button variant="primary" className='pcr-button btn-md mb-3' onClick={toggleVisibility}> <i className="ri-palette-line"></i></Button>
                                {isVisible && (
                                        <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                    )}</div>
                            </div>
                        </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
Colorpicker.layout = "Contentlayout"

export default Colorpicker