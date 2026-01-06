import { createBrowserRouter } from "react-router";
import MainLayouts from "../Components/Layouts/MainLayouts";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Components/Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", Component: Register },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
    loader: () => fetch(`/news.json`),
  },
]);
