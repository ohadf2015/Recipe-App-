const catmodel = require('../models/categories');
const errorResponse = require('../utils/errorResponse');
// #desc: Get All Categories
// #route GET api/categories
exports.getCategories = async(req, res, next) => {
    try {
        const categories = await catmodel.find({}).sort({ numRec: -1 }).limit(50);
        res.status(200).json({ success: true, data: categories });

    } catch (err) {
        res.status(400).json({ success: false });

    }
}

