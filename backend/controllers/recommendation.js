const recSchema = require('../models/recommendation');
const errorResponse = require('../utils/errorResponse');
const colors=require('colors')
const assert=require('assert')
const func=require('../helper/functions')
// #desc: Get All Categories
// #route GET api/categories
exports.createRecommendations = async(req, res, next) => {
    try {
        await deleteAllData()
        let recommendations=await func.getRecommendations()
        await recSchema.insertMany(recommendations,function(err,r){
            if(!err){
            assert(null,err);
            }
           else{
            console.log(err)
           }
        });
        res.status(200).json({ success: true, data: "" });

    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false });

    }
}


const deleteAllData = async () => {
    try {
      await recSchema.deleteMany();
      console.log('All old recommendations successfully cleared');
    } catch (err) {
      console.log(err);
    }
  };
