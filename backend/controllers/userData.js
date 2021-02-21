const usermodel = require("../models/users");
const errorResponse = require("../utils/errorResponse");

exports.updateUserCategory = async(req, res, next) => {
    console.log(req.body.userId);
    if (!req.body.userId) {
        console.log(req.body);
        return next(new errorResponse(`${req.body.updateCat}`, 404));
    }
    const user = await usermodel.findOne({ _id: req.body.userId });
    if (!user) {
        return next(new errorResponse("No user with that id", 404));
    }
    user.categories = req.body.categories;
    await user.save();
    res.status(200).json({ success: true });
};