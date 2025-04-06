import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              SkillSync
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/candidate"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Candidate
            </Link>
            <Link
              to="/employer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Employer
            </Link>
            <Link
              to="/admin"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Admin
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Sign In
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 