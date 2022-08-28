import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6301fd4418791e86cee5ab1a6c319ce';

export async function fetchTrending() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
}
