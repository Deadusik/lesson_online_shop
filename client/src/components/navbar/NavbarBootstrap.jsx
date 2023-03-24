import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../../routes/paths'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import styles from './NavbarBootstrap.module.scss'
//bootstrap components
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

const NavbarBootstrap = observer(() => {
    const { user } = useContext(Context)

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to={SHOP_ROUTE} className={styles.NavbarBootstrap__NavLink}>Shopvice</NavLink>
                    </Navbar.Brand>
                    {user.isAuth ?
                        <Nav className='ml-auto'>
                            <Button variant="info">Admin panel</Button>
                            <Button variant="danger" className='ml-2'>Exit</Button>
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