import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import './App.css';

const App = () => {    
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="movie" element={<Movie />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
