import React, {useState, useCallback} from 'react'
import SearchBar from '../search/searchBar'
import useSearchMovie from '../../hooks/useSearchMovie';
import MovieCard from '../movie-cards/moviecard';
import "../../styles/moviecard.css";
import "../../styles/searchBar.css";

export default function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const { movies, loading, error, searchMovies } = useSearchMovie();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error : {error.message || error} </div>;
  }
  
  return (
  <div className='search'>
    <div className='search-nav'>
      <h2> Peek In </h2>
      <SearchBar handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
    </div>
  
    <div className='moviecard'> 
      {movies.map((movie) => (
        <MovieCard movie={movie}/>
      ))}
    </div>
  </div>  
  );
}
