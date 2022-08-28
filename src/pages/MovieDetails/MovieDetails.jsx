import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import * as API from 'services/movies-api';
import { GoBackBtn, MovieWrapper, GenresList } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <GoBackBtn>
            <Link to={backLinkHref}>🔙 Go back</Link>
          </GoBackBtn>
          <MovieWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="240"
            />
            <div>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <GenresList>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </GenresList>
            </div>
          </MovieWrapper>
          <hr />

          <p>Aditional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state?.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
