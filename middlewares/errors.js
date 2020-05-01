const errorHandler = (err, req, res, next) => {

    if (err.name === 'CastError') {
        
    }
    console.log(err.stack.red);
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    })
}

module.exports = errorHandler