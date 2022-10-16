const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
    index: true,
  },
  code: {
    type: String,
    required: true,
    index: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', CourseSchema);
