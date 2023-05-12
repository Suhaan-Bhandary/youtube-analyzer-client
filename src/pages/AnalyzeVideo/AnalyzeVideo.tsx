import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AnalyzeVideo.module.css';

function AnalyzeVideo() {
  const [videoLink, setVideoLink] = useState('');
  const [sortOrder, setSortOrder] = useState('most-popular');
  const [commentCount, setCommentCount] = useState(10);

  return (
    <main className={styles.AnalyzeVideo}>
      <div className="container">
        <div className={styles.searchTool}>
          <h1>Search Youtube Video</h1>

          <div className={styles.filterContainer}>
            <div className={styles.searchBar}>
              <label>Search</label>
              <input
                type="text"
                placeholder="Youtube video Link"
                onChange={(e) => setVideoLink(e.target.value)}
                value={videoLink}
                className={styles.searchBarInput}
              />
            </div>

            <div className={styles.filterInput}>
              <label htmlFor="sortOrder">Sort By</label>
              <select
                name="sortOrder"
                className={styles.inputField}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="most-popular">Most Popular</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className={styles.filterInput}>
              <label htmlFor="commentCount">Comments Count</label>
              <input
                name="commentCount"
                type="number"
                className={styles.inputField}
                value={commentCount}
                onChange={(e) => setCommentCount(parseInt(e.target.value))}
              />
            </div>
          </div>

          <Link
            to={`/analytics?video=${videoLink}&sortOrder=${sortOrder}&commentCount=${commentCount}`}
            className={`default-button ${styles.searchButton}`}
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AnalyzeVideo;
