const mongoose = require("mongoose");
const recsSchema = new mongoose.Schema({
  userId: Number,
  recommendations: Object,
});

module.exports = mongoose.model("recommandations", recsSchema);
