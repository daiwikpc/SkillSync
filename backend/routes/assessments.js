const express = require('express');
const router = express.Router();
const {
  createAssessment,
  getAssessments,
  getAssessment,
  submitAssessment,
  getUserSubmissions,
} = require('../controllers/assessmentController');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getAssessments)
  .post(protect, authorize('admin'), createAssessment);

router.route('/:id').get(getAssessment);

router.route('/:id/submit').post(protect, submitAssessment);

router.route('/submissions/me').get(protect, getUserSubmissions);

module.exports = router; 