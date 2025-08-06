/**
 * 
 * @returns {Function} Middleware function that logs the request method and URL
 */
const logger = () => (req, res, next) => {
    console.log(`${req.method} ${req.url}}`)

    res.on('finish', () => {
        console.log(`Response status: ${res.statusCode}`)
    })
    next()
}

export { logger}