import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={"/auth/login"} replace></Navigate>
  );
};

export default PrivateRoutes;
