const recpmodel = require("../models/recipesmodels");
const recomModel=require("../controllers/recommendations")
const errorResponse = require("../utils/errorResponse");
const usermodel = require("../models/users");
const _ = require("lodash");
// #desc: Get All Recipes
// #route GET api/recipes

const mainPageRecipesFields = { name: 1, RecId: 1, rating: 1, img: 1, recipeCategory: 1,totalTimeVal:1}
exports.getRecipes = async(req, res, next) => {
    try {
        const recipes = await recpmodel.find();
        res.status(200).json({ success: true, data: recipes });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};
exports.getMoreRecipes = async(req, res, next) => {
    const data = req.body.userData
    try {
        let recipes = await recpmodel
            .find({}, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(1000);
        recipes = recipes.filter((recipe) => {
            let flag = false
            for (const recipeCategory of recipe.recipeCategory) {
                if (_.indexOf(data.categories, recipeCategory) != -1) {
                    flag = true
                    break
                }
            }
            return flag

        })

        recipes = _.sampleSize(recipes, 10);
        res.status(200).json({ success: true, data: recipes });
  
    } catch (err) {
        res.status(400).json({ success: false });
        throw err
    }
};
// #desc: Get All Recipes
// #route GET api/recipes/:id
exports.getRecipeWithID = async(req, res, next) => {
    try {
        const recp = await recpmodel.findOne({RecId:req.params.id});
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
        const personalizedRecs=await getPersonalizedRecs(data);
        const topRecipes = await getTopRecipes();
        const newestRecipes = await getNewestRecipes();
        const basedOnUserCategories = await getRecipesByCategories(data);
        const tenMin = await getTenMinRecipes();
if(personalizedRecs&&personalizedRecs.length>0){
    finalArr.push({ name: "Personalized recommendations",icon:"assistant", recipes: topRecipes }); 
}
        finalArr.push({ name: "Top Recipes",icon:"grade", recipes: topRecipes });
        finalArr.push({ name: "Based on your categories choices",icon:"thumbs_up_down", recipes: basedOnUserCategories });
        finalArr.push({ name: "Recently added",icon:"fiber_new", recipes: newestRecipes });
        finalArr.push({ name: "10 minutes recipes!",icon:"alarm", recipes: tenMin });
        res.status(200).json({ success: true, data: finalArr });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

getTopRecipes = async() => {
    try {
        let recipes = await recpmodel
            .find({}, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(120);
        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        throw err;
    }
};


getPersonalizedRecs = async(data) => {
    try {
       let recommendations= await recomModel.getRecsById(data.recommandationId)
       recommendations=recommendations.map(arr=>arr.recipeId)
        let recipes = await recpmodel
            .find({RecId:{$in:recommendations}}, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(10);
        return recipes;
    } catch (err) {
        throw err;
    }
};



getRecipesByCategories = async(data) => {
    try {
        let recipes = await recpmodel
            .find({}, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(1000);
        recipes = recipes.filter((recipe) => {
            let flag = false
            for (const recipeCategory of recipe.recipeCategory) {
                if (_.indexOf(data.categories, recipeCategory) != -1) {
                    flag = true
                    break
                }
            }
            return flag

        })

        recipes = _.sampleSize(recipes, 10);
        return recipes;
    } catch (err) {
        throw err;
    }
};



getTenMinRecipes = async() => {
    try {
        let recipes = await recpmodel
            .find({ totalTimeVal: { $lte: 10,$gt:0 } }, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
            .limit(100);
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


exports.getUserFavorites = async(req, res, next) => {
    if (!req.body.favorites) {
        return next(new errorResponse(`${req.body.favorites}`, 404));
    }
    const favorites=req.body.favorites
    try {
        let recipes = await recpmodel
            .find({RecId:{$in:favorites}}, mainPageRecipesFields)
            .sort({ ratingCount: -1, rating: -1 })
        
            let finalArr=[]
            finalArr.push({name:"My Favorite Recipes",icon:"favorite",recipes:recipes})
            res.status(200).json({ success: true, data: finalArr });
    } catch (err) {
        res.status(400).json({ success: false });
    };
};