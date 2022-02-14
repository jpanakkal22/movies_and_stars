import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './MovieTableStyle.css';

function MovieTable(props) {
  const [title, setTitle] = useState({});

  useEffect(() => {
    handleTitleClick();        
  }, []);

  const handleTitleClick = async (event) => {
    let movieId = event.target.dataset.id;

    await axios.get('/api/Title/' + movieId)
    .then(response => {
      setTitle(response.data);
    })
  }

    return (
      <div className='row'>
        <div className='col'>
          <div className='table-responsive'>
            {console.log(title)}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>                                   
                </tr>
              </thead>
              <tbody>                
                {props.data.map(data => {
                  return(                                    
                    <tr>
                      <td><img src={data.image} alt={data.title} loading='lazy'/></td>
                      <td><a href='#movieData' data-id={data.id} onClick={handleTitleClick}>{data.title}</a></td>                    
                    </tr>                                                                           
                  )                        
                })}
              </tbody>
          </Table> 
        </div>
      </div>
        
      <div className='row' id='#movieData'>
        <div className='col-sm-6'>
          <img class='movieImages' src={title.image} alt={title.title}/>
        </div>
        <div className='col-sm-6'>
          <h4>{title.title} ({title.year})</h4>
          <p>Starring: {title.stars}</p>
          <p><strong>{title.contentRating}</strong></p>
          <p>imDb Rating: {title.imDbRating}</p><hr/><br/>
          <p>{title.plot}</p>

        </div>
                  
      </div>
      </div>
        
    );
}

export default MovieTable;