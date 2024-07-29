import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Component/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Component/Register/SignUp";
import CheackOut from "../Pages/Component/CheackOut/CheackOut";
import Bookings from "../Pages/Component/Bookings/Bookings";
import PrivateRoute from "../Pages/Component/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Component/About/About";
import Service from "../Pages/Component/Service/Service";
import Blog from "../Pages/Component/Blogs/Blog";
import Contact from "../Pages/Component/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/services',
          element:<Service></Service>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/bookings',
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
            path:'/cheackOut/:id',
            element:<PrivateRoute><CheackOut></CheackOut></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)

        }
      ]
    },
  ]);

export default router;