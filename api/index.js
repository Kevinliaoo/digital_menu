import express from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser';

import { config } from './config.js';
import { connect } from './db.js';
import { routes } from './routes/index.js';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
connect(DB_URL);

const app = express(); 

app.use(cors());
app.use(bodyParser.json())

routes(app);

app.listen(config.PORT, () => {
    console.log(`API listening on port ${config.PORT}`)
}) 