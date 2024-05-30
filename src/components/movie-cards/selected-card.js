import React from 'react';
import '../../styles/moviecard.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFavMovie, removeFavMovie } from '../../redux/favourites/favouriteSlice';
import like from "../../assets/heart.png";
import { useLocation } from 'react-router-dom';
import useMovieFetch from '../../hooks/useMovieFetch';

export default function SelectedCard() {

  const location = useLocation();
  const imdbID = location.state || null;
  const dispatch = useDispatch();
  
  let movieId = '';
  if (imdbID.id && typeof imdbID.id === 'string') {
    movieId = imdbID.id;
  }

  const {movie, loading, error} = useMovieFetch(movieId);
  const movies = useSelector((state) => state.favourites.movies);
  const isFavorite = movies.some(favMovie => favMovie.imdbID === movie.imdbID);

  const handleOnClick = () => {
    if (isFavorite) {
      dispatch(removeFavMovie(movie));
    } else {
      dispatch(setFavMovie(movie));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="selected-card">
        <img className='selected-poster' src={movie.Poster} alt='poster'/>
        <div className="selected-content">
            <h2 className="card-title">{movie.Title}</h2>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Awards: {movie.Awards}</p>
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Rated: {movie.Rated}</p>
            <p>IMDb Rating: {movie.imdbRating}</p>
        <button 
           className={`addFav ${isFavorite ? "active" : ""}`} 
          onClick={handleOnClick}
        > 
        <img className='like' src={like} alt='fav' />  </button>
        
        </div>
    </div>
  );
}