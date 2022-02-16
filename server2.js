const express = require('express');
require('dotenv').config();
const axios = require('axios');


const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const APIKey = process.env.REACT_APP_API_KEY1;

// Search Top 250 Movies
app.get('/api/movies250/', (req, res) => {
    const url = `https://imdb-api.com/en/API/Top250Movies/${APIKey}`;
    
    axios.get(url)
    .then(response => {
        res.json(response.data.items);                               
    })
    .catch(error => {
        console.log(error);
    })
})

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
        res.json(response.data.results);        
    })
    .catch(error => {
        console.log(error);
    })
})

app.get('/api/Title/:id', (req, res) => {
    let id = req.params.id;
    const url = `https://imdb-api.com/en/API/Title/${APIKey}/${id}`;

    axios.get(url)
    .then(response => {
        res.json(response.data);                
    })
    .catch(error => {
        console.log(error);
    })
})

// Search Actor by ID
app.get('/api/actorId/:actorId', (req, res) => {
    let actor = req.params.actorId;
    const url = `https://imdb-api.com/en/API/Name/${APIKey}/${actor}`;

    axios.get(url)
    .then(response => {
        res.json(response.data);        
    })
    .catch(error => {
        console.log(error);
    })
})


app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})