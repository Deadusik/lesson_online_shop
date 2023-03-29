import React from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import styles from './Device.module.scss'
import { AiOutlineStar } from "react-icons/ai"

const Device = () => {
    const device = { id: 1, name: "iPhone 12 pro", price: 1200, rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' }
    const description = [
        { id: 1, title: 'Memory', value: '4gb' },
        { id: 2, title: 'Camera', value: '12 mpx' },
        { id: 3, title: 'Processor', value: 'Snapdergon 840' },
        { id: 4, title: 'Count core', value: '4' },
        { id: 5, title: 'Battry', value: '4000' },
    ]

    return (
        <Container className='d-flex flex-wrap'>
            <Col className='mt-4' md={4}>
                <Image width={300} height={300} src={device.img} />
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
                    description.map(item =>
                        <Row key={item.id} className={styles.Device__CaracteristicsItem}>
                            <p>{item.title}: {item.value}</p>
                        </Row>
                    )
                }
            </Row>
        </Container>
    )
}

export default Device