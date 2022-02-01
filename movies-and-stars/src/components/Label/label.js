import './labelStyle.css';

function Label(props) {
    return(    
        <h5>Name: <span>{props.name}</span></h5>           
    );
}

/* Default name for Label when component loads*/
Label.defaultProps = {
    name: "Nicolas Cage"
}

export default Label;