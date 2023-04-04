import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { createBrand } from '../../http/brandAPI';

const BrandModal = ({ show, onHide }) => {
    const [name, setName] = useState('')

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder={'Enter brand name'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        createBrand({ name })
                        onHide()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BrandModal