import { Container, Row, Col } from 'react-bootstrap';
import StatusCode from './components/Status_Code/Status_Code';
import Header from './components/Header/Header';
import Label from './components/Label/label';
import ControlButton from './components/Button/Button';
import MovieTable from './components/Table/Table';
import './App.css';

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
