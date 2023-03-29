import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../../type_bar/TypeBar'
import BrandBar from '../../brand_bar/BrandBar'
import DeviceList from '../../device_list/DeviceList'

const Shop = () => {
    return (
        <Container>
            <Row className='mt-4'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop