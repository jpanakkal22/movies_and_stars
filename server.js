const { response } = require('express');
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

  Promise.all([
    await actorsResponse.json(), await moviesResponse.json()
  ]).then(response => {
    let newArrayofActors = [];
  
    // Create a new array of actors from response with added properties
    for(let i = 0; i < response[0].length; i++) {
      newArrayofActors.push({
        'actorId': response[0][i].actorId,
        'Name': response[0][i].name,
        'KRMovies': [],
        'NCMovies': []
      })
    }

    // Compare actors array to movies array and push movie titles into correct sub-array 
    for(let i = 0; i < newArrayofActors.length; i++) {
      for(let j = 0; j < response[1].length; j++) {
        for(let k = 0; k < response[1][j].actors.length; k++) {
          if(newArrayofActors[i].actorId == response[1][j].actors[k] && response[1][j].actors.includes(115)){
            newArrayofActors[i].NCMovies.push(response[1][j].title)
          }
          else if(newArrayofActors[i].actorId == response[1][j].actors[k] && response[1][j].actors.includes(206)) {
            newArrayofActors[i].KRMovies.push(response[1][j].title)
          }
        }
      }
    }

    // Remove any actors who were not co-stars, actorID's, and create new array
    let empty = [];
    let validationArray = newArrayofActors.map(actor => {
      return {
        'Name': actor.Name,
        'KRMovies': actor.KRMovies,
        'NCMovies': actor.NCMovies
      }
    }).filter(actor => {
      if(actor.Name === 'Keanu Reeves' || actor.Name === 'Nicolas Cage' || actor.KRMovies.length == 0 && actor.NCMovies.length == 0) {
        empty.push(actor);
      } else {
        return actor;
      }
    });

    let coStarsKR = validationArray.filter(actor => {
      return actor.KRMovies.length > 0;
    })

    let coStarsNC = validationArray.filter(actor => {
      return actor.NCMovies.length > 0;
    })

    console.log(coStarsNC);
    res.json([coStarsKR, coStarsNC]);
    
  }).catch(error => {
    console.log(error);
  })  

  
});


app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})