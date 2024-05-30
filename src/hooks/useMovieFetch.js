import { useEffect, useState, useCallback } from 'react'
import { fetchMovie } from "../services/movieFetch";

const useMovieFetch = (id) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //caching the function
  const loadMovies = useCallback (async () => {
    try {
      const data = await fetchMovie(id);
      setMovie(data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    loadMovies();
  }, []);


  return {movie, loading, error}
}

export default useMovieFetch;