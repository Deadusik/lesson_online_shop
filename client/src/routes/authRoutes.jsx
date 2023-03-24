import Admin from "../components/pages/Admin/Admin";
import Basket from "../components/pages/Basket/Basket";
import Error from "../components/pages/Error/Error";
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