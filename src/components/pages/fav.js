import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movie-cards/moviecard';

export default function Fav() {

  const movies = useSelector((state) => state.favourites.movies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className='moviecard'> 
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  )
}
