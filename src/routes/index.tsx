import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Destination from "../pages/home/Destination";

export default function Router() {
  return createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        errorElement: <p>Oh no, un error</p>,
        children: [
            {path: 'home', element:<Home/>},
            {path: 'destination', element:<Destination/>},
            {path: 'crew', element:<p>crew</p>},
            {path: 'technology', element:<p>crew</p>}
        ]
    },
  ]);
}

