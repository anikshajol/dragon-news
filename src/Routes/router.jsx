import { createBrowserRouter } from "react-router";
import MainLayouts from "../Components/Layouts/MainLayouts";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,

    children: [{ index: true, element: <Home /> }],
  },
]);
