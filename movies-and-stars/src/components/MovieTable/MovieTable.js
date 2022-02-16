import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './MovieTableStyle.css';

function MovieTable(props) {
  const [title, setTitle] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    handleTitleClick();        
  }, []);

  const handleTitleClick = async (event) => {
    setId(event.target.dataset.id);
    // let movieId = event.target.dataset.id;

    // await axios.get('/api/Title/' + movieId)
    // .then(response => {
    //   setTitle(response.data);
    // })
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
                      <td><Link to={`/movie/${data.id}`} data={data.id}>{data.title}</Link></td>                    
                    </tr>                                                                           
                  )                        
                })}
              </tbody>
          </Table> 
        </div>
        <Outlet />
      </div>
        
      
    </div>
      
  );
}

export default MovieTable;