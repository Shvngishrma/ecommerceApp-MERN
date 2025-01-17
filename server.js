const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;
// Test route for root URL
app.get('/', (req, res) => {
    res.send('Server is running!');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Include the database connection
const connectDB = require('./config/db');
connectDB();

// Registering routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

