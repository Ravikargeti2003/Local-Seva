// models/ServiceRequest.js
const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  serviceType: String,
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming provider is also a user
   providerId: String,  // 👈 was: mongoose.Schema.Types.ObjectId
  userId: String,      // 👈 was: mongoose.Schema.Types.ObjectId
  // status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'Pending' },


  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },


//   timestamp: { type: Date, default: Date.now },
 createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
