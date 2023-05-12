import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../pages/DefaultLayout';
import Loading from '../pages/Loading/Loading';

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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
