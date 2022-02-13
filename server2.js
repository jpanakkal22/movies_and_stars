const express = require('express');
require('dotenv').config();
const axios = require('axios');


const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const APIKey = process.env.REACT_APP_API_KEY1;

// Search Movies
app.get('/api/movie/:movie', (req, res) => {    
    let movie = req.params.movie;
    const url = `https://imdb-api.com/en/API/SearchMovie/${APIKey}/${movie}`;

    axios.get(url)
    .then(response => {        
    res.json(response.data.results)
    })    
    .catch(error => {
    console.log(error);
    })       
})

// Search Actors
app.get('/api/actor/:actor', (req, res) => {
    let actor = req.params.actor;
    const url = `https://imdb-api.com/en/API/SearchName/${APIKey}/${actor}`;

    axios.get(url)
    .then(response => {
        res.json(response.data.results)
    })
    .catch(error => {
        console.log(error);
    })
})

app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})