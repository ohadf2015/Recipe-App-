const jwt = require('jsonwebtoken');
const ErrorRespone = require('../utils/errorResponse');
const User = require('../models/users');
exports.protect = async(req, res, next) => {
    let token;
    console.log(req.headers.authorization, req.cookies)
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log(token)
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token) {
        return next(new ErrorRespone('Not authorize to access this route', 401));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = await User.findById(decoded.id);
        next();

    } catch (err) {
        return next(new ErrorRespone('Not authorize to access this route', 401));
    }
}