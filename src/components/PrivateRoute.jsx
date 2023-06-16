import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.login.login);
  const location = useLocation();
  return auth ? <Outlet /> : <Navigate to="login" state={{ from: location }} />;
};

export default PrivateRoute;
