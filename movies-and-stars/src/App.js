import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import StatusCode from './components/Status_Code/Status_Code';
import Header from './components/Header/Header';
import Label from './components/Label/label';
import SelectBtn from './components/Button/Button';
import MovieTable from './components/Table/Table';

function App() {
  return (
    <Container className="container-fluid" fluid>
      <StatusCode />
      <Row>
        <Col className='d-flex justify-content-center bg-light'>
          <Header />
        </Col>
      </Row>
      <Row className='bg-light'>
        <Col className="d-flex justify-content-start align-items-center">
          <Label 
            name='Keanu Reeves'
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <SelectBtn btnName='Nicolas Cage'/>
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
