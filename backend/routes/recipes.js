const express = require('express');
const { getUserRecipes, getRecipes, getRecipeWithID } = require('../controllers/recipes');
const { protect } = require('../middleware/auth');
const router = express.Router();
<<<<<<< HEAD
router.route('/').post(getUserRecipes);
=======
router.route('/').post( getUserRecipes);
>>>>>>> edb4784c28bfa669323c7fd8fea45d1394a46a84
router.route('/:id').get(getRecipeWithID);
module.exports = router;