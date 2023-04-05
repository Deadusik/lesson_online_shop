import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../../type_bar/TypeBar'
import BrandBar from '../../brand_bar/BrandBar'
import DeviceList from '../../device_list/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import { getTypes } from '../../../http/typeAPI'
import { getBrands } from '../../../http/brandAPI'
import { getDevices } from '../../../http/deviceAPI'
import PaginationBootstrap from '../../pagination/PaginationBootstrap'

const Shop = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        getTypes()
            .then(data =>
                device.setTypes(data)
            )
        getBrands()
            .then(data =>
                device.setBrands(data)
            )

    }, [])

    useEffect(() => {
        getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 4)
            .then((data) => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
    }, [device.page, device.selectedBrand, device.selectedType])

    return (
        <Container>
            <Row className='mt-4'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <PaginationBootstrap />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop