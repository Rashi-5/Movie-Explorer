import { useEffect, useState, useCallback } from 'react'
import { searchMovie } from "../services/movieFetch";

const useSearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //caching the function
  const searchMovies = useCallback (async (keyword) => {
   
    try {
      const data = await searchMovie(keyword);
      if(data.Response == 'False'){
        setError(data.Error);
      }
      else{
        setMovies(data.Search || []);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    searchMovies();
  }, []);


  return {movies, loading, error, searchMovies}
}

export default useSearchMovie;