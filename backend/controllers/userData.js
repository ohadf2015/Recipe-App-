const usermodel = require("../models/users");
const recsControl = require("../controllers/recommendations");
const errorResponse = require("../utils/errorResponse");
const fsp = require('fs').promises
const path = require('path')
const colors=require('colors')

exports.updateUserCategory = async (req, res, next) => {
    if (!req.body.userId) {
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



exports.updateUserFavorites = async (req, res, next) => {
    if (!req.body.userId) {

        return next(new errorResponse(`${req.body.userId}`, 404));
    }
    const user = await usermodel.findOne({ _id: req.body.userId });
    if (!user) {
        return next(new errorResponse("No user with that id", 404));
    }

    user.favorites = req.body.favorites;
    await user.save();
    res.status(200).json({ success: true });
};
exports.checkNewRecs = async (req, res, next) => {
    console.log('hello',req.body)
    if (!req.body.userId) {

        return next(new errorResponse(`${req.body.userId}`, 404));
    }
    const user = await usermodel.findOne({ _id: req.body.userId});
    if (!user) {
        return next(new errorResponse("No user with that id", 404));
    }

    
    res.status(200).json({ success: true,data:user.dateRecommendations});
};


exports.createRecommendations = async () => {
    try {
        const users = await usermodel.find({});
        if (!users) {
            return next(new errorResponse("No users found", 404));
        }
        let usersFavorites = []
        users.forEach(user => {
            user.favorites.forEach(favorite => {
                usersFavorites.push({ userId: user.recommandationId, rating: 5, recipeId: favorite })
            })
        })

        const { Parser } = require('json2csv');
        const fields = ['userId', 'rating', 'recipeId'];
        const opts = { fields };
        try {
            const parser = new Parser(opts);
            const csv = parser.parse(usersFavorites);
            await fsp.writeFile('./data/newRatings.csv', csv).catch(err => { throw err })
        } catch (err) {
            console.error(err);
        }
        this.runPython()
        //     let recs = recsControl.getRecsById(recommandationId)
        //     if (recs.length > 0) {
        //         res.status(200).json({ success: true });
        //         updateAllUsersRecsStatus()
        //     }
        //     else{
        //         runPython()
        //     }
    } catch (err) {
     throw err
    }

}
exports.runPython = async () => {
    try {


        let pythonPath = path.join(__dirname, '../', 'python', 'CF_new.py')
        const spawn = require("child_process").spawn;
        const process = spawn('python', [pythonPath]);
        process.stderr.on('data', (data) => {
            console.log(`error:${data}`);
        });
        process.stdout.on('data', function (data) {
            let textChunk = data.toString('utf8');// buffer to string
            if (textChunk)
                console.log('running..')
        })
        process.stderr.on('close', () => {
            console.log("Closed");
            return
        })
        process.on('exit', (code, signal) => {
            if (!code) {
                console.log(colors.green.bold('CF algorithem finished successfuly'))
                this.updateAllUsersRecsStatus()
            }
            else {
                this.runPython()
            }
        })

    } catch (error) {
        throw error
    }
}

exports.updateAllUsersRecsStatus = async () => {
    let userIds = await recsControl.getAllUsersIds()
    try {
        await usermodel.updateMany(
            { recommandationId: { $in: userIds } },
            { $set: {  dateRecommendations: Date.now() } })
    }
    catch (error) {
        throw error
    }
}