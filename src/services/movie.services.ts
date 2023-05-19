import axios from 'axios';
import { MovieData } from '../types/movie.types';
import { BASE_API_URL } from './serverConfig';

const getMovieRecommendation = (movieDescription: string) => {
  const url = BASE_API_URL + '/api/movie';
  const data = { movieDescription };

  return axios.post<MovieData>(url, data).then((response) => response.data);
};

export { getMovieRecommendation };
