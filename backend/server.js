// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//auth
const providerAuthRoutes = require('./routes/providerAuth');
// app.use('/api/provider', providerAuthRoutes);
// require('dotenv').config();

//router for user
const userAuthRoutes = require('./routes/userAuth');

const app = express();

// app.use(cors());
const allowedOrigins = [
 'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:8080',      // Also allow localhost via IP
  'https://local-sevaaa.netlify.app'  // Your Netlify frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


//check
// app.use(cors({
//   origin: 'https://local-seva.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
//   credentials: true
// }));

app.use(express.json());
app.use('/api/provider', providerAuthRoutes);
require('dotenv').config();


//routes for userauth
app.use('/api/user', userAuthRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API routes
app.use('/api/requests', require('./routes/serviceRequest'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
