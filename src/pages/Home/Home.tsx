import { Link } from 'react-router-dom';
import authenticIcon from '../../assets/images/home/facilities/authentic.png';
import doubtIcon from '../../assets/images/home/facilities/doubt.png';
import insightIcon from '../../assets/images/home/facilities/insight.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Home.module.css';
import './slider.css';

function Home() {
  return (
    <div className={styles.Home}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span>A Friendly Tool to</span>
            <span className={styles.underlineSpan}>Youtube Videos</span>
          </h1>
          <p>
            Tool to analyze youtube videos and categorize them in Good or Bad
            and also view the positive and negative comments.
          </p>
          <div className={styles.heroActionButtons}>
            <Link
              to="/analyze"
              className={`default-button ${styles.exploreButton}`}
            >
              Analyze
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.facilities} id="aim">
        <div className="container">
          <h2>
            <span>Easily Search and Analyze</span>
            <span className={styles.underlineSpan}>Youtube Videos</span>
          </h2>
          <div className={styles.facilitiesContainer}>
            <div className={styles.facility}>
              <img src={insightIcon} alt="" />
              <h3>Insights</h3>
              <p>Get Real Insights about the Youtube Videos</p>
            </div>
            <div className={styles.facility}>
              <img src={doubtIcon} alt="" />
              <h3>Double Solving</h3>
              <p>Solve your doubts on a video to watch or not</p>
            </div>
            <div className={styles.facility}>
              <img src={authenticIcon} alt="" />
              <h3>Authenticity</h3>
              <p>Discover Authentic and Real Time Analytics</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className="container">
          <div className={styles.footerContainer}>
            <div className={styles.info}>
              <h2>Youtube Analyzer</h2>
              <p>
                Tool to analyze youtube videos and categorize them in Good or
                Bad and also view the positive and negative comments.
              </p>
            </div>

            <div className={styles.links}>
              <h2>Links</h2>
              <a href="mailto:suhaanbhandary1@gmail.com">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.copyRight}>
        <div className="container">
          <p>Youtube Analyzer</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
