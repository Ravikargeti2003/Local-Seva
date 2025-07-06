// // routes/serviceRequest.js
// const express = require('express');
// const router = express.Router();
// const ServiceRequest = require('../models/ServiceRequest');

// // Create a new service request
// router.post('/book', async (req, res) => {
//   try {

//      console.log("📩 Booking Request Body:", req.body); // 👈 Add this line
//     const { serviceType, userId, providerId } = req.body;

//     //check2
//     if (!serviceType || !userId || !providerId) {
//       return res.status(400).json({ error: 'Missing fields' });
//     }
//     const request = new ServiceRequest({ serviceType, userId, providerId });
//     await request.save();

//     res.status(201).json({ message: 'Service request sent successfully.' });
//   } catch (err) {
//      console.error("🔥 Error in /book route:", err);
//     res.status(500).json({ message: 'Failed to send request', error: err.message });
//   }
// });

// // Get all service requests for a provider
// router.get('/provider/:providerId', async (req, res) => {
//   try {
//     const requests = await ServiceRequest.find({ providerId: req.params.providerId }).populate('userId');
//     res.status(200).json(requests);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Accept or reject a service request
// router.patch('/:id', async (req, res) => {
//   try {
//     const { status } = req.body; // "Accepted" or "Rejected"
//     const updated = await ServiceRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;




//check 2(was correct)
// const express = require('express');
// const router = express.Router();
// const ServiceRequest = require('../models/ServiceRequest');

// // ✅ Book a new service request
// router.post('/book', async (req, res) => {
//   try {
//     console.log("📩 Booking Request Body:", req.body);
//     const { serviceType, userId, providerId } = req.body;

//     if (!serviceType || !userId || !providerId) {
//       return res.status(400).json({ error: 'Missing fields' });
//     }

//     const request = new ServiceRequest({
//       serviceType,
//       userId,
//       providerId
//       // ⚠️ don't add status manually if model has default
//     });

//     await request.save();
//     res.status(201).json({ message: 'Service request sent successfully.' });

//   } catch (err) {
//     console.error("🔥 Error in /book route:", err);
//     res.status(500).json({ message: 'Failed to send request', error: err.message });
//   }
// });

// // ✅ Get all service requests for a specific provider
// router.get('/provider/:providerId', async (req, res) => {
//   try {
//     const requests = await ServiceRequest.find({ providerId: req.params.providerId })
//       .populate('userId', 'name email'); // only fetch name & email

//     res.status(200).json(requests);
//   } catch (err) {
//     console.error("❌ Failed to fetch requests:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Accept or Reject a specific service request
// router.patch('/requests/:requestId', async (req, res) => {
//   try {
//     const { status } = req.body; // 'accepted' or 'rejected'

//     if (!['accepted', 'rejected'].includes(status)) {
//       return res.status(400).json({ error: 'Invalid status value' });
//     }

//     const updated = await ServiceRequest.findByIdAndUpdate(
//       req.params.requestId,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ error: 'Request not found' });
//     }

//     res.status(200).json(updated);
//   } catch (err) {
//     console.error("❌ Failed to update request:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;



//check 3

// const express = require('express');
// const router = express.Router();
// const ServiceRequest = require('../models/ServiceRequest');

// // ✅ Book a new service request
// router.post('/book', async (req, res) => {
//   try {
//     console.log("📩 Booking Request Body:", req.body);
//     const { serviceType, userId, providerId } = req.body;

//     if (!serviceType || !userId || !providerId) {
//       return res.status(400).json({ error: 'Missing fields' });
//     }

//     const request = new ServiceRequest({
//       serviceType,
//       userId,
//       providerId
//     });

//     await request.save();
//     res.status(201).json({ message: 'Service request sent successfully.' });

//   } catch (err) {
//     console.error("🔥 Error in /book route:", err);
//     res.status(500).json({ message: 'Failed to send request', error: err.message });
//   }
// });

// // ✅ Get all service requests for a specific provider
// router.get('/provider/:providerId', async (req, res) => {
//   try {
//     const requests = await ServiceRequest.find({ providerId: req.params.providerId })
//       .populate('userId', 'name email');

//     res.status(200).json(requests);
//   } catch (err) {
//     console.error("❌ Failed to fetch requests:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ PATCH: Accept or Reject a specific service request
// router.patch('/:id', async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!['accepted', 'rejected'].includes(status.toLowerCase())) {
//       return res.status(400).json({ error: 'Invalid status value' });
//     }

//     const updated = await ServiceRequest.findByIdAndUpdate(
//       req.params.id,
//       { status: status.toLowerCase() },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ error: 'Request not found' });
//     }

//     res.status(200).json(updated);
//   } catch (err) {
//     console.error("❌ Failed to update request:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;



//check 4
// const express = require('express');
// const router = express.Router();
// const ServiceRequest = require('../models/ServiceRequest');

