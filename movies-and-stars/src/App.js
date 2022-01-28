import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SelectBtn from './components/Button/Button';
import Actor from './components/Card/Card';
import MovieTable from './components/Table/Table';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center">
          <SelectBtn btnName="Keanu Reeves"/>
        </Col>
        <Col className="d-flex justify-content-center">
          <SelectBtn btnName="Nicolas Cage"/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Actor 
            title={"Keanu Reeves"}
          />
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
