import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Pages/Error";
import Home from "../components/Home";
import Allmovies from "../components/Allmovies";
import Addmovie from "../components/Addmovie";
import Myfavorites from "../components/Myfavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Moviedetails from "../components/Moviedetails";
import Updatemovie from "../components/Updatemovie";
import Upcamming from "../components/Upcamming";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://movie-portal-server-ashen-five.vercel.app/ratingBySort')
        },
        {
            path: '/allmovies',
            element: <Allmovies></Allmovies>,
            loader: () => fetch('https://movie-portal-server-ashen-five.vercel.app/addMovie')
        },
        {
            path: '/addmovie',
            element: <PrivateRoute><Addmovie></Addmovie></PrivateRoute>,
        },
        {
            path: '/myfavorites',
            element: <PrivateRoute><Myfavorites></Myfavorites></PrivateRoute>,
            // loader: ({params}) => fetch(`https://movie-portal-server-ashen-five.vercel.app/myFavorite/${params.email}`)
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/moviedetails/:id',
          element: <PrivateRoute><Moviedetails></Moviedetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://movie-portal-server-ashen-five.vercel.app/addMovie/${params.id}`)
        },
        {
           path: '/updatemovie/:id',
           element: <PrivateRoute><Updatemovie></Updatemovie></PrivateRoute>,
           loader: ({params}) => fetch(`https://movie-portal-server-ashen-five.vercel.app/addMovie/${params.id}`)
        },
        {
          path: '/upcamming',
          element: <Upcamming></Upcamming>,
        }
      ],
    },
  ]);

  export default router;