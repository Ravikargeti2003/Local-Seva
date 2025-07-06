// // models/ServiceRequest.js
// const mongoose = require('mongoose');

// const serviceRequestSchema = new mongoose.Schema({
//   serviceType: String,
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// //   providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming provider is also a user
//    providerId: String,  // 👈 was: mongoose.Schema.Types.ObjectId
//   userId: String,      // 👈 was: mongoose.Schema.Types.ObjectId
//   // status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'Pending' },


//   status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },


// //   timestamp: { type: Date, default: Date.now },
//  createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);





//check claudd
// models/ServiceRequest.js
const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  serviceType: String,
  providerId: String,
  userId: String,
  
  // Add form fields
  serviceName: String,
  date: String,
  time: String,
  duration: String,
  address: String,
  phone: String,
  description: String,
  urgency: String,
  paymentMethod: String,
  price: String,
  rating: String,
  location: String,
  experience: String,
  availability: String,
  
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected'], 
    default: 'pending' 
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);