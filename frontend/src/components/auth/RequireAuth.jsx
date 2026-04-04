import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user || !user.token) {
    return <Navigate to={`/login`} />;
  }
  return children;
};
