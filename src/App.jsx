// File: App.jsx
import "leaflet/dist/leaflet.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        {/* Sign In */}
        <Route path="/signin" element={<SignIn />} />

        {/* Sign Up */}
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default route => redirect to Sign In (or Dashboard if user is authed) */}
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
