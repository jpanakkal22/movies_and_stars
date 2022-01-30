import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo192.png';
import './statusCodeStyle.css';

function StatusCode() {
  return(
    <Navbar bg="dark">        
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text id="statusCode">
          Response_Status: 200 OK 
        </Navbar.Text>
      </Navbar.Collapse>        
    </Navbar>
  )
}

export default StatusCode;

