const mongoose = require('mongoose');
const connectMongo = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MONGODB Connected!! => ${conn.connection.host}`.yellow.bgBlack);
}
module.exports = connectMongo;