import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AnalyzeVideo.module.css';

function AnalyzeVideo() {
  const [videoLink, setVideoLink] = useState('');

  return (
    <main className={styles.AnalyzeVideo}>
      <div className="container">
        <div className={styles.searchTool}>
          <h1>Search Youtube Video</h1>

          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Youtube video Link"
              onChange={(e) => setVideoLink(e.target.value)}
              value={videoLink}
              className={styles.searchBarInput}
            />
          </div>

          <Link
            to={`/analytics?video=${videoLink}`}
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
