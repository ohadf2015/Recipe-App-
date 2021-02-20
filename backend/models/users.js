const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection)
const userSchema = new mongoose.Schema({
    recommandationId:{
        type:Number
    },
    fullname: {
        type: String,
        required: [true, 'Please enter your name!']
    },
    email: {
        type: String,
        required: [true, 'Please enter your mail'],
        unique: true,
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'please add valid email']
    },
    level: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    },
    categories: {
        type: Array,
        default: []
    },
    favorites: {
        type: Array,
        default: []
    },
    password: {
        type: String,
        required: [true, 'please enter your pass'],
        minlength: 8,
        select: false,
    },
    resetPassToken: String,
    resetpassExpire: Date,
    createpass: {
        type: Date,
        default: Date.now
    }
});




userSchema.plugin(autoIncrement.plugin, {
    model: 'users',
    field: 'recommandationId',
    startAt: 1400000,
    incrementBy: 1
});

userSchema.pre('save', async function(next) {
console.log(this)
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
 
});
//sign JWT
userSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}
userSchema.methods.matchPass = async function(p) {
    return await bcrypt.compare(p, this.password);

}
userSchema.methods.getResetPassTok = function() {
    const resetTok = crypto.randomBytes(20).toString('hex');
    this.resetPassToken = crypto.createHash('sha256').update(resetTok).digest('hex');
    this.resetpassExpire = Date.now() + 10 * 60 * 1000;
    return resetTok;

}
module.exports = mongoose.model('users', userSchema);









