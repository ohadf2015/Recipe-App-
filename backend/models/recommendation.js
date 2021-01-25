const mongoose = require('mongoose');
const recSchema = new mongoose.Schema({
    userId: Number,
    recommendations: Object,
});




module.exports = mongoose.model('recommendationsCF', recSchema);