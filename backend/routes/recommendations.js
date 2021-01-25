const express = require('express');
const { createRecommendations } = require('../controllers/recommendation');
//const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').get(createRecommendations);
module.exports = router;