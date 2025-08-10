import { healthCheck } from './controllers/health.controller.js';
import express from 'express';
import { notFound } from './middlewares/notFound.middleware.js';
import { captureRequest} from './middlewares/logger.middleware.js';
import { logger } from './controllers/logger.controller.js';

const app = express()

logger.bootstrap({
    appName: 'MyApp',
    crypt: ['password', 'authorization'],
});

/**
 * @description Json Middleware
 */
app.use(express.json())

/**
 * @description logger middleware
 */
app.use(captureRequest)

/**
 * @description Health check
 */
app.get('/_health' , healthCheck)

app.use(notFound)

app.listen(3000)