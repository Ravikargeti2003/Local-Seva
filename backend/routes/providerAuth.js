// // routes/providerAuth.js
// const express = require('express');
// const router = express.Router();
// const Provider = require('../models/Provider');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // 🔐 Provider Register
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existing = await Provider.findOne({ email });
//     if (existing) return res.status(400).json({ error: 'Provider already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const provider = new Provider({ name, email, password: hashedPassword });
//     await provider.save();

//     res.status(201).json({ message: 'Registered successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // 🔐 Provider Login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const provider = await Provider.findOne({ email });
//     if (!provider) return res.status(400).json({ error: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, provider.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ id: provider._id, name: provider.name }, 'secret123', { expiresIn: '1d' });
//     res.json({ token, provider: { id: provider._id, name: provider.name, email: provider.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;



//check 2
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Provider = require('../models/Provider'); // Create this model
// const JWT_SECRET = 'your_secret_key';

// // 🔐 Register
// router.post('/register', async (req, res) => {
//   const { name, email, password, phone, address, serviceType } = req.body;

//   try {
//     const existing = await Provider.findOne({ email });
//     if (existing) return res.status(400).json({ error: 'Email already registered' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newProvider = new Provider({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       address,
//       serviceType
//     });

//     await newProvider.save();
//     res.status(201).json({ message: 'Provider registered successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // 🔐 Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const provider = await Provider.findOne({ email });
//     if (!provider) return res.status(400).json({ error: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, provider.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ id: provider._id }, JWT_SECRET, { expiresIn: '7d' });

//     res.json({
//       token,
//       provider: {
//         id: provider._id,
//         name: provider.name,
//         email: provider.email,
//         serviceType: provider.serviceType
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;



//new check(prev fine)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const Provider = require('../models/Provider');

const JWT_SECRET = 'your_secret_key';

// 📁 Multer Storage Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// 🔐 Provider Registration with File Upload
router.post(
  '/register',
  upload.fields([
    { name: 'personalPhoto', maxCount: 1 },
    { name: 'shopPhoto', maxCount: 1 },
    { name: 'aadharProof', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        phone,
        address,
        serviceType,
        experience,
        description
      } = req.body;

      const existing = await Provider.findOne({ email });
      if (existing) return res.status(400).json({ error: 'Email already registered' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newProvider = new Provider({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        serviceType,
        experience,
        description,
        personalPhoto: req.files?.personalPhoto?.[0]?.filename || '',
        shopPhoto: req.files?.shopPhoto?.[0]?.filename || '',
        aadharProof: req.files?.aadharProof?.[0]?.filename || ''
      });

      await newProvider.save();

      res.status(201).json({ message: 'Provider registered successfully' });
    } catch (err) {
      console.error('Registration Error:', err);
      res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// 🔐 Provider Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const provider = await Provider.findOne({ email });
    if (!provider) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: provider._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      provider: {
        id: provider._id,
        name: provider.name,
        email: provider.email,
        serviceType: provider.serviceType
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
