import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import BrandModal from '../../modals/BrandModal'
import DeviceModal from '../../modals/DeviceModal'
import TypeModal from '../../modals/TypeModal'

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container Container className='d-flex flex-column' >
            <Button variant='outline-dark' className='mt-2'
                onClick={() => setTypeVisible(true)}>
                Add Type
            </Button>
            <Button variant='outline-dark' className='mt-2'
                onClick={() => setBrandVisible(true)}>
                Add Brand
            </Button>
            <Button variant='outline-dark' className='mt-2'
                onClick={() => setDeviceVisible(true)}>
                Add Device
            </Button>
            <BrandModal show={brandVisible} onHide={() => setBrandVisible(false)} />
            <TypeModal show={typeVisible} onHide={() => setTypeVisible(false)} />
            <DeviceModal show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container >
    )
}

export default Admin