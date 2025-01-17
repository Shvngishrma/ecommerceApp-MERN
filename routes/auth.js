const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Test Route
router.get('/', (req, res) => {
    res.send('Auth route is working!');
});
router.post('/register', registerUser);

module.exports = router;
