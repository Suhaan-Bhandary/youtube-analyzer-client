import { VideoData } from '../types/videos.types';
import fakeRequest from './fakeRequest';

const getVideoAnalyticsData = (videoURL: string): Promise<VideoData> => {
  console.log(videoURL);

  return fakeRequest(
    { videoURL },
    { name: 'suhaan' },
    false,
  ) as Promise<VideoData>;
};

export { getVideoAnalyticsData };
