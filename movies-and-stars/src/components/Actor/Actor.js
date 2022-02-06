import Button from 'react-bootstrap/Button';
import "./ActorStyle.css";

function Actor(props) {
    return(
        <div id='actorDiv'>
            <h5>Name: <span>{props.name}</span></h5>
            <Button onClick={props.handleClick}>Toggle</Button>
        </div>                        
    )
}

export default Actor;