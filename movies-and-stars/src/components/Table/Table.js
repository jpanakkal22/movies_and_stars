import Table from 'react-bootstrap/Table';

function MovieTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Co-Star</th>
                <th>Movies</th>                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>                
                </tr>                
            </tbody>
        </Table>
    );
}

export default MovieTable;