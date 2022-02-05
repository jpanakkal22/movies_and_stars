import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatusCode from './components/Status_Code/Status_Code';
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
    <div>
<StatusCode />    
    <Container className="container-fluid" fluid>       
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
                <th>Movie</th>
                <th>Co-Stars</th>                
                </tr>
            </thead>
            <tbody>
              {data === 'Keanu Reeves' ? listKR.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.title}</td>
                    <td>{coStar.actors.join(', ')}</td>                
                  </tr>
                )
              }):listNC.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.title}</td>
                    <td>{coStar.actors.join(', ')}</td>                
                  </tr>
                  )                  
              })}                                
            </tbody>
        </Table>     
        </Col>
      </Row>
    </Container>
    </div>
           
  );
}

export default App;
