import { createBrowserRouter } from "react-router-dom";
import AllReview from "../AllReview/AllReview";
import AllReviewForm from "../AllReviewForm/AllReviewForm";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home";
import Journal from "../Pages/Journal";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import PrivateRoute from "../Pages/PrivateRoute";
import Publications from "../Pages/Publications";
import Review from "../Pages/Review/Review";
import Signup from "../Pages/Signup";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>  ,
        children: [
            {
                path: '/' ,
                element: <Home></Home>
            },
            {
                path: '/publications' ,
                element: <Publications></Publications>
            },
            { 
                path: '/login' ,
                element: <Login></Login>
            },
            {
                path: '/signup' ,
                element: <Signup></Signup>
            },
            {
                path: '/journal' ,
                element: <Journal></Journal>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`https://personal-server-site.vercel.app/books/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/checkout/:id',
                element: <AllReviewForm></AllReviewForm>,
                loader: ({params}) => fetch(`https://personal-server-site.vercel.app/books/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <AllReview></AllReview> ,
                loader: ({params}) => fetch(`https://personal-server-site.vercel.app/books/${params.id}`)
            },
        ]
    }

])