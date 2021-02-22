const express = require('express');
const { updateUserCategory, updateUserFavorites, getUserData } = require('../controllers/userData');
const { protect } = require('../middleware/auth')
const router = express.Router();

router.post('/updateUserCategory', updateUserCategory);
router.post('/updateUserFavorites', updateUserFavorites);

module.exports = router;