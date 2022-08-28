import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from 'services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    API.fetchTrending().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
