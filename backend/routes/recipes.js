const express = require('express');
const { getUserRecipes, getRecipes, getRecipeWithID } = require('../controllers/recipes');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').post(protect, getUserRecipes);
router.route('/:id').get(getRecipeWithID);
module.exports = router;