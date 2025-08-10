/**
 * @return {function}
 */
const logger = () => (req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${res.statusCode}`);
    })
    return next()
}

export { logger }