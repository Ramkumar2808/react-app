import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import UsersList from "./features/users/UsersList";
import Navbar from "./shared/Navbar";
import { Container, Grid, Paper } from "@mui/material";
import FullFeaturedCrudGrid from "./components/FullFeaturedCrudGrid";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useSelector } from "react-redux";
import NavbarLayout from "./layouts/NavbarLayout";
import ClientMainPage from "./pages/clients";
import UsersMainPage from "./pages/users";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Routes>
        {/* Use absolute paths and conditionally render routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<NavbarLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients"
            element={
              <ProtectedRoute>
                <ClientMainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersMainPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      {/* <Navbar /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
