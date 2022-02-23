import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './movieStyle.css';

const Movie = () => {
    const [title, setTitle] = useState({});   
    let params = useParams();

    useEffect(() => {
        const fetchData = async() => {
            await axios.get('/api/Title/' + params.movieId)
            .then(response => {                          
                setTitle(response.data);
            }) 
        }
        fetchData();           
    }, []);        

    return(
        <div className="container fluid">                 
            <div className='row'>
                <div className='col-sm-4 d-flex justify-content-center'>
                    <img className='movieImages' src={title.image} alt={title.title}/>
                </div>
                <div className='col-sm-8 movieData'>
                    <div className="row">
                        <h4>{title.title} ({title.year})</h4>
                        <p>Starring: {title.starList? title.starList.map(actor => {
                            return(
                                <div><Link to={`/actorId/${actor.id}/${params.movieId}`}>{actor.name}</Link></div>
                            )
                        }): ''}</p>                       
                        <p>Rated: <strong>{title.contentRating}</strong></p>
                        <p>imDb Rating: {title.imDbRating}</p><hr/><br/>
                    </div>
                    <div className="row plot">
                        <p>{title.plot}</p>
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

export default Movie;