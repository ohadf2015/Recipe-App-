const recsModel = require("../models/recommendations");
const errorResponse = require("../utils/errorResponse");
const colors = require("colors");
// #desc: Get All Categories
// #route GET api/categories
exports.getAllRecs = async (req, res, next) => {
  try {
    const recommandations = await recsModel.find({}).limit(50);
    console.log(recommandations);
    res.status(200).json({ success: true, data: recommandations });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getRecsById = async (req, res, next) => {
  try {
    const recommandations = await recsModel.findById(req.params.id);
    res.status(200).json({ success: true, data: recommandations });
  } catch (err) {
    //res.status(400).json({ success: false });
    next(
      new errorResponse(`Recipe not found with id of ${req.params.id}`),
      404
    );
  }
};
