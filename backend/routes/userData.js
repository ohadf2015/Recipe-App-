const express = require('express');
const { updateUserCategory, updateUserFavorites,checkNewRecs } = require('../controllers/userData');
const { protect } = require('../middleware/auth')
const router = express.Router();

router.post('/updateUserCategory', protect,updateUserCategory);
router.post('/updateUserFavorites',protect, updateUserFavorites);
router.post('/checkNewRecs',protect, checkNewRecs);

module.exports = router;