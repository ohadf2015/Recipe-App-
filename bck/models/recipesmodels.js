const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: String,
    slug: String,
    desc: { type: String, required: [true, 'Please Enter Desc'], trim: true },
    location: {
        tp: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true },
        //index: '2dsphere',
        formatAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String

    }
});
module.exports = mongoose.model('recipe', recipeSchema);