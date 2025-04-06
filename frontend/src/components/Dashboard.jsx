import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills/progress');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-indigo-600">
                {skill.currentScore}%
              </span>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  skill.trend > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {skill.trend > 0 ? '+' : ''}
                {skill.trend}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${skill.currentScore}%` }}
              ></div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>Your Score</span>
              <span>Industry Benchmark: {skill.benchmark}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Progress Over Time</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={skills[0]?.history || []}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4F46E5"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                stroke="#9CA3AF"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recommended Next Steps</h3>
        <div className="space-y-4">
          {skills
            .filter((skill) => skill.currentScore < skill.benchmark)
            .map((skill) => (
              <div key={skill.id} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{skill.name}</h4>
                  <p className="text-gray-600">
                    {skill.recommendations[0] || 'No specific recommendations yet'}
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Start Assessment
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 