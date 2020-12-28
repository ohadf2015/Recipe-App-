const recpmodel = require('../models/recipesmodels');
const errorResponse = require('../utils/errorResponse');
// #desc: Get All Recipes
// #route GET api/recipes
exports.getRecipes = async(req, res, next) => {
        try {
            const recipes = await recpmodel.find();
            res.status(200).json({ success: true, data: recipes });

        } catch (err) {
            res.status(400).json({ success: false });

        }
    }
    // #desc: Get All Recipes
    // #route GET api/recipes/:id
exports.getRecipeWithID = async(req, res, next) => {
    try {
        const recp = await recpmodel.findById(req.params.id);
        res.status(200).json({ success: true, data: recp });

    } catch (err) {
        //res.status(400).json({ success: false });
        next(new errorResponse(`Recipe not found with id of ${req.params.id}`), 404);
    }
}