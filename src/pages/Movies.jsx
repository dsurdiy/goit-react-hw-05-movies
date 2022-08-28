import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm/SearchForm';
import * as API from '../services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieTitle = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieTitle === '') return;

    API.fetchMoviesByQuery(movieTitle).then(setMovies);
  }, [movieTitle]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
