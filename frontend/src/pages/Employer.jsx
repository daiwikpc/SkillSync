import React, { useState } from 'react';

const Employer = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Employer Dashboard</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${
              activeTab === 'dashboard'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('postings')}
            className={`${
              activeTab === 'postings'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`${
              activeTab === 'candidates'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Candidates
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800">Active Job Postings</h3>
                <p className="text-3xl font-bold text-blue-600">5</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-green-800">Total Applications</h3>
                <p className="text-3xl font-bold text-green-600">24</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-purple-800">Interviews Scheduled</h3>
                <p className="text-3xl font-bold text-purple-600">8</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'postings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Job Postings</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mb-4">
              Create New Job Posting
            </button>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Senior React Developer</h3>
                <p className="text-gray-600">Posted 2 days ago • 12 applications</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Full Stack Developer</h3>
                <p className="text-gray-600">Posted 1 week ago • 8 applications</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">UI/UX Designer</h3>
                <p className="text-gray-600">Posted 2 weeks ago • 4 applications</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'candidates' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Candidate Applications</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">John Doe</h3>
                <p className="text-gray-600">Applied for Senior React Developer • 2 days ago</p>
                <div className="mt-2">
                  <button className="text-indigo-600 mr-2">View Profile</button>
                  <button className="text-green-600">Schedule Interview</button>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-gray-600">Applied for Full Stack Developer • 3 days ago</p>
                <div className="mt-2">
                  <button className="text-indigo-600 mr-2">View Profile</button>
                  <button className="text-green-600">Schedule Interview</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employer; 