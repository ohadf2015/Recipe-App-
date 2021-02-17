const usermodel = require('../models/users');
const crypto = require('crypto');
const errorResponse = require('../utils/errorResponse');
const sendmsg = require('../utils/sendMessage');

// #desc: Register user
// #route GET api/auth/register
exports.register = async(req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        //create new user
        const user = await usermodel.create({
            fullname,
            email,
            password
        });
        //const token = user.getSignedJwtToken();
        // res.status(200).json({ success: true, token });
        sendTokenRes(user, 200, res);

    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err.message });

    }

}
exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return next(new errorResponse('one of field not valid!', 400));
        }
        //check user 
        const user = await usermodel.findOne({ email }).select('+password');
        if (!user) {
            return next(new errorResponse('Invalid credentials', 401));
        }
        const isMatchPass = await user.matchPass(password);
        if (!isMatchPass) {
            return next(new errorResponse('Invalid credentials', 401));
        }
        //const token = user.getSignedJwtToken();
        //res.status(200).json({ success: true, token });

        sendTokenRes(user, 200, res);

    } catch (err) {
        res.status(400).json({ success: false, error: err.message });

    }

}
const sendTokenRes = (user, status, res) => {
    console.log(JSON.stringify(user))
    const token = user.getSignedJwtToken();
    const opts = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true

    }
    if (process.env.NODE_ENV === 'production') {
        opts.secure = true;
    }
    res.status(status).cookie('token', token, opts).json({
        success: true,
        userid: user.id,
        token,
        user
    })
}
exports.myAccount = async(req, res, next) => {
    const user = await usermodel.findById(req.user.id);
    res.status(200).json({
        success: true,
        data: user
    })
}
exports.updateUserCategory = async(req, res, next) => {
 
    if (!req.body.userId) {
        console.log(req.body)
        return next(new errorResponse(`${req.body.updateCat}`, 404));
    }
    const user = await usermodel.findOne({ _id: req.body.userId});
    if (!user) {
        return next(new errorResponse('No user with that id', 404));
    }
    user.categories = user.categories.concat(req.body.categories);
    await user.save();
    res.status(200).json({ success: true });

}
exports.forgotPass = async(req, res, next) => {
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
        return next(new errorResponse('No user with that email', 404));
    }
    const rstTok = user.getResetPassTok();
    //console.log(rstTok);
    await user.save({ validateBeforeSave: false });
    const rstUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpass/${rstTok}`;
    const msg = `Hello ${user.name} !, 
     Please click to link in order reset your password.
     ${rstUrl}`;
    try {
        await sendmsg({
            email: user.email,
            subject: 'reset password',
            message: msg
        });
        res.status(200).json({ success: true, data: "email sent" });
    } catch (err) {
        user.resetPassToken = undefined;
        user.resetpassExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new errorResponse('email could not be sent', 500));
    }
}
exports.resetPassByToken = async(req, res, next) => {
    const resetpasstok = crypto.createHash('sha256').update(req.params.restoken).digest('hex');
    const user = await usermodel.findOne({
        resetPassToken: resetpasstok,
        resetpassExpire: { $gt: Date.now() }
    });
    if (!user) {
        return next(new errorResponse('Invalid Token', 400));
    }
    user.password = req.body.password;
    user.resetPassToken = undefined;
    user.resetpassExpire = undefined;
    await user.save();
    sendTokenRes(user, 200, res);
}
exports.logout = async(req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({ success: true, data: "logout successfully!" });
}