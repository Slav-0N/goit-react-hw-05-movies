import { getAllPitures } from 'api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = `trending/movie/day`;

    getAllPitures(fetchData)
      .then(data => {
        setTrendFilms([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                {' '}
                {film.title}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
