const express = require('express');
const { getUserFavorites,getUserRecipes, getMoreRecipes, getRecipeWithID } = require('../controllers/recipes');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/').post(protect,getUserRecipes);
router.route('/more').post(protect,getMoreRecipes);
router.route('/:id').get(protect,getRecipeWithID);
router.post('/getUserFavorites',protect, getUserFavorites);

module.exports = router;