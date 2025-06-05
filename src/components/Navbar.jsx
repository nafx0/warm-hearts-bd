import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import iconImg from "../assets/icons/titleIcon.png";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    setIsOpen(false);
    logOut();
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/how-to-help", label: "How to Help" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-700 flex items-center gap-2"
        >
          <img src={iconImg} alt="Logo" className="w-12 h-12" /> Warm Hearts
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-500 transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-500 transition-colors"
              }
            >
              Donate Now
            </NavLink>
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/nolan/64/user-default.png"
                }
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = "https://img.icons8.com/nolan/64/user-default.png";
                }}
                alt="User"
                className="w-9 h-9 rounded-full border"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-red-600 font-semibold"
                  : "block text-gray-700 hover:text-red-500 transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to="/donation"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-red-600 font-semibold"
                  : "block text-gray-700 hover:text-red-500"
              }
            >
              Donate Now
            </NavLink>
          )}

          {user ? (
            <div className="flex items-center gap-3 mt-2">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-9 h-9 rounded-full border"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block bg-red-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
