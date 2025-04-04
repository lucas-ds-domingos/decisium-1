import { createBrowserRouter } from "react-router-dom";

import    Home  from "./pages/home";
import { Notfound } from "./pages/notfound";
import { Login } from "./pages/Login";
import { Layout } from "./components/layout/layout"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "home", element: <Home /> },
            { path: "*", element: <Notfound /> }
        ]
    },
    {
        path: "/login",
        element: <Login /> 
    }
]);

export { router };
