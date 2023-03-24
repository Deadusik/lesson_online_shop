import React, { useContext } from 'react'
import { authRoutes } from '../routes/authRoutes'
import { publicRoutes } from '../routes/publicRoutes'
import { Routes, Route } from 'react-router-dom'
import { Context } from '../index'


const AppRouter = () => {
    const user = useContext(Context)

    console.log(user)
    return (
        <>
            <Routes>
                {user.isAuth &&
                    authRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error}
                        />)
                }
                {
                    publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error}
                        />)
                }
            </Routes>
        </>
    )
}

export default AppRouter;