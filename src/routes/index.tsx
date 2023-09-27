import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";

export default function Router() {
  return createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        errorElement: <p>Oh no, un error</p>,
        children: [
            {path: 'home', element:<Home/>},
            {path: 'destination', element:<p>destination</p>},
            {path: 'crew', element:<p>crew</p>},
            {path: 'technolohy', element:<p>crew</p>}
        ]
    },
  ]);
}

