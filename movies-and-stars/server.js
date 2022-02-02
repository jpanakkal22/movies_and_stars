const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const PORT = 8000;

const app = express();

app.get('/', (req, res) => {
    res.json('hi');
});

app.listen(8000, () => {
    console.log('server is running on PORT 8000');
})