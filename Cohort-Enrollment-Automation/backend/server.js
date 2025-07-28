const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./config/db');
const formRoutes = require('./routes/form');
const emailRoutes = require('./routes/email');
const { startEmailScheduler } = require('./utils/emailService');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/form', formRoutes);
app.use('/api/email', emailRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Cohort Automation API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Start the email scheduler
    startEmailScheduler();
});