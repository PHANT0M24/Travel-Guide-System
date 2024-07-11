import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddFeedback from "../Pages/Home/AddFeedback";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import UserPage from "../Pages/UserPage/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
<<<<<<< HEAD
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/feedback"),
      },
      {
        path: "/feedback",
        element: <AddFeedback></AddFeedback>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/userpage",
        element: <UserPage />,
      },
    ],
  },
=======
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/feedback')

            },
            { 
                path: '/feedback',
                element: <AddFeedback></AddFeedback>,
            },
        ]
    },
>>>>>>> 4b2637fa9f170c74181ef82a04a3bb4b12b419f3
]);
