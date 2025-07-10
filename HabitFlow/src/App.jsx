import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navbar */}
        <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/">HabitFlow</Link>
          </h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/add" className="hover:underline">
              Add Habit
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddHabit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
