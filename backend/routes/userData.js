const express = require('express');
const { updateUserCategory, updateUserFavorites } = require('../controllers/userData');
const { protect } = require('../middleware/auth')
const router = express.Router();

router.post('/updateUserCategory', protect,updateUserCategory);
router.post('/updateUserFavorites',protect, updateUserFavorites);

module.exports = router;