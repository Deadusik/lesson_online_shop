import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import styles from './DeviceItem.module.scss'
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../routes/paths';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col md={3}>
            <Card className={[styles.DeviceItem__Card, 'p-3 d-flex justify-content-center'].join(' ')}
                onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                border='light'>
                <Image width={150} height={150} src={device.img} />
                <Col className='d-inline-flex align-items-center justify-content-between'>
                    <h2 className={[styles.DeviceItem__Title, 'd-inline-flex'].join(' ')}>Samsung</h2>
                    <Col className='d-inline-flex mt-2'>
                        <p>{device.rating}</p>
                        <AiOutlineStar className='mt-1' />
                    </Col>
                </Col>
                <h2 className={styles.DeviceItem__Title}>{device.name}</h2>
            </Card>
        </Col>
    )
}

export default DeviceItem