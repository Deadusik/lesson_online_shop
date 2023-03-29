import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import styles from './DeviceItem.module.scss'
import { AiOutlineStar } from "react-icons/ai";

const DeviceItem = ({ device }) => {


    return (
        <Col md={3}>
            <Card className={[styles.DeviceItem__Card, 'p-0'].join(' ')}
                border='light'>
                <Image width={150} height={150} src={device.img} />
                <Row className='d-flex flex-row justify-content-between'>
                    <h2 className={styles.DeviceItem__Title + ' sm-4'}>Samsung</h2>
                    <div className='sm-8'>
                        <p>{device.rating}</p>
                        <AiOutlineStar />
                    </div>
                </Row>
            </Card>
        </Col>
    )
}

export default DeviceItem