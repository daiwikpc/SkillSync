import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Assessment() {
  const { skillId } = useParams();
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    setIsEvaluating(true);
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/assessments/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, skillId }),
      });
      const data = await response.json();
      setFeedback(data);
    } catch (error) {
      console.error('Error evaluating code:', error);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Coding Assessment</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Problem Statement</h3>
          <p className="text-gray-600">
            Implement a function that takes an array of integers and returns the sum of all even numbers.
            The function should have a time complexity of O(n).
          </p>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-64 p-4 border rounded-md font-mono"
            value={code}
            onChange={handleCodeChange}
            placeholder="Write your solution here..."
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isEvaluating}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          {isEvaluating ? 'Evaluating...' : 'Submit Solution'}
        </button>
      </div>

      {feedback && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">AI Feedback</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Score: {feedback.score}/100</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${feedback.score}%` }}
                ></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Time Complexity</h4>
              <p className="text-gray-600">{feedback.timeComplexity}</p>
            </div>
            <div>
              <h4 className="font-medium">Improvement Suggestions</h4>
              <ul className="list-disc list-inside text-gray-600">
                {feedback.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Recommended Resources</h4>
              <ul className="list-disc list-inside text-gray-600">
                {feedback.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assessment; 