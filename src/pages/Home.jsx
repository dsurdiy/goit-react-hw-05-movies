import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from 'services/movies-api';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.fetchTrending().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
