import Table from 'react-bootstrap/Table';
import './MovieTableStyle.css';

function MovieTable(props) {
    return (
        <div className='table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Movie</th>
                    <th>Co-Stars</th>                
                    </tr>
                </thead>
                <tbody>
                {props.data === 'Keanu Reeves' ? props.listKR.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.title}</td>
                    <td>{coStar.actors.join(', ')}</td>                
                  </tr>
                )
              }):props.listNC.map(coStar => {
                return(
                  <tr>
                    <td>{coStar.title}</td>
                    <td>{coStar.actors.join(', ')}</td>                
                  </tr>
                  )                  
              })}
                </tbody>
            </Table> 
        </div>
    );
}

export default MovieTable;