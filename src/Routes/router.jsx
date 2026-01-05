import { createBrowserRouter } from "react-router";
import MainLayouts from "../Components/Layouts/MainLayouts";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,

    children: [
      { index: true, element: <Home /> },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch(`/news.json`),
      },
    ],
  },
]);
