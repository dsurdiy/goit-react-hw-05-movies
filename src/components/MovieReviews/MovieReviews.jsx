import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/movies-api';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
