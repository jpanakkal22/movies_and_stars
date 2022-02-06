import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatusCode from './components/Status_Code/Status_Code';
import Actor from './components/Actor/Actor';
import MovieTable from './components/MovieTable/MovieTable';
import './App.css';

const App = () => {
  const [data, setData] = useState('Keanu Reeves');
  const [listKR, setListKR] = useState([]);
  const [listNC, setListNC] = useState([]);

  useEffect(() => {
    fetch('/api')
    .then(res => {
      return res.json();
    })
    .then(response => {
      setListKR(response[0]);
      setListNC(response[1]);      
    })    
  }, []);   

  const handleClick = () => {
    if(data === 'Keanu Reeves') {
      setData('Nicolas Cage')
    } else if (data === 'Nicolas Cage'){
      setData('Keanu Reeves')
    }      
  }

  return (
    <div>
    <StatusCode />    
    <Container className="container-fluid" fluid>       
      <Row className="d-flex justify-content-center">
        <Col xs={4} className="d-flex justify-content-center">
          <Actor 
            name={data}
            handleClick={handleClick}
          />
        </Col>            
      </Row>      
      <Row className="d-flex justify-content-center">
        <Col xs={10}>         
          <MovieTable
            data = {data}
            listKR = {listKR}
            listNC = {listNC}
          />             
        </Col>
      </Row>
    </Container>
    </div>
           
  );
}

export default App;
