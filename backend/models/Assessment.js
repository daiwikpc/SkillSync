const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  questions: [
    {
      questionText: {
        type: String,
        required: [true, 'Please add a question text']
      },
      options: {
        type: [String],
        required: [true, 'Please add options']
      },
      correctAnswer: {
        type: Number,
        required: [true, 'Please add a correct answer']
      }
    }
  ],
  timeLimit: {
    type: Number,
    default: 30 // Default time limit in minutes
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assessment', AssessmentSchema); 