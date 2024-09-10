import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import AddFeedback from "../Pages/Home/AddFeedback";
import Home from "../Pages/Home/Home";
import Itinerary from "../Pages/Itinerary";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserPage from "../Pages/UserPage/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/feedback"),
      },
      {
        path: "/feedback",
        element: <AddFeedback></AddFeedback>,
      },
      {
        path: "/itinerary",
        element: <Itinerary></Itinerary>,
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
]);
