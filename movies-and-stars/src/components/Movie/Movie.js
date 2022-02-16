import { useParams } from "react-router-dom";

const Movie = () => {
    let params = useParams();
    return(
        <div className='row' id='#movieData'>
            {console.log(params.movieId)}
            {/* <div className='col-sm-6'>
                <img class='movieImages' src={props.title.image} alt={props.title.title}/>
            </div>
            <div className='col-sm-6'>
                <h4>{props.title.title} ({props.title.year})</h4>
                <p>Starring: {props.title.stars}</p>
                <p><strong>{props.title.contentRating}</strong></p>
                <p>imDb Rating: {props.title.imDbRating}</p><hr/><br/>
                <p>{props.title.plot}</p>
            </div>                   */}
        </div>        
    )
}

export default Movie;