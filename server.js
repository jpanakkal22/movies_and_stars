const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const urlMovies = 'https://switch-yam-equator.azurewebsites.net/api/movies';
const urlActors = 'https://switch-yam-equator.azurewebsites.net/api/actors';
const urlValidation = 'https://switch-yam-equator.azurewebsites.net/api/validation';
const otherParam = {
  headers: {
    'x-chmura-cors': process.env.REACT_APP_API_KEY
  },
  method: "GET"
};

app.get('/api', async (req, res) => {
  const actorsResponse = await fetch(urlActors, {
	headers: {
    'x-chmura-cors': process.env.REACT_APP_API_KEY
  }})
  
  const moviesResponse = await fetch(urlMovies, {    
    headers: {
      'x-chmura-cors': process.env.REACT_APP_API_KEY
  }})

  const actors = await actorsResponse.json();
  const movies = await moviesResponse.json(); 

  res.json({actors, movies});
});


app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})