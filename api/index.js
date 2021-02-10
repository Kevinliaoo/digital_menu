import express from 'express';
import cors from 'cors'; 

import { config } from './config.js';
import { routes } from './routes/index.js'

const app = express(); 

app.use(cors());

routes(app);

app.listen(config.PORT, () => {
    console.log(`API listening on port ${config.PORT}`)
}) 