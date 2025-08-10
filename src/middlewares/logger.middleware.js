import { logger } from "@sonatel-os/juf-xpress-logger"


/**
 * 
 * @returns {Function} Middleware function that logs the request method and URL
 */
const captureRequest = () => (req, res, next) => {
    const {originalUrl, headers, ip, body, method } = req
    const { statusCode, statusMessage } = res
    
    /**
     * @description Event listener for response finish
     */
    res.on('finish', () => {
        logger.writeLog({
            params: {
                logFrom: ip,
                userIp: req.headers['x-forwarded-for'] || ip,
                userAgent: headers['user-agent'],
                method: method,
                payload: body ?? {},
                headers: headers,
                logTarget: originalUrl,
                userAgent: 'Mozilla/5.0',
                logStatus: statusCode,
                logStatusCode: statusMessage ?? '' 
            },
            userName: 'cas',
            logLevel: 'INFO',
            action: 'user login',
            duration: Date.now() - start
        });
    })
    next()
}

export { captureRequest }