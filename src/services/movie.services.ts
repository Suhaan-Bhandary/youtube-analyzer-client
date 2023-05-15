import { MovieData } from '../types/movie.types';
import fakeRequest from './fakeRequest';

const getMovieRecommendation = (movieTitle: string, movieGenre: string) => {
  const expectedResponse: MovieData = {
    movies: [
      { date: '2020', description: 'This is a movie', title: 'movie' },
      { date: '2021', description: 'This is a movie 2', title: 'movie2' },
    ],
  };

  return fakeRequest(
    { movieTitle, movieGenre },
    expectedResponse,
    false,
  ) as Promise<MovieData>;

  //   const url = BASE_API_URL + '/api/movie-recommendation';
  //   const data = { movieTitle };

  //   return axios.post<MovieData>(url, data).then((response) => response.data);
};

export { getMovieRecommendation };
