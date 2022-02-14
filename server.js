const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const axios = require('axios').default;


const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const urlMovies = 'https://switch-yam-equator.azurewebsites.net/api/movies';
const urlActors = 'https://switch-yam-equator.azurewebsites.net/api/actors';
const urlValidation = 'https://switch-yam-equator.azurewebsites.net/api/validation';


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
    let movies = response[1];
    let actors = response[0];
    let newArrayofActors = [];
    let empty = [];

    // Replace actorId's in response array with actor name
    for(let i = 0; i < movies.length; i++){
      for(let j = 0; j < movies[i].actors.length; j++) {
        for(let k = 0; k < actors.length; k++) {
          if(actors[k].actorId === movies[i].actors[j]) {
            movies[i].actors[j] = actors[k].name;
          }
        }
      }
    }    
  
    // Create a new array of actors from response with added properties
    for(let i = 0; i < actors.length; i++) {
      newArrayofActors.push({
        'actorId': actors[i].actorId,
        'Name': actors[i].name,
        'KRMovies': [],
        'NCMovies': []
      })
    }
    
    // Compare actors array to movies array and push movie titles into correct sub-array 
    for(let i = 0; i < newArrayofActors.length; i++) {
      for(let j = 0; j < movies.length; j++) {
        for(let k = 0; k < movies[j].actors.length; k++) {
          if(newArrayofActors[i].Name === movies[j].actors[k] && movies[j].actors.includes('Nicolas Cage')){
            newArrayofActors[i].NCMovies.push(movies[j].title)
          }
          else if(newArrayofActors[i].Name === movies[j].actors[k] && movies[j].actors.includes('Keanu Reeves')) {
            newArrayofActors[i].KRMovies.push(movies[j].title)
          }
        }
      }
    }

    // Remove any actors who were not co-stars, actorID's, and create new array
    let validationArray = newArrayofActors.map(actor => {
      return {
        'Name': actor.Name,
        'KRMovies': actor.KRMovies,
        'NCMovies': actor.NCMovies
      }
    }).filter(actor => {
      if(actor.Name === 'Keanu Reeves' || actor.Name === 'Nicolas Cage' || actor.KRMovies.length == 0 || actor.NCMovies.length == 0) {
        empty.push(actor);
      } else {
        return actor;
      }
    });
    
    // Filter out all movies with Keanu Reeves and remove his name from actors array
    let keanuReevesMovies = movies.filter(actor => {
      if(actor.actors.includes('Keanu Reeves')){
        const index = actor.actors.indexOf('Keanu Reeves');
        if (index > -1) {
          actor.actors.splice(index, 1);
        }
        return actor
      }
    });

    let nicolasCageMovies = movies.filter(actor => {
      if(actor.actors.includes('Nicolas Cage')){
        const index = actor.actors.indexOf('Nicolas Cage');
        if (index > -1) {
          actor.actors.splice(index, 1);
        }
        return actor
      }
    });        
    
    // res.json([keanuReevesMovies, nicolasCageMovies, validationArray]);
    res.json(validationArray)
        
  }).catch(error => {
    console.log(error);
  })    
});

app.post('/validate', (req, res) => {  

  var id = [
    {
      "Name": "Giovanni Ribisi",
      "KRMovies": [
          "The Gift"
      ],
      "NCMovies": [
          "Gone in Sixty Seconds"
      ]
    },
    {
      "Name": "Bridget Fonda",
      "KRMovies": [
          "Little Buddha"
      ],
      "NCMovies": [
          "It Could Happen to You"
      ]
    },
    {
      "Name": "James Caan",
      "KRMovies": [
          "Henry's Crime"
      ],
      "NCMovies": [
          "Honeymoon in Vegas"
      ]
    },
  {
      "Name": "Christopher Plummer",
      "KRMovies": [
          "The Lake House"
      ],
      "NCMovies": [
          "The Boy in Blue"
      ]
    },
    {
      "Name": "Charlize Theron",
      "KRMovies": [
          "Sweet November",
          "The Devil's Advocate"
      ],
      "NCMovies": [
          "Astro Boy"
      ]
    },
    {
      "Name": "Laurence Fishburne",
      "KRMovies": [
          "The Matrix Revolutions",
          "The Matrix Reloaded",
          "The Matrix"
      ],
      "NCMovies": [
          "Running with the Devil"
      ]
    },
    {
      "Name": "Thomas Jane",
      "KRMovies": [
          "The Last Time I Committed Suicide"
      ],
      "NCMovies": [
          "USS Indianapolis: Men of Courage"
      ]
    },
    {
      "Name": "Tilda Swinton",
      "KRMovies": [
          "Thumbsucker"
      ],
      "NCMovies": [
          "Adaptation."
      ]
    },
    {
      "Name": "Willem Dafoe",
      "KRMovies": [
          "John Wick"
      ],
      "NCMovies": [
          "Siberia",
          "Dog Eat Dog",
          "Wild at Heart"
      ]
    },
    {
      "Name": "Dennis Hopper",
      "KRMovies": [
          "Speed"
      ],
      "NCMovies": [
          "Red Rock West"
      ]
    }
  ]

  axios.post(urlValidation, req.body, {
    headers: {
      'x-chmura-cors': process.env.REACT_APP_API_KEY
    }
  })
  .then(function (response) {
    res.json(`${response.status} ${response.statusText}`)
  })  
  .catch(function (error) {
    console.log(error);
  });

  
})

  
app.listen(8000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})