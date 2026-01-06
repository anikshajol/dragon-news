import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoutes;
