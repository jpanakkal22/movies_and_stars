import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import "./ActorStyle.css";

function Actor(props) {
    return(
        <div id='actorDiv'>
            <Row>
                <Col className='actor d-flex justify-content-center align-items-center'>
                    <h3>{props.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='actor d-flex justify-content-center'>
                    <Button onClick={props.handleClick}>Toggle</Button>
                </Col>
            </Row>         
        </div>                        
    )
}

export default Actor;