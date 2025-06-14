import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Select, { Props as SelectProps } from 'react-select';
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from '../../../shared/data/forms/select2data';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

interface Option {
    value: string;
    label: string;
}

interface Optionmax {
    value: string;
    label: string;
}


const Select2 = () => {
    //
    const [selectedOptions, setSelectedOptions] = useState([{ value: "Andrew", label: "Andrew" }]);


    const handleSelectChange = (selected: Optionmax[] | null) => {
        // Define your maximum selection limit (e.g., 2 in this example)
        const maxSelections = 3;

        if (selected && selected.length <= maxSelections) {
            setSelectedOptions(selected);
        }
    };

    const [singleSelectValue, setSingleSelectValue] = useState<Option | null>(null);
    const [multiSelectValue, setMultiSelectValue] = useState<Option[] | null>([]);
    const [isSelectDisabled, setSelectDisabled] = useState(false);

    const options: Option[] = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
        { value: 's-4', label: 'Selection-4' },
        { value: 's-5', label: 'Selection-5' },
    ];

    const handleSingleSelectChange = (selectedOption: Option | null) => {
        setSingleSelectValue(selectedOption);
    };

    const handleMultiSelectChange = (selectedOptions: Option[] | null) => {
        setMultiSelectValue(selectedOptions);
    };

    const disableSelect = () => {
        setSelectDisabled(true);
    };

    const enableSelect = () => {
        setSelectDisabled(false);
    };

    return (
        <Fragment>
            <Seo title={"Select2"} />
            <PageheaderDB heading="Forms" active="Select2" />
            <div className="main-container container-fluid">

                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Select2
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select name="state" options={Selectoption1} className="basic-multi-select " isSearchable
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[0]]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title className="card-titlte">
                                    Multiple Select
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select isMulti name="states[]" options={Selectoption2} className="basic-multi-select " isSearchable
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption2[0]]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Single Select With Placeholder
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select name="state" options={Selectoption3} className="basic-multi-select " isClearable
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption3[0]]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Multiple Select With Placeholder
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select isMulti name="state" options={Selectmaxoption} className="basic-multi-select "
                                    menuPlacement='auto' classNamePrefix="Select2"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Templating
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select
                                    name="state"
                                    options={Selectoption5}
                                    className="basic-multi-select1"
                                    menuPlacement="auto"
                                    classNamePrefix="Select2"
                                    defaultValue={[Selectoption5[0]]}
                                // styles={customStyles} // You can apply custom styles here.
                                />

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Templating Selection
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select
                                    name="state"
                                    options={Selectoption5}
                                    className="basic-multi-select"
                                    menuPlacement="auto"
                                    classNamePrefix="Select2"
                                    defaultValue={[Selectoption5[0]]}
                                // styles={customStyles} // You can apply custom styles here.
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Max Selections Limiting
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Select
                                    isMulti
                                    name="states[]"
                                    options={Selectmaxoption}
                                    className="basic-multi-select"
                                    isSearchable
                                    menuPlacement="auto"
                                    classNamePrefix="Select2"
                                    value={selectedOptions}
                                    // defaultValue={[Selectmaxoption[0]]}
                                    onChange={handleSelectChange as SelectProps<Optionmax>['onChange']} // Type assertion here
                                />
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Disabling a Select2 control
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className=" vstack gap-3">
                                <Select
                                    className="mb-3"
                                    options={options}
                                    classNamePrefix="Select2"

                                    defaultValue={[options[0]]}
                                    onChange={handleSingleSelectChange}
                                    isDisabled={isSelectDisabled}
                                />
                                <Select
                                    className="js-example-disabled-multi"
                                    options={options}
                                    defaultValue={[options[0]]}
                                    classNamePrefix="Select2"
                                    onChange={handleMultiSelectChange as SelectProps<Option>['onChange']}
                                    isMulti
                                    isDisabled={isSelectDisabled}
                                    isClearable={!isSelectDisabled}
                                />
                                <div>
                                    <Button variant='primary' className="btn me-2" onClick={enableSelect}>
                                        Enable
                                    </Button>
                                    <Button variant='primary' className="btn" onClick={disableSelect}>
                                        Disable
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
Select2.layout = "Contentlayout";
export default Select2;
