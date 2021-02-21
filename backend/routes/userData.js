const express = require('express');
const {updateUserCategory, getUserData } = require('../controllers/userData');
const { protect } = require('../middleware/auth')
const router = express.Router();

router.post('/updateUserCategory', updateUserCategory);

module.exports = router;