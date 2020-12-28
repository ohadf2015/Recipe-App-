const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    //console.log(err.stack.red);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Server Error'
    })
}
module.exports = errorHandler;