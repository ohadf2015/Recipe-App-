const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: String,
    ratingData: Object,
    datePublished:Date,
    description:String,
    recipeYield: String,
    recipeIngredient: Object,
    recipeInstructions: Object,
    recipeCategory: Object,
    nutrition: Object,
    category: String,
    Tatcategory:String,
    RecId: Number,
    link:String,
    rating: Number,
    img:String,
    prepTimeVal:Number,
    cookTimeval: Number,
    totalTimeVal:Number,
    ratingCount: Number,
    bestRating: Number,
    worstRating: Number
});
module.exports = mongoose.model('recipe', recipeSchema);
