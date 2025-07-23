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

//check
app.use(cors({
  origin: 'https://local-seva.netlify.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

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
