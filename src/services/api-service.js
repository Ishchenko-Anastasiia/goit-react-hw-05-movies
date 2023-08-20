const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTU1YjliNzgwY2VkZGNhOWZlMmNmZThkMmQwMDg3NCIsInN1YiI6IjY0ZTFmZTIxOGMwYTQ4MDBjNmM0NmY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQDMOUCMCqKJawHz6JTwdrxT9T0I6OLjcuGBORZ-Pts';

export const fetchHomeMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchMovies = query => {
  return fetch(`${BASE_URL}/search/movie?query=${query}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
};

export const fetchMovie = ({ movieId }) => {
  return fetch(`${BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchCast = ({ movieId }) => {
  return fetch(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchReviews = ({ movieId }) => {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};