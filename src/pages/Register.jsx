import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createAccount, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validations
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPass) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const userCredential = await createAccount(email, password);
      await updateUser(name, photoURL || "");
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-amber-100 px-6 mt-10">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-sm w-full text-center border border-amber-200">
        <h2 className="text-3xl font-bold text-amber-600 mb-4">
          Create an Account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Join us and help bring warmth to those in need.
        </p>

        <form onSubmit={handleRegister} className="text-left">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-sm focus:ring-2 focus:ring-amber-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Photo URL (optional)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-sm focus:ring-2 focus:ring-amber-400"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-sm focus:ring-2 focus:ring-amber-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-sm focus:ring-2 focus:ring-amber-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-6 text-sm focus:ring-2 focus:ring-amber-400"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
