import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './ActorStyle.css';

const Actor = () => {
    const [actor, setActor] = useState({});
    const [filterMovies, setFilterMovies] = useState([]);
    let params = useParams();
    

    useEffect(() => {
        const fetchData = async() => {
            await axios.get('/api/actorId/' + params.actorId)
            .then(response => {
              let newArray = response.data.castMovies.filter(movie => {
                  return movie.role === "Actor" || movie.role === "Actress";
              })
              setActor(response.data);
              setFilterMovies(newArray);
            }) 
        }
        fetchData();           
    }, []);

    return(
        <div className="container fluid"> 
        {console.log(actor)}       
            <div className='row'>                
                <div className='col-sm-3 d-flex justify-content-center'>
                    <img className="actorImage" src={actor.image} alt={actor.name}/>
                </div>
                <div className='col-sm-6 actorData'>
                    <div className="row">
                        <h4>{actor.name}</h4><hr/><br/>                        
                    </div>
                    <div className="row">
                        <p>{actor.summary}</p>
                    </div>
                    <div className="row d-flex justify-content-end m-2">
                        <div className="col-sm-3 d-flex justify-content-end">
                            <Link to={'/'}><button className="btn btn-secondary btn-sm" type="button" id="button-addon2"><FontAwesomeIcon icon={faArrowLeftLong} /> Home</button></Link>
                        </div>                        
                    </div> 
                    {!params.movieId?<div className="col-sm-3 d-flex justify-content-end"></div>:<div className="row d-flex justify-content-end m-2">
                        <div className="col-sm-3 d-flex justify-content-end">
                        <Link to={`/movie/${params.movieId}`}><button className="btn btn-secondary btn-sm" type="button" id="button-addon2"><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button></Link>
                        </div>                        
                    </div> }                                        
                </div>
                <div className='col-sm-3 castMovies'>
                    <h4>Movies</h4>
                    <ol>
                        {filterMovies.map(movie => {
                            return(
                                <li><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
                            )
                        })}
                    </ol>
                </div>                  
            </div> 
        </div>               
    )
}

export default Actor;