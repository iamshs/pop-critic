import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About";
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
            }
           
        ]
    }
]);

export default routes
