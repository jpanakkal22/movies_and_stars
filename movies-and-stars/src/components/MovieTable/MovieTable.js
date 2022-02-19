import { Link, Outlet } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import './MovieTableStyle.css';

function MovieTable(props) {
    return (
      <div className='row'>
        <div className='col'>
          <div className='table-responsive'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>                                   
                </tr>
              </thead>
              <tbody> 
                {(props.dropDown === 'Actor/Actress')?props.data.map(data => {
                  return(                                    
                    <tr>
                      <td><img src={data.image} alt={data.title} loading='lazy'/></td>
                      <td><Link to={`/actorId/${data.id}`}>{data.title}</Link></td>                    
                    </tr>                                                                           
                  )                        
                }):props.data.map(data => {
                  return(                                    
                    <tr>
                      <td><img src={data.image} alt={data.title} loading='lazy'/></td>
                      <td><Link to={`/movie/${data.id}`}>{data.title}</Link></td>                    
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