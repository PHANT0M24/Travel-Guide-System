import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddFeedback from "../Pages/Home/AddFeedback";

export const router = createBrowserRouter([
    {
        path: "/",
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
]);
