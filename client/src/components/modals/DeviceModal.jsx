import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'

const DeviceModal = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', value: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number))
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown>
                            <Dropdown.Toggle>Choice the type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.types.map(type =>
                                        <Dropdown.Item key={type.id}>
                                            {type.name}
                                        </Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-2'>
                            <Dropdown.Toggle>Choice the brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.brands.map(brand =>
                                        <Dropdown.Item key={brand.id}>
                                            {brand.name}
                                        </Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className='mt-3'
                            placeholder='Enter device name'
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Enter device price'
                            type='number'
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
                        />
                        <hr />
                        <Button variant='outline-dark'
                            onClick={addInfo}>
                            Add new property
                        </Button>
                        {/* device props forms */}
                        {
                            info.map(item =>
                                <Row className='mt-4' key={item.number}>
                                    <Col md={4}>
                                        <Form>
                                            <Form.Control
                                                placeholder='Name'
                                            />
                                        </Form>
                                    </Col>
                                    <Col md={4}>
                                        <Form>
                                            <Form.Control
                                                placeholder='Value'
                                            />
                                        </Form>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant='outline-danger'
                                            onClick={() => removeInfo(item.number)}>
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeviceModal 