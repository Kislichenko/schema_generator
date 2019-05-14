import React, {Component} from 'react';
import {SchemaTypes} from 'object-editor-react';
import {ArrayEditor, ObjectEditor} from 'object-editor-react';
import {DropdownButton, MenuItem, Form, FormControl, InputGroup, Table} from 'react-bootstrap'
import DownShift from '../dropdown/Downshift'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'


const schema = {
    name: SchemaTypes.string({required: true}),
    age: SchemaTypes.number(),
    jobs: SchemaTypes.arrayOf({
        year: SchemaTypes.number(),
        title: SchemaTypes.string(),
    })(),
};


const value = [
    {
        name: 'Test Name',
        age: 21,
        jobs: [
            {
                year: 2019,
                title: 'Software Engineer'
            },
        ],
        jobs1: [
            {
                year: 2019,
                title: 'Software Engineer'
            },
        ],
        jobs2: [
            {
                year: 2019,
                title: 'Software Engineer'
            },
        ],
    },
]

const YourComponent = props => {
    return (
        <ArrayEditor
            type={schema}
            object={value}
            onUpdateElement={(el, index) => alert("AAAA")}
            onAddElement={(newElement) => alert("BBBB")}
            onAddElement={(removedElement, index) => alert("CCCC")}
        />
    );
}

class Generator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                <div>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Поле</th>
                            <th>Тип поля</th>
                            <th>Значение по умолчанию</th>
                            <th>Отношение</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Field"
                                        aria-label="Field"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </td>
                            <td><DownShift/></td>
                            <td><YourComponent/></td>
                            <td><DownShift/></td>
                            <td><Button variant="danger">Delete</Button></td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Field"
                                        aria-label="Field"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </td>
                            <td><DownShift/></td>
                            <td></td>
                            <td><DownShift/></td>
                            <td><Button variant="danger">Delete</Button></td>

                        </tr>
                        </tbody>
                    </Table>
                </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        float: 'none',
                        background: '#ffffff',
                        padding: '6px',
                        marginLeft: '10px',
                        marginTop: 0,
                        textAlign: 'left',
                        boxShadow: '0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
                    }}>
                        <h4 style={{margin: '0 0 10px 0'}}>Data</h4>
                        <pre>{JSON.stringify({value}, null, '   ')}</pre>
                    </div>
                </div>

                <Pagination style={{justifyContent: "center"}}>

                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis/>

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis/>
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next/>
                    <Pagination.Last/>

                </Pagination>

            </div>
        );
    }
}

export default Generator