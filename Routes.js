import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/common/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    
   
    {
        path: "/about-us",
        element: <AboutUs />,
    },
    
   
    {
        path: "/contact",
        element: <Contact />,
    },
   
]);

function Route() {
    return <RouterProvider router={router} />;
}

export default Route;