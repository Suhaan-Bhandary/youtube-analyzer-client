import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecommendMovie.module.css';

function RecommendMovie() {
  const [description, setDescription] = useState('');

  return (
    <div className={styles.RecommendMovie}>
      <div className="container">
        <div className={styles.movieFavorite}>
          <h1 className="title">Movie Recommendation</h1>

          <div className={styles.filterContainer}>
            <div className={styles.searchBar}>
              <label>Description</label>
              <input
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={styles.searchBarInput}
              />
            </div>
          </div>

          <Link
            to={`/recommendation?description=${description}`}
            className={`default-button ${styles.searchButton}`}
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecommendMovie;
