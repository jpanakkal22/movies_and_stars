import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Label from './components/Label/label';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
    <Container className="container-fluid" fluid> 
      {console.log(listKR, listNC)}    
      <Row>
        <Col className='d-flex justify-content-center bg-light'>
        <h1>Nicolas Cage & Keanu Reeves <br/>Co-Stars</h1>
        </Col>
      </Row>
      <Row className='bg-light'>
        <Col className="d-flex justify-content-start align-items-center">
          <Label 
            name={data}
          />

        </Col> 
        <Col className='d-flex justify-content-end'>
          <Button variant="success" onClick={handleClick}>Toggle</Button>
        </Col>        
      </Row>      
      <Row>
        <Col>    
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Co-Star</th>
                <th>Movies</th>                
                </tr>
            </thead>
            <tbody>
              {data === 'Keanu Reeves' ? listKR.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.Name}</td>
                    <td>{coStar.KRMovies.join(', ')}</td>                
                  </tr>
                )
              }):listNC.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.Name}</td>
                    <td>{coStar.NCMovies.join(', ')}</td>                
                  </tr>
                  )                  
              })}                                
            </tbody>
        </Table>     
        </Col>
      </Row>
    </Container>       
  );
}

export default App;
