import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import { createDevice } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const DeviceModal = observer(({ show, onHide }) => {
    const { device } = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState(null)
    const [info, setInfo] = useState([])

    const [selectedType, setSelectedType] = useState('none')
    const [selectedBrand, setSelectedBrand] = useState('none')

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        console.log(img)
        formData.append('img', img)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))

        createDevice(formData).then(() => onHide())
    }

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number))
    }

    const changeInfo = (key, description, num) => {
        setInfo(info.map(item => item.number === num ? { ...item, [key]: description } : item))
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <Dropdown>
                                <Dropdown.Toggle>Choice the type</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        device.types.map(type =>
                                            <Dropdown.Item key={type.id}
                                                onClick={() => {
                                                    console.log('device', device)
                                                    device.setSelectedType(type)
                                                    setSelectedType(type.name)
                                                }}>
                                                {type.name}
                                            </Dropdown.Item>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <h4>Selected type: {selectedType}</h4>
                        </Col>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <Dropdown className='mt-2'>
                                <Dropdown.Toggle>Choice the brand</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        device.brands.map(brand =>
                                            <Dropdown.Item key={brand.id}
                                                onClick={() => {
                                                    device.setSelectedBrand(brand)
                                                    setSelectedBrand(brand.name)
                                                }}>
                                                {brand.name}
                                            </Dropdown.Item>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <h4>Selected brand: {selectedBrand}</h4>
                        </Col>
                        <Form.Control
                            className='mt-3'
                            placeholder='Enter device name'
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Enter device price'
                            type='number'
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
                            onChange={e => {
                                console.log(e.target.files[0])
                                setImg(e.target.files[0])
                            }}
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
                                                onChange={(e) => changeInfo('title', e.target.value, item.number)}
                                            />
                                        </Form>
                                    </Col>
                                    <Col md={4}>
                                        <Form>
                                            <Form.Control
                                                placeholder='description'
                                                onChange={(e) => changeInfo('description', e.target.value, item.number)}
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
                    <Button variant="primary" onClick={addDevice}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})

export default DeviceModal 