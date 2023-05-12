import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';
import { getVideoAnalyticsData } from '../../services/video.services';
import { VideoData } from '../../types/videos.types';
import styles from './VideoAnalytics.module.css';

function VideoAnalytics() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const [searchParams] = useSearchParams();
  const videoURL = searchParams.get('video');

  // Get the data from the backend api
  useEffect(() => {
    (async () => {
      if (!videoURL) return;

      try {
        const data = await getVideoAnalyticsData(videoURL);
        setVideoData(data);
      } catch (error) {
        console.log('Error');
        toast.error('Error fetching video Data');
      }
    })();
  }, [videoURL]);

  if (!videoURL) {
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

  return (
    <main className={styles.VideoAnalytics}>
      <div className="container">
        <h1>Video Analytics</h1>
        {videoData ? (
          <p>Video Data Available, {videoData.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}

export default VideoAnalytics;
