import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import FilmInfoPage from 'pages/FilmInfoPage';
// import Cast from './Cast';
// import Review from './Review';

// const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const FilmInfoPage = lazy(() => import('../pages/FilmInfoPage'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:filmId" element={<FilmInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="Movies" element={<Movies />} />

          <Route path="Movies/:filmWasFind" element={<FilmInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
