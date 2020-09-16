import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w500/';

const Movie = ({ title, vote_average, poster_path, overview }) => {
  return (
    <div className='movie'>
      <img src={IMG_API + poster_path} alt={title} />
      <div className='movieInfo'>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className='movie-overview'>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
