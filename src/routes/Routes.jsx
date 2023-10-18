import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../components/home/Home";
import AddProduct from "../components/addProduct/AddProduct";
import MyCard from "../components/MyCard/MyCard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
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
                path: "/myCard",
                element: <MyCard></MyCard>
            }
        ]
    },
]);
export default router;

