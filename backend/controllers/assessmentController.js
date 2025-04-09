const Assessment = require('../models/Assessment');
const Submission = require('../models/Submission');

// @desc    Get all assessments
// @route   GET /api/assessments
// @access  Public
exports.getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.json(assessments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single assessment
// @route   GET /api/assessments/:id
// @access  Public
exports.getAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);
    
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }
    
    res.json(assessment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new assessment
// @route   POST /api/assessments
// @access  Private/Admin
exports.createAssessment = async (req, res) => {
  try {
    const { title, description, questions, timeLimit } = req.body;
    
    const assessment = await Assessment.create({
      title,
      description,
      questions,
      timeLimit,
      createdBy: req.user._id
    });
    
    res.status(201).json(assessment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Submit assessment
// @route   POST /api/assessments/:id/submit
// @access  Private
exports.submitAssessment = async (req, res) => {
  try {
    const { answers } = req.body;
    const assessmentId = req.params.id;
    
    // Check if assessment exists
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }
    
    // Create submission
    const submission = await Submission.create({
      assessment: assessmentId,
      user: req.user._id,
      answers
    });
    
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get user submissions
// @route   GET /api/assessments/submissions/me
// @access  Private
exports.getUserSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ user: req.user._id })
      .populate('assessment', 'title description');
    
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 