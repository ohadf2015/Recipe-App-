const express = require('express');
const { getCategories } = require('../controllers/categories');
//const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').get(getCategories);
module.exports = router;