import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import { Link, Route, Switch } from 'react-router-dom';

import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

const addToSavedList = id => {
    if (!saved.find(movie => movie.id === parseInt(id))) {
      const ourMovie = movieList.find(movie => movie.id === parseInt(id));
      setSaved(saved => [ourMovie,...saved]);
      console.log(saved);
    }
  };

  return (
    <div>
      <SavedList list={saved} setSaved={setSaved} />

      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>

      <Route path='/movies/:id'>
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
}
