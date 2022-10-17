const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  question: { type: String, required: true },
  language: { type: String, required: true, index: true },
  code: { type: String, required: true, index: true },
  answers: { type: [String], required: true },
  correct: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 10, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Challenge', ChallengeSchema);
