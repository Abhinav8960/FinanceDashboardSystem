import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user || !user.token) {
    return <Navigate to={`/login`} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={`/unauthorized`} />; // or navigate to dashboard cal with toaster
  }

  return children;
};
