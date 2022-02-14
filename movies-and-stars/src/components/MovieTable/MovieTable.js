import Table from 'react-bootstrap/Table';
import './MovieTableStyle.css';

function MovieTable(props) {
    return (
        <div className='table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Id</th>               
                    </tr>
                </thead>
                <tbody>                
              {props.data.map(data => {
                return(                                    
                  <tr>
                    <td><img src={data.image} alt={data.title} loading='lazy'/></td>
                    <td>{data.title}</td>
                    <td>{data.id}</td>
                  </tr>                                                                           
                )                        
              })}
                </tbody>
            </Table> 
        </div>
    );
}

export default MovieTable;