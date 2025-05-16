import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Candidate from './pages/Candidate';
import Employer from './pages/Employer';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidate" element={<Candidate />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 