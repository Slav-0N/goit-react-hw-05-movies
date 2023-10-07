import SharedLayout from './SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
        </Route>
        ;
      </Routes>
    </div>
  );
};

export default App;
