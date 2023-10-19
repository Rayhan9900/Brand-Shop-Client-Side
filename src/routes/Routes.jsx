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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/products/:BrandName',
                element: <Products />

            },
            {
                path: "/myCard",
                element: <MyCard></MyCard>
            },
            {
                path: "/upDate/:id",
                element: <UpDate></UpDate>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: "/details/:id",
                element: <Details />,
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

