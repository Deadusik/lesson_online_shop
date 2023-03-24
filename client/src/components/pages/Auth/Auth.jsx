import React from 'react'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../../../routes/paths'

const Auth = () => {
    return (
        <div>
            <Container
                className='d-flex justify-content-center align-items-center'>
                <Card className='p-5 align-self-center'>
                    <h2 className='align-self-center'>Registration</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control
                            className='mt-2'
                            placeholder='Enter your email' />
                        <Form.Control
                            className='mt-2'
                            placeholder='Enter your password' />
                    </Form>
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <div>Do you have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink></div>
                        <Button variant='success' className='mt-2 align-self-start'>Log in</Button>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default Auth