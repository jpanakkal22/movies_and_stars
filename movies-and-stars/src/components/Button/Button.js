import Button from 'react-bootstrap/Button';
import "./buttonStyle.css";

function SelectBtn(props) {
    return (
        <Button variant="warning">{props.btnName}</Button>
    );    
}

export default SelectBtn;
