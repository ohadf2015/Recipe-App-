const recpmodel = require("../models/recipesmodels");
const errorResponse = require("../utils/errorResponse");
const usermodel = require("../models/users");
const _ = require("lodash");
// #desc: Get All Recipes
// #route GET api/recipes

const mainPageRecipesFields = { name: 1, recId: 1, rating: 1, img: 1 }
exports.getRecipes = async(req, res, next) => {
    try {
        const recipes = await recpmodel.find();
        res.status(200).json({ success: true, data: recipes });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};
// #desc: Get All Recipes
// #route GET api/recipes/:id
exports.getRecipeWithID = async(req, res, next) => {
    try {
        const recp = await recpmodel.findById(req.params.id);
        res.status(200).json({ success: true, data: recp });
    } catch (err) {
        //res.status(400).json({ success: false });
        next(
            new errorResponse(`Recipe not found with id of ${req.params.id}`),
            404
        );
    }
};

exports.getUserRecipes = async(req, res, next) => {
    try {
        let finalArr = [];
        const data = req.body.userData
        const topRecipes = await getTopRecipes();
        const newestRecipes = await getNewestRecipes();
        const basedOnUserCategories = await getRecipesByCategories(data);
        const tenMin = await getTenMinRecipes();

        finalArr.push({ name: "Top Recipes", recipes: topRecipes });
        finalArr.push({ name: "Based on your categories choices", recipes: basedOnUserCategories });
        finalArr.push({ name: "Recently added", recipes: newestRecipes });
        finalArr.push({ name: "Ten minutes recipes!", recipes: tenMin });
        res.status(200).json({ success: true, data: finalArr });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

getTopRecipes = async() => {
    try {
        let recipes = await recpmodel
            .find({}, { name: 1, recId: 1, rating: 1, img: 1 })
            .sort({ ratingCount: -1, rating: -1 })
            .limit(50);
        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        throw err;
    }
};

getRecipesByCategories = async(data) => {
    try {
        let recipes = await recpmodel
            .find({ recipeCategory: { $in: data.categories } }, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(50);
        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        throw err;
    }
};



getTenMinRecipes = async() => {
    try {
        let recipes = await recpmodel
            .find({ totalTimeVal: { $lte: 10 } }, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(50);
        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        throw err;
    }
};

getNewestRecipes = async(req, res, next) => {
    try {
        let recipes = await recpmodel
            .find({}, mainPageRecipesFields)
            .sort({ datePublished: -1, ratingCount: -1, rating: -1 })
            .limit(50);
        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        res.status(400).json({ success: false });
    }
};