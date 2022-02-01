import Button from 'react-bootstrap/Button';
import "./buttonStyle.css";

function ControlButton(props) {
    return(
        <Button>{props.btnText}</Button>                
    )
}

ControlButton.defaultProps = {
    btnText: "Keanu Reeves"
}

export default ControlButton;
