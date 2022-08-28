import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm/SearchForm';
import * as API from '../services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
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
              <Link
                to={`${movie.id}`}
                state={{ from: `/movies?query=${movieTitle}` }}
              >
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
