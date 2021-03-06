const recsModel = require("../models/recommendations");
const errorResponse = require("../utils/errorResponse");
const colors = require("colors");
// #desc: Get All Categories
// #route GET api/categories
exports.getAllRecs = async (req, res, next) => {
  try {
    const recommendations = await recsModel.find({}).limit(50);
    res.status(200).json({ success: true, data: recommendations });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getRecsById = async (id) => {
  try {
    const recommendations = await recsModel.findOne({userId:id});
    return recommendations.recommendations
  } catch (err) {
    //res.status(400).json({ success: false });
console.log(err)
  }
};


exports.getAllUsersIds = async (id) => {
  try {
    let users = await recsModel.find({},{userId:1});
    users=users.map(arr=>{return arr.userId})
    return users
  } catch (err) {
    //res.status(400).json({ success: false });
console.log(err)
}
}