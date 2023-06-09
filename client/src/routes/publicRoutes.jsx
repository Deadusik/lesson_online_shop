import Auth from "../components/pages/auth/Auth";
import Device from "../components/pages/device/Device";
import Error from "../components/pages/error/Error";
import Shop from "../components/pages/shop/Shop";
import { DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./paths";

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop />,
        error: <Error />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />,
        error: <Error />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />,
        error: <Error />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <Device />,
        error: <Error />
    },
    {
        path: '*',
        element: <Error />
    }
]