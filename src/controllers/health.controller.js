/**
 * 
 */
const healthCheck = () => (req, res) => {
    res.json({ 
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
     })
}

export { healthCheck }