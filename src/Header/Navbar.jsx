import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden p-2 text-xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sliding Navigation Links for Mobile */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsMenuOpen(false)} // Close the menu on click of the close icon
            className="text-2xl text-gray-600 hover:text-gray-800 absolute top-4 right-4"
          >
            <FaTimes />
          </button>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
            }
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
            }
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
            }
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Regular Navigation for Larger Screens */}
      <nav className="hidden md:flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block p-3 rounded hover:bg-sky-100 ${isActive ? "underline font-bold" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
