import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/Movie';

function App() {
  const API_KEY = '04c35731a5ee918f014970082a0088b1';
  const FEATURED_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=f7f662e8aad0cf5a4eb746b54b470595&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const SEARCH_API = ` `;

  //Movies State;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
       });
  }, []);

  return (
    <div className='App'>
      <div className='continer'>
        <div className='movieWrapper'>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
