import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../routes/paths'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import styles from './NavbarBootstrap.module.scss'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

const NavbarBootstrap = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to={SHOP_ROUTE} className={styles.NavbarBootstrap__NavLink}>Shopvice</NavLink>
                    </Navbar.Brand>
                    {user.isAuth ?
                        <Nav className='ml-auto'>
                            <Button onClick={() => navigate(ADMIN_ROUTE)} variant="info">Admin panel</Button>
                            <Button onClick={() => logOut()} variant="danger" className='ml-3'>Exit</Button>
                        </Nav>
                        :
                        <Nav className='ml-auto'>
                            <Button variant="success" onClick={() => user.setIsAuth(true)}>Login</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    )
})

export default NavbarBootstrap