import Table from 'react-bootstrap/Table';

function MovieTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Movie</th>
                <th>Co-Stars</th>                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>                
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>                
                </tr>
                <tr>
                <td>3</td>
                <td>Eli</td>
                <td>Jones</td>                
                </tr>
            </tbody>
        </Table>
    );
}

export default MovieTable;