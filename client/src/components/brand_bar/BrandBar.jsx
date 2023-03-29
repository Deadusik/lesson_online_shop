import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { Card, Col, Row } from 'react-bootstrap'
import styles from './BrandBar.module.scss'


const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row>
            {
                device.brands.map((brand) =>
                    <Card key={brand.id}
                        className={[styles.BrandBar__Card, 'p-3 mb-2'].join(' ')}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        onClick={() => device.setSelectedBrand(brand)}>
                        {brand.name}
                    </Card>
                )
            }
        </Row>
    )
})

export default BrandBar