import React from 'react'
import "../../styles/home.css";
import MovieCard from '../movie-cards/moviecard';
import useMovieData from '../../hooks/useMovieData';

export default function Home() {

const {movies, loading, error} = useMovieData();

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

  return (
    <div className='home'>
      <h2> All Time Favourites </h2>
      
      <div className='moviecard'>
        {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
      </div>  
    </div>
  )
}
