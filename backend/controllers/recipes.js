const recpmodel = require("../models/recipesmodels");
const errorResponse = require("../utils/errorResponse");
const usermodel = require("../models/users");
const _ = require("lodash");
// #desc: Get All Recipes
// #route GET api/recipes
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await recpmodel.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
// #desc: Get All Recipes
// #route GET api/recipes/:id
exports.getRecipeWithID = async (req, res, next) => {
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

exports.getUserRecipes = async (req, res, next) => {
  try {
    let finalArr = [];
    const topRecipes = await getTopRecipes();
    const newestRecipes = await getNewestRecipes();
    finalArr.push({ name: "Top Recipes", recipes: topRecipes });
    finalArr.push({ name: "recently added", recipes: newestRecipes });
    res.status(200).json({ success: true, data: finalArr });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

getTopRecipes = async () => {
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

getRecipesByCategories = async () => {
  try {
    const recipes = await recpmodel
      .find({}, { name: 1, recId: 1, rating: 1, img: 1 })
      .sort({ ratingCount: -1, rating: -1 })
      .limit(10);
    return recipes;
  } catch (err) {
    throw err;
  }
};

getNewestRecipes = async (req, res, next) => {
  try {
    let recipes = await recpmodel
      .find({}, { name: 1, recId: 1, rating: 1, img: 1, datePublished: 1 })
      .sort({ datePublished: -1, ratingCount: -1, rating: -1 })
      .limit(50);
    recipes = _.sampleSize(recipes, 10);
    return recipes;
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
