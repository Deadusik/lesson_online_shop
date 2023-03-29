import React from 'react'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../routes/paths'

const Auth = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === LOGIN_ROUTE

    return (
        <div>
            <Container
                className='d-flex justify-content-center align-items-center'>
                <Card className='p-5 align-self-center'>
                    <h2 className='align-self-center'>{isLoginPage ? 'Log in' : 'Registration'}</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control
                            className='mt-2'
                            placeholder='Enter your email' />
                        <Form.Control
                            className='mt-2'
                            placeholder='Enter your password' />
                    </Form>
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {
                            isLoginPage ?
                                <div>Do not have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink></div>
                                :
                                <div>Do you have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink></div>
                        }
                        <Button variant='success' className='mt-2 align-self-start'>
                            {
                                isLoginPage ?
                                    'Log in'
                                    :
                                    'Registration'
                            }
                        </Button>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default Auth