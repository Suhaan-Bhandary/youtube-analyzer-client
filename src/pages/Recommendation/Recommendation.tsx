import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovieRecommendation } from '../../services/movie.services';
import { MovieData } from '../../types/movie.types';
import styles from './Recommendation.module.css';

function Recommendation() {
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  console.log(movieData);

  const [searchParams] = useSearchParams();
  const movieDescription = searchParams.get('description');

  // Get the data from the backend api
  useEffect(() => {
    (async () => {
      if (!movieDescription) return;

      try {
        const data = await getMovieRecommendation(movieDescription);

        setMovieData(data);
      } catch (error) {
        console.log('Error');
        toast.error('Error fetching video Data');
      }
    })();
  }, [movieDescription]);

  if (!movieDescription) {
    return (
      <main className={styles.errorMessage}>
        <div className="container">
          <h1>URL is not Valid</h1>
          <Link to="/" className={`default-button ${styles.homeButton}`}>
            Home
          </Link>
        </div>
      </main>
    );
  }

  if (!movieData) {
    return (
      <main className={styles.errorMessage}>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.Recommendation}>
      <div className="container">
        <h1 className="title">Movies</h1>
        <div className={styles.moviesContainer}>
          {movieData?.movies.map((movie) => (
            <div className={styles.movie}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <small>Date: {movie.date}</small>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Recommendation;
