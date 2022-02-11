const express = require('express');
require('dotenv').config();
const axios = require('axios');


const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const APIKey = process.env.REACT_APP_API_KEY1;

app.get('/api/:movie', (req, res) => {    
    let movie = req.params.movie
    const url = `https://imdb-api.com/en/API/SearchMovie/${APIKey}/${movie}`;

    axios.get(url)
    .then(function (response) {        
    res.json(response.data.results)
    })    
    .catch(function (error) {
    console.log(error);
    })       
})

app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})