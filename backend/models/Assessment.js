const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the assessment'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  skill: {
    type: String,
    required: [true, 'Please specify the skill being assessed'],
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: [true, 'Please specify the difficulty level'],
  },
  problemStatement: {
    type: String,
    required: [true, 'Please provide the problem statement'],
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      expectedOutput: {
        type: String,
        required: true,
      },
    },
  ],
  timeLimit: {
    type: Number, // in minutes
    required: [true, 'Please specify the time limit'],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  submissions: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
      feedback: {
        type: String,
        required: true,
      },
      timeComplexity: {
        type: String,
        required: true,
      },
      submittedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Assessment', assessmentSchema); 