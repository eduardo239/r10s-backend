const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);
