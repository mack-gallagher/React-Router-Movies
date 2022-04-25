import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieCard from './MovieCard.js';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div className='movie-card'>
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

