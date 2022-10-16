const mongoose = require('mongoose');

const UserChallengeSchema = new mongoose.Schema({
  cid: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('UserChallenge', UserChallengeSchema);
