import * as React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MovieTable from '../MovieTable/MovieTable';

const Search = () => {
  const [DropDown, setDropDown] = useState('imdb');
  const [name, setName] = useState(''); 
  const [data, setData] = useState([]);  
    
  useEffect(() => {
      handleSubmit();        
  }, []);

  const handleDropdownChange = (event) => {
    setDropDown(event.target.innerText);       
  }
 
  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = async () => {
    let route = '';
    if(DropDown !== 'Choose') {
        switch(DropDown) {
            case 'Top 250 Movies':
               route = '/api/movies250/';
              break;
            case 'Movies':
               route = '/api/movie/' + name;
              break;
            case 'Actors':
              route = '/api/actor/' + name;
              break;            
        }
    }
    await axios.get(route)
    .then(response => {
        setData(response.data);
    })                   
  }

  return(
    <div>        
        <div className='container fluid'>
            <div className='row d-flex justify-content-center p-4'>
                <div className='col-sm-8'>
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{DropDown}</button>
                            <div className="dropdown-menu" onClick={handleDropdownChange}>
                                <li className="dropdown-item">Movies</li>
                                <li className="dropdown-item">Actors</li>
                                <li className="dropdown-item">Top 250 Movies</li>                            
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" onChange={handleInputChange} value={name}/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary btn-sm" type="button" id="button-addon2" onClick={handleSubmit}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </div>                     
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-10'>
                    <MovieTable 
                    dropDown = {DropDown}
                    data = {data}
                    />                     
                </div> 
            </div>
        </div>            
    </div>    
    )
}

export default Search;