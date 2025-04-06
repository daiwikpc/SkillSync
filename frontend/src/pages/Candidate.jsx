import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Assessment from '../components/Assessment';
import Dashboard from '../components/Dashboard';

function Candidate() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes('assessment') ? 'assessment' : 'dashboard'
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4 border-b">
          <button
            className={`pb-4 ${
              activeTab === 'dashboard'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Link to="/candidate">Dashboard</Link>
          </button>
          <button
            className={`pb-4 ${
              activeTab === 'assessment'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('assessment')}
          >
            <Link to="/candidate/assessment/javascript">Take Assessment</Link>
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assessment/:skillId" element={<Assessment />} />
        </Routes>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Skill Development Plan</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
            <div>
              <h4 className="font-medium">JavaScript Fundamentals</h4>
              <p className="text-gray-600">Current Level: Intermediate</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Assessment: 2 days</p>
              <button className="text-indigo-600 hover:text-indigo-700">
                View Details
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
            <div>
              <h4 className="font-medium">React.js Development</h4>
              <p className="text-gray-600">Current Level: Beginner</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Assessment: 5 days</p>
              <button className="text-indigo-600 hover:text-indigo-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate; 