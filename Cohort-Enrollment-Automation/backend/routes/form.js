const express = require('express');
const router = express.Router();
const { submitForm, getAllUsers, updateUserStatus } = require('../controllers/formController');

router.post('/submit', submitForm);
router.get('/users', getAllUsers);
router.put('/user/:userId/status', updateUserStatus);

module.exports = router;