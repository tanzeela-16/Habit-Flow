import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-wide font-serif drop-shadow-sm">
                Habit Flow
          </h1>

          {/* Navigation Links */}
          <div className="space-x-6 text-lg font-medium font-serif">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-teal-600 shadow-sm ${
                  isActive ? 'bg-white text-teal-700 font-bold' : ''
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-green-600 shadow-sm ${
                  isActive ? 'bg-white text-green-700 font-bold' : ''
                }`
              }
            >
              Add Habit
            </NavLink>

            <NavLink
              to="/streak"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-yellow-600 shadow-sm ${
                  isActive ? 'bg-white text-yellow-700 font-bold' : ''
                }`
              }
            >
              Streak Chart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
