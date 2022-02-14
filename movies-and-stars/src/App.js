import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [DropDown, setDropDown] = useState('imdb');
  const [name, setName] = useState(''); 

  const handleDropdownChange = (event) => {
    setDropDown(event.target.innerText);       
  }
 
  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  return(   
    <div className='container fluid'>
      <div className='row d-flex justify-content-center p-4'>
          <div className='col-sm-8'>
              <div className="input-group input-group-sm">
                  <div className="input-group-prepend">
                      <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{DropDown}</button>
                      <div className="dropdown-menu" onClick={handleDropdownChange}>
                          <a className="dropdown-item" href="#">Movies</a>
                          <a className="dropdown-item" href="#">Actors</a>
                          <a className="dropdown-item" href="#">Top 250 Movies</a>                            
                      </div>
                  </div>
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" onChange={handleInputChange} value={name}/>
                  <div className="input-group-append">
                      <button className="btn btn-secondary btn-sm" type="button" id="button-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  </div>
              </div>                     
          </div>
      </div>  
    </div>  
  )
}

export default App;
