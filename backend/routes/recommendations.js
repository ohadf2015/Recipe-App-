const express = require('express');
const recsC = require('../controllers/recommendations');
//const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').get(recsC.getAllRecs);
module.exports = router;