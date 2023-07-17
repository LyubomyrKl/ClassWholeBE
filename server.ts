require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const port = process.env.PORT || 3000;


const app = express();


app.use(
    logger,
    cors(corsOptions),
    express.json(), 
    cookieParser()
)

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});


app.use(errorHandler);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});