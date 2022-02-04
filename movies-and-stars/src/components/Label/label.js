import './labelStyle.css';

function Label(props) {
    return(    
        <h5>Name: <span>{props.name}</span></h5>           
    );
}

export default Label;