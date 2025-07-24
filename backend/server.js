// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config(); // move to top to ensure env variables load


// //auth
// const providerAuthRoutes = require('./routes/providerAuth');
// // app.use('/api/provider', providerAuthRoutes);
// // require('dotenv').config();

// //router for user
// const userAuthRoutes = require('./routes/userAuth');

// const app = express();

// //check
// app.use(cors({
//   origin: 'https://local-sevak.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
//   credentials: true
// }));

// // ✅ Handle preflight OPTIONS request globally
// // app.options('*', cors());

// app.use(express.json());
// app.use('/api/provider', providerAuthRoutes);
// // require('dotenv').config();


// //routes for userauth
// app.use('/api/user', userAuthRoutes);

// // Optional: Add a root endpoint to confirm server is live
// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// });


// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // API routes
// app.use('/api/requests', require('./routes/serviceRequest'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



//above cmntd for rende check
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // load env variables early

const app = express();

// ✅ Robust CORS Setup
const allowedOrigins = [
  'https://local-sevak.netlify.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Routes
const providerAuthRoutes = require('./routes/providerAuth');
const userAuthRoutes = require('./routes/userAuth');
const serviceRequestRoutes = require('./routes/serviceRequest');

app.use('/api/provider', providerAuthRoutes);
app.use('/api/user', userAuthRoutes);
app.use('/api/requests', serviceRequestRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
