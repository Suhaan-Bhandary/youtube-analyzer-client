import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';
import CommentsDisplay from '../../components/CommentsDisplay/CommentsDisplay';
import CommentsPieChart from '../../components/CommentsPieChart/CommentsPieChart';
import { getVideoAnalyticsData } from '../../services/video.services';
import { VideoData } from '../../types/videos.types';
import styles from './VideoAnalytics.module.css';

function VideoAnalytics() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const [searchParams] = useSearchParams();
  const videoURL = searchParams.get('video');
  const sortOrder = searchParams.get('sortOrder');
  const commentCount = parseInt(searchParams.get('commentCount') || '');

  // Get the data from the backend api
  useEffect(() => {
    (async () => {
      if (!videoURL || !sortOrder || !commentCount) return;

      try {
        const data = await getVideoAnalyticsData(
          videoURL,
          sortOrder,
          commentCount,
        );

        setVideoData(data);
      } catch (error) {
        console.log('Error');
        toast.error('Error fetching video Data');
      }
    })();
  }, [videoURL, sortOrder, commentCount]);

  if (!videoURL || !sortOrder || !commentCount) {
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
          <div>
            <h2>Comments</h2>
            <CommentsPieChart comments={videoData.comments} />
            <CommentsDisplay comments={videoData.comments} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}

export default VideoAnalytics;
