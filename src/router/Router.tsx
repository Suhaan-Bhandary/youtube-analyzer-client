import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../pages/DefaultLayout';
import Loading from '../pages/Loading/Loading';
import RecommendMovie from '../pages/RecommendMovie/RecommendMovie';
import Recommendation from '../pages/Recommendation/Recommendation';
import VideoAnalytics from '../pages/VideoAnalytics/VideoAnalytics';

const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AnalyzeVideo = lazy(() => import('../pages/AnalyzeVideo/AnalyzeVideo'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<AnalyzeVideo />} />
          <Route path="/analytics" element={<VideoAnalytics />} />
          <Route path="/recommend-video" element={<RecommendMovie />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
