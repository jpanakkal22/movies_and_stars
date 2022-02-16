import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './ActorStyle.css';

const Actor = () => {
    const [actor, setActor] = useState({});
    let params = useParams();

    useEffect(() => {
        const fetchData = async() => {
            await axios.get('/api/actorId/' + params.actorId)
            .then(response => {
              setActor(response.data);
            }) 
        }
        fetchData();           
    }, []);

    return(
        <div className="container fluid">       
        {console.log(actor)}    
            <div className='row'>                
                <div className='col-sm-4 d-flex justify-content-center'>
                    <img className="actorImage" src={actor.image} alt={actor.name}/>
                </div>
                <div className='col-sm-8'>
                    <div className="row">
                        <h4>{actor.name}</h4><hr/><br/>                        
                    </div>
                    <div className="row">
                        <p>{actor.summary}</p>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-sm-3 d-flex justify-content-end">
                            <Link to={'/'}><button className="btn btn-secondary btn-sm" type="button" id="button-addon2"><FontAwesomeIcon icon={faArrowLeftLong} /> Home</button></Link>
                        </div>                        
                    </div>                    
                </div>                  
            </div> 
        </div>               
    )
}

export default Actor;