import React from 'react';
import '../../styles/moviecard.css';
import { useDispatch } from 'react-redux';
import { setFavMovie, removeFavMovie } from '../../redux/favourites/favouriteSlice';
import like from "../../assets/heart.png";
import { useNavigate } from 'react-router-dom';

export default function MovieCard({movie}) {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate('/detail-card', { state: { id } });
  }

  return (
    <div className="card" onClick={() => handleSelect(movie.imdbID)}>
      <div className="card-content">
        <img className='poster' src={movie.Poster} alt='poster'/>
        <h5 className="card-title">{movie.Title}</h5>
      </div>
    </div>
  );
}
