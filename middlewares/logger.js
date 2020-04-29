const loggerMiddleware = (req,  res, next) => {
    const { protocol, originalUrl, method } = req;
    const visitedUrl = `${protocol}://${req.get('host')}${originalUrl}`
    console.log(`Http Method: ${method} Route: ${visitedUrl}`)
    next()
}

module.exports = loggerMiddleware