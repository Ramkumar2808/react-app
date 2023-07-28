// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    // User is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // User is authenticated, render the children (DashboardPage)
  return children;
};

export default ProtectedRoute;
