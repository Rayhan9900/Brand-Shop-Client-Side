import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../components/home/Home";
import AddProduct from "../components/addProduct/AddProduct";
import MyCard from "../components/MyCard/MyCard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Products from "../components/products/Products";
import ErrorPage from "../components/errorPage/ErrorPage";
import UpDate from "../components/Update/UpDate";
import Details from "../components/details/Details";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/products/:BrandName',
                element: <Products />

            },
            {
                path: "/myCard",
                element: <PrivateRoute> <MyCard></MyCard></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-i09jslbpl-rayhanmahmud990099-gmailcom.vercel.app/carts')
            },
            {
                path: "/upDate/:id",
                element: <PrivateRoute><UpDate></UpDate></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-i09jslbpl-rayhanmahmud990099-gmailcom.vercel.app/products/${params.id}`)

            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-i09jslbpl-rayhanmahmud990099-gmailcom.vercel.app/products/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);
export default router;

