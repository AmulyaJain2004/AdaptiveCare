const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Staff', 'Supplier'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You can hash this later
});

module.exports = mongoose.model('User', userSchema);
