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
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);
