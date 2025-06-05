import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();
      navigate("/");
      toast.success("Successfully logged in with Google!");
    } catch (error) {
      toast.error("Google sign-in failed: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("Please fill in both fields.");
      return;
    }

    try {
      await signIn(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-white px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-sm w-full text-center border border-amber-200">
        <h2 className="text-3xl font-bold text-amber-600 mb-4">Welcome Back</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login to help us spread warmth and hope.
        </p>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-sm font-medium text-gray-700 hover:shadow-md transition duration-200 mb-4"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        <div className="relative my-4">
          <hr className="border-t border-gray-300" />
          <span className="absolute bg-white px-2 text-xs text-gray-400 -top-2 left-1/2 transform -translate-x-1/2">
            OR
          </span>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailLogin} className="text-left">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-amber-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>

        <p className="mt-6 text-xs text-gray-400 text-center">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
