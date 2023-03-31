import Admin from "../components/pages/admin/Admin";
import Basket from "../components/pages/basket/Basket";
import Error from "../components/pages/error/Error";
import { ADMIN_ROUTE, BASKET_ROUTE } from "./paths";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />,
        error: <Error />
    },
    {
        path: BASKET_ROUTE,
        element: <Basket />,
        error: <Error />
    }
]