const express = require('express');
const router = express.Router();
const { emailOpened, linkClicked, paymentCompleted } = require('../controllers/emailController');

router.get('/opened/:userId', emailOpened);
router.get('/clicked/:userId', linkClicked);
router.get('/paid/:userId', paymentCompleted);

module.exports = router;