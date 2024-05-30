import React, { useEffect, useState, useCallback } from 'react'
import { fetchData } from "../services/movieFetch";

const useMovieData = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //caching the function
  const loadMovies = useCallback(async () => {
    let fav = 'Harry Potter';
    try {
      const data = await fetchData(fav);
      setMovies(data.Search || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    loadMovies();
  }, []);


  return {movies, loading, error}
}

export default useMovieData;