import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Real-Time Skill Assessment & Growth Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your learning journey with AI-powered assessments, personalized feedback, and industry benchmark tracking.
        </p>
        <div className="space-x-4">
          <Link
            to="/candidate"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/employer"
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-md text-lg hover:bg-indigo-50 transition-colors"
          >
            For Employers
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Real-Time Assessment</h3>
          <p className="text-gray-600">
            Take interactive assessments with instant AI evaluation and feedback.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Personalized Guidance</h3>
          <p className="text-gray-600">
            Receive specific improvement suggestions and curated learning resources.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Industry Benchmarks</h3>
          <p className="text-gray-600">
            Track your progress against industry standards and requirements.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Enhance Your Skills?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of professionals who are already using SkillSync to grow their careers.
        </p>
        <Link
          to="/candidate"
          className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg hover:bg-indigo-700 transition-colors"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
}

export default Home; 