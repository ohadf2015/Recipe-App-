const express = require('express');
const { getRecipes, getRecipeWithID } = require('../controllers/recipes');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').get(protect, getRecipes);
router.route('/:id').get(getRecipeWithID);
module.exports = router;