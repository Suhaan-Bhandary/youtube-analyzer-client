import axios from 'axios';
import { MovieData } from '../types/movie.types';
import { BASE_API_URL } from './serverConfig';

const getMovieRecommendation = (movieTitle: string, movieGenre: string) => {
  const url = BASE_API_URL + '/api/movie';
  const data = { movieTitle, movieGenre };

  return axios.post<MovieData>(url, data).then((response) => response.data);
};

export { getMovieRecommendation };
