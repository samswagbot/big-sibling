import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";

import Navigation from "./components/Navigation";
import About from "./components/About";
import FAQ from "./components/FAQ";
import OnboardingWrapper from "./components/OnboardingWrapper";

export default function App() {
  const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACE_API_KEY}&libraries=places`;
  useEffect(() => {
    fetchApiKeyFromNetlify();
    const script = document.createElement("script");

    if (process.env.NODE_ENV === "development") {
      script.src = url;
    }
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  async function fetchApiKeyFromNetlify() {
    await fetch("/.netlify/functions/token-hider", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((url) => url);
  }

  return (
    <>
      <Navigation />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
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
                      <OnboardingWrapper />
                    </PrivateRoute>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="*" element={NotFound()} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
    </>
  );
}

function NotFound() {
  return (
    <h1 className="w-100 text-center">
      404: You have landed on a page that doesn't exist
    </h1>
  );
}
