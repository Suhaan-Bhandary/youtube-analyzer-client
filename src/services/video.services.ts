import axios from 'axios';
import { VideoData } from '../types/videos.types';
import { BASE_API_URL } from './serverConfig';

const getVideoAnalyticsData = (
  videoURL: string,
  sortOrder: string,
  commentCount: number,
) => {
  const url = BASE_API_URL + '/api/';
  const data = {
    youtube_video_url: videoURL,
    sort_by_most_popular: sortOrder === 'most-popular',
    comment_count: commentCount,
  };

  return axios.post<VideoData>(url, data).then((response) => response.data);
};

export { getVideoAnalyticsData };
