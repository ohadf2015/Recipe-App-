const mongoose = require('mongoose');
const categoSchema = new mongoose.Schema({
    name: String,
    numRec: Number,
});
module.exports = mongoose.model('categories', categoSchema);