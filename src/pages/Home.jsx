import { getAllPitures } from 'api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    const fetchData = `trending/movie/day`;

    getAllPitures(fetchData)
      .then(data => {
        // if (!data.hits.length) {
        //   alert('no pictures');
        //   return;
        // }
        setTrendFilms([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log('Сегодняшние тренды загружены.');
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`}> {film.title} </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
