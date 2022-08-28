import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/movies-api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width="80"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
