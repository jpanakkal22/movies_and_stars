import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatusCode from './components/Status_Code/Status_Code';
import Header from './components/Header/Header';
import Label from './components/Label/label';
import ControlButton from './components/Button/Button';
import MovieTable from './components/Table/Table';
import './App.css';

function App() {
  const [data, setData] = useState({}); 
  let newArrayofActors = [];
  let validationArray = [];

  useEffect(() => {
    fetch('/api')
    .then(res => {
      return res.json();
    })
    .then(res => { 
       /* Create a new array of actors from response with added properties*/    
      for(let i = 0; i < res.actors.length; i++) {
        newArrayofActors.push({
          'actorId': res.actors[i].actorId,
          'Name': res.actors[i].name,
          'KRMovies': [],
          'NCMovies': []
        });         
      } 

      // Compare actors array to movies array and push movie titles into correct sub-array 
      for(let i = 0; i < newArrayofActors.length; i++) {
        for(let j = 0; j < res.movies.length; j++) {
          for(let k = 0; k < res.movies[j].actors.length; k++) {
            if(newArrayofActors[i].actorId == res.movies[j].actors[k] && res.movies[j].actors.includes(115)){
              newArrayofActors[i].NCMovies.push(res.movies[j].title)
            }
            else if(newArrayofActors[i].actorId == res.movies[j].actors[k] && res.movies[j].actors.includes(206)) {
              newArrayofActors[i].KRMovies.push(res.movies[j].title)
            }
          }
        }
      }

      // Remove any actors who were not co-stars, actorID's, and create new array
      let empty = [];
      validationArray = newArrayofActors.map(actor => {
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

      setData({
        labelName: 'Nicolas Cage',
        btnName: 'Keanu Reeves',
        arrayNC: validationArray.filter(actor => {
          return actor.NCMovies.length > 0;
        }),
        arrayKR: validationArray.filter(actor => {
          return actor.KRMovies.length > 0;
        })
      });

    });    
  }, []);

  

  return (
    
    <Container className="container-fluid" fluid>
      {console.log(data.arrayKR)}      
      <StatusCode />
      <Row>
        <Col className='d-flex justify-content-center bg-light'>
          <Header />
        </Col>
      </Row>
      <Row className='bg-light'>
        <Col className="d-flex justify-content-start align-items-center">
          <Label />
        </Col> 
        <Col className='d-flex justify-content-end'>
          <ControlButton />
        </Col>        
      </Row>      
      <Row>
        <Col>    
        <MovieTable />          
        </Col>
      </Row>
    </Container>       
  );
}

export default App;
