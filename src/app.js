import { healthCheck } from './controllers/health.controller.js';
import { logger } from './controllers/logger.controller.js' 
import express from 'express';

const app = express()

/**
 * @description Json Middleware
 */
app.use(express.json())

/**
 * @description logger middleware
 */
app.use(logger)


/**
 * @description Health check
 */
app.get('/_health' , healthCheck)

app.use((req, res) => {
    res.status(404)
    .send({ error: 'Request not found' })
})

app.listen(3000)