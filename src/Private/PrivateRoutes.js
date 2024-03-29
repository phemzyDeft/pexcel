import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(props) {
  let auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
