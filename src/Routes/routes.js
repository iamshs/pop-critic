import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About";
import Details from "../Pages/Details";
import Home from "../Pages/Home";


const routes = createBrowserRouter([
    {
        path : "/" ,
        element : <Main />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/details/:id",
                element : <Details />
            },
           
        ]
    }
]);

export default routes