// // 🟢 Book a new service request
// router.post('/book', async (req, res) => {
//    console.log("📥 Received Booking Data:", req.body); // Should show full payload
//   try {
//     console.log("📥 Received booking request body:", req.body); // 🔥 add this
//     console.log("📩 Booking Request Body:", req.body);
//     const { serviceType, userId, providerId } = req.body;

//     if (!serviceType || !userId || !providerId) {
//       return res.status(400).json({ error: 'Missing fields' });
//     }

//     const request = new ServiceRequest({
//       serviceType,
//       userId,
//       providerId,
//       status: 'pending' // make sure default is set or explicitly set it
//     });

//     // await request.save();
//      const saved = await request.save(); // 👈 Add this
//     console.log("✅ Request saved in DB:", saved); // 👈 Add this

//     res.status(201).json({ message: 'Service request sent successfully.' });

//   } catch (err) {
//     console.error("🔥 Error in /book route:", err);
//     res.status(500).json({ message: 'Failed to send request', error: err.message });
//   }
// });

// // ✅ Get all service requests for a specific provider
// router.get('/provider/:providerId', async (req, res) => {
//   try {
//     const requests = await ServiceRequest.find({ providerId: req.params.providerId })
//       .populate('userId', 'name email');

//     res.status(200).json(requests);
//   } catch (err) {
//     console.error("❌ Failed to fetch requests:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// //checkl
// // ✅ Get all service requests for a specific user
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const requests = await ServiceRequest.find({ userId: req.params.userId })
//       .populate('providerId', 'name');
//     res.status(200).json(requests);
//   } catch (err) {
//     console.error("❌ Failed to fetch user requests:", err);
//     res.status(500).json({ error: err.message });
//   }
// });


// // ✅ Accept or Reject a service request (IMPORTANT FIX HERE 👇)
// router.put('/:id', async (req, res) => {
//   try {
//     const { status } = req.body;

//     console.log("🔁 Received update for request:", req.params.id, "->", status);

//     if (!['accepted', 'rejected'].includes(status.toLowerCase())) {
//       return res.status(400).json({ error: 'Invalid status value' });
//     }

//     const updatedRequest = await ServiceRequest.findByIdAndUpdate(
//       req.params.id,
//       { status: status.toLowerCase() },
//       { new: true }
//     );

//     if (!updatedRequest) {
//       return res.status(404).json({ error: 'Service request not found' });
//     }

//     console.log("✅ Request updated:", updatedRequest);
//     res.status(200).json(updatedRequest);
//   } catch (err) {
//     console.error("❌ Failed to update request:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;



///chkskk nclaude
const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

// 🟢 Book a new service request
router.post('/book', async (req, res) => {
  console.log("📥 Received Booking Data:", req.body);
  
  try {
    const { 
      serviceType, 
      userId, 
      providerId,
      serviceName,
      date,
      time,
      duration,
      address,
      phone,
      description,
      urgency,
      paymentMethod,
      price,
      rating,
      location,
      experience,
      availability
    } = req.body;

    if (!serviceType || !userId || !providerId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const request = new ServiceRequest({
      serviceType,
      userId,
      providerId,
      serviceName,
      date,
      time,
      duration,
      address,
      phone,
      description,
      urgency,
      paymentMethod,
      price,
      rating,
      location,
      experience,
      availability,
      status: 'pending'
    });

    const saved = await request.save();
    console.log("✅ Request saved in DB:", saved);

    res.status(201).json({ message: 'Service request sent successfully.' });
  } catch (err) {
    console.error("🔥 Error in /book route:", err);
    res.status(500).json({ message: 'Failed to send request', error: err.message });
  }
});

// ✅ Get all service requests for a specific provider
router.get('/provider/:providerId', async (req, res) => {
  try {
    const requests = await ServiceRequest.find({ providerId: req.params.providerId })
      .populate('userId', 'name email');
    
    res.status(200).json(requests);
  } catch (err) {
    console.error("❌ Failed to fetch requests:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all service requests for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const requests = await ServiceRequest.find({ userId: req.params.userId })
      .populate('providerId', 'name');
    res.status(200).json(requests);
  } catch (err) {
    console.error("❌ Failed to fetch user requests:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Accept or Reject a service request
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    console.log("🔁 Received update for request:", req.params.id, "->", status);
    
    if (!['accepted', 'rejected'].includes(status.toLowerCase())) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    
    const updatedRequest = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      { status: status.toLowerCase() },
      { new: true }
    );
    
    if (!updatedRequest) {
      return res.status(404).json({ error: 'Service request not found' });
    }
    
    console.log("✅ Request updated:", updatedRequest);
    res.status(200).json(updatedRequest);
  } catch (err) {
    console.error("❌ Failed to update request:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🆕 Get detailed request information
router.get('/details/:id', async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }
    
    res.status(200).json(request);
  } catch (err) {
    console.error("❌ Failed to fetch request details:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;