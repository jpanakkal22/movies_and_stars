import Card from 'react-bootstrap/Card';
import "./cardStyles.css";

function Actor(props) {
    return (
        <Card>
            <Card.Img variant="bottom" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>            
            </Card.Body>
        </Card>
    );
}

export default Actor;
