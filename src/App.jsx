import { Container } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import UpdateProfile from "./components/UpdateProfile";
import OnBoardingForm from "./components/OnboardingForm";

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="text-center my-4">Big Sibling</h1>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/onboard"
                element={
                  <PrivateRoute>
                    <OnBoardingForm />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={NotFound()} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

function NotFound() {
  return (
    <h1 className="w-100 text-center">
      404: You have landed on a page that doesn't exist
    </h1>
  );
}
