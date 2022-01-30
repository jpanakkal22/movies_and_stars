import Button from 'react-bootstrap/Button';
import "./buttonStyle.css";

function SelectBtn(props) {
    return (
        <Button variant="primary">{props.btnName}</Button>
    );    
}

export default SelectBtn;
