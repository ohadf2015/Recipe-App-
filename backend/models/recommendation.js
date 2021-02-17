const mongoose = require('mongoose');
const recSchema = new mongoose.Schema({
    recommandationId: Number,
    recommendations: Object,
});




module.exports = mongoose.model('recommendationsCF', recSchema);