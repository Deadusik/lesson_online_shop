import React, { useEffect, useState } from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import styles from './Device.module.scss'
import { AiOutlineStar } from "react-icons/ai"
import { getDeviceById } from '../../../http/deviceAPI'
import { useParams } from 'react-router-dom'

const Device = () => {
    const [device, setDevice] = useState({ info: [] })

    const { id } = useParams()

    useEffect(() => {
        getDeviceById(id)
            .then(data => setDevice(data))
    }, [])

    return (
        <Container className='d-flex flex-wrap'>
            <Col className='mt-4' md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
            </Col>
            <Col className='mt-4' md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div className={[styles.Device__Raiting].join(' ')}>
                        <p className={styles.Device__RaitingValue}>{device.rating}</p>
                        <AiOutlineStar width={250} height={250} className={styles.Device__Star} />
                    </div>
                </Row>
            </Col>
            <Col className='mt-4' md={4}>
                <Card className={[styles.Device__PriceCard, 'd-flex justify-content-between align-items-center p-3'].join(' ')}>
                    <h2>From: {device.price} $</h2>
                    <Button className={styles.Device__PriceCardButton} variant={"outline-dark"}>Add to cart</Button>
                </Card>
            </Col>
            <Row className={styles.Device__Caracteristics}>
                <h2>Caracteristics:</h2>
                {
                    device.info.map(item =>
                        <Row key={item.id} className={styles.Device__CaracteristicsItem}>
                            <p>{item.title}: {item.description}</p>
                        </Row>
                    )
                }
            </Row>
        </Container>
    )
}

export default Device