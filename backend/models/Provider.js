// // models/Provider.js
// const mongoose = require('mongoose');

// const providerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true },
//   password: { type: String, required: true },
//   phone: String,
//   address: String,
//   serviceType: String
// });

// module.exports = mongoose.model('Provider', providerSchema);


//check 2
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  serviceType: { type: String },

  // New fields
  experience: { type: String },
  description: { type: String },
  personalPhoto: { type: String },
  shopPhoto: { type: String },
  aadharProof: { type: String },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Provider', providerSchema);
