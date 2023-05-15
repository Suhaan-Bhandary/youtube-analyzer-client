import { useState } from 'react';
import { Link } from 'react-router-dom';
import { genreList } from '../../assets/data/movies.data';
import styles from './RecommendMovie.module.css';

function RecommendMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('action');

  return (
    <div className={styles.RecommendMovie}>
      <div className="container">
        <div className={styles.movieFavorite}>
          <h1 className="title">Movie Recommendation</h1>

          <div className={styles.filterContainer}>
            <div className={styles.searchBar}>
              <label>Title</label>
              <input
                type="text"
                placeholder="Title of Movie"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={styles.searchBarInput}
              />
            </div>

            <div className={styles.filterInput}>
              <label htmlFor="genre">Genre</label>
              <select
                name="genre"
                className={styles.inputField}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Genre</option>
                {genreList.map((topic) => (
                  <option value={topic}>{topic}</option>
                ))}
                <option value="action">action</option>
              </select>
            </div>
          </div>

          <Link
            to={`/recommendation?title=${title}&genre=${genre}`}
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
