import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { createType } from '../../http/typeAPI';

const TypeModal = ({ show, onHide }) => {
    const [name, setName] = useState('')

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder={'Enter type name'}
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
                        createType({ name })
                        onHide()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TypeModal