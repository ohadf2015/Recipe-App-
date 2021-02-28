const express = require('express');
const { getUserFavorites,getUserRecipes, getRecipes, getRecipeWithID } = require('../controllers/recipes');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').post(protect,getUserRecipes);
router.route('/:id').get(protect,getRecipeWithID);
router.post('/getUserFavorites',protect, getUserFavorites);

module.exports = router;