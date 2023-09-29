import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Destination from "../pages/home/Destination";

export default function Router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <p>Oh no, un error</p>,
      children: [
        { path: "home", element: <Home /> },
        { path: "destination", element: <Destination />, children: [
          {path: "moon", element: <p>a</p>},
          {path: "mars", element: <p>a</p>},
          {path: "europa", element: <p>a</p>},
          {path: "titan", element: <p>a</p>},
        ] },
        { path: "crew", element: <p>crew</p> },
        { path: "technology", element: <p>crew</p> },
      ],
    },
  ]);
}
