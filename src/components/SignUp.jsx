// File: /components/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utilities/FakeAuthService";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Attempt sign-up (mock)
    const result = signUp({ username, email, password });
    if (result.success) {
      // Redirect to sign-in
      navigate("/signin");
    } else {
      setErrorMsg(result.message || "Sign up failed");
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left side (brand panel) */}
      <div className="hidden sm:flex sm:flex-col sm:w-1/2 bg-[#131927] items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#131927] via-[#131927] to-[#131927]/90"></div>
        <h1 className="relative z-10 text-white font-bold text-8xl drop-shadow-md">
          adhoc
        </h1>
      </div>

      {/* Right side (signup form) */}
      <div className="flex-1 flex items-center justify-center bg-white p-4 sm:p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Create Account
          </h2>

          {errorMsg && (
            <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
              {errorMsg}
            </div>
          )}

          {/* Google OAuth Button (Prototype) */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-md py-2 mb-6 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Icon"
              className="w-5 h-5"
            />
            <span className="text-sm text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400 text-xs uppercase">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#131927] text-white py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-sm text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
